import { lazy, Suspense, useEffect } from "react";
import Loading from "./Loading";

export default function WholeApp() {
  return(
     <>
     <WholeAppRouter />
     </>
  )
}

function WholeAppRouter() {
  if (window.location.pathname.startsWith("/departments/", 0)) {
    let Component = lazy(() =>
      import("./subComponents/departments/DepartmentMain")
    );
    return (
      <>
        <Suspense fallback={<Loading />}>
          <Component />
        </Suspense>
      </>
    );
  }
  else if(window.location.pathname==="/feepayment"){
    let Component = lazy(() =>
      import("./OtherThanHomeOrSubComponents/OnlineFees")
    );
    return (
      <>
        <Suspense fallback={<Loading />}>
          <Component />
        </Suspense>
      </>
    );
  }
  else if(window.location.pathname==="/IQAC"){
    let Component = lazy(() =>
      import("./subComponents/UpperHead/IQAC")
    );
    return (
      <>
        <Suspense fallback={<Loading />}>
          <Component />
        </Suspense>
      </>
    );
  }
  else {
     let Component = lazy(() =>
      import("./Home")
    );
    return (
      <>
        <Suspense fallback={<Loading />}>
          <Component />
        </Suspense>
      </>
    );
  }
}
