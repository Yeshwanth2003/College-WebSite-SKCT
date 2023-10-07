import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./style/formindex.css";
import Loading from "../../Loading";

export default function FormIndex() {
  let formIndexNavi = useNavigate();
  function goBack() {
    formIndexNavi("/exam/forms");
  }
  return (
    <>
      <div className="formindex-wrapper">
        <div className="formin-container">
          <div className="formin-header">
            <button
              className="formin-back"
              onClick={() => {
                goBack();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25"
                viewBox="0 -960 960 960"
                width="25"
              >
                <path d="M480-160 160-480l320-320 42 42-248 248h526v60H274l248 248-42 42Z" />
              </svg>
              Back
            </button>
            <h2 className="formin-h2">FORMS</h2>
          </div>
          <div className="formin-body">
            <FormIndexRouter />
          </div>
        </div>
      </div>
    </>
  );
}

function FormIndexRouter() {
  return (
    <>
      <Routes>
        <Route
          path="/duplicateInstruct"
          element={(() => {
            let Component = lazy(() => import("./FormDuplicate"));
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
          path="/namechange"
          element={(() => {
            let Component = lazy(() => import("./FormNameChange"));
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
          path="/transcripts"
          element={(() => {
            let Component = lazy(() => import("./FormTrans"));
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
          path="/withdraw"
          element={(() => {
            let Component = lazy(() => import("./FormWithdraw"));
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
          path="/tempBreak"
          element={(() => {
            let Component = lazy(() => import("./FormTempB"));
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
          path="/condonationfee"
          element={(() => {
            let Component = lazy(() => import("./Formcondonationfee"));
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <Component />
                </Suspense>
              </>
            );
          })()}
        />
        <Route path="*" element={<DefaultRedirict />} />
      </Routes>
    </>
  );
}

function DefaultRedirict() {
  let formIndexRouterNavi = useNavigate();
  useEffect(() => {
    formIndexRouterNavi("/exam/forms");
  });
  return <></>;
}

export function FDPts({ point }) {
  return (
    <>
      <li className="fdpts-li">{point}</li>
    </>
  );
}

export function FILinks({ links=[] }) {
  return (
    <>
      <div className="fi-link-wrapper">
        <ul className="fi-link-ul">
          {
            links.map((elem)=>{
              return(
                <FIlinksLink elem={elem}/>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}

function FIlinksLink({ elem }) {
  return (
    <>
      <li className="fi-link-li">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30"
          viewBox="0 -960 960 960"
          width="30"
          fill="royalblue"
        >
          <path d="M251-160q-88 0-149.5-61.5T40-371q0-79 50.5-137.5T217-579q15-84 82-148.5T451-792q24 0 42 13.5t18 36.5v294l83-83 43 43-156 156-156-156 43-43 83 83v-289q-86 11-135 75.5T267-522h-19q-61 0-104.5 43T100-371q0 65 45 108t106 43h500q45 0 77-32t32-77q0-45-32-77t-77-32h-63v-84q0-68-33-117.5T570-718v-65q81 29 129.5 101T748-522v24q72-2 122 46t50 123q0 69-50 119t-119 50H251Zm229-347Z" />
        </svg>
        <h4 className="fi-link-h4">
          <a href={elem.link} className="fi-li-a">
            {elem.name}
          </a>
        </h4>
      </li>
    </>
  );
}
