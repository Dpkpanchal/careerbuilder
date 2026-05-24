// Vocational Courses Data
const VOCATIONAL_DATA = {
  class8: {
    engineering: [
      { name: "Painter general", duration: "2 years" },
      { name: "Wireman", duration: "2 years" },
      { name: "Welder (Gas & Electric)", duration: "1 year" },
      { name: "Plumber", duration: "1 year" },
      { name: "Foundry man", duration: "1 year" },
      { name: "Mason", duration: "1 year" },
      { name: "Carpenter", duration: "1 year" },
      { name: "Sheet Metal Worker", duration: "1 year" },
      { name: "Cutting & Sewing", duration: "1 year" },
      { name: "Manufacture of Footwear & Leather Goods", duration: "1 year" },
      { name: "Agricultural machinery Mechanic", duration: "1 year" },
      { name: "Amin Survey", duration: "6 months" },
      { name: "Electrical House wiring & Motor Winding", duration: "1 year" },
      { name: "Servicing Of Domestic Electronics product", duration: "1 year" },
      { name: "2/3 wheeler mechanic", duration: "1 year" },
      { name: "Auto Electrician", duration: "1 year" },
      { name: "Automobile maintenance", duration: "1 year" },
      { name: "Diesel Pump set Repairing", duration: "1 year" },
      { name: "Rural Sanitation & sanitary plumbing", duration: "1 year" },
      { name: "Mechanic rural electrician", duration: "1 year" },
      { name: "Photography", duration: "6 months" },
      { name: "Videography", duration: "6 months" },
      { name: "Manufacture of jute product", duration: "1 year" },
      { name: "Plumbing", duration: "1 year" },
      { name: "Wooden Furniture Making", duration: "1 year" },
      { name: "Telephone & Mobile Set Repairing", duration: "1 year" },
      { name: "Footwear(open type)", duration: "1 year" },
      { name: "Welding", duration: "1 year" },
      { name: "Repair & maintenance of Agriculture machinaries", duration: "1 year" },
      { name: "DTP", duration: "6 months" },
      { name: "Mason", duration: "1 year" }
    ],
    homeScience: [
      { name: "Tailoring", duration: "1 year" },
      { name: "Commercial Art", duration: "1 year" },
      { name: "Manufacture of Jam, jelly & pickles", duration: "6 months" },
      { name: "Silk screen printing", duration: "6 months" },
      { name: "Crèche management", duration: "1 year" },
      { name: "Jari work & kantha embroidery", duration: "1 year" },
      { name: "Toy Making(Soft)", duration: "6 months" },
      { name: "Interior Decoration", duration: "1 year" },
      { name: "Beautician", duration: "1 year" },
      { name: "Boutique work", duration: "1 year" },
      { name: "Glass painting & Production of ceramic & Candle items", duration: "6 months" },
      { name: "Garment Manufacturing", duration: "1 year" },
      { name: "Machine Embroidery with CAD", duration: "1 year" },
      { name: "Painter", duration: "1 year" },
      { name: "Book & Doc Binder", duration: "1 year" }
    ],
    business: [
      { name: "Rural Marketing", duration: "1 year" },
      { name: "Marketing", duration: "1 year" },
      { name: "Security Guard", duration: "6 months" }
    ],
    paramedical: [
      { name: "Blood Collection Assistant", duration: "1 year" },
      { name: "Health Worker", duration: "1 year" },
      { name: "OT Assistant", duration: "1 year" }
    ],
    agriculture: [
      { name: "Marine Fisheries", duration: "1 year" },
      { name: "Ornamental Fish Culture", duration: "1 year" },
      { name: "Mushroom Cultivation", duration: "6 months" },
      { name: "Composting", duration: "6 months" },
      { name: "Dairy farming", duration: "1 year" },
      { name: "Poultry farming", duration: "1 year" },
      { name: "Bee keeping", duration: "1 year" },
      { name: "Goat keeping", duration: "1 year" },
      { name: "Seed Production Tech", duration: "1 year" }
    ]
  },
  class10: {
    agriculture: [
      { name: "Fish Farming", duration: "2 years" },
      { name: "Animal Husbandry", duration: "2 years" },
      { name: "Cultivation of Fruits & Vegetable", duration: "2 years" },
      { name: "Horticulture", duration: "2 years" },
      { name: "Crop Management", duration: "2 years" },
      { name: "Plant Management", duration: "2 years" }
    ],
    homeScience: [
      { name: "Community Healthcare", duration: "2 years" },
      { name: "Food & Nutrition", duration: "2 years" },
      { name: "Home Management", duration: "2 years" }
    ],
    business: [
      { name: "Retail Services & Operations", duration: "2 years" },
      { name: "Taxation & Management", duration: "2 years" },
      { name: "Library & Information Science", duration: "2 years" },
      { name: "Travel, Tourism & Event Management", duration: "2 years" }
    ],
    engineering: [
      { name: "Building Construction & Maintenance", duration: "2 years" },
      { name: "Automobile Technology", duration: "2 years" },
      { name: "Refrigeration & Air-conditioning", duration: "2 years" },
      { name: "Computer Maintenance & Networking", duration: "2 years" },
      { name: "IT Application", duration: "2 years" },
      { name: "Electrical Maintenance & Installation", duration: "2 years" },
      { name: "Consumer Electronics", duration: "2 years" }
    ]
  },
  institutes: [
    {
      id: 1,
      name: "ITI GARIAHAT",
      address: "10 & 10/A GARIAHAT ROAD, KOLKATA-700 091",
      phone: "033-24404348",
      trades2yr: ["DRAFTSMAN CIVIL", "ELECTRICIAN", "FITTER", "MACHINIST"],
      trades1yr: ["CARPENTER", "WELDER", "PLUMBER"]
    },
    {
      id: 2,
      name: "ITI TOLLYGUNJ",
      address: "24, CHANDI GHOSH ROAD, KOLKATA 700 040",
      phone: "033-24113692",
      trades2yr: ["ELECTRICIAN", "FITTER", "MACHINIST"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 3,
      name: "ITI HOWRAH HOMES",
      address: "PO. SANTRAGACHI, DIST. HOWRAH-711104",
      phone: "033-26271176",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 4,
      name: "ITI BARASAT",
      address: "TALPUKUR BAZAR, P.O. BARASAT, 24 PARGANAS (N)-700124",
      phone: "033-25441203",
      trades2yr: ["ELECTRICIAN", "FITTER", "TURNER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 5,
      name: "ITI BARRACKPORE",
      address: "TALPUKUR, P.O. TALPUKUR, DIST. 24 PARGANAS (N)-743122",
      phone: "033-25921344",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 6,
      name: "ITI BASIRHAT",
      address: "P.O. BASIRHAT, DIST. 24 PARGANAS (N)-743411",
      phone: "03217-253076",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 7,
      name: "ITI BONGAON",
      address: "PLOT NO. 166, MOUZA SHIKARPUR, P.O. BONGAON, 24 PARGANAS (N)-743235",
      phone: "03215-255341",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 8,
      name: "ITI DIAMOND HARBOUR",
      address: "P.O. DIAMOND HARBOUR, DIST. 24 PARGANAS (S)-743331",
      phone: "03174-255206",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 9,
      name: "ITI SONARPUR",
      address: "VILL & P.O. SONARPUR, DIST. 24 PARGANAS (S)-700150",
      phone: "033-24326344",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 10,
      name: "ITI BURDWAN",
      address: "G.T. ROAD, P.O. BURDWAN-713101",
      phone: "0342-2561903",
      trades2yr: ["ELECTRICIAN", "FITTER", "TURNER", "MACHINIST"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 11,
      name: "ITI ASANSOL",
      address: "USHAGRAM, P.O. ASANSOL, DIST. BURDWAN-713303",
      phone: "0341-2252316",
      trades2yr: ["ELECTRICIAN", "FITTER", "TURNER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 12,
      name: "ITI DURGAPUR",
      address: "A-ZONE, DURGAPUR, DIST. BURDWAN-713205",
      phone: "0343-2546625",
      trades2yr: ["ELECTRICIAN", "FITTER", "TURNER", "MACHINIST"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 13,
      name: "ITI MEMARI",
      address: "VILL. PANCHANANDAPUR, P.O. MEMARI, DIST. BURDWAN-713146",
      phone: "03483-255214",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 14,
      name: "ITI KATWA",
      address: "VILL. AHIRON, P.O. KATWA, DIST. BURDWAN-713130",
      phone: "03453-252514",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 15,
      name: "ITI KALNA",
      address: "VILL. NARAYANPUR, P.O. KALNA, DIST. BURDWAN-713409",
      phone: "03454-255314",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 16,
      name: "ITI CHINSURAH",
      address: "68/1, G.T. ROAD (EAST), P.O. CHINSURAH, DIST. HOOGHLY-712101",
      phone: "033-26802321",
      trades2yr: ["ELECTRICIAN", "FITTER", "TURNER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 17,
      name: "ITI SERAMPORE",
      address: "4, DR. S.P. MUKHERJEE ROAD, P.O. SERAMPORE, DIST. HOOGHLY-712201",
      phone: "033-26621741",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 18,
      name: "ITI ARAMBAGH",
      address: "VILL. BALARAMPUR, P.O. ARAMBAGH, DIST. HOOGHLY-712601",
      phone: "03211-255212",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 19,
      name: "ITI TARAKESWAR",
      address: "VILL. NUTANGRAM, P.O. TARAKESWAR, DIST. HOOGHLY-712410",
      phone: "03211-252314",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 20,
      name: "ITI KRISHNANAGAR",
      address: "PASCHIM PARA, P.O. KRISHNANAGAR, DIST. NADIA-741101",
      phone: "03472-252812",
      trades2yr: ["ELECTRICIAN", "FITTER", "TURNER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 21,
      name: "ITI RANAGHAT",
      address: "VILL. NASRA, P.O. RANAGHAT, DIST. NADIA-741201",
      phone: "03473-252114",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 22,
      name: "ITI KALYANI",
      address: "KALYANI, DIST. NADIA-741235",
      phone: "033-25825314",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 23,
      name: "ITI NABADWIP",
      address: "VILL. BALLALDIGHI, P.O. NABADWIP, DIST. NADIA-741302",
      phone: "03472-245214",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 24,
      name: "ITI SILIGURI",
      address: "PRADHAN NAGAR, P.O. SILIGURI, DIST. DARJEELING-734003",
      phone: "0353-2520234",
      trades2yr: ["ELECTRICIAN", "FITTER", "TURNER", "MACHINIST"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 25,
      name: "ITI DARJEELING",
      address: "JORE BUNGALOW, P.O. DARJEELING-734101",
      phone: "0354-2254214",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 26,
      name: "ITI JALPAIGURI",
      address: "P.O. JALPAIGURI-735101",
      phone: "03561-225314",
      trades2yr: ["ELECTRICIAN", "FITTER", "TURNER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 27,
      name: "ITI COOCH BEHAR",
      address: "P.O. COOCH BEHAR-736101",
      phone: "03582-222314",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 28,
      name: "ITI ALIPURDUAR",
      address: "ALIPURDUAR TOWN, DIST. JALPAIGURI-736121",
      phone: "03564-255214",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 29,
      name: "ITI MALDA",
      address: "MANGALBARI, P.O. MALDA-732101",
      phone: "03512-252214",
      trades2yr: ["ELECTRICIAN", "FITTER", "TURNER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 30,
      name: "ITI ENGLISH BAZAR",
      address: "VILL. KHUTADAHA, P.O. ENGLISH BAZAR, DIST. MALDA-732101",
      phone: "03512-255314",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 31,
      name: "ITI MURSHIDABAD",
      address: "PLASSEY, P.O. MURSHIDABAD-742156",
      phone: "03483-264214",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 32,
      name: "ITI BERHAMPORE",
      address: "KHAGRA, P.O. BERHAMPORE, DIST. MURSHIDABAD-742101",
      phone: "03482-255214",
      trades2yr: ["ELECTRICIAN", "FITTER", "TURNER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 33,
      name: "ITI JANGIPUR",
      address: "VILL. NIMTITA, P.O. JANGIPUR, DIST. MURSHIDABAD-742213",
      phone: "03482-262214",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 34,
      name: "ITI BIRBHUM",
      address: "SURI, DIST. BIRBHUM-731101",
      phone: "03462-255214",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 35,
      name: "ITI BOLPUR",
      address: "VILL. BHUBANDANGA, P.O. BOLPUR, DIST. BIRBHUM-731204",
      phone: "03463-252214",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 36,
      name: "ITI BANKURA",
      address: "NUTANPALLY, P.O. BANKURA-722101",
      phone: "03242-252314",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 37,
      name: "ITI BISHNUPUR",
      address: "VILL. GOPALNAGAR, P.O. BISHNUPUR, DIST. BANKURA-722122",
      phone: "03244-252214",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 38,
      name: "ITI PURULIA",
      address: "ANARA ROAD, P.O. PURULIA-723101",
      phone: "03252-222314",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 39,
      name: "ITI RAGHUNATHPUR",
      address: "VILL. TILABANI, P.O. RAGHUNATHPUR, DIST. PURULIA-723133",
      phone: "03253-262214",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 40,
      name: "ITI MIDNAPORE",
      address: "KERANICHAK, P.O. MIDNAPORE-721101",
      phone: "03222-262314",
      trades2yr: ["ELECTRICIAN", "FITTER", "TURNER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 41,
      name: "ITI KHARAGPUR",
      address: "MALANCHA, P.O. KHARAGPUR, DIST. MIDNAPORE-721301",
      phone: "03222-255314",
      trades2yr: ["ELECTRICIAN", "FITTER", "TURNER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 42,
      name: "ITI CONTAI",
      address: "VILL. BAHIRI, P.O. CONTAI, DIST. MIDNAPORE-721401",
      phone: "03220-265214",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    },
    {
      id: 43,
      name: "ITI JHARGRAM",
      address: "VILL. SHIMULIA, P.O. JHARGRAM, DIST. MIDNAPORE-721507",
      phone: "03221-255214",
      trades2yr: ["ELECTRICIAN", "FITTER"],
      trades1yr: ["CARPENTER", "WELDER"]
    }
  ]
};

// SVG Icons (Lucide-inspired)
const Icons = {
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>',
  wrench: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
  home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
  briefcase: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
  sprout: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>',
  heart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>',
  building: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>',
  mapPin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
  clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  award: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
  inbox: '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>'
};

// App State
let state = {
  selectedLevel: 'all',
  selectedCategory: 'all',
  searchQuery: '',
  showInstitutes: true
};

// Helper Functions
function getCategoryIcon(category) {
  const iconMap = {
    engineering: Icons.wrench,
    homeScience: Icons.home,
    business: Icons.briefcase,
    agriculture: Icons.sprout,
    paramedical: Icons.heart
  };
  return iconMap[category] || Icons.wrench;
}

function getCategoryLabel(category) {
  const labelMap = {
    engineering: 'Engineering & Technology',
    homeScience: 'Home Science',
    business: 'Business & Commerce',
    agriculture: 'Agriculture',
    paramedical: 'Paramedical'
  };
  return labelMap[category] || category;
}

function getCategoryClass(category) {
  const classMap = {
    engineering: 'engineering',
    homeScience: 'home-science',
    business: 'business',
    agriculture: 'agriculture',
    paramedical: 'paramedical'
  };
  return classMap[category] || 'engineering';
}

function getAllCourses() {
  const courses = [];
  const levels = state.selectedLevel === 'all' ? ['class8', 'class10'] : [state.selectedLevel];
  
  levels.forEach(level => {
    const levelData = VOCATIONAL_DATA[level];
    Object.keys(levelData).forEach(category => {
      levelData[category].forEach(course => {
        courses.push({
          ...course,
          category,
          level,
          levelLabel: level === 'class8' ? 'After Class 8' : 'After Class 10'
        });
      });
    });
  });
  
  return courses;
}

function filterCourses() {
  let courses = getAllCourses();
  
  // Filter by category
  if (state.selectedCategory !== 'all') {
    courses = courses.filter(c => c.category === state.selectedCategory);
  }
  
  // Filter by search query
  if (state.searchQuery.trim()) {
    const query = state.searchQuery.toLowerCase();
    courses = courses.filter(c => 
      c.name.toLowerCase().includes(query) ||
      getCategoryLabel(c.category).toLowerCase().includes(query)
    );
  }
  
  return courses;
}

function groupCoursesByCategory(courses) {
  const grouped = {};
  courses.forEach(course => {
    if (!grouped[course.category]) {
      grouped[course.category] = [];
    }
    grouped[course.category].push(course);
  });
  return grouped;
}

function filterInstitutes() {
  if (!state.searchQuery.trim()) {
    return VOCATIONAL_DATA.institutes;
  }
  
  const query = state.searchQuery.toLowerCase();
  return VOCATIONAL_DATA.institutes.filter(institute =>
    institute.name.toLowerCase().includes(query) ||
    institute.address.toLowerCase().includes(query) ||
    institute.trades2yr.some(t => t.toLowerCase().includes(query)) ||
    institute.trades1yr.some(t => t.toLowerCase().includes(query))
  );
}

// Render Functions
function renderHero() {
  return `
    <header class="vocational-hub-hero" role="banner">
      <div class="container">
        <h1>Vocational Courses Hub - West Bengal</h1>
        <p>Explore 70+ skill-based vocational courses and 43+ Government ITIs offering quality technical education. Find the perfect course to launch your career after Class 8th or 10th.</p>
      </div>
    </header>
  `;
}

function renderBreadcrumb() {
  return `
    <nav class="container" aria-label="Breadcrumb">
      <div class="breadcrumb-nav">
        <ol>
          <li><a href="#">Home</a></li>
          <li><a href="#">Education</a></li>
          <li>Vocational Courses</li>
        </ol>
      </div>
    </nav>
  `;
}

function renderFilters() {
  const categories = ['engineering', 'homeScience', 'business', 'agriculture', 'paramedical'];
  
  return `
    <section class="filters-section" aria-label="Filters">
      <h2>Filter Courses</h2>
      
      <div class="mb-4">
        <label class="form-label"><strong>Education Level</strong></label>
        <div class="level-tabs" role="tablist">
          <button 
            class="level-tab ${state.selectedLevel === 'all' ? 'active' : ''}" 
            onclick="handleLevelChange('all')"
            role="tab"
            aria-selected="${state.selectedLevel === 'all'}"
          >
            All Courses
          </button>
          <button 
            class="level-tab ${state.selectedLevel === 'class8' ? 'active' : ''}" 
            onclick="handleLevelChange('class8')"
            role="tab"
            aria-selected="${state.selectedLevel === 'class8'}"
          >
            After Class 8th
          </button>
          <button 
            class="level-tab ${state.selectedLevel === 'class10' ? 'active' : ''}" 
            onclick="handleLevelChange('class10')"
            role="tab"
            aria-selected="${state.selectedLevel === 'class10'}"
          >
            After Class 10th
          </button>
        </div>
      </div>
      
      <div class="mb-4">
        <label class="form-label"><strong>Course Category</strong></label>
        <div class="category-pills">
          <button 
            class="category-pill ${state.selectedCategory === 'all' ? 'active engineering' : 'engineering'}" 
            onclick="handleCategoryChange('all')"
          >
            ${Icons.award}
            <span>All Categories</span>
          </button>
          ${categories.map(cat => `
            <button 
              class="category-pill ${getCategoryClass(cat)} ${state.selectedCategory === cat ? 'active' : ''}" 
              onclick="handleCategoryChange('${cat}')"
            >
              ${getCategoryIcon(cat)}
              <span>${getCategoryLabel(cat)}</span>
            </button>
          `).join('')}
        </div>
      </div>
      
      <div class="search-container">
        <span class="search-icon">${Icons.search}</span>
        <input 
          type="search" 
          class="search-input" 
          placeholder="Search courses or institutes..." 
          value="${state.searchQuery}"
          oninput="handleSearch(event)"
          aria-label="Search courses and institutes"
        />
      </div>
    </section>
  `;
}

function renderStats(coursesCount, institutesCount) {
  return `
    <div class="stats-bar">
      <div class="stats-item">
        ${Icons.award}
        <span>Showing <strong>${coursesCount}</strong> courses</span>
      </div>
      <div class="stats-item">
        ${Icons.building}
        <span><strong>${institutesCount}</strong> ITIs available</span>
      </div>
    </div>
  `;
}

function renderCourseCard(course) {
  return `
    <article class="course-card ${getCategoryClass(course.category)}">
      <div class="course-card-header">
        <div>
          <h4 class="course-name">${course.name}</h4>
          ${course.duration ? `
            <span class="course-duration">
              ${Icons.clock}
              ${course.duration}
            </span>
          ` : ''}
        </div>
      </div>
      <div class="course-category-badge ${getCategoryClass(course.category)}">
        ${getCategoryIcon(course.category)}
        <span>${getCategoryLabel(course.category)}</span>
      </div>
    </article>
  `;
}

function renderCourses() {
  const courses = filterCourses();
  
  if (courses.length === 0) {
    return `
      <div class="empty-state">
        <div class="empty-state-icon">${Icons.inbox}</div>
        <h3>No courses found</h3>
        <p>Try adjusting your filters or search query to find more courses.</p>
      </div>
    `;
  }
  
  const grouped = groupCoursesByCategory(courses);
  
  return Object.keys(grouped).map(category => {
    const categoryCourses = grouped[category];
    return `
      <section class="category-section">
        <header class="category-header ${getCategoryClass(category)}">
          <div class="category-icon">
            ${getCategoryIcon(category)}
          </div>
          <div class="category-info">
            <h3>${getCategoryLabel(category)}</h3>
            <p class="course-count">${categoryCourses.length} courses available</p>
          </div>
        </header>
        <div class="courses-grid">
          ${categoryCourses.map(course => renderCourseCard(course)).join('')}
        </div>
      </section>
    `;
  }).join('');
}

function renderInstituteCard(institute) {
  return `
    <article class="institute-card">
      <div class="institute-header">
        <div class="institute-icon">
          ${Icons.building}
        </div>
        <div>
          <h4 class="institute-name">${institute.name}</h4>
        </div>
      </div>
      
      <div class="institute-details">
        <div class="institute-detail">
          ${Icons.mapPin}
          <span>${institute.address}</span>
        </div>
        <div class="institute-detail">
          ${Icons.phone}
          <a href="tel:${institute.phone}" class="institute-phone">${institute.phone}</a>
        </div>
      </div>
      
      <div class="institute-trades">
        ${institute.trades2yr.length > 0 ? `
          <div>
            <p class="trades-title">2-Year Trades:</p>
            <div class="trades-list">
              ${institute.trades2yr.map(trade => `
                <span class="trade-badge two-year">${trade}</span>
              `).join('')}
            </div>
          </div>
        ` : ''}
        
        ${institute.trades1yr.length > 0 ? `
          <div>
            <p class="trades-title">1-Year Trades:</p>
            <div class="trades-list">
              ${institute.trades1yr.map(trade => `
                <span class="trade-badge one-year">${trade}</span>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </article>
  `;
}

function renderInstitutes() {
  if (!state.showInstitutes) return '';
  
  const institutes = filterInstitutes();
  
  return `
    <section class="institutes-section">
      <div class="section-header">
        <h2>Government ITIs in West Bengal</h2>
        <p>Explore ${institutes.length} Government Industrial Training Institutes offering quality vocational education</p>
      </div>
      
      ${institutes.length === 0 ? `
        <div class="empty-state">
          <div class="empty-state-icon">${Icons.inbox}</div>
          <h3>No institutes found</h3>
          <p>Try adjusting your search query.</p>
        </div>
      ` : `
        <div class="institutes-grid">
          ${institutes.map(institute => renderInstituteCard(institute)).join('')}
        </div>
      `}
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="vocational-footer">
      <div class="container">
        <p>&copy; 2025 Vocational Courses Hub - West Bengal. All rights reserved.</p>
        <p>Empowering students with skill-based education and career opportunities.</p>
      </div>
    </footer>
  `;
}

function render() {
  const courses = filterCourses();
  const institutes = filterInstitutes();
  
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderHero()}
    <main class="container py-4">
      ${renderBreadcrumb()}
      ${renderFilters()}
      ${renderStats(courses.length, institutes.length)}
      
      <section class="courses-section">
        <div class="section-header">
          <h2>Available Vocational Courses</h2>
          <p>Browse through our comprehensive list of vocational courses categorized by field of study</p>
        </div>
        ${renderCourses()}
      </section>
      
      ${renderInstitutes()}
    </main>
    ${renderFooter()}
  `;
  
  // Animate elements
  animateElements();
}

function animateElements() {
  if (typeof gsap !== 'undefined') {
    gsap.from('.course-card', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.05,
      ease: 'power2.out'
    });
    
    gsap.from('.institute-card', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.05,
      delay: 0.2,
      ease: 'power2.out'
    });
  }
}

// Event Handlers
function handleLevelChange(level) {
  state.selectedLevel = level;
  render();
}

function handleCategoryChange(category) {
  state.selectedCategory = category;
  render();
}

function handleSearch(event) {
  state.searchQuery = event.target.value;
  // Debounce search
  clearTimeout(window.searchTimeout);
  window.searchTimeout = setTimeout(() => {
    render();
  }, 300);
}

// Make functions globally available
window.handleLevelChange = handleLevelChange;
window.handleCategoryChange = handleCategoryChange;
window.handleSearch = handleSearch;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  render();
});