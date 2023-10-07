import {DailyTable} from "./DailyNews"

export default function AllEvents(){
     return(
          <>
           <DailyTable title={"EVENTS @ SKCT"} link={"https://data.skct.edu.in/allevents/"} p1={"Event Name"} p2={"Date"} inpage={true}/>
          </>
     )
}