const mousData = [
  {
    date: "05.04.2017",
    industry: "Metis Structures,Coimbatore",
    activity: "Inplant training/Internship/Placement",
  },
  {
    date: "05.04.2017",
    industry: "Geometrics Space Structures Pvt. Ltd.,Coimbatore",
    activity: "Inplant training/Internship",
  },
  {
    date: "05.04.2017",
    industry: "TVS Building Solutions ,Coimbatore",
    activity: "Inplant training/Internship",
  },
  {
    date: "05.04.2017",
    industry: "Annai Shelters Pvt. Ltd.,Coimbatore",
    activity: "Inplant training/Internship",
  },
  {
    date: "05.04.2017",
    industry: "Civil Doctor,Coimbatore",
    activity: "Inplant training/Internship",
  },
  {
    date: "05.04.2017",
    industry: "Dimensions Structural Designs,Coimbatore",
    activity: "Inplant training/Internship",
  },
  {
    date: "05.04.2017",
    industry: "Jass Developers,Coimbatore",
    activity: "Inplant training/Internship/Placement",
  },
  {
    date: "05.04.2017",
    industry: "Ram Builders,Pollachi",
    activity: "Inplant training/Internship",
  },
  {
    date: "05.04.2017",
    industry: "Blutec, Coimbatore",
    activity: "Inplant training/Internship",
  },
  {
    date: "09.09.2014",
    industry: "Yokogawa India Ltd., Bangalore",
    activity: "Internships & Placements",
  },
  {
    date: "29.03.2016",
    industry: "MECH CI CADD Engineering Pvt Ltd., Chennai.",
    activity: "Internships, Training  & Academic Support",
  },
  {
    date: "25.05.2016",
    industry: "TMI Systems, Bangalore.",
    activity:
      "Internships, Training's, Academic Support and Laboratory sponsor",
  },
  {
    date: "24.07.2017",
    industry: "Caliber Embedded Technologies India Pvt Ltd., Coimbatore.",
    activity: "Internships & Academic Support",
  },
  {
    date: "15.02.2016",
    industry: "IPCS Automation, Coimbatore.",
    activity: "Internships, Training's, Laboratory sponsor & Placements",
  },
  {
    date: "13.02.2018",
    industry: "Pantech Solutions",
    activity: "Guest Lecture Programs Conducted for the students",
  },
  {
    date: "17.02.2016",
    industry: "IPCS Automation",
    activity: "Workshops & Value added courses conducted for the students",
  },
  {
    date: "29.01.2016",
    industry: "MAS SOLAR SYSTEMS PVT. LTD",
    activity: "Internships & Placement Offer given to the students",
  },
  {
    date: "03.04.2017",
    industry: "Hertz Teck Embedded Systems Coimbatore",
    activity: "Workshop & Project Assistance given to the students",
  },
  {
    date: "26.04.2017",
    industry: "SS Technovation",
    activity: "Placement Offer given to the students",
  },
  {
    date: "02.11.2017",
    industry: "Vland’s Best Hub Pvt. Ltd.",
    activity: "Sponsored PLC & SCADA kit with personal computer worth 1,10,000",
  },
  {
    date: "16.02.2018",
    industry: "ITKES-ZCCA Incubation Centre",
    activity: "ZOHO creator certified associate training was conducted",
  },
  {
    date: "09.08.2017",
    industry: "AD INTRA LOGS PVT",
    activity: "Internship & Placement",
  },
  {
    date: "09.08.2017",
    industry: "GET MARCHE VENTURES PVT",
    activity: "Market Survey, Internship, Placement & Research Publication",
  },
  {
    date: "09.08.2017",
    industry: "NOYYAL ORGANICS",
    activity: "Internship & Placement.",
  },
  {
    date: "14.09.2017",
    industry: "NSE ACADEMY LIMITED",
    activity: "To Conduct courses related financial market.",
  },
  {
    date: "04.11.2017",
    industry: "TRUNIX DATAWARE LLP INDIA",
    activity: "Students Live Projects.",
  },
  {
    date: "29.07.2016",
    industry: "EMC Academic  Alliance",
    activity:
      "Bigdata - 103 students cleared certification \r\nCloud - 89 students have cleared certification",
  },
  {
    date: "14.07.2017",
    industry: "ORACLE",
    activity:
      "1.2017 batch: Conducted course for 100 students\r\n2.2018 batch:conducted course for 93 students\r\n3.2019 batch:conducted course for 111 students",
  },
  {
    date: "18.11.2016",
    industry: "Palo Alto Networks",
    activity: "2 Faculty members completed certification",
  },
  {
    date: "18.09.2019",
    industry: "EICT-IIT Guwahati",
    activity: "FDP",
  },
  {
    date: "07.09.2017",
    industry: "Cloud Bull, Chennai.",
    activity:
      "107 Students received Training on “Enterprise Application Development on Cloud”.\r\n \r\n5 Students underwent 1 week Internship at the company premises, Chennai.",
  },
  {
    date: "14.09.2019",
    industry: "Google Developers  Group",
    activity:
      "GDG Devfest  - 10 students of CSE Department attended the event at ThoughtWorks, Coimbatore. Students gained knowledge on taking journey to technology, Voice First with Google Assistant, The journey to the center of Reality - WebXR\r\nMr.R.Manoj Iyer of III CSE B delivered a session on Developer students club Impacts and Initiatives at GDG Devfest event. \r\nIdeathon event was organized at our SKCT campus.46 Students participated and shared their Innovative Ideas",
  },
  {
    date: "20.10.2015",
    industry: "Builders Association of India",
    activity: "Inplant training/Internship",
  },
  {
    date: "19.02.2018",
    industry: "Shahid Rajaee Teacher Training University",
    activity: "Research Collaboration & Journal Publication",
  },
  {
    date: "2016-2017",
    industry: "Delving RD",
    activity: "Student Internship & Consultancy work",
  },
  {
    date: "13.07.2017",
    industry: "Vlands Best Hub, Singapore",
    activity: "Inplant training/Internship",
  },
  {
    date: "04.01.2018",
    industry: "Cafet Innova Technical Society",
    activity: "Inplant training/Internship",
  },
  {
    date: "05.04.2017",
    industry: "Guild Engineering and Turnkey Solutions Pvt Ltd, Chennai",
    activity: "Inplant training/Internship",
  },
  {
    date: "01.08.2017",
    industry: "Laetus Interior, Bangalore",
    activity: "Inplant training/Internship",
  },
  {
    date: "04.01.2018",
    industry: "Basha Research Corporation, Hyderabad",
    activity: "Inplant training/Internship",
  },
  {
    date: "06.09.2017",
    industry: "Baba Smart Homes, Coimbatore",
    activity: "Inplant training/Internship",
  },
  {
    date: "2016-2017",
    industry: "Spoken Tutorial -IIT Bombay",
    activity:
      "1.2400 students wrote examination\r\n2. Guest Lecture conducted for Faculty\r\n3. FDP conducted",
  },
  {
    date: "2017-2018",
    industry: "Besant Technologies",
    activity: "Student Training & Internship",
  },
  {
    date: "2016-2017",
    industry: "Airbots Technologies Pvt. Ltd.,",
    activity: "2 students got placement & internship",
  },
  {
    date: "26.07.2017",
    industry: "EKARUP Financial Services",
    activity: "Trained Students in Share Trading",
  },
  {
    date: "10.09.2017",
    industry: "Zinfoway Technologies Pvt Ltd.",
    activity:
      "4 students from final years (underwent 4 months internship (18.01.2018-20.04.2018) at company premises and successfully completed their internship, Recruitment Drive was conducted in the Company premises  in the year 2019.1 Student got placement",
  },
  {
    date: "2016-2017",
    industry: "Kalpatharu Software limited",
    activity: "4 students got internships",
  },
  {
    date: "10.08.2017",
    industry: "Kalpatharu Software Limited, Coimbatore",
    activity:
      "Mr.H.Karthik and Mr.Monish underwent project training and they successfully completed the ERP project on 11.10.2017, \tImplant Training offered to CSE Students at free of cost.4 students were benefitted.",
  },
  {
    date: "03.11.2017",
    industry: "Trunix Dataware LLP, Chennai.",
    activity:
      "A batch of 6 students was involved in real time project and successfully completed the project entitled “Teletrack”,  Special Guest Lecture on “Deploying Web Applications on Google Cloud” was organized for III CSE Students on 11th Jan 2018, \r\n Assisted in Curriculum Designing",
  },
  {
    date: "2016-2017",
    industry: "Durotech Solutions",
    activity: "Student Internship",
  },
  {
    date: "2016-2017",
    industry: "Kalpatharu Software Limited",
    activity: "Training & Real time Projects.",
  },
  {
    date: "2019-2020",
    industry: "UiPath",
    activity: "Academic alliance , 2 Faculties certified",
  },
  {
    date: "15.12.2018",
    industry: "Microsoft  Open  Value Subscription",
    activity:
      "Microsoft® Win SL 8.1 Sngl Academic OPEN 1License No Level Legalization Get Genuine  (300 Quantity)",
  },
  {
    date: "30.04.2018",
    industry: "Spark Minda Technical Center, Pune",
    activity: "Placement,Internship & Inplant Training",
  },
  {
    date: "09.07.2016",
    industry: "ESSCI -Centre of Excellence in VLSI & Embedded System Design",
    activity:
      "1. Involving Students in Project.\r\n2. Students can be trained for ESSCI -Certification.\r\n3. Syllabus revamped inline with industrial needs and expectation.",
  },
  {
    date: "15.12.2018",
    industry: "Microsoft  Volume Licensing Service Center",
    activity:
      "Product Downloads\r\nVolume License Product Keys (VLKs)\r\nSoftware Assurance",
  },
  {
    date: "10.04.2018",
    industry: "Bairavi Pet Bottle Industries",
    activity: "Consultancy work & student projects",
  },
  {
    date: "16.04.2018",
    industry: "Best Engineers Pumps private ltd",
    activity:
      "Internships, Academic Support, In plant training  & student projects",
  },
  {
    date: "28.03.2018",
    industry: "Green India -  NGO",
    activity: "Social Activity support",
  },
  {
    date: "04.10.2019",
    industry: "S.S Engineering works, Coimbatore.",
    activity: "Internship, Implant Training, Industrial Visit",
  },
  {
    date: "20.09.2019",
    industry: "SIEMENS (NIT Trichy)",
    activity: "Student Training, Project Support, Proposal",
  },
  {
    date: "10.04.2018",
    industry: "Best Engineering Pumps Pvt Ltd., Coimbatore.",
    activity: "Guest Lecture, Technical Training",
  },
  {
    date: "18.08.2017",
    industry: "F Maxx Systems India Pvt Ltd., Coimbatore.",
    activity: "Industrial Visit",
  },
  {
    date: "10.09.2017",
    industry: "Out Smart Marketers, Coimbatore.",
    activity: "Guest Lectures, Student Training",
  },
  {
    date: "10.09.2017",
    industry: "CTAS India, Bangalore.",
    activity: "Placement Assistance",
  },
  {
    date: "28.07.2017",
    industry: "VLAND‘S BEST Hub Pvt Ltd, Coimbatore.",
    activity: "One Credit Course",
  },
  {
    date: "14.07.2017",
    industry:
      "CIPET – Central Institute Of Plastic Engineering and Technology, Chennai.",
    activity: "Guest Lecture, Technical Training, Internship",
  },
  {
    date: "05.04.2017",
    industry: "Kondaia Engineering Company Private Limited, Coimbatore.",
    activity: "Consultancy work",
  },
  {
    date: "05.04.2017",
    industry: "Bluesky Hose Manufacturing India Pvt Ltd, Coimbatore.",
    activity: "Industrial Visit",
  },
  {
    date: "24.03.2017",
    industry: "DEV INTERNATIONAL, Coimbatore",
    activity: "Seminars, Project Support",
  },
  {
    date: "13.02.2017",
    industry: "Indo Shell Mould Ltd, Coimbatore.",
    activity: "Internship and Placement",
  },
  {
    date: "15.08.2015",
    industry: "BIS Certificate, Coimbatore.",
    activity: "Student Training, Project Support, Proposal",
  },
  {
    date: "11.03.2009",
    industry:
      "Si’Tarc-Small Industries Testing and Research Centre, Coimbatore.",
    activity: "Project Support",
  },
  {
    date: "15.11.2019",
    industry:
      "Coconut Development Board(Ministry of Agriculture & Farmers Welfare, Govt. of India)Cochin.",
    activity: "Funded Project\r\nProject & Product Development",
  },
  {
    date: "29.10.2019",
    industry: "Indian Institute of Banking & Finance",
    activity: "To provide PG Diploma courses in banking",
  },
  {
    date: "24.02.2009",
    industry:
      "‘COINDIA’ - Coimbatore Industrial Infrastructure Association, Coimbatore",
    activity: "Industry Based Training",
  },
  {
    date: "01.09.2020",
    industry: "Shanthi Gears",
    activity: "Internship, Student Training, Industrial Visit",
  },
  {
    date: "09.12.2020",
    industry: "Micro, Small & Medium Enterprises",
    activity: "Faculty and  Student Training",
  },
  {
    date: "26.03.2021",
    industry: "Tesla Minds, Chennai",
    activity:
      "The outcomes of the MoU is follows\r\n\r\n1.Consultancy Project in Antenna design\r\n2.Internship\r\n3.Industrial projects\r\n4.Training(Faculty and Students)\r\n5.Collaborative research",
  },
  {
    date: "14.04.2021",
    industry: "QUANTUM LEARNINGS Centre of Excellence",
    activity:
      "Students Project Tech Support and Certifications of Microsoft, Apple, EC Council, Autodesk, Adobe, Mississippi State University, University of Texas.",
  },
  {
    date: "29.10.2019",
    industry: "National Cyber Defence Resource Centre",
    activity:
      "2 Research proposals sent to National Cyber Research & Innovation Centre in Cyber Security domain with the Guidance of NCDRC",
  },
  {
    date: "29.08.2019",
    industry: "Red Hat Academy",
    activity:
      "1 Faculty completed The Red Hat Certified Systems Administrator (RHCSA) certification.\r\nA Guest Lecture on RedHat Linux and Global Certification was organized in February 2020.83 Students benefitted.\r\nA Webinar on Introduction to RedHat Linux Insights was organized in April 2020.",
  },
  {
    date: "29.10.2019",
    industry: "National Cyber Defence Resource Centre",
    activity:
      "2 Research proposals sent to National Cyber Research & Innovation Centre in Cyber Security domain with the Guidance of NCDRC",
  },
  {
    date: "13.07.2017",
    industry: "Amazon AWS Educate",
    activity:
      "AWS Educate is Amazon’s global initiative to provide cloud related learning resources for both students and teachers, Use 100 GB of storage, Access to job boards and Job posts in student portal.",
  },
  {
    date: "10.8.2017",
    industry: "Kalpatharu Software Limited",
    activity:
      "Mr.H.Karthik and Mr.Monish underwent project training and they successfully completed the ERP project on 11.10.2017, Implant Training offered to CSE Students at free of cost.4 students were benefitted.",
  },
  {
    date: "15.03.2018",
    industry: "VMware Software India private Limited",
    activity:
      'Certifications & Digital Badges were offered at discounted costs, Free license was given to VMware product Centre for One Year, "Data Centre Virtualization Fundamentals" course was offered to 101 students and they successfully completed the course and they received international Badges, 6 Faculty members received Version 5.5 certification, Student Project Assistance during the academic years 2018-2019,2019-20, Support for National Level Competitions, Hackathons Assistance during the academic years 2018-2019,2019-20',
  },
  {
    date: "15.07.2016",
    industry: "Oracle Academy",
    activity:
      'Free license for Oracle 11g Express Edition, Oracle Certification is given with discounts for both students and faculty, "Oracle Certification Programme" was conducted for 107 students of 3rd year and they successfully completed the course, 10 Faculty members were trained, 1 faculty attended 5 days Faculty Development Program on Oracle  Programming Using PL/SQL from 20-24th August 2018, 2 faculty members attended a Workshop on using Oracle Academy Cloud-Based Member Hub on September 23rd 2020.',
  },
  {
    date: "02.02.2017",
    industry: "Spoken Tutorial-IIT Bombay",
    activity:
      '144 students completed Course on "C Programming", 357 Students Completed course on "C++ Programming"',
  },
  {
    date: "04.05.2017",
    industry: "Airbots Technologies Private Limited",
    activity:
      "Provides placement assistance (Mock interviews, Resume Verification) for the final year students, 3 Students undergone Internship in March 2018, A Guest Lecture on Roadmap to Campus Placements in November 2019, 130 students were benefitted, A Webinar on Pathway to your first cloud Technology Job was conducted in October 2020",
  },
  {
    date: "04.05.2017",
    industry: "Code Khadi",
    activity:
      "A research proposal to ‘Device Development Programme under Technology Development Programme, DST’ on “Bio-Sensor Centric Integrated Intelligent Device for Detection of Adulterants in Food Grains” on 16.02.2018, A Mobile application Development Training program was conducted on 18.03.2019. 60 Students were benefitted, A mobile Application for Smart Women Security was developed by a team of 2 students in Jan 2021",
  },
  {
    date: "18.08.2016",
    industry: "Reliance- Jio Infocomm Ltd",
    activity:
      "Network Infrastructure in SCKT to enable the students and staffs to experience the high speed internet service with superior quality",
  },
  {
    date: "05.03.2013",
    industry: "IBM Rational SEED",
    activity:
      "IBM Rational software Architecture (RSA), IBM Rational Suite is made available for training our students.",
  },
  {
    date: "2016-2017",
    industry: "DELL EMC",
    activity: "Student Certified and Projects",
  },
  {
    date: "2019-2020",
    industry: "CISCO",
    activity: "Students gott Certified",
  },
  {
    date: "15.11.2021",
    industry: "EpitomeCircuits, Bangalore",
    activity: "Internship and Tech Support",
  },
  {
    date: "06.09.2021",
    industry: "Artiwiz Technologies",
    activity:
      "Internship opportunity for five months of our third year students",
  },
  {
    date: "08.09.2021",
    industry: "Assistanz Networks Pvt Ltd",
    activity: "Signed MoU",
  },
  {
    date: "04.02.2022",
    industry: "Lakshmi Industrial Equipments",
    activity:
      "1. To enhance skills and knowledge of the students and faculty members\r\n2. Joint training programs towards mutual knowledge sharing",
  },
  {
    date: "14.03.2022",
    industry: "HR",
    activity: "School of Management signed MoU with NHRD Coimbatore Chapter",
  },
  {
    date: "25.02.2022",
    industry: "THOUSAND BRICKS, Coimbatore",
    activity:
      "The purpose of Memorandum of Understanding (MoU) with M/s. Thousand Bricks, Coimbatore is to establish meaningful collaboration between academia and industry for addressing the global challenges and finding possible solutions by engaging experts from both the sides.",
  },
  {
    date: "14.02.2023",
    industry: "ZED Digital",
    activity:
      "An Ohio-based corporation, that provides “smart environment” solutions using Internet of Things (IoT) and software. Attended the launch and demo of the new product “ Hands Free Payment, Queue Less Entry with Phone in pocket’’",
  },
  {
    date: "17.02.2023",
    industry: "Zhagaram Engineers and Consultants",
    activity: "Internship, Placements, Consultancy works",
  },
  {
    date: "21.04.2023",
    industry: "Insta 3D Technologies, Coimbatore.",
    activity:
      "Internships and In-plant training programmes, Industry collaborative research, Webinars, seminars and workshops, Industrial projects and Placement Activities",
  },
];
export default mousData;