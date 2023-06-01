import { lazy, Suspense } from "react";
import Loading from "./Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function WholeApp() {
  return (
    <>
      <WholeAppRouter />
    </>
  );
}

function WholeAppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={(() => {
              let Component = lazy(() => import("./Home"));
              return (
                <>
                  <Suspense fallback={<Loading />}>
                    <Component />
                  </Suspense>
                </>
              );
            })()}
          />
          <Route
            path="/departments/*"
            element={(() => {
              console.log("in whole");
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
            })()}
          />
          <Route
            path="/feepayment"
            element={(() => {
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
            })()}
          />
          <Route
            path="/IQAC"
            element={(() => {
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
            })()}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}