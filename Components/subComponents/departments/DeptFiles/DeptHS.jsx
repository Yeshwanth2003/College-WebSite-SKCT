import DeptDisAlumni from "./DeptDisAlumni";

export default function DeptHS({currentDepartment}){
     return(
          <>
           <DeptDisAlumni currentDepartment={currentDepartment} p2="College" p1={`https://data.skct.edu.in/${currentDepartment}/hs/`}/>
          </>
     )
}