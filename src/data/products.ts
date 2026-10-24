export interface ProductVariant {
  name: string;
  category: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  image: string;
}

export interface ProductDetail {
  slug: string;
  aliases?: string[];
  title: string;
  tag: string;
  subtitle: string;
  copy: string;
  heroImage: string;
  overview: string;
  capabilitiesTitle: string;
  capabilities: {
    title: string;
    description: string;
    stat: string;
    statLabel: string;
  }[];
  technicalSpecs: {
    category: string;
    items: { parameter: string; specification: string; testStandard?: string }[];
  }[];
  variants: ProductVariant[];
  applications: {
    title: string;
    sector: string;
    description: string;
    image: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const productsData: ProductDetail[] = [
  {
    slug: "upvc-windows-doors",
    aliases: ["upvc-manufacturing", "upvc-windows-and-doors"],
    title: "uPVC Windows & Doors",
    tag: "01 / aluplast® German Systems",
    subtitle: "German Engineered Window & Door Systems",
    copy: "Energy-efficient, multi-chambered German aluplast® uPVC window and door systems structurally engineered for luxurious lasting beauty and superior acoustic insulation.",
    heroImage: "https://images.unsplash.com/photo-1717386255767-52643970d483?auto=format&fit=crop&w=1920&q=85",
    overview:
      "Sunitha Enterprises' state-of-the-art fabrication facility delivers multi-chambered aluplast® German uPVC window and door systems engineered to withstand extreme temperature differentials, high wind loads, and urban acoustic pressure. Featuring premier profiles like IDEAL 1000, 2000, 4000, smart-slide, and prima-slide with architectural aludec and woodec laminations, every frame is reinforced with galvanized box steel for decades of effortless operation.",
    capabilitiesTitle: "Manufacturing Rigour & Engineering",
    capabilities: [
      {
        title: "Multi-Chamber Insulation",
        description: "5 and 6-chamber tropicalized uPVC profiles prevent thermal bridging, reducing air-conditioning loads by up to 35%.",
        stat: "1.4 W/m²K",
        statLabel: "Average U-Factor",
      },
      {
        title: "Acoustic Attenuation",
        description: "Dual EPDM compression gaskets combined with specialized acoustic PVB lamination silence outdoor traffic noise.",
        stat: "-42 dB",
        statLabel: "Noise Reduction",
      },
      {
        title: "Galvanized Reinforcement",
        description: "Hot-dip galvanized steel inserts (1.8mm - 2.2mm wall thickness) run through all sashes and frames for structural rigidity.",
        stat: "100%",
        statLabel: "Steel Armored",
      },
      {
        title: "Weather & UV Stability",
        description: "High-concentration titanium dioxide (TiO₂) formulation ensures zero discoloration or chalking under harsh tropical UV.",
        stat: "25+ Yrs",
        statLabel: "Design Lifespan",
      },
    ],
    technicalSpecs: [
      {
        category: "Profile & Material Properties",
        items: [
          { parameter: "Raw Material Compound", specification: "Impact-modified unplasticized Polyvinyl Chloride (DIN 7748)", testStandard: "EN 12608 Class A" },
          { parameter: "Wall Thickness", specification: "2.8mm ± 0.2mm (Heavy wall architectural grade)", testStandard: "ISO 10563" },
          { parameter: "Internal Reinforcement", specification: "Electro-galvanized cold-formed steel (IS 277 / ASTM A653)", testStandard: "Min 1.8mm thickness" },
          { parameter: "Welding Method", specification: "Four-point CNC automated seamless heat fusion (250°C)", testStandard: "EN 514 Corner Strength" },
        ],
      },
      {
        category: "Acoustic & Thermal Performance",
        items: [
          { parameter: "Thermal Transmittance (Uf)", specification: "1.3 - 1.7 W/m²·K (Profile only)", testStandard: "EN ISO 10077-2" },
          { parameter: "Overall Window Uw (with DGU)", specification: "1.6 W/m²·K with Argon-filled Low-E glass", testStandard: "NFRC 100" },
          { parameter: "Acoustic Isolation (Rw)", specification: "38 dB to 44 dB based on glazing configuration", testStandard: "ISO 717-1" },
          { parameter: "Air Permeability", specification: "Class 4 (600 Pa test pressure)", testStandard: "EN 12207" },
          { parameter: "Water Tightness", specification: "Class 9A (600 Pa non-penetration under spray)", testStandard: "EN 12208" },
        ],
      },
      {
        category: "Hardware & Operational Mechanisms",
        items: [
          { parameter: "Locking Mechanism", specification: "Multi-point perimeter locking bolts with mushroom cams", testStandard: "DIN 18104 Security" },
          { parameter: "Cycle Test Durability", specification: "Tested to 50,000+ open-close operational cycles", testStandard: "EN 1191 Grade 4" },
          { parameter: "Weather Gaskets", specification: "Continuous co-extruded TPV / vulcanized EPDM seals", testStandard: "DIN 7863" },
        ],
      },
    ],
    variants: [
      {
        name: "Architectural Casement System",
        category: "Openable Windows & French Doors",
        description: "Engineered for maximum acoustic seal and outward ventilation with heavy-duty friction stays and multipoint perimeter locking.",
        features: ["Inward/Outward swing options", "Concealed heavy-duty hinges", "Double compression EPDM gasket", "Integrated mosquito sash channel"],
        specs: [
          { label: "Max Sash Dimension", value: "900 x 2400 mm" },
          { label: "Glass Capacity", value: "6mm to 32mm DGU" },
          { label: "Wind Resistance", value: "Class C5 (2000 Pa)" },
        ],
        image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Panoramic Sliding System",
        category: "2, 3 & 4-Track Patio Sliders",
        description: "Heavy-duty tandem nylon rollers glide effortlessly over stainless steel tracks, supporting massive floor-to-ceiling glass expanses.",
        features: ["Ultra-slim interlock meeting stiles (42mm)", "Drainage slope with self-closing valves", "Integrated heavy SS security mesh", "Soft-closing dampening bumpers"],
        specs: [
          { label: "Max Sash Weight", value: "250 kg per panel" },
          { label: "Track Options", value: "2-Track, 3-Track, Multi-Slide" },
          { label: "Threshold", value: "Flush barrier-free design" },
        ],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Tilt & Turn European System",
        category: "Dual Function Ventilation",
        description: "A single handle motion switches between top-tilt micro-ventilation (draft-free air exchange) and full 180° swing cleaning access.",
        features: ["Dual action ergonomic handle", "Superior draft and rainwater resistance", "Child-safe night ventilation mode", "Acoustic seal superior to sliders"],
        specs: [
          { label: "Max Height", value: "2200 mm" },
          { label: "Security Level", value: "RC2 / PAS 24 rated" },
          { label: "Glass Types", value: "Acoustic Triple Glazed" },
        ],
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Villa Combination & Bay Windows",
        category: "Custom Geometric Enclosures",
        description: "Structural coupling couplers combine fixed panorama glass with active ventilation sashes in angled bay and bow configurations.",
        features: ["Variable angle corner couplers (90° to 175°)", "Internal box steel structural reinforcement", "Full perimeter waterproofing collars", "Custom mullion capping"],
        specs: [
          { label: "Span Capacity", value: "Custom continuous facade" },
          { label: "Design Flexibility", value: "Arched, bay, fixed combination" },
          { label: "Wind Load Rating", value: "Engineered to cyclone zones" },
        ],
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
      },
    ],
    applications: [
      {
        title: "High-Rise Residential Balconies",
        sector: "Luxury High-Rise",
        description: "Engineered to withstand turbulent wind shear at 30+ floors while keeping interiors tranquil.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Private Contemporary Residences",
        sector: "Bespoke Architecture",
        description: "Floor-to-ceiling panoramic sliding panels that eliminate visual barriers between indoor living and outdoor gardens.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Boutique Hospitality & Resorts",
        sector: "Commercial Hospitality",
        description: "Durable acoustic guest-room enclosures that combine thermal efficiency with woodgrain architectural elegance.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      },
    ],
    processSteps: [
      { step: "01", title: "Digital Laser Measurement", detail: "Millimeter-precision site surveying using 3D laser meters to capture exact masonry tolerances." },
      { step: "02", title: "Automated CNC Cutting", detail: "Profiles cut and drained on computerized 4-axis machining centers with automated bar code tracing." },
      { step: "03", title: "Thermal Fusion Welding", detail: "Simultaneous 4-corner heat fusion creates an impervious homogenous frame joint." },
      { step: "04", title: "Factory Glazing & Hardware Fit", detail: "Dry-glazing with EPDM gaskets, multi-point transmission gear installation, and calibration." },
      { step: "05", title: "Clean Installation", detail: "Expansion bolt fastening, structural polyurethane foaming, and perimeter silicone weather-sealing." },
    ],
    faqs: [
      { question: "How does uPVC perform in high humidity or coastal salt environments?", answer: "uPVC is completely non-corrosive, inert to sea salt, and unaffected by high humidity or sulfur air. Unlike aluminum or timber, it will never oxidize, pit, or rot." },
      { question: "Can we get custom colors and wood grain textures?", answer: "Yes. In addition to clean architectonic whites and anthracites, we offer laminated architectural foils (Renolit / Hornschuch) including Golden Oak, Walnut, and Charcoal Grey with 15-year weather-durability warranties." },
      { question: "What is the typical lead time from final measurement to installation?", answer: "Standard configurations are fabricated and dispatched within 12 to 18 business days. Custom curved or heavy acoustic triple-glazed units require approximately 20 to 25 business days." },
    ],
  },
  {
    slug: "heavy-fabrication",
    aliases: ["heavy-steel-fabrication"],
    title: "Heavy Steel Fabrication",
    tag: "02 / Structural Steel",
    subtitle: "Engineered Heavy Industrial Steelworks",
    copy: "Engineered steel fabrication, CNC plasma profiled components, and massive structural assemblies for demanding infrastructure and industrial projects.",
    heroImage: "https://images.unsplash.com/photo-1598302936625-6075fbd98dd7?auto=format&fit=crop&w=1920&q=85",
    overview:
      "From heavy built-up plate girders and multi-ton overhead crane gantries to complex spatial industrial trusses, Sunitha Enterprises' heavy fabrication division provides turnkey structural engineering. Our manufacturing hub features CNC high-definition plasma profiling, automated submerged-arc welding (SAW), and shot-blasting bays to execute the most demanding structural specifications.",
    capabilitiesTitle: "Industrial Infrastructure & Steel Fabrication",
    capabilities: [
      {
        title: "Certified Welding Quality",
        description: "All welding operators and procedures qualified to AWS D1.1 and ASME Section IX standards with 100% NDT inspection options.",
        stat: "AWS D1.1",
        statLabel: "Welding Standard",
      },
      {
        title: "High-Capacity Lifting",
        description: "Dual 30-ton overhead gantry cranes enable the assembly of massive monolithic sections up to 36 meters in single lengths.",
        stat: "60 Tons",
        statLabel: "Single Assembly Cap",
      },
      {
        title: "Automated SAW Welding",
        description: "Twin-wire Submerged Arc Welding tractors produce deep-penetration, defect-free full-strength flange-to-web joints.",
        stat: "100%",
        statLabel: "Full Penetration",
      },
      {
        title: "Protective Surface Finishes",
        description: "In-house automated shot-blasting to Sa 2.5 cleanliness followed by multi-coat epoxy primer and polyurethane finish.",
        stat: "Sa 2.5",
        statLabel: "Surface Blast Grade",
      },
    ],
    technicalSpecs: [
      {
        category: "Material & Steel Grades",
        items: [
          { parameter: "Structural Steel Standard", specification: "IS 2062 Grade E250 / E350 BR/BO, ASTM A36, ASTM A572 Gr. 50", testStandard: "Mill Test Certified" },
          { parameter: "High-Tensile Fasteners", specification: "Grade 8.8 / 10.9 HSFG (High Strength Friction Grip) bolts", testStandard: "IS 3757 / ASTM A325" },
          { parameter: "Plate Thickness Capability", specification: "6mm up to 100mm heavy plate profiling", testStandard: "Ultrasonic Tested (UT)" },
          { parameter: "Dimensional Tolerances", specification: "Conforming to IS 7215 / AISC Code of Standard Practice", testStandard: "Laser Checked" },
        ],
      },
      {
        category: "Welding & Non-Destructive Testing (NDT)",
        items: [
          { parameter: "Welding Processes", specification: "SAW (Submerged Arc), FCAW (Flux Cored), GMAW/MIG, SMAW", testStandard: "AWS D1.1" },
          { parameter: "NDT Testing Protocols", specification: "Ultrasonic Testing (UT), Magnetic Particle (MPI), Radiography (RT)", testStandard: "ASNT Level II / III" },
          { parameter: "Electrode Quality", specification: "Low hydrogen E7018, AWS A5.17 F7A2-EM12K certified wires", testStandard: "Pre-heated to code" },
        ],
      },
      {
        category: "Surface Preparation & Coatings",
        items: [
          { parameter: "Abrasive Blasting", specification: "Centrifugal wheel blast to ISO 8501-1 Sa 2.5 near-white metal", testStandard: "Surface Profile 40-75 µm" },
          { parameter: "Coating Systems", specification: "Zinc-rich epoxy primer (75µm) + High-build epoxy MIO + Aliphatic PU", testStandard: "SSPC-Paint 20" },
          { parameter: "Galvanizing (Optional)", specification: "Hot-dip galvanizing min 85-120 microns as per ASTM A123", testStandard: "Salt spray 1500+ hrs" },
        ],
      },
    ],
    variants: [
      {
        name: "Built-up Plate Girders & Bridge Beams",
        category: "Heavy Structural Elements",
        description: "Custom continuous I-sections and box beams fabricated from thick structural steel plates with longitudinal stiffeners.",
        features: ["Cambering engineered into web cuts", "Full-penetration flange welds", "Stiffener plates strategically located for point loads", "Pre-drilled connection splice plates"],
        specs: [
          { label: "Depth Capacity", value: "Up to 3,500 mm" },
          { label: "Single Length", value: "Up to 38 meters" },
          { label: "Plate Thickness", value: "Up to 80 mm" },
        ],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Crane Runways & Heavy Gantry Columns",
        category: "Industrial Equipment Support",
        description: "Heavy laced and solid-web columns designed for dynamic crane wheel loads, lateral braking shock, and building wind forces.",
        features: ["Machined base plates for precision grout bearing", "Rail clips and elastomeric pads included", "Crane bracket supports with heavy gussets", "Deflection limited to L/1000"],
        specs: [
          { label: "Crane Duty", value: "Class 1 through Class 4 (EOT)" },
          { label: "Load Capacity", value: "Up to 150-ton EOT crane" },
          { label: "Inspection", value: "100% MPI on brackets" },
        ],
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Architectural Space Trusses & Canopies",
        category: "Exposed Spatial Steel",
        description: "Aesthetically finished tubular and CHS/RHS structural trusses engineered for monumental airport terminals, stadiums, and skylight roofs.",
        features: ["Architectural grinding on all visible weld beads", "Precision node spherical connectors", "Hidden internal cable tension systems", "Flawless aliphatic polyurethane topcoat"],
        specs: [
          { label: "Clear Span", value: "Up to 70+ meters" },
          { label: "Sections", value: "Circular & Rectangular Hollow" },
          { label: "Finish", value: "C5-M Marine Architectural Grade" },
        ],
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Industrial Mezzanines & Heavy Skids",
        category: "Process & Modular Platforms",
        description: "Free-standing and tied industrial mezzanine levels for manufacturing equipment, process piping, and warehousing inventory.",
        features: ["Heavy grating or checkered plate decking", "Modular bolted connections for rapid assembly", "Integrated industrial stairways & safety handrails", "High load-bearing capacity"],
        specs: [
          { label: "Uniform Live Load", value: "5 kN/m² to 25 kN/m²" },
          { label: "Assembly", value: "100% Pre-engineered bolted" },
          { label: "Fireproofing", value: "Intumescent ready" },
        ],
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80",
      },
    ],
    applications: [
      {
        title: "Automotive & Manufacturing Facilities",
        sector: "Industrial Plants",
        description: "Heavy structural steel frames engineered for continuous vibration from presses, stamping lines, and automated robots.",
        image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Power Stations & Infrastructure Skids",
        sector: "Energy & Infrastructure",
        description: "Rugged pipe racks, boiler support steel, and modular equipment skids built to survive extreme corrosive operating environments.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Commercial Skylight & Atrium Canopies",
        sector: "Corporate Architecture",
        description: "Expressive architectural steelwork delivering light and geometric grace to premier corporate atriums and transit hubs.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      },
    ],
    processSteps: [
      { step: "01", title: "Tekla 3D Detailing", detail: "Comprehensive BIM connection modeling and generation of CNC NC1 data files." },
      { step: "02", title: "CNC Multi-Torch Plate Cutting", detail: "Automated high-definition plasma and oxy-fuel cutting with automatic beveling." },
      { step: "03", title: "Fit-Up & SAW Automated Welding", detail: "Precision jig fit-up followed by submerged arc welding with controlled heat input." },
      { step: "04", title: "Non-Destructive Testing (NDT)", detail: "Rigorous ultrasonic, MPI, and dye penetrant testing by certified Level II technicians." },
      { step: "05", title: "Blast Cleaning & Coating", detail: "Sa 2.5 grit blasting and application of multi-layer high-durability epoxy coating." },
    ],
    faqs: [
      { question: "What structural steel grades are maintained in your raw material stock?", answer: "We maintain heavy stock of IS 2062 E250 / E350 BR/BO, ASTM A36, and ASTM A572 Grade 50 with complete Mill Test Certificates (MTC) traced to each heat number." },
      { question: "Can you provide third-party NDT inspection reports?", answer: "Yes. All projects include comprehensive Quality Assurance (QA/QC) dossiers with ultrasonic testing (UT), MPI reports, welder qualification records (WPQR), and dry film thickness (DFT) logs." },
      { question: "Do you supply bolts, anchor templates, and erection hardware?", answer: "Every fabricated package includes certified foundation anchor bolts, setting templates, high-tensile connection bolts (HSFG 8.8/10.9), and marked erection drawings." },
    ],
  },
  {
    slug: "peb-solutions",
    aliases: ["pre-engineered-buildings", "peb"],
    title: "Pre-Engineered Buildings",
    tag: "03 / Turnkey PEB Infrastructure",
    subtitle: "High-Strength Structural Steel Warehouses & Sheds",
    copy: "High-strength structural steel warehouses, PEB industrial sheds, and multi-story structural steel frames designed for maximum volumetric efficiency.",
    heroImage: "https://images.unsplash.com/photo-1694885169342-909981fb408a?auto=format&fit=crop&w=1920&q=85",
    overview:
      "Sunitha Enterprises PEB Systems provide end-to-end design, manufacturing, and erection of high-performance pre-engineered steel buildings. By optimizing tapered steel columns and rafters based on internal bending moments, our PEB structures save 30% in steel weight, cut construction time by half, and achieve column-free clear spans exceeding 60 meters.",
    capabilitiesTitle: "Turnkey Building Systems & Value Engineering",
    capabilities: [
      {
        title: "Column-Free Clear Spans",
        description: "Optimized primary tapered frames provide unobstructed interior volume for efficient material flow and warehouse racking.",
        stat: "60+ M",
        statLabel: "Clear Span Width",
      },
      {
        title: "Rapid Construction Schedule",
        description: "100% pre-cut, pre-punched, and pre-welded components bolt together on-site, slashing construction timelines by 50%.",
        stat: "-50%",
        statLabel: "Schedule Savings",
      },
      {
        title: "High-Strength Z & C Purlins",
        description: "Cold-formed Galvanized 345 MPa tensile steel purlins with nested laps for continuous beam structural efficiency.",
        stat: "345 MPa",
        statLabel: "Purlin Yield Strength",
      },
      {
        title: "Full Seismic & Wind Design",
        description: "Custom engineered to latest IS 1893 (Seismic) and IS 875 Part 3 (Cyclonic Wind) building codes with PE stamps.",
        stat: "200 km/h+",
        statLabel: "Wind Survivability",
      },
    ],
    technicalSpecs: [
      {
        category: "Primary & Secondary Structural Framing",
        items: [
          { parameter: "Primary Frame Material", specification: "ASTM A572 Grade 50 / IS 2062 E350 high tensile steel (Yield 345 MPa)", testStandard: "MBMA Code" },
          { parameter: "Built-up Tapered Members", specification: "Flange-to-web continuous automatic submerged arc welding", testStandard: "AWS D1.1" },
          { parameter: "Secondary Framing (Purlins & Girts)", specification: "Cold-formed Z & C sections with 275 g/m² galvanizing", testStandard: "ASTM A653 Gr 50" },
          { parameter: "Bracing Systems", specification: "Diagonal high-strength rod bracing, angle bracing, or portal frames", testStandard: "AISC 360-16" },
        ],
      },
      {
        category: "Cladding & Envelope Integration",
        items: [
          { parameter: "Roof Profile", specification: "Standing seam 360° mechanical lock or screw-down trapezoidal", testStandard: "FM 4471 Approved" },
          { parameter: "Wall Sheeting", specification: "Architectural color-coated Galvalume with silicone-modified polyester finish", testStandard: "ASTM A792" },
          { parameter: "Thermal Insulation Options", specification: "Foil-faced glasswool (50mm/100mm) or insulated sandwich panels (PUF/PIR)", testStandard: "EN 13501 Fire Safe" },
          { parameter: "Daylighting Panels", specification: "UV-stabilized polycarbonate / FRP corrugated light panels (1.5mm - 2mm)", testStandard: "60% Light Transmission" },
        ],
      },
      {
        category: "Building Accessories & Ventilation",
        items: [
          { parameter: "Natural Ventilation", specification: "Ridge ventilators (600mm / 900mm throat) and aerodynamic wall louvers", testStandard: "Zero water ingress" },
          { parameter: "Crane Provisions", specification: "Bracket supports and auxiliary crane runway beams for 5T to 30T cranes", testStandard: "IS 807 standard" },
          { parameter: "Rainwater Drainage", specification: "High-capacity perimeter eave gutters with heavy-gauge PVC/GI downspouts", testStandard: "Sized for 150mm/hr rain" },
        ],
      },
    ],
    variants: [
      {
        name: "Clear-Span Industrial Warehouses",
        category: "Logistics & Storage Facilities",
        description: "Maximized internal height and zero interior columns engineered for high-bay racking systems, reach trucks, and modern logistics.",
        features: ["Eave heights from 6m to 16m", "Mezzanine office integration", "Dock leveler pit recesses and canopies", "Continuous natural ridge ventilation"],
        specs: [
          { label: "Span", value: "Up to 60 meters clear" },
          { label: "Floor Area", value: "2,000 to 50,000+ m²" },
          { label: "Roof Slope", value: "1:10 or 1:20 standard" },
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Manufacturing Sheds with Crane Beams",
        category: "Heavy Assembly Facilities",
        description: "Heavy-duty PEB primary frames designed to support dynamic crane runways, mezzanine toolrooms, and utility pipe headers.",
        features: ["Heavy column brackets for EOT cranes", "Reinforced roof rafters for utility loads", "Full-height masonry base wall interface", "Ventilation louvers with bird screens"],
        specs: [
          { label: "Crane Capacity", value: "5 to 30 Metric Tons" },
          { label: "Clear Heights", value: "Up to 14 meters under hook" },
          { label: "Expansion", value: "End-wall expandable frames" },
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Multi-Storey PEB Commercial Frames",
        category: "Composite Commercial Buildings",
        description: "Tapered columns combined with composite metal decking and light structural framing for multi-level showrooms, offices, and retail.",
        features: ["Cast-in-place concrete over metal deck slabs", "Architectural ACP and curtain wall compatible", "Concealed downspouts and service risers", "Rapid structural erection"],
        specs: [
          { label: "Storeys", value: "G + 1 to G + 4" },
          { label: "Floor Loading", value: "Up to 10 kN/m²" },
          { label: "Aesthetic", value: "Flush exterior facades" },
        ],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Controlled Environment & Cold Storages",
        category: "Insulated Agricultural & Cold Chain",
        description: "PEB superstructures integrated with vapor-tight insulated PIR/PUF panels and thermal break isolators for refrigerated warehouses.",
        features: ["Airtight envelope with zero thermal leakage", "Suspended ceiling hanger systems", "Dehumidification duct support integration", "Hygiene-grade antimicrobial coatings"],
        specs: [
          { label: "Temperature Range", value: "-25°C to +15°C" },
          { label: "Panel Core", value: "PIR fire-retardant foam" },
          { label: "Air Infiltration", value: "Near-zero sealed design" },
        ],
        image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=900&q=80",
      },
    ],
    applications: [
      {
        title: "Regional E-Commerce Fulfillment Hubs",
        sector: "Supply Chain & Logistics",
        description: "Expansive multi-bay facilities supporting automated sortation conveyors and high-density racking.",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Automotive Ancillary & Engineering Units",
        sector: "Advanced Manufacturing",
        description: "Crane-equipped workshops configured for continuous equipment layout and overhead utility distribution.",
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Cold Chain Storage & Food Processing",
        sector: "Agri-Business & Pharma",
        description: "Hermetically sealed industrial structures with integrated cold-room envelopes for sensitive cargo preservation.",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
      },
    ],
    processSteps: [
      { step: "01", title: "Structural Optimization (STAAD / MBS)", detail: "Engineered member sizing according to code-mandated wind speeds and live loads." },
      { step: "02", title: "Automated Flange & Web Fabrication", detail: "CNC plate cutting, fitting, and continuous submerged arc welding of primary frames." },
      { step: "03", title: "Secondary Framing Roll-Forming", detail: "High-speed cold roll-forming of high-tensile galvanized Z and C purlins with precision hole punching." },
      { step: "04", title: "Trial Assembly & Quality Inspection", detail: "Bolt hole alignment verification, weld testing, and pre-dispatch protective coating." },
      { step: "05", title: "Site Erection & Cladding", detail: "Systematic lifting, bolting with calibrated torque wrenches, and watertight sheeting installation." },
    ],
    faqs: [
      { question: "How does a Pre-Engineered Building compare to conventional steel?", answer: "PEB structures are 25-30% lighter because members are tapered to match the exact bending moments. They are manufactured under controlled factory conditions and assemble with bolts on-site, cutting erection schedules in half." },
      { question: "Can PEB buildings incorporate cranes and mezzanine floors?", answer: "Absolutely. We engineer primary frames to carry overhead EOT crane brackets (up to 30+ tons) and design integrated mezzanine floors for offices or storage." },
      { question: "What is the warranty and expected lifespan of the roof and wall sheeting?", answer: "Our Galvalume sheets with 55% Aluminum-Zinc alloy coating carry a 20-to-25-year perforation warranty against atmospheric corrosion." },
    ],
  },
  {
    slug: "roofing-systems",
    aliases: ["industrial-roofing"],
    title: "Roofing Systems",
    tag: "04 / Envelope Protection",
    subtitle: "Industrial Standing-Seam & Sandwich Roofing",
    copy: "Advanced industrial roofing solutions with standing-seam leak-proof tech, high solar reflectivity (SRI), and superior corrosion resistance.",
    heroImage: "https://images.unsplash.com/photo-1602193230480-7840a38eb0c3?auto=format&fit=crop&w=1920&q=85",
    overview:
      "Sunitha Enterprises Roofing Systems provide advanced building envelope protection against extreme rainfall, tropical solar radiation, and gale-force cyclonic winds. Specializing in 360° mechanically seamed standing seam roofs and thermal sandwich panels, our roofing solutions eliminate through-fastener puncture leaks, accommodate thermal expansion, and ensure decades of maintenance-free performance.",
    capabilitiesTitle: "Watertight Integrity & Thermal Performance",
    capabilities: [
      {
        title: "360° Seamed Watertight Seal",
        description: "Double-lock mechanical seaming forms a continuous watertight barrier with zero exposed roof penetration fasteners.",
        stat: "Zero Leaks",
        statLabel: "Penetration-Free",
      },
      {
        title: "Thermal Expansion Accommodation",
        description: "Concealed floating clips allow long roof sheets (up to 60 meters) to expand and contract freely without slotting or buckling.",
        stat: "60+ M",
        statLabel: "Continuous Pan Length",
      },
      {
        title: "Superior Galvalume Alloy",
        description: "55% Al-Zn alloy coating (AZ150) provides 4x greater corrosion resistance than standard galvanized steel in industrial atmospheres.",
        stat: "AZ150",
        statLabel: "Al-Zn Coating Mass",
      },
      {
        title: "High Thermal Reflectance (SRI)",
        description: "Cool-roof coatings with Solar Reflectance Index > 82 reflect radiant heat back to the sky, dropping internal ambient temperatures by 6°C.",
        stat: "SRI 82+",
        statLabel: "Solar Reflectance",
      },
    ],
    technicalSpecs: [
      {
        category: "Substrate & Metal Specifications",
        items: [
          { parameter: "Base Metal", specification: "High-tensile structural steel (Yield strength 550 MPa for standard, 300 MPa for standing seam)", testStandard: "ASTM A792M" },
          { parameter: "Metallic Coating", specification: "Galvalume / Zincalume alloy (55% Al, 43.5% Zn, 1.5% Si) min AZ150 g/m²", testStandard: "AS 1397 / IS 15965" },
          { parameter: "Nominal Thickness (BMT)", specification: "0.45mm, 0.50mm, 0.55mm, 0.60mm base metal thickness", testStandard: "Micrometer Verified" },
          { parameter: "Organic Paint Coating", specification: "Super Durable Polyester (SDP) or PVDF (70% Kynar 500) 25µm top / 7µm backer", testStandard: "ASTM D4141" },
        ],
      },
      {
        category: "Structural & Wind Uplift Ratings",
        items: [
          { parameter: "Wind Uplift Classification", specification: "UL 580 Class 90 / FM 4471 Class 1-90 wind uplift resistance", testStandard: "UL 1897 Tested" },
          { parameter: "Slope Capability", specification: "Standing seam suitable down to 1.5° (1:40 pitch); Trapezoidal from 3° (1:20)", testStandard: "ASTM E1646 Water" },
          { parameter: "Air Infiltration", specification: "Tested to ASTM E1680 with zero measurable air leakage at 1.57 psf", testStandard: "ASTM E1680" },
        ],
      },
      {
        category: "Insulation & Acoustic Assemblies",
        items: [
          { parameter: "Composite Panel Core", specification: "PIR (Polyisocyanurate) B1 fire-retardant or Rockwool (A1 non-combustible)", testStandard: "EN 13501-1" },
          { parameter: "Thermal Resistance (R-Value)", specification: "Up to R-4.5 m²·K/W for 100mm PIR panels", testStandard: "ASTM C518" },
          { parameter: "Acoustic Damping (Rw)", specification: "Up to 32 dB with built-up acoustic perforations and high-density wool", testStandard: "ISO 140-3" },
        ],
      },
    ],
    variants: [
      {
        name: "Architectural Standing Seam Roof",
        category: "Concealed Fixed 360° Double Lock",
        description: "The pinnacle of roofing engineering. Floating clips anchor the panels without through-fasteners, sealed with a mechanized 360° double-lock seam.",
        features: ["Zero exposed screw holes on roof surface", "Accommodates extreme thermal expansion", "Continuous roll-forming on site up to 70m", "Ideal for low-slope architectural roofs"],
        specs: [
          { label: "Seam Height", value: "50mm / 65mm ribs" },
          { label: "Min Slope", value: "1:40 (1.5 degrees)" },
          { label: "Fastening", value: "Concealed sliding clips" },
        ],
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Insulated Sandwich Panels (PUF / PIR)",
        category: "Thermal & Cold Room Roofing",
        description: "Factory-bonded metal composite panels with high-density polyurethane / polyisocyanurate rigid foam for superior climate control.",
        features: ["High thermal resistance (R-values up to 4.5)", "Tongue-and-groove joint with concealed capillary grooves", "Rapid installation spans up to 4 meters purlin spacing", "Fire-retardant B1 rated PIR foam core"],
        specs: [
          { label: "Thickness", value: "30, 50, 80, 100 mm" },
          { label: "Density", value: "40 ± 2 kg/m³" },
          { label: "Fire Rating", value: "Self-extinguishing Class B1" },
        ],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "High-Tensile Trapezoidal Sheeting",
        category: "Screw-Down Industrial Profile",
        description: "Classic high-strength 550 MPa yield Galvalume profiled sheets with anti-capillary side laps and return legs for rigidity.",
        features: ["High rib depth (28mm to 35mm) for water run-off", "Dual anti-capillary siphonic groove on overlap", "Engineered EPDM washer self-drilling fasteners", "Economical wide cover width (1000mm)"],
        specs: [
          { label: "Steel Yield", value: "550 MPa (G550)" },
          { label: "Cover Width", value: "1000 mm" },
          { label: "Coating", value: "AZ150 Galvalume" },
        ],
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Curved Architectural & Skylight Assemblies",
        category: "Specialty Roof Solutions",
        description: "Crimped curved and smooth-curved roof profiles paired with matching impact-resistant UV-shielded polycarbonate daylighting panels.",
        features: ["Seamless crimp curves for barrel vault roofs", "Matching multi-wall polycarbonate daylight sheets", "Specially designed aerodynamic ridge ventilators", "Custom aluminum flashings & valleys"],
        specs: [
          { label: "Curving Radius", value: "Down to 450 mm radius" },
          { label: "Polycarbonate", value: "Co-extruded 100% UV block" },
          { label: "Flashings", value: "Custom folded up to 4m lengths" },
        ],
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      },
    ],
    applications: [
      {
        title: "Industrial Manufacturing Megaplants",
        sector: "Automotive & Heavy Industry",
        description: "Enduring standing seam roofs that protect expensive assembly lines from monsoon deluge and intense thermal radiation.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Airport Terminals & Transit Stations",
        sector: "Civic & Transportation",
        description: "Complex curved acoustic roof canopies designed for extreme uplift resistance and high passenger sound dampening.",
        image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Pharmaceuticals & Temperature-Controlled Plants",
        sector: "Cleanroom & Pharma",
        description: "PIR insulated sandwich roofing panels ensuring stable indoor climates and strict condensation control.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      },
    ],
    processSteps: [
      { step: "01", title: "Site Drainage & Uplift Engineering", detail: "Rainfall intensity calculations and purlin clip spacing designed to local meteorological data." },
      { step: "02", title: "Mobile On-Site Roll-Forming", detail: "Containerized roll-forming machines roll continuous roof sheets right onto the roof structure, eliminating transport joints." },
      { step: "03", title: "Sub-Structure Alignment & Insulation", detail: "Thermal spacer blocks, vapor barrier membrane, and high-density acoustic insulation installation." },
      { step: "04", title: "Mechanical Seaming & Profiling", detail: "Motorized seaming machines crimp the ribs together with a continuous 360° mechanical lock." },
      { step: "05", title: "Flashing & Water Penetration Testing", detail: "Installation of custom formed ridge caps, eave gutters, and high-pressure hose testing." },
    ],
    faqs: [
      { question: "Why is a Standing Seam roof better than conventional screw-down sheets?", answer: "Conventional sheets use exposed screws that pierce the sheet. Over time, thermal movement enlarges these holes and degrades rubber washers, causing leaks. Standing seam uses hidden floating clips under the seam with zero holes through the roof panel." },
      { question: "Can we install solar panels on a Sunitha Enterprises standing seam roof?", answer: "Yes! Special non-penetrating S-5! aluminum clamps lock directly onto the standing seam ribs without piercing the roof sheet, preserving 100% of the watertight warranty." },
      { question: "What slope can your standing seam system accommodate?", answer: "Our standing seam can safely drain water on slopes as low as 1.5 degrees (1:40 pitch) due to the 50mm high ribs and continuous non-spliced pan lengths." },
    ],
  },
  {
    slug: "acp-cladding",
    aliases: ["acp-facade-cladding", "cladding-systems"],
    title: "ACP Cladding Systems",
    tag: "05 / Facade Engineering",
    subtitle: "Class A2 Fire-Retardant Architectural Facades",
    copy: "High-grade aluminum composite panels for exterior facade protection, featuring class A2 fire-retardant cores and PVDF weather coatings.",
    heroImage: "https://images.unsplash.com/photo-1642887534384-81c81882dd1a?auto=format&fit=crop&w=1920&q=85",
    overview:
      "Sunitha Enterprises ACP Cladding turns building exteriors into sculptural architectural statements. Utilizing premium fire-rated Class A2 and B1 mineral-core panels with 70% Kynar 500 PVDF coatings, our ventilated rainscreen facades combine high thermal insulation, acoustic reduction, weatherproofing, and striking modern aesthetics with 20-year color-fast warranties.",
    capabilitiesTitle: "Façade Engineering & Fire Safety",
    capabilities: [
      {
        title: "Fire-Resistant Mineral Core",
        description: "Class A2 non-combustible and Class B1 fire-retardant mineral cores that produce zero flaming droplets and minimal smoke under fire conditions.",
        stat: "Class A2",
        statLabel: "Fire Safety Grade",
      },
      {
        title: "PVDF Fluorocarbon Finish",
        description: "Three-coat 70% Kynar 500 / Hylar 5000 resin finishes resist harsh UV radiation, acid rain, and airborne pollution.",
        stat: "20 Yrs",
        statLabel: "Color Warranty",
      },
      {
        title: "Ventilated Rainscreen Principle",
        description: "Back-ventilated cavity dissipates solar heat buildup, reduces air conditioning load, and prevents moisture accumulation behind the wall.",
        stat: "Rear Vent",
        statLabel: "Dry Cavity System",
      },
      {
        title: "CNC Parametric Perforation",
        description: "Complex computational perforation patterns, groove routing, and 3D geometric cassettes engineered in-house.",
        stat: "±0.5 mm",
        statLabel: "CNC Routing Accuracy",
      },
    ],
    technicalSpecs: [
      {
        category: "Panel Geometry & Construction",
        items: [
          { parameter: "Total Panel Thickness", specification: "4.0mm (standard) and 6.0mm for heavy wind-load facades", testStandard: "ASTM D792" },
          { parameter: "Aluminium Skin Thickness", specification: "0.50mm top and bottom architectural grade aluminium alloy 3003 / 5005", testStandard: "EN 485-2" },
          { parameter: "Core Composition", specification: "Non-combustible mineral core (min 85% mineral content) or FR polyethylene", testStandard: "ASTM E84 Class A" },
          { parameter: "Panel Weight", specification: "5.5 kg/m² (PE core) / 7.6 kg/m² (A2 mineral core)", testStandard: "Scales Verified" },
        ],
      },
      {
        category: "Coating & Weathering Resistance",
        items: [
          { parameter: "Coating Type", specification: "Kynar 500 PVDF (min 70% fluoropolymer resin) 3-coat system min 28-32 µm", testStandard: "AAMA 2605" },
          { parameter: "Specular Gloss", specification: "Matte 25-35%, Satin 40-50%, High Gloss 70-80%", testStandard: "ASTM D523" },
          { parameter: "Salt Spray Resistance", specification: "Zero blistering or corrosion after 3,000 hours continuous salt fog", testStandard: "ASTM B117" },
          { parameter: "Accelerated Weathering (QUV)", specification: "Color retention ΔE < 5 after 4,000 hours exposure", testStandard: "ASTM G154" },
        ],
      },
      {
        category: "Substructure & Anchoring System",
        items: [
          { parameter: "Sub-Framing Extrusions", specification: "Extruded Aluminium alloy 6063-T6 vertical and horizontal runner channels", testStandard: "IS 733 / ASTM B221" },
          { parameter: "Bracket Fasteners", specification: "Stainless steel SS304 / SS316 expansion anchors into concrete beams", testStandard: "Tested for 3.5 kN pullout" },
          { parameter: "Joint Sealing Options", specification: "Neutral cure structural silicone (Dow Corning 789) or open ventilated shadow joint", testStandard: "ASTM C920" },
        ],
      },
    ],
    variants: [
      {
        name: "Tray Cassette Ventilated Rainscreen",
        category: "Architectural Exterior Facade",
        description: "Four-side folded tray cassettes hung on concealed aluminum brackets with engineered shadow gaps, allowing wall breathing and natural drainage.",
        features: ["Concealed fixing brackets with zero visible screws", "Clean 15mm-20mm shadow reveals or silicone sealed joints", "Allows individual panel removal for maintenance", "Engineered air cavity blocks conductive solar heat"],
        specs: [
          { label: "Cassette Depth", value: "25mm to 35mm folds" },
          { label: "Joint Type", value: "Open-joint or Silicone" },
          { label: "Wind Load", value: "Engineered to 3.5 kPa" },
        ],
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "3D Geometric & Parametric CNC Screens",
        category: "Sculptural Exterior Elements",
        description: "Custom CNC-routed, perforated, and faceted triangular panels that form dramatic three-dimensional relief patterns on landmark buildings.",
        features: ["Custom perforation patterns and logo stencils", "Integrated LED backlighting channels", "Sun-shading dynamic facade filtering", "Structural stiffeners glued with structural adhesives"],
        specs: [
          { label: "Perforation Open Area", value: "10% to 45%" },
          { label: "3D Fold Angles", value: "Custom faceted geometry" },
          { label: "Core", value: "Class A2 Fire Safe Core" },
        ],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Column & Beam Architectural Wraps",
        category: "Interior & Exterior Monolithic Elements",
        description: "Curved and rectangular precision-routed ACP casings that encase rough concrete columns and exterior overhead cantilever beams.",
        features: ["True circular roll-bent cladding (down to 300mm radius)", "V-grooved 90° razor-sharp edges without cracking paint", "Integrated expansion joints at floor transitions", "Impact-resistant heavy backing"],
        specs: [
          { label: "Radius Capability", value: "From 300mm up to 3000mm" },
          { label: "Column Profiles", value: "Round, Oval, Square, Tapered" },
          { label: "Finish", value: "Metallic, Solid, Woodgrain" },
        ],
        image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Corporate Portals & Canopy Soffits",
        category: "Entrance Architecture",
        description: "Seamless monolithic entrance portals, suspended soffits, and overhead architectural canopies with flush LED downlight cutouts.",
        features: ["Weatherproof flush-level soffit ceilings", "Water-collection drip edges preventing facade streaks", "Integrated illuminated signage framing", "High acoustic deadening dampeners"],
        specs: [
          { label: "Suspension", value: "Galvanized rigid hangers" },
          { label: "Lighting Integration", value: "Factory precision cutouts" },
          { label: "Flatness", value: "Zero oil-canning deflection" },
        ],
        image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=900&q=80",
      },
    ],
    applications: [
      {
        title: "Commercial Corporate Headquarters",
        sector: "Office Towers",
        description: "High-spec metallic and anthracite facades providing modern identity and decades of low-maintenance beauty.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Luxury Automobile Dealerships & Retail",
        sector: "Automotive & Retail Showrooms",
        description: "Crisp corporate identity portals, branded geometric canopies, and flawless monolithic column encasements.",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Transit Hubs & Airport Terminal Facades",
        sector: "Public Infrastructure",
        description: "Fire-rated Class A2 panels engineered for heavy public footfall, strict fire safety codes, and cyclone wind pressures.",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      },
    ],
    processSteps: [
      { step: "01", title: "3D Point Cloud Scanning", detail: "Laser-scanning concrete and structural frames to identify substrate plumb deviations." },
      { step: "02", title: "Sub-Frame Structural Grid", detail: "Installation of heavy aluminum 6063-T6 brackets with thermal isolation break pads." },
      { step: "03", title: "CNC V-Grooving & Routing", detail: "Computerized routing leaving 0.8mm core for crisp, crack-free 90-degree fold edges." },
      { step: "04", title: "Cassette Assembly & Stiffeners", detail: "Rivet assembly of corners and application of structural adhesive stiffener ribs." },
      { step: "05", title: "Installation & Weather Sealing", detail: "Hanging on bracket pins, joint alignment, and application of Dow Corning structural silicone." },
    ],
    faqs: [
      { question: "What is the difference between Class PE, B1, and A2 fire ratings in ACP?", answer: "PE cores contain polyethylene which is combustible. Class B1 cores contain fire-retardant minerals that prevent flashover. Class A2 cores contain over 85% inorganic non-combustible minerals that will not produce smoke or burning droplets, satisfying strict international high-rise fire codes." },
      { question: "How do you avoid 'oil canning' (surface waviness) on large panels?", answer: "We use minimum 4mm panels with 0.5mm skins, route precise corner relief notches, and bond structural aluminum top-hat stiffeners to the rear of panels wider than 1000mm using structural tape and adhesives." },
      { question: "Can ACP be curved for round architectural columns?", answer: "Yes. Our CNC three-roll pyramid bending machine can roll-form ACP panels into smooth cylindrical column claddings down to 300mm diameter without paint crazing." },
    ],
  },
  {
    slug: "structural-glazing",
    aliases: ["curtain-walls", "glazing-systems"],
    title: "Structural Glazing",
    tag: "06 / Glass Architecture",
    subtitle: "Unitized Curtain Walls & Spider Glazing Systems",
    copy: "Sophisticated architectural glass facades, unitized curtain walls, and high-performance weather-tight spider glazing for landmark buildings.",
    heroImage: "https://images.unsplash.com/photo-1523477593243-78bbf626fd3b?auto=format&fit=crop&w=1920&q=85",
    overview:
      "Sunitha Enterprises Structural Glazing blends interior spaces with the external skyline through engineered transparency. Utilizing four-sided silicone structural glazing, unitized curtain wall cassettes, and point-fixed spider glass networks with solar-control Low-E coatings, our systems maximize natural daylight while dramatically reducing heat gain and acoustic noise.",
    capabilitiesTitle: "Transparency, Acoustic Control & Structural Engineering",
    capabilities: [
      {
        title: "Four-Sided Structural Silicone",
        description: "Glass panes bonded to concealed aluminum carrier frames with two-part high-modulus silicone, creating flush glass surfaces with zero exterior frame lines.",
        stat: "Flush",
        statLabel: "Frame-Free Facade",
      },
      {
        title: "Solar Control & Low-E Technology",
        description: "Double-silver and triple-silver magnetron sputtered Low-E coatings deliver superior light transmission while blocking 70% of infrared solar heat.",
        stat: "0.26 SHGC",
        statLabel: "Solar Heat Gain Coeff",
      },
      {
        title: "Acoustic PVB Lamination",
        description: "Triple-layer acoustic interlayer dampens sound wave resonance, isolating interior offices from loud city traffic and aircraft flyovers.",
        stat: "44 dB",
        statLabel: "Acoustic Attenuation",
      },
      {
        title: "Unitized Factory Assembly",
        description: "Full-floor-height facade cassettes assembled and glazed under strictly controlled factory cleanrooms for guaranteed silicone cure strength.",
        stat: "100%",
        statLabel: "Factory Sealed",
      },
    ],
    technicalSpecs: [
      {
        category: "Glazing & Glass Build-Up",
        items: [
          { parameter: "Insulated Glass Unit (DGU)", specification: "6mm Toughened Solar Low-E + 12mm / 16mm Argon gap + 6mm Toughened Clear", testStandard: "ASTM C1036 / EN 1279" },
          { parameter: "Laminated Security Glass", specification: "Dual toughened glass bonded with 1.52mm Kuraray SentryGlas (SGP) or acoustic PVB", testStandard: "EN 12600 Class 1" },
          { parameter: "Spacers & Desiccant", specification: "Warm-edge structural aluminum or stainless composite spacer with molecular sieve", testStandard: "Moisture Penetration Verified" },
          { parameter: "Secondary Seal", specification: "Two-component silicone secondary seal (Dow Corning 983 / Sika 605 G)", testStandard: "ASTM C1369" },
        ],
      },
      {
        category: "Curtain Wall Structural Profiles",
        items: [
          { parameter: "Mullion & Transom Alloys", specification: "Architectural extruded Aluminum alloy 6063-T6 / 6061-T6", testStandard: "ASTM B221" },
          { parameter: "Profile Depths", specification: "Mullion depths from 100mm to 250mm sized to wind deflection L/250 criteria", testStandard: "ASTM E330" },
          { parameter: "Thermal Breaks", specification: "Polyamide 6.6 with 25% glass fiber thermal barrier strips", testStandard: "DIN 1725" },
        ],
      },
      {
        category: "Water & Environmental Testing Standards",
        items: [
          { parameter: "Dynamic Water Infiltration", specification: "Passes 600 Pa test pressure with airplane propeller simulated wind-driven rain", testStandard: "AAMA 501.1" },
          { parameter: "Static Air Infiltration", specification: "Air leakage < 0.06 cfm/ft² at 6.24 psf", testStandard: "ASTM E283" },
          { parameter: "Inter-Storey Seismic Drift", specification: "Engineered to withstand ±25mm relative horizontal floor displacements", testStandard: "AAMA 501.4" },
        ],
      },
    ],
    variants: [
      {
        name: "Unitized Curtain Wall System",
        category: "High-Rise Commercial Facades",
        description: "Floor-to-floor prefabricated cassettes manufactured entirely off-site and hoisted into position with tower cranes for lightning-fast high-rise installation.",
        features: ["Interlocking male-female mullion split joints", "Integrated silicone pressure-equalized rainscreen gasket", "Simultaneous interior drywall finishing while facade proceeds", "Zero exterior scaffolding required for installation"],
        specs: [
          { label: "Unit Size", value: "Up to 2.4m wide x 4.2m high" },
          { label: "Installation Speed", value: "Up to 1 floor every 3 days" },
          { label: "Water Tightness", value: "AAMA 501.1 certified" },
        ],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Semi-Unitized & Stick Glazing System",
        category: "Mid-Rise & Podium Architecture",
        description: "Vertical continuous mullions and horizontal transoms anchored to floor slabs with concealed four-sided silicone glazed vision panels.",
        features: ["Flexible design for non-standard opening geometry", "Concealed structural silicone adhesive joints", "Option for exterior architectural accent feature caps", "High performance multi-chamber thermal breaks"],
        specs: [
          { label: "Application", value: "Podiums, hotels, mid-rise" },
          { label: "Glass Support", value: "Concealed toggle clips" },
          { label: "Deflection Limit", value: "L/250 or 20mm max" },
        ],
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Spider & Point-Fixed Cable Glass Walls",
        category: "Monumental Atriums & Entrances",
        description: "Minimalist stainless steel articulated spider fittings and tension cables hold frameless glass panels in place for total transparency.",
        features: ["Cast stainless steel 316 4-way and 2-way spider arms", "Articulated ball-joint countersunk routel bolts", "Glass fin or stainless steel tension truss support", "Maximum daylight and unbroken outdoor vistas"],
        specs: [
          { label: "Fitting Grade", value: "Cast SS316 Marine Grade" },
          { label: "Glass Type", value: "12mm + 12mm SGP Laminated" },
          { label: "Free Height", value: "Up to 25+ meters clear" },
        ],
        image: "https://images.unsplash.com/photo-1523477593243-78bbf626fd3b?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Acoustic Glass Skylights & Canopies",
        category: "Overhead Architectural Glazing",
        description: "Heavy impact laminated safety glass engineered for overhead walkable skylights, pyramid atriums, and glass canopy portals.",
        features: ["Engineered for human impact and maintenance loads", "SGP ionoplast interlayer prevents panel sag if broken", "Integrated condensation weep channels inside rafters", "Ceramic frit dot matrix pattern for solar glare reduction"],
        specs: [
          { label: "Live Load", value: "Engineered to 2.5 kN/m²" },
          { label: "Interlayer", value: "Kuraray SentryGlas (SGP)" },
          { label: "Slope", value: "Min 5 degrees for drainage" },
        ],
        image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=900&q=80",
      },
    ],
    applications: [
      {
        title: "Grade-A IT & Financial Tech Parks",
        sector: "Commercial Real Estate",
        description: "Expansive thermal-efficient curtain walls providing panoramic views with minimal energy costs.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Five-Star Hotels & Luxury Resorts",
        sector: "Hospitality Architecture",
        description: "Whisper-quiet acoustic double-glazed envelopes that isolate guests from city noise and humid coastal air.",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Monumental Public Atriums & Museums",
        sector: "Cultural & Civic Centers",
        description: "Point-fixed spider glass structures that flood vast public spaces with natural daylight.",
        image: "https://images.unsplash.com/photo-1523477593243-78bbf626fd3b?auto=format&fit=crop&w=800&q=80",
      },
    ],
    processSteps: [
      { step: "01", title: "Facade Engineering & Wind Tunnel Analysis", detail: "Finite element analysis (FEA) and dynamic wind tunnel simulation for exact glass thickness sizing." },
      { step: "02", title: "Factory Siliconing Cleanroom", detail: "Applying structural silicone in temperature- and humidity-controlled cleanrooms with hourly peel tests." },
      { step: "03", title: "Mockup Performance Testing (PMU)", detail: "Full-scale laboratory mockup testing for air permeability, static/dynamic water, and seismic drift." },
      { step: "04", title: "Precision Rigging & Crane Hoisting", detail: "Unitized panels lifted and anchored to 3D adjustable cast-in embeds with millimeter precision." },
      { step: "05", title: "Gasket Sealing & Hose Testing", detail: "Interlocking gasket check and AAMA field water testing to confirm 100% watertight installation." },
    ],
    faqs: [
      { question: "What is the difference between Unitized and Stick curtain walling?", answer: "Unitized systems are 100% fabricated, assembled, and glazed in our factory, then lifted into place as complete floor-height panels without exterior scaffolding. Stick systems are assembled piece-by-piece on-site, which requires more field labor but offers flexibility for complex ground-floor geometries." },
      { question: "How does Low-E glass save building cooling costs?", answer: "Low-E (Low Emissivity) coatings are microscopically thin metallic layers that reflect long-wave infrared heat (solar heat) away from the glass while transmitting visible light. This lowers the Solar Heat Gain Coefficient (SHGC) to under 0.28, reducing air-conditioning chiller requirements by up to 35%." },
      { question: "Can your glazing withstand hurricane-force winds?", answer: "Yes. Our systems are engineered and tested to wind pressures exceeding 3.5 kPa (over 220 km/h wind gusts) with SentryGlas (SGP) laminated safety units to prevent penetration even under impact." },
    ],
  },
];
