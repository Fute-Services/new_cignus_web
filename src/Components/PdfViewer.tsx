import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Use a secure CDN worker matching react-pdf's internal pdfjs version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// 1. Define types for the component props
interface PdfViewerProps {
  selectedPdf: string | File | null;
}

export default function PdfViewer({ selectedPdf }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(900);

  // Responsively handle page widths
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPageWidth(window.innerWidth - 40);
      } else {
        setPageWidth(900);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Explicitly type the destructured parameter object
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-[#071d33]">
      <div className="flex flex-col items-center py-4">
        <Document
          file={selectedPdf}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex justify-center items-center py-10">
              <p className="text-white text-sm tracking-wide animate-pulse">
                Loading PDF layers...
              </p>
            </div>
          }
          error={
            <div className="flex justify-center items-center py-10">
              <p className="text-red-400 text-sm font-medium">
                Error loading document. Please check the file path.
              </p>
            </div>
          }
        >
          {Array.from({ length: numPages }, (_, index) => (
            <div key={index} className="mb-4 last:mb-0 shadow-xl rounded-sm overflow-hidden">
              <Page
                pageNumber={index + 1}
                width={pageWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
}