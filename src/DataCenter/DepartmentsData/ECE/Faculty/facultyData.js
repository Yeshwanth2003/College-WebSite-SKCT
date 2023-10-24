const facultyData = [
  {
    area: "Communication Systems",
    id: "14TECE12",
    file: "/media/santhakumar16.pdf",
    name: "Mr.G.Santhakumar",
    pos: "Assistant Professor",
    image: "/media/image/G.SANTHAKUMAR_M.E..jpg",
    order: "20",
    email: "g.santhakumar@skct.edu.in",
  },
  {
    area: "Wireless Communication",
    id: "13TECE05",
    file: "/media/thenmozhi16.pdf",
    name: "Ms.S.Thenmozhi",
    pos: "Assistant Professor",
    image: "/media/image/Thenmozli.jpg",
    order: "18",
    email: "s.thenmozhi@skct.edu.in",
  },
  {
    area: "Signal & Image Processing",
    id: "15TECE09",
    file: "/media/Srinivasan.pdf",
    name: "Dr.K.Srinivasan",
    pos: "Associate Professor",
    image: "/media/image/Srini.jpg",
    order: "7",
    email: "k.srinivasan@skct.edu.in",
  },
  {
    area: "Microelectronics & VLSI",
    id: "16TECE10",
    file: "/media/navin_15.pdf",
    name: "Mr.M.Navin Kumar",
    pos: "Assistant Professor",
    image: "/media/image/M.NAVIN_KUMAR_M.E..jpg",
    order: "26",
    email: "navinkumar.m@skct.edu.in",
  },
  {
    area: "Wireless Communication, Antenna Design",
    id: "19TECE07",
    file: "/media/Sumathi.pdf",
    name: "Dr.K.Sumathi",
    pos: "Professor",
    image: "/media/image/SumathiK.jpg",
    order: "4",
    email: "k.sumathi@skct.edu.in",
  },
  {
    area: "VLSI Design",
    id: "11TECE01",
    file: "/media/yamini_Shnamugam12.pdf",
    name: "Ms.Yamini Shanmugam",
    pos: "Associate Professor",
    image: "/media/image/yaminisanmugam.jpg",
    order: "16",
    email: "yaminishanmugam@skct.edu.in",
  },
  {
    area: "Wireless Communication",
    id: "16TECE12",
    file: "/media/Malathy.pdf",
    name: "Dr.S.Malathy",
    pos: "Professor",
    image: "/media/image/DrMalathy.jpg",
    order: "2",
    email: "malathy.s@skct.edu.in",
  },
  {
    area: "Networks",
    id: "07TECE03",
    file: "/media/Anitha9.pdf",
    name: "Dr.G.Anitha",
    pos: "Associate Professor",
    image: "/media/image/G.ANITHA_M.E..jpg",
    order: "10",
    email: "g.anitha@skct.edu.in",
  },
  {
    area: "Networks",
    id: "15TECE02",
    file: "/media/jaipriya20.pdf",
    name: "Ms.S. Jaipriya",
    pos: "Assistant Professor",
    image: "/media/image/S._JAIPRIYA_M.E.jpg",
    order: "22",
    email: "s.jaipriya@skct.edu.in",
  },
  {
    area: "Networks",
    id: "08TECE02",
    file: "/media/jayarajan.pdf",
    name: "Dr.P.Jayarajan",
    pos: "Associate Professor",
    image: "/media/image/P.JAYARAJAN_M.E..jpg",
    order: "9",
    email: "p.jayarajan@skct.edu.in",
  },
  {
    area: "Microelectronics & VLSI",
    id: "11TECE07",
    file: "/media/jaishree13.pdf",
    name: "Ms.M.Jaishree",
    pos: "Assistant Professor",
    image: "/media/image/M._JAISHREE_M.E..jpg",
    order: "17",
    email: "m.jaishree@skct.edu.in",
  },
  {
    area: "VLSI & Image Processing",
    id: "02TECE01",
    file: "/media/Senoj.pdf",
    name: "Dr.Senoj joseph",
    pos: "Professor",
    image: "/media/image/Dr.SENOJ_JOSEPH.jpg",
    order: "5",
    email: "senojjoseph@skct.edu.in",
  },
  {
    area: "Networking",
    id: "19TECE06",
    file: "/media/renjitha_27.pdf",
    name: "Ms.R.Renjitha",
    pos: "Assistant Professor",
    image: "/media/image/RENJITHA.jpg",
    order: "31",
    email: "renjitha.r@skct.edu.in",
  },
  {
    area: "VLSI Design, Signal Processing",
    id: "17TECE02",
    file: "/media/thiru23.pdf",
    name: "Mr.R.R.Thirrunavukkarasu",
    pos: "Assistant Professor",
    image: "/media/image/THIRRUNAVUKKARASU.jpg",
    order: "28",
    email: "thirrunavukkarasu.r.r@skct.edu.in",
  },
  {
    area: "Digital image Processing,Communication Systems",
    id: "18TECE01",
    file: "/media/sujin.pdf",
    name: "Mr.J.S.Sujin",
    pos: "Assistant Professor",
    image: "/media/image/Sujin.jpg",
    order: "29",
    email: "sujin.js@skct.edu.in",
  },
  {
    area: "Communication Systems",
    id: "16TECE06",
    file: "/media/Priyanka.pdf",
    name: "Ms.B.Priyanka",
    pos: "Assistant Professor",
    image: "/media/image/B.PRIYANKA_M.E..jpg",
    order: "25",
    email: "priyanka.b@skct.edu.in",
  },
  {
    area: "Optical Communication",
    id: "19TECE03",
    file: "/media/Dhivya_Priya.pdf",
    name: "Ms.E.L.DhivyaPriya",
    pos: "Assistant Professor",
    image: "/media/image/dhivyapriya_New.png",
    order: "32",
    email: "dhivyapriya.e.l@skct.edu.in",
  },
  {
    area: "VLSI Design",
    id: "17TECE01",
    file: "/media/banu24.pdf",
    name: "Dr.B.Banuselvasaraswathy",
    pos: "Assistant Professor",
    image: "/media/image/Banu.jpg",
    order: "15",
    email: "banuselvasaraswathy.b@skct.edu.in",
  },
  {
    area: "VLSI Design",
    id: "19TECE02",
    file: "/media/viji.pdf",
    name: "Ms.N.vijayalakshmi",
    pos: "Assistant Professor",
    image: "/media/image/vijayalakshmi.png",
    order: "30",
    email: "vijayalakshmi.n@skct.edu.in",
  },
  {
    area: "Signal & Image Processing",
    id: "20TECE08",
    file: "/media/faculty_profile_ANJU_ASOKAN.pdf",
    name: "Dr. Anju Asokan",
    pos: "Assistant Professor",
    image: "/media/image/Anju_Asokan.jpg",
    order: "12",
    email: "anjuasokan@skct.edu.in",
  },
  {
    area: "VLSI Design",
    id: "20TECE02",
    file: "/media/THENMOZHI_Profile.pdf",
    name: "Ms B Thenmozhi",
    pos: "Assistant Professor",
    image: "/media/image/THENMOZHI.jpg",
    order: "34",
    email: "b.thenmozhi@skct.edu.in",
  },
  {
    area: "Embedded Systems",
    id: "16TECE03",
    file: "/media/Aswini_Priyadharssini.pdf",
    name: "Ms.A.M.Aswini Priyadharssini",
    pos: "Assistant Professor",
    image: "/media/image/A.M.ASWINI_PRIYADHARSSINI_M.E..jpg",
    order: "24",
    email: "aswinipriyadharssini.a.m@skct.edu.in",
  },
  {
    area: "Embedded System",
    id: "20TECE05",
    file: "/media/Jones_FACULTY_FORMAT.pdf",
    name: "Mr K Jones",
    pos: "Assistant Professor",
    image: "/media/image/Jones_Photo.jpeg",
    order: "35",
    email: "k.Jones@skct.edu.in",
  },
  {
    area: "Wireless Communication",
    id: "20TECE03",
    file: "/media/Staff_Profile__Ellamml.pdf",
    name: "Dr C Ellammal",
    pos: "Associate Professor",
    image: "/media/image/Ellammal_photo.jpg",
    order: "6",
    email: "ellammal.c@skct.edu.in",
  },
  {
    area: "VLSI Design",
    id: "20TECE06",
    file: "/media/Ram_Manoger_Lokia.pdf",
    name: "Mr C H Ram Manoger Lokiya",
    pos: "Assistant Professor",
    image: "/media/image/Ram_Manoger_lokia_Photo.jpeg",
    order: "36",
    email: "Rammanogerlokiya@skct.edu.in",
  },
  {
    area: "Applied Electronics",
    id: "14TECE19",
    file: "/media/Lavanya.pdf",
    name: "Ms D Nageswari",
    pos: "Assistant Professor",
    image: "/media/image/SARANYA_PHOTO.jpg",
    order: "21",
    email: "d.nageswari@skct.edu.in",
  },
  {
    area: "Embedded Systems,\r\nInternet of Things,\r\nLabVIEW",
    id: "15TECE08",
    file: "/media/Ganesh_faculty_profile.pdf",
    name: "Mr.S.Ganesh Prabhu",
    pos: "Assistant Professor",
    image: "/media/image/Ganesh_New.jpeg",
    order: "23",
    email: "s.ganeshprabhu@skct.edu.in",
  },
  {
    area: "Analog VLSI",
    id: "20TECE07",
    file: "/media/faculty_profileDSP.pdf",
    name: "Dr.S.Preethi",
    pos: "Assistant Professor",
    image: "/media/image/preethi_Image.jpg",
    order: "13",
    email: "preethi.s@skct.edu.in",
  },
  {
    area: "VLSI design automation",
    id: "21TECE01",
    file: "/media/FACULTY_THILLAI_RANI.pdf",
    name: "Dr M Thillai Rani",
    pos: "Assistant Professor",
    image: "/media/image/THILLAI.jpg",
    order: "14",
    email: "thillairani.m@skct.edu.in",
  },
  {
    area: "Microelectronics & VLSI",
    id: "16TECE11",
    file: "/media/N.AGNES_SHINY_RACHEL_M.E._w7YsdPn.jpg",
    name: "Ms.N.Agnes shiny rachel",
    pos: "Assistant Professor",
    image: "/media/image/N.AGNES_SHINY_RACHEL_M.E..jpg",
    order: "27",
    email: "agnesshinyrachel.n@skct.edu.in",
  },
  {
    area: "Communication Systems",
    id: "",
    file: "/media/DEPARTMENT_OF_ELECTRONICS_AND_COMMUNICATION_ENGINEERING_1_PP9bGnW.pdf",
    name: "Mr.P.M.Vandhiyadevan",
    pos: "Assistant Professor",
    image: "/media/image/SKAS0131_PAIaUQz.JPG",
    order: "39",
    email: "Vandhiyadevan.p.m@skct.edu.in",
  },
  {
    area: "Mathematics",
    id: "",
    file: "/media/naresh_VF_9nthgPv.pdf",
    name: "Ms S NITHYA",
    pos: "Assistant Professor",
    image: "/media/image/Maths-2-200x200_dyVx7WI.png",
    order: "24",
    email: "nithya.s@skct.edu.in",
  },
  {
    area: "VLSI",
    id: "",
    file: "/media/DEPARTMENT_OF_ELECTRONICS_AND_COMMUNICATION_ENGINEERING_1_DpTRqe3.pdf",
    name: "Ms.K.P.Nithya",
    pos: "Assistant Professor",
    image: "/media/image/SKAS0131.JPG",
    order: "19",
    email: "k.p.nithya@skct.edu.in",
  },
  {
    area: "COMMUNICATION",
    id: "22TECE04",
    file: "/media/HoD_Profile_1_E9PpXd8.pdf",
    name: "DR. SHANTHI G",
    pos: "PROFESSOR",
    image: "/media/image/ece_hod_KpDwOov.jpg",
    order: "1",
    email: "g.shanthi@skct.edu.in",
  },
  {
    area: "Mobile Ad Hoc Networks",
    id: "22TECE03",
    file: "/media/Dr_K_Muthulakshmi__01.08.2022_JzzOWkZ.pdf",
    name: "DR. MUTHULAKSHMI K",
    pos: "PROFESSOR",
    image: "/media/image/K.Muthulakshmi_J9RO22R.jpg",
    order: "3",
    email: "muthulakshmi.k@skct.edu.in",
  },
];

export default facultyData;