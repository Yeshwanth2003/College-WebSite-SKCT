import { lazy, Suspense, useEffect } from "react";
import Loading from "./Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Img_Err_Solver() {
  let allImages = [...document.images];
  allImages.forEach((elem) => {
    elem.removeEventListener("error", () => {});
    elem.addEventListener("error", (event) => {
      event.target.style.display = "none";
    });
  });
}

export default function WholeApp() {
  useEffect(() => {
    Img_Err_Solver();
  });

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
          <Route
            path="/researchPolicy"
            element={(() => {
              let Component = lazy(() => import("./PDFViewer"));
              return (
                <>
                  <Suspense fallback={<Loading />}>
                    <Component link={"ResearchPolicySKCT.pdf"} />
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
