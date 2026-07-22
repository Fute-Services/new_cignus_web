// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import Leftnavbar from '../Navbar/LeftNavbar';

// import bgImage from '../../assets/initial/bg_img.png';
// import logoImg from '../../assets/UnitPlan/logo.png';
// import unitPlan2D from '../../assets/UnitPlan/2-d-floorplans/ground.png'; 


// import floorGround from '../../assets/UnitPlan/2-d-floorplans/Ground_Floor.png';

// import floor1 from '../../assets/UnitPlan/2-d-floorplans/1st_Floor.png';

// import floor2 from '../../assets/UnitPlan/2-d-floorplans/2nd_Floor.png';

// import floor3 from '../../assets/UnitPlan/2-d-floorplans/3rd_Floor.png';

// import floor4 from '../../assets/UnitPlan/2-d-floorplans/4th_Floor.png';

// import floor5 from '../../assets/UnitPlan/2-d-floorplans/5th_Floor.png';
// import floor6 from '../../assets/UnitPlan/floorplans/6th_floor-removebg-preview 1.png';

// import floor7 from '../../assets/UnitPlan/2-d-floorplans/7th_Floor_Refuge.png';

// import floor8 from '../../assets/UnitPlan/2-d-floorplans/8_13&13_15_Typical.png';

// import floor9 from '../../assets/UnitPlan/2-d-floorplans/8_13&13_15_Typical.png';

// import floor10 from '../../assets/UnitPlan/2-d-floorplans/8_13&13_15_Typical.png';

// import floor11 from '../../assets/UnitPlan/2-d-floorplans/8_13&13_15_Typical.png';

// import floor12 from '../../assets/UnitPlan/2-d-floorplans/8_13&13_15_Typical.png';

// import floor13 from '../../assets/UnitPlan/2-d-floorplans/8_13&13_15_Typical.png';
// import floor14 from '../../assets/UnitPlan/floorplans/14th_floor_refuge-removebg-preview 1.png';

// import floor15 from '../../assets/UnitPlan/2-d-floorplans/8_13&13_15_Typical.png';
// import floor16 from '../../assets/UnitPlan/floorplans/16th_floor-removebg-preview 1.png';
// import floor17 from '../../assets/UnitPlan/floorplans/17th_floor-removebg-preview 1.png';
// import floor18 from '../../assets/UnitPlan/floorplans/18th_floor-removebg-preview 1.png';
// import floor19 from '../../assets/UnitPlan/floorplans/19th_floor-removebg-preview 1.png';
// import floor20 from '../../assets/UnitPlan/floorplans/20th_floor-removebg-preview 1.png';

// import floor21 from '../../assets/UnitPlan/2-d-floorplans/21_Refuge.png';

// import floor22 from '../../assets/UnitPlan/2-d-floorplans/22_25_Typical.png';

// import floor23 from '../../assets/UnitPlan/2-d-floorplans/22_25_Typical.png';

// import floor24 from '../../assets/UnitPlan/2-d-floorplans/22_25_Typical.png';

// import floor25 from '../../assets/UnitPlan/2-d-floorplans/22_25_Typical.png';


// const floorImageMap: Record<string, string> = {
//   'ground': floorGround, '1': floor1, '2': floor2, '3': floor3, '4': floor4, '5': floor5,
//   '6': floor6, '7': floor7, '8': floor8, '9': floor9, '10': floor10,
//   '11': floor11, '12': floor12, '13': floor13, '14': floor14, '15': floor15,
//   '16': floor16, '17': floor17, '18': floor18, '19': floor19, '20': floor20,
//   '21': floor21, '22': floor22, '23': floor23, '24': floor24, '25': floor25,
// };

// const floorPolygonData: Record<string, Record<string, string[]>> = {
//   'ground': {
//     '1. Double Heighted Lobby': ['496,631,905,629,918,623,922,613,992,613,1045,615,1048,631,1087,629,1132,807,1063,860,526,865,526,665,498,661'], 
//     '2. Lift Lobby': ['617,423,758,421,758,624,618,625', '758,425,896,421,896,629,757,629', '989,448,1086,448,1087,611,990,612'], 
//     '3. Entrance Lobby': ['525,864,1061,864,1007,901,958,925,878,953,812,966,745,969,655,958,585,937,528,910'],
//     '4. Kitchen': ['1139,414,1247,413,1247,468,1240,498,1228,526,1205,556,1179,578,1153,594,1091,602,1089,490,1141,492'],
//     '5. Fine Dine Restaurant': ['1249,468,1447,465,1440,490,1427,519,1410,545,1389,570,1359,606,1335,631,1306,659,1276,686,1263,701,1243,717,1212,741,1188,766,1157,789,1132,807,1098,670,1087,620,1104,623,1104,604,1133,600,1173,586,1211,554,1234,519'],
//     '6. Staircase': ['899,505,967,507,966,604,900,608', '546,450,615,450,614,551,545,553', '478,147,583,128,595,190,492,214', '439,769,490,769,491,838,437,836'],
//     '7. Sub Station': ['928,287,1250,287,1249,412,926,413', '591,144,604,138,601,126,672,115,748,118,752,136,761,135,762,284,601,283,601,189'],
//     '8. Wide Ramp': ['292,738,292,473,300,431,314,399,336,368,360,347,393,325,437,309,589,308,591,421,470,421,446,423,427,435,411,454,403,477,402,511,403,741', '70,311,399,308,378,320,355,334,330,354,314,375,300,395,293,410,288,422,69,419'],
//     '9. Restroom': ['407,510,541,511,542,543,524,545,521,554,496,551,492,573,408,573'],
//   },
//   '7': {
//     '1. Lift Lobby': ['601,443,643,440,643,392,954,391,955,501,887,502,887,608,841,607,840,655,524,659,526,552,601,549', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['1111,421,1177,422,1178,511,1111,510', '1111,540,1181,541,1178,628,1112,627', '322,612,366,613,366,543,387,543,387,699,323,697'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '888,503,954,503,956,603,888,604', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['996,388,1039,389,1039,413,1060,412,1060,438,1035,437,1038,518,1013,518,1010,502,968,503,967,463,996,460', '454,543,521,543,521,583,491,586,491,654,454,653'],
//     '5. Ladies Restroom': ['1010,523,1038,523,1036,593,996,594,994,623,979,624,979,599,964,598,963,557,1009,554', '414,482,477,484,478,524,452,522,453,651,423,653,421,598,410,598,411,543'],
//     '6. Office Area': ['260,704,389,703,390,633,407,632,408,641,418,642,419,661,845,662,845,633,1181,631,1179,419,1142,418,1144,387,785,384,786,235,655,232,487,266,474,211,584,186,575,151,589,143,576,89,646,81,722,79,791,80,862,83,959,94,1043,111,1146,138,1275,182,1352,223,1402,262,1430,312,1447,351,1453,387,1451,446,1439,489,1420,527,1396,564,1331,631,1284,678,1211,745,1111,827,1028,881,960,924,883,954,799,970,728,974,643,962,557,939,440,877,271,738,244,718'],
//     '7. Refuge Area': ['390,124,397,149,372,158,391,246,474,232,483,272,656,240,783,240,781,388,638,392,638,422,524,422,526,440,513,441,513,464,522,464,522,493,483,495,483,481,410,481,411,465,424,462,424,441,410,439,411,421,387,419,386,510,408,511,408,539,364,539,366,610,319,611,319,699,258,700,243,721,127,604,66,528,39,472,31,421,36,375,49,333,69,287,100,250,141,218,233,177']
//   },
//   '8': {
//     '1. Lift Lobby': ['601,443,643,440,643,392,954,391,955,501,887,502,887,608,841,607,840,655,524,659,526,552,601,549', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['318,423,383,423,382,509,319,509', '317,543,382,543,381,627,317,629', '1114,422,1179,423,1178,506,1114,509', '1114,543,1178,541,1178,628,1114,627'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '888,503,954,503,956,603,888,604', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['997,395,1089,395,1090,434,1073,439,1072,461,1089,465,1090,505,966,505,967,464,997,457', '406,556,433,556,433,572,441,573,441,551,517,548,516,589,487,590,487,659,406,659'],
//     '5. Ladies Restroom': ['963,557,1068,558,1068,545,1089,547,1094,625,963,627', '404,421,520,421,520,493,407,498'],
//     '6. Office Area': ['585,84,588,127,565,136,576,188,521,201,526,226,470,245,464,231,383,250,363,155,388,148,378,124,206,183,129,220,80,262,41,322,25,381,24,440,36,499,66,550,129,623,196,686,261,747,346,815,467,899,557,947,564,663,483,665,403,665,404,631,314,629,315,416,638,419,640,391,631,83', '631,81,747,77,866,81,1014,102,1114,127,1270,180,1357,220,1406,266,1444,334,1457,393,1449,471,1428,526,1363,607,1287,682,1128,819,1007,903,924,941,836,971,736,981,640,970,559,946,563,663,656,662,846,662,845,632,1184,627,1183,418,1093,421,1093,387,640,388'],
//   },
//   '9': {
//     '1. Lift Lobby': ['601,443,643,440,643,392,954,391,955,501,887,502,887,608,841,607,840,655,524,659,526,552,601,549', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['318,423,383,423,382,509,319,509', '317,543,382,543,381,627,317,629', '1114,422,1179,423,1178,506,1114,509', '1114,543,1178,541,1178,628,1114,627'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '888,503,954,503,956,603,888,604', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['997,395,1089,395,1090,434,1073,439,1072,461,1089,465,1090,505,966,505,967,464,997,457', '406,556,433,556,433,572,441,573,441,551,517,548,516,589,487,590,487,659,406,659'],
//     '5. Ladies Restroom': ['963,557,1068,558,1068,545,1089,547,1094,625,963,627', '404,421,520,421,520,493,407,498'],
//     '6. Office Area': ['585,84,588,127,565,136,576,188,521,201,526,226,470,245,464,231,383,250,363,155,388,148,378,124,206,183,129,220,80,262,41,322,25,381,24,440,36,499,66,550,129,623,196,686,261,747,346,815,467,899,557,947,564,663,483,665,403,665,404,631,314,629,315,416,638,419,640,391,631,83', '631,81,747,77,866,81,1014,102,1114,127,1270,180,1357,220,1406,266,1444,334,1457,393,1449,471,1428,526,1363,607,1287,682,1128,819,1007,903,924,941,836,971,736,981,640,970,559,946,563,663,656,662,846,662,845,632,1184,627,1183,418,1093,421,1093,387,640,388'],
//   },
//   '10': {
//     '1. Lift Lobby': ['601,443,643,440,643,392,954,391,955,501,887,502,887,608,841,607,840,655,524,659,526,552,601,549', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['318,423,383,423,382,509,319,509', '317,543,382,543,381,627,317,629', '1114,422,1179,423,1178,506,1114,509', '1114,543,1178,541,1178,628,1114,627'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '888,503,954,503,956,603,888,604', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['997,395,1089,395,1090,434,1073,439,1072,461,1089,465,1090,505,966,505,967,464,997,457', '406,556,433,556,433,572,441,573,441,551,517,548,516,589,487,590,487,659,406,659'],
//     '5. Ladies Restroom': ['963,557,1068,558,1068,545,1089,547,1094,625,963,627', '404,421,520,421,520,493,407,498'],
//     '6. Office Area': ['585,84,588,127,565,136,576,188,521,201,526,226,470,245,464,231,383,250,363,155,388,148,378,124,206,183,129,220,80,262,41,322,25,381,24,440,36,499,66,550,129,623,196,686,261,747,346,815,467,899,557,947,564,663,483,665,403,665,404,631,314,629,315,416,638,419,640,391,631,83', '631,81,747,77,866,81,1014,102,1114,127,1270,180,1357,220,1406,266,1444,334,1457,393,1449,471,1428,526,1363,607,1287,682,1128,819,1007,903,924,941,836,971,736,981,640,970,559,946,563,663,656,662,846,662,845,632,1184,627,1183,418,1093,421,1093,387,640,388'],
//   },
//   '11': {
//     '1. Lift Lobby': ['601,443,643,440,643,392,954,391,955,501,887,502,887,608,841,607,840,655,524,659,526,552,601,549', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['318,423,383,423,382,509,319,509', '317,543,382,543,381,627,317,629', '1114,422,1179,423,1178,506,1114,509', '1114,543,1178,541,1178,628,1114,627'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '888,503,954,503,956,603,888,604', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['997,395,1089,395,1090,434,1073,439,1072,461,1089,465,1090,505,966,505,967,464,997,457', '406,556,433,556,433,572,441,573,441,551,517,548,516,589,487,590,487,659,406,659'],
//     '5. Ladies Restroom': ['963,557,1068,558,1068,545,1089,547,1094,625,963,627', '404,421,520,421,520,493,407,498'],
//     '6. Office Area': ['585,84,588,127,565,136,576,188,521,201,526,226,470,245,464,231,383,250,363,155,388,148,378,124,206,183,129,220,80,262,41,322,25,381,24,440,36,499,66,550,129,623,196,686,261,747,346,815,467,899,557,947,564,663,483,665,403,665,404,631,314,629,315,416,638,419,640,391,631,83', '631,81,747,77,866,81,1014,102,1114,127,1270,180,1357,220,1406,266,1444,334,1457,393,1449,471,1428,526,1363,607,1287,682,1128,819,1007,903,924,941,836,971,736,981,640,970,559,946,563,663,656,662,846,662,845,632,1184,627,1183,418,1093,421,1093,387,640,388'],
//   },
//   '12': {
//     '1. Lift Lobby': ['601,443,643,440,643,392,954,391,955,501,887,502,887,608,841,607,840,655,524,659,526,552,601,549', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['318,423,383,423,382,509,319,509', '317,543,382,543,381,627,317,629', '1114,422,1179,423,1178,506,1114,509', '1114,543,1178,541,1178,628,1114,627'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '888,503,954,503,956,603,888,604', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['997,395,1089,395,1090,434,1073,439,1072,461,1089,465,1090,505,966,505,967,464,997,457', '406,556,433,556,433,572,441,573,441,551,517,548,516,589,487,590,487,659,406,659'],
//     '5. Ladies Restroom': ['963,557,1068,558,1068,545,1089,547,1094,625,963,627', '404,421,520,421,520,493,407,498'],
//     '6. Office Area': ['585,84,588,127,565,136,576,188,521,201,526,226,470,245,464,231,383,250,363,155,388,148,378,124,206,183,129,220,80,262,41,322,25,381,24,440,36,499,66,550,129,623,196,686,261,747,346,815,467,899,557,947,564,663,483,665,403,665,404,631,314,629,315,416,638,419,640,391,631,83', '631,81,747,77,866,81,1014,102,1114,127,1270,180,1357,220,1406,266,1444,334,1457,393,1449,471,1428,526,1363,607,1287,682,1128,819,1007,903,924,941,836,971,736,981,640,970,559,946,563,663,656,662,846,662,845,632,1184,627,1183,418,1093,421,1093,387,640,388'],
//   },
//   '13': {
//     '1. Lift Lobby': ['601,443,643,440,643,392,954,391,955,501,887,502,887,608,841,607,840,655,524,659,526,552,601,549', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['318,423,383,423,382,509,319,509', '317,543,382,543,381,627,317,629', '1114,422,1179,423,1178,506,1114,509', '1114,543,1178,541,1178,628,1114,627'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '888,503,954,503,956,603,888,604', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['997,395,1089,395,1090,434,1073,439,1072,461,1089,465,1090,505,966,505,967,464,997,457', '406,556,433,556,433,572,441,573,441,551,517,548,516,589,487,590,487,659,406,659'],
//     '5. Ladies Restroom': ['963,557,1068,558,1068,545,1089,547,1094,625,963,627', '404,421,520,421,520,493,407,498'],
//     '6. Office Area': ['585,84,588,127,565,136,576,188,521,201,526,226,470,245,464,231,383,250,363,155,388,148,378,124,206,183,129,220,80,262,41,322,25,381,24,440,36,499,66,550,129,623,196,686,261,747,346,815,467,899,557,947,564,663,483,665,403,665,404,631,314,629,315,416,638,419,640,391,631,83', '631,81,747,77,866,81,1014,102,1114,127,1270,180,1357,220,1406,266,1444,334,1457,393,1449,471,1428,526,1363,607,1287,682,1128,819,1007,903,924,941,836,971,736,981,640,970,559,946,563,663,656,662,846,662,845,632,1184,627,1183,418,1093,421,1093,387,640,388'],
//   },
//   '15': {
//     '1. Lift Lobby': ['601,443,643,440,643,392,954,391,955,501,887,502,887,608,841,607,840,655,524,659,526,552,601,549', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['318,423,383,423,382,509,319,509', '317,543,382,543,381,627,317,629', '1114,422,1179,423,1178,506,1114,509', '1114,543,1178,541,1178,628,1114,627'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '888,503,954,503,956,603,888,604', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['997,395,1089,395,1090,434,1073,439,1072,461,1089,465,1090,505,966,505,967,464,997,457', '406,556,433,556,433,572,441,573,441,551,517,548,516,589,487,590,487,659,406,659'],
//     '5. Ladies Restroom': ['963,557,1068,558,1068,545,1089,547,1094,625,963,627', '404,421,520,421,520,493,407,498'],
//     '6. Office Area': ['585,84,588,127,565,136,576,188,521,201,526,226,470,245,464,231,383,250,363,155,388,148,378,124,206,183,129,220,80,262,41,322,25,381,24,440,36,499,66,550,129,623,196,686,261,747,346,815,467,899,557,947,564,663,483,665,403,665,404,631,314,629,315,416,638,419,640,391,631,83', '631,81,747,77,866,81,1014,102,1114,127,1270,180,1357,220,1406,266,1444,334,1457,393,1449,471,1428,526,1363,607,1287,682,1128,819,1007,903,924,941,836,971,736,981,640,970,559,946,563,663,656,662,846,662,845,632,1184,627,1183,418,1093,421,1093,387,640,388'],
//   },
//   '21': {
//     '1. Lift Lobby': ['528,385,701,387,701,476,777,476,638,672,617,659,494,659,491,589,521,589,525,566,601,572,600,446,530,444,526,419', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['583,115,625,106,638,172,595,178', '345,421,389,421,386,507,344,506'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['445,545,522,547,524,585,490,586,492,657,411,659,411,553,441,556'],
//     '5. Ladies Restroom': ['404,421,520,421,520,493,407,498'],
//     '6. Office Area': ['435,123,543,104,634,92,774,88,858,93,891,98,916,110,930,135,930,246,924,265,810,430,703,431,701,385,643,385,640,227,516,253,511,233,536,224,529,199,639,170,625,104,439,140', '525,387,526,417,343,418,343,509,408,509,408,537,383,539,386,631,406,631,406,661,618,661,635,675,532,828,512,846,486,859,457,861,432,852,403,832,347,788,272,729,192,650,142,608,127,570,128,536,146,510,302,505,303,389'],
//     '7. Refuge Area': ['376,172,390,249,474,229,480,263,640,229,639,387,298,387,300,506,146,509'],
//   },
//   '22': {
//     '1. Lift Lobby': ['644,418,702,416,699,477,791,475,652,678,618,657,524,654,524,613,570,603,564,553,600,549,598,451,618,444,617,423', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['583,115,625,106,638,172,595,178', '323,419,386,418,387,505,323,506'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['445,545,522,547,524,585,490,586,492,657,411,659,411,553,441,556'],
//     '5. Ladies Restroom': ['404,421,520,421,520,493,407,498'],
//     '6. Office Area': ['625,80,627,104,643,172,593,185,604,211,474,240,470,229,394,246,377,172,366,168,183,431,212,450,168,511,144,494,127,518,119,540,117,568,128,603,163,640,267,738,355,811,437,869,471,874,520,863,570,797,651,682,615,657,404,658,407,629,387,628,385,540,410,539,411,551,431,553,439,499,411,497,411,509,318,511,319,418,580,417,580,437,612,439,613,414,702,417,702,430,824,430,937,271,943,241,943,140,933,113,903,89,848,77,720,73', '365,168,391,132,428,113,501,98,581,84,627,81,625,104,444,143,435,125,415,131,395,148,381,172'],
//   },
//   '23': {
//     '1. Lift Lobby': ['644,418,702,416,699,477,791,475,652,678,618,657,524,654,524,613,570,603,564,553,600,549,598,451,618,444,617,423', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['583,115,625,106,638,172,595,178', '323,419,386,418,387,505,323,506'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['445,545,522,547,524,585,490,586,492,657,411,659,411,553,441,556'],
//     '5. Ladies Restroom': ['404,421,520,421,520,493,407,498'],
//     '6. Office Area': ['625,80,627,104,643,172,593,185,604,211,474,240,470,229,394,246,377,172,366,168,183,431,212,450,168,511,144,494,127,518,119,540,117,568,128,603,163,640,267,738,355,811,437,869,471,874,520,863,570,797,651,682,615,657,404,658,407,629,387,628,385,540,410,539,411,551,431,553,439,499,411,497,411,509,318,511,319,418,580,417,580,437,612,439,613,414,702,417,702,430,824,430,937,271,943,241,943,140,933,113,903,89,848,77,720,73', '365,168,391,132,428,113,501,98,581,84,627,81,625,104,444,143,435,125,415,131,395,148,381,172'],
//   },
//   '24': {
//     '1. Lift Lobby': ['644,418,702,416,699,477,791,475,652,678,618,657,524,654,524,613,570,603,564,553,600,549,598,451,618,444,617,423', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['583,115,625,106,638,172,595,178', '323,419,386,418,387,505,323,506'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['445,545,522,547,524,585,490,586,492,657,411,659,411,553,441,556'],
//     '5. Ladies Restroom': ['404,421,520,421,520,493,407,498'],
//     '6. Office Area': ['625,80,627,104,643,172,593,185,604,211,474,240,470,229,394,246,377,172,366,168,183,431,212,450,168,511,144,494,127,518,119,540,117,568,128,603,163,640,267,738,355,811,437,869,471,874,520,863,570,797,651,682,615,657,404,658,407,629,387,628,385,540,410,539,411,551,431,553,439,499,411,497,411,509,318,511,319,418,580,417,580,437,612,439,613,414,702,417,702,430,824,430,937,271,943,241,943,140,933,113,903,89,848,77,720,73', '365,168,391,132,428,113,501,98,581,84,627,81,625,104,444,143,435,125,415,131,395,148,381,172'],
//   },
//   '25': {
//     '1. Lift Lobby': ['644,418,702,416,699,477,791,475,652,678,618,657,524,654,524,613,570,603,564,553,600,549,598,451,618,444,617,423', '404,152,458,140,471,207,418,219'],
//     '2. AHU Room': ['583,115,625,106,638,172,595,178', '323,419,386,418,387,505,323,506'],
//     '3. Staircase': ['530,447,598,448,598,549,529,548', '461,142,564,122,577,185,473,207'],
//     '4. Gents Restroom': ['445,545,522,547,524,585,490,586,492,657,411,659,411,553,441,556'],
//     '5. Ladies Restroom': ['404,421,520,421,520,493,407,498'],
//     '6. Office Area': ['625,80,627,104,643,172,593,185,604,211,474,240,470,229,394,246,377,172,366,168,183,431,212,450,168,511,144,494,127,518,119,540,117,568,128,603,163,640,267,738,355,811,437,869,471,874,520,863,570,797,651,682,615,657,404,658,407,629,387,628,385,540,410,539,411,551,431,553,439,499,411,497,411,509,318,511,319,418,580,417,580,437,612,439,613,414,702,417,702,430,824,430,937,271,943,241,943,140,933,113,903,89,848,77,720,73', '365,168,391,132,428,113,501,98,581,84,627,81,625,104,444,143,435,125,415,131,395,148,381,172'],
//   },

// };

// const UnitPlanPage: React.FC = () => {

//   const { floorId } = useParams<{ floorId: string }>();

//   const isGround = floorId?.toLowerCase() === 'ground';

//   const currentFloorNum = isGround ? 'Ground' : parseInt(floorId || '1', 10);

//   const ordinal = isGround ? '' : getOrdinal(currentFloorNum as number);

//   const currentFloor3DImage = floorImageMap[floorId || '1'] || floor1;

//   const currentFloorPolygons = floorPolygonData[floorId || '1'] || {};

//   const [showLogo, setShowLogo] = useState(true);
//   const [isZoomed, setIsZoomed] = useState(false);
//   const [activeArea, setActiveArea] = useState<string | null>(null);

//   // activeView is kept for future 2D re-integration but not currently driving layout
//   // const [activeView, setActiveView] = useState<'3D' | '2D'>('3D');

//   useEffect(() => {
//     setActiveArea(null);
//   }, [floorId]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLogo(false);
//     }, 2500); 
//     return () => clearTimeout(timer);
//   }, []);

//   const centerConfig = {
//     top: '50%',
//     left: '45%',    
//     x: '-50%',
//     y: '-50%',
//     scale: isZoomed ? 0.9 : 0.75, 
//     zIndex: 1,
//     width: '65vw',  
//     padding: '60px',
//   };

//   /* miniContainerConfig kept for future 2D re-integration
//   const miniContainerConfig = {
//     top: isZoomed ? '165%' : '135%',
//     left: '38%', 
//     x: '0%',
//     y: '-100%',
//     scale:  0.25,
//     zIndex: 20,
//     width: '70vw',  
//     padding: '60px', 
//     cursor: 'pointer',
//   };
//   */

//   return (
//     <div
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* INITIAL LOGO ANIMATION */}
//       <AnimatePresence>
//         {showLogo && (
//           <motion.div
//             key="logo"
//             initial={{ opacity: 0, top: '50%', left: '50%', x: '-50%', y: '-50%' }}
//             animate={{ opacity: 1, top: '50%', left: '50%', x: '-50%', y: '-50%' }}
//             exit={{ top: '-20%', opacity: 0 }}
//             transition={{ duration: 1.2, ease: 'easeInOut' }}
//             style={{ position: 'absolute', zIndex: 50 }}
//           >
//             <img src={logoImg} alt="Logo" style={{ width: '300px' }} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* MAIN CONTENT (Slides up after logo) */}
//       <motion.div
//         initial={{ y: '100vh' }}
//         animate={{ y: showLogo ? '100vh' : 0 }}
//         transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
//         style={{ width: '100%', height: '100%', position: 'absolute' }}
//       >
//         {/* LEFT NAVBAR & LOGO */}
//         <motion.div
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: showLogo ? -100 : 0, opacity: showLogo ? 0 : 1 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           style={{ position: 'absolute', left: 0, top: 0, height: '100%', zIndex: 30 }}
//         >
//            {/* Top Left Logo */}
//            <div className="absolute right-6 top-8 z-20">
//              <img src={logoImg} alt="Company Logo" style={{ width: '150px' }} />
//            </div>

//            {/* Left Navbar */}
//            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20">
//              <Leftnavbar />
//            </div>
//         </motion.div>

//         {/* --- NEW: TOP RIGHT LOGO --- */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: showLogo ? 0 : 1 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           style={{ position: 'absolute', left: '3%', top: '5%', zIndex: 30 }}
//         >
//           <img src={logoImg} alt="Company Logo" style={{ width: '120px' }} />
//         </motion.div>

//         {/* SWAPPABLE VIEWS (Single 3D Image and 2D View) */}

//         {/* HIDDEN: STATIONARY BROWN DOCK 
//         <motion.div
//           initial={{ 
//             x: '0%',
//             y: '-100%',
//             scale: 0.25,
//             width: '70vw',   
//             padding: '60px',
//           }}
//           animate={{
//             top: isZoomed ? '170%' : '136%', 
//           }}
//           transition={{ duration: 1.0 }} 
//           style={{
//             left: '38%',
//             position: 'absolute',
//             backgroundColor: 'rgb(255, 255, 255)',
//             borderRadius: '120px',
//             pointerEvents: 'none',
//             zIndex: 5, 
//           }}
//         >
//           <img src={unitPlan2D} alt="placeholder" style={{ width: '100%', opacity: 0 }} />
//         </motion.div>
//         */}

//         {/* 3D Floor Wrapper */}
//         <motion.div
//           animate={centerConfig}
//           transition={{ duration: 0.8, ease: 'easeInOut' }}
//           style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//         >
//            {/* Invisible ghost image to force identical height as the dock (Kept for layout stability) */}
//            <img src={unitPlan2D} alt="ghost" style={{ width: '100%', opacity: 0, pointerEvents: 'none' }} />

//            <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'auto' }}>
//              <motion.img
//                 src={currentFloor3DImage} 
//                 alt={`Floor ${currentFloorNum} 3D View`}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'contain',
//                   filter: 'drop-shadow(0px 20px 10px rgba(0,0,0,0.5))',

//                 }}
//               />

//               {/* --- POLYGON SVG OVERLAY --- */}
//               <svg 
//                 viewBox="0 0 1484 1050" 
//                 preserveAspectRatio="xMidYMid meet"
//                 style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
//               >
//                 <AnimatePresence>
//                   {activeArea && currentFloorPolygons[activeArea] && (
//                     currentFloorPolygons[activeArea].map((polygonCoords, index) => (
//                       <motion.polygon
//                         key={`${activeArea}-${index}`}
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         points={polygonCoords}
//                         fill="rgba(212, 175, 55, 0.4)"

//                       />
//                     ))
//                   )}
//                 </AnimatePresence>
//               </svg>
//            </div>
//         </motion.div>

//         {/* HIDDEN: 2D View Wrapper 
//         <motion.div
//           animate={activeView === '2D' ? centerConfig : miniContainerConfig}
//           transition={{ duration: 0.8, ease: 'easeInOut' }}
//           onClick={() => activeView === '3D' && setActiveView('2D')}
//           style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//         >
//           <img src={unitPlan2D} alt="ghost" style={{ width: '100%', opacity: 0, pointerEvents: 'none' }} />

//           <img 
//             src={unitPlan2D} 
//             alt={`Floor ${currentFloorNum} 2D View`} 
//             style={{ 
//               position: 'absolute', 
//               width: '100%', 
//               height: '100%', 
//               objectFit: 'contain' 
//             }} 
//           />
//         </motion.div>
//         */}

//         {/* RIGHT PANEL & ZOOM CONTROLS */}
//         <motion.div
//           animate={{
//             x: isZoomed ? '150%' : '0%', 
//             opacity: isZoomed ? 0 : 1,
//           }}
//           transition={{ duration: 0.6 }}
//           style={{
//             position: 'absolute',
//             right: '1%',
//             top: '7%',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start', 
//             zIndex: 30,
//             color: 'white',
//           }}
//         >
//           {/* Gradient Title Header */}
//           <div style={{
//             background: 'linear-gradient(90deg, rgba(186, 155, 102, 0.4) 0%, rgba(0,0,0,0) 100%)',
//             padding: '0px 20px',
//             marginBottom: '8px', 
//             minWidth: '220px'
//           }}>
//             <h1 style={{ fontSize: '1.5rem', margin: 0, fontWeight: '400', letterSpacing: '1px' }}>
//               <span style={{ color: '#d4af37'}}>{currentFloorNum}</span>
//               {ordinal && <sup style={{ color: '#d4af37', fontSize: '1.2rem', marginLeft: '2px' }}>{ordinal}</sup>} Floor
//             </h1>
//           </div>

//           {/* Vertical Line List */}
//           <ul style={{ 
//   listStyle: 'none', 
//   padding: '10px 0', 
//   margin: 0,
//   marginLeft: '2px', 

//   width: '210px',

//   borderWidth: '0 0 0 4px', 
//   borderStyle: 'solid',
//   borderImage: 'linear-gradient(to bottom, rgba(212, 175, 55, 0) 0%, rgba(212, 175, 55, 0.8) 50%, rgba(212, 175, 55, 0) 100%) 1',
//   background: 'radial-gradient(ellipse 150% 50% at left center, rgba(212, 175, 55, 0.15) 0%, transparent 100%)',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '10px'
// }}>
//             {Object.keys(currentFloorPolygons).map((area) => (
//               <li 
//                 key={area}
//                 onClick={() => setActiveArea(activeArea === area ? null : area)}
//                 style={{ 
//                   cursor: 'pointer', 
//                   transition: 'all 0.3s ease',
//                   padding: '10px 0 5px 25px', 
//                   fontSize: '0.9rem',
//                   fontWeight: activeArea === area ? '600' : '400',
//                   color: activeArea === area ? '#fff' : 'rgba(255, 255, 255, 0.6)',
//                   background: activeArea === area ? 'linear-gradient(90deg, rgba(186, 155, 102, 0.4) 0%, rgba(0,0,0,0) 150%)' : 'transparent',
//                 }}
//               >
//                 {area}
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* ZOOM CONTROLS (Bottom Right) */}
//         <div
//             style={{
//                 position: 'absolute',
//                 right: '5%',
//                 bottom: '10%',
//                 display: 'flex',
//                 gap: '15px',
//                 zIndex: 30,
//             }}
//         >
//             <button
//                 onClick={() => setIsZoomed(false)}
//                 style={{
//                 width: '50px',
//                 height: '50px',
//                 borderRadius: '50%',
//                 border: 'none',
//                 backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                 color: '#d4af37',
//                 fontSize: '24px',
//                 cursor: 'pointer',
//                 backdropFilter: 'blur(5px)',
//                 }}
//             >
//                 -
//             </button>
//             <button
//                 onClick={() => setIsZoomed(true)}
//                 style={{
//                 width: '50px',
//                 height: '50px',
//                 borderRadius: '50%',
//                 border: 'none',
//                 backgroundColor: 'rgba(255, 255, 255, 0.2)',
//                 color: '#d4af37',
//                 fontSize: '24px',
//                 cursor: 'pointer',
//                 backdropFilter: 'blur(5px)',
//                 }}
//             >
//                 +
//             </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // Helper function for floor suffixes (1st, 2nd, 3rd, etc.)
// function getOrdinal(n: number) {
//   const s = ['th', 'st', 'nd', 'rd'];
//   const v = n % 100;
//   return s[(v - 20) % 10] || s[v] || s[0];
// }

// export default UnitPlanPage;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from "react-router-dom";
// import Leftnavbar from '../../Components/Navbar/LeftNavbar';
import ReusableForSpecification from '../../Components/Navbar/ReusableForSpecification'
import { floors } from "../../Data/FloorData";
// import { useNavigate, } from 'react-router-dom';
import {Link} from 'react-router-dom'


// Assets imports
import bgImage from '../../assets/intial/bg_img.png';
import logoImg from '../../assets/Home/cignus updated logo.png';
import unitPlan2D from '../../assets/Project_info/ProjectInfoimage.png';
import floorGround from '../../assets/Project_Details/bg-image.png';

// Fallback image asset mapper if data properties are undefined
const floorImageMap: Record<string, string> = {
  'ground': floorGround,
  '1': floorGround,
  '2': floorGround,
};

const UnitPlanPage: React.FC = () => {
  // Pulls active routing parameters
  const { id } = useParams<{ id: string }>();

  const selectedFloor = floors.find(
    (floor) => floor.id === Number(id) || floor.floorname === id
  );

  // const navigate = useNavigate();
  const [showLogo, setShowLogo] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeAreaId, setActiveAreaId] = useState<number | null>(null);

  useEffect(() => {
    setActiveAreaId(null);
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!selectedFloor) {
    return (
      <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
        Floor not found
      </div>
    );
  }

  // Parse identifiers safely from active data model properties
  const currentFloorNum = selectedFloor.name;
  const isGround = currentFloorNum.toLowerCase().includes('ground');
  const numericFloorValue = parseInt(id || '1', 10);
  const ordinal = (isGround || isNaN(numericFloorValue)) ? '' : getOrdinal(numericFloorValue);

  const currentFloor3DImage = selectedFloor.unitplan?.image_3d || floorImageMap[id || '1'] || floorGround;
  const layoutAreas = selectedFloor.unitplan?.sideContent || [];
  const selectedAreaObj = layoutAreas.find(area => area.id === activeAreaId);

  const centerConfig = {
    top: '50%',
    left: '45%',
    x: '-50%',
    y: '-50%',
    scale: isZoomed ? 0.9 : 0.75,
    zIndex: 1,
    width: '65vw',
    padding: '60px',
  };

  const isMobile = window.innerWidth <= 425;

  return (
    <div
    className="relative w-full h-screen  overflow-y-auto lg:overflow-hidden"
      style={{
        // position: 'relative',
        // width: '100vw',
        // height: '100vh',
        // overflow: 'hidden',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* INITIAL LOGO ANIMATION */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            key="logo"
            initial={{ opacity: 0, top: '50%', left: '50%', x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, top: '50%', left: '50%', x: '-50%', y: '-50%' }}
            exit={{ top: '-20%', opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ position: 'absolute', zIndex: 50 }}
          >
            <Link to="/home"><img src={logoImg} alt="Logo" style={{ width: '300px' }} />
          </Link></motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ y: '100vh' }}
        animate={{ y: showLogo ? '100vh' : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        style={{ width: '100%', height: '100%', position: 'absolute' }}
      >
        {/* LEFT NAVBAR & LOGO */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: showLogo ? -100 : 0, opacity: showLogo ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ position: 'absolute', left: 0, top: 0, height: '100%', zIndex: 30 }}
        >
          <div className="absolute right-6 top-8 z-20">
            <img src={logoImg} alt="Company Logo" style={{ width: '150px' }} />
          </div>
          <div className='top-1/2 -translate-y-1/2 absolute'>
<ReusableForSpecification/></div>
          {/* <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20">
            <Leftnavbar />
          </div> */}
          
        </motion.div>

        {/* TOP LEFT BRANDING POSITIONING */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showLogo ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ position: 'absolute', left: '3%', top: '5%', zIndex: 30 }}
        >
          <img src={logoImg} alt="Company Logo" style={{ width: '120px' }} />
        </motion.div>

        {/* 3D Floor Blueprint Viewport Wrapper */}
        <motion.div
          animate={centerConfig}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{
            position: "absolute",
            display: "flex",
            // bottom:  "40px",
            justifyContent: "center",
            alignItems: "center",
            // width: "90vw", // responsive container
            // maxWidth: "1200px",
          }}
        >
          <img src={unitPlan2D} alt="ghost-layer" style={{ width: '100%', opacity: 0, pointerEvents: 'none' }} />

          <div style={{ position: 'absolute', width: '100%', height: '100%',
             pointerEvents: 'auto' }}>
            <motion.img
              src={currentFloor3DImage}
              alt={`${currentFloorNum} 3D View`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 20px 10px rgba(0,0,0,0.5))',
              }}
            />

            {/* --- POLYGON SVG OVERLAY ENGINE --- */}
            <svg
              viewBox="0 0 1484 1050"
              preserveAspectRatio="xMidYMid meet"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
            >
              <AnimatePresence>
                {selectedAreaObj && (
                  // Handles standard nested array data profiles or raw fallback string scenarios
                  Array.isArray(selectedAreaObj.polygons) ? (
                    selectedAreaObj.polygons.map((polyItem: any) => (
                      <motion.polygon
                        key={polyItem.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        points={polyItem.polygon}
                        fill="rgba(212, 175, 55, 0.4)"
                        stroke="#d4af37"
                        strokeWidth="3"
                      />
                    ))
                  ) : (
                    selectedAreaObj.polygon && (
                      <motion.polygon
                        key={`fallback-${selectedAreaObj.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        points={selectedAreaObj.polygon}
                        fill="rgba(212, 175, 55, 0.4)"
                        stroke="#d4af37"
                        strokeWidth="3"
                      />
                    )
                  )
                )}
              </AnimatePresence>
            </svg>
          </div>
        </motion.div>

        {/* RIGHT UI CONTROLS NAVIGATION PANEL */}
        <motion.div
          animate={{
            x: isZoomed ? '150%' : '0%',
            opacity: isZoomed ? 0 : 1,
          }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'absolute',
            right: isMobile ? '5%' : '2%',
            top: isMobile ? '5%' : '7%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            zIndex: 30,
            color: 'white',
            fontFamily: 'sans-serif'
          }}
        >
          {/* Floor Header Badge */}
          <div style={{
            background: 'linear-gradient(90deg, rgba(186, 155, 102, 0.4) 0%, rgba(0,0,0,0) 100%)',
            padding: '0px 20px',
            marginBottom: '8px',
            minWidth: '220px'
          }}>
            <h1 style={{ fontSize:isMobile ?'1rem': '1.5rem', margin: 0, fontWeight: '400', letterSpacing: '1px' }}>
              <span style={{ color: '#d4af37' }}>{currentFloorNum}</span>
              {ordinal && <sup style={{ color: '#d4af37', fontSize: isMobile ?'1rem' :'1.2rem', marginLeft: '2px' }}>{ordinal}</sup>} Floor
            </h1>
          </div>

          {/* Interactive Metric Menu Component List */}
          <ul style={{
            listStyle: 'none',
            padding: '10px 0',
            margin: 0,
            marginLeft: '2px',
            width: '210px',
            borderWidth: '0 0 0 4px',
            borderStyle: 'solid',
            borderImage: 'linear-gradient(to bottom, rgba(212, 175, 55, 0) 0%, rgba(212, 175, 55, 0.8) 50%, rgba(212, 175, 55, 0) 100%) 1',
            background: 'radial-gradient(ellipse 150% 50% at left center, rgba(212, 175, 55, 0.15) 0%, transparent 100%)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {layoutAreas.map((area) => (
              <li
              className="py-1 px-1 md:p-2"
                key={area.id}
                onClick={() => setActiveAreaId(activeAreaId === area.id ? null : area.id)}
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  // padding: '10px 0 5px 25px',
                  fontSize: '0.9rem',
                  fontWeight: activeAreaId === area.id ? '600' : '400',
                  color: activeAreaId === area.id ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                  background: activeAreaId === area.id ? 'linear-gradient(90deg, rgba(186, 155, 102, 0.4) 0%, rgba(0,0,0,0) 150%)' : 'transparent',
                }}
              >
                {area.title}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTROLS BOX PANEL */}
        <div
          style={{
            position: 'absolute',
            right: '5%',
            bottom: '10%',
            display: 'flex',
            gap: '15px',
            zIndex: 30,
          }}
        >
          <button
            onClick={() => setIsZoomed(false)}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: '#d4af37',
              fontSize: '24px',
              cursor: 'pointer',
              backdropFilter: 'blur(5px)',
            }}
          >
            -
          </button>
          <button
            onClick={() => setIsZoomed(true)}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: '#d4af37',
              fontSize: '24px',
              cursor: 'pointer',
              backdropFilter: 'blur(5px)',
            }}
          >
            +
          </button>
        </div>
      </motion.div>

      {/* --- BACK BUTTON (Bottom Left) --- 
      <button
        onClick={() => navigate('/project-details')}
        className="right-12 absolute bottom-[22%] md:bottom-[22%] lg:bottom-12 lg:left-16
         w-10 h-10 bg-[rgba(255,206,117,1)] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 z-[100] shadow-lg cursor-pointer pointer-events-auto"
        aria-label="Go back"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 17 28" fill="none">
          <path d="M15.4143 27V14C15.4143 10.6863 12.728 8 9.41431 8H1.41431M7.41431 14L1.41431 8L8.41431 1" stroke="#483E2D" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>*/}
    </div>
  );
};

function getOrdinal(n: number) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}

export default UnitPlanPage;