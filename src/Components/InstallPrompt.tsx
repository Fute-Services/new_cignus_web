import { useEffect, useState } from 'react';

// Chrome/Android fires `beforeinstallprompt` when the PWA is installable.
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  // iOS Safari
  (navigator as Navigator & { standalone?: boolean }).standalone === true;

const isIos = () =>
  /iphone|ipad|ipod/i.test(navigator.userAgent) ||
  // iPadOS 13+ reports as Mac but has touch
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

/**
 * Floating "Install App" button.
 * - Android/Chrome: triggers the native install prompt → app lands on the home screen.
 * - iPad/iPhone (Safari): shows a one-time hint (Share → Add to Home Screen).
 * - Hidden entirely once the app is already installed / running standalone.
 */
export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIosTip, setShowIosTip] = useState(false);
  const [dismissed, setDismissed] = useState(() => localStorage.getItem('installPromptDismissed') === '1');

  useEffect(() => {
    if (isStandalone()) return;

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      setDeferredPrompt(null);
      setShowIosTip(false);
    };
    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  if (isStandalone() || dismissed) return null;

  const canNativeInstall = deferredPrompt !== null;
  const showButton = canNativeInstall || isIos();
  if (!showButton) return null;

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') setDeferredPrompt(null);
    } else {
      setShowIosTip(true);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('installPromptDismissed', '1');
  };

  return (
    <div className="fixed bottom-4 right-4 z-[300] flex flex-col items-end gap-2 select-none">
      {showIosTip && (
        <div className="max-w-[280px] rounded-xl bg-[#0b2540] border border-white/20 shadow-2xl p-4 text-white text-sm leading-relaxed">
          <p className="font-semibold mb-1">Install on iPad/iPhone:</p>
          <p>
            Tap the <span className="font-bold">Share</span> button
            <span className="mx-1 inline-block align-middle">⎋</span>
            in Safari, then choose
            <span className="font-bold"> "Add to Home Screen"</span>.
          </p>
          <button
            onClick={() => setShowIosTip(false)}
            className="mt-3 text-xs text-white/60 underline cursor-pointer"
          >
            Close
          </button>
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          onClick={handleDismiss}
          aria-label="Dismiss install prompt"
          className="w-8 h-8 rounded-full bg-black/50 border border-white/20 text-white/70 text-xs flex items-center justify-center cursor-pointer hover:bg-black/70 transition-colors"
        >
          ✕
        </button>
        <button
          onClick={handleInstall}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[rgba(255,206,117,1)] text-[#483E2D] font-bold text-sm shadow-2xl cursor-pointer hover:scale-105 active:scale-95 transition-transform"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Install App
        </button>
      </div>
    </div>
  );
}
