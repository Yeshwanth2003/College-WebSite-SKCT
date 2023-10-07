import { lazy, Suspense} from 'react'
import Loading from '../../../Loading'

export default function DeptAccCalander({currentDepartment}) {
     let Component = lazy(()=>import("../../AcaCalander"))

     return(
          <>
           <Suspense fallback={<Loading />}>
               <Component calanderLink={`https://data.skct.edu.in/${currentDepartment}/dcal/`}/>
           </Suspense>
          </>
     )
}