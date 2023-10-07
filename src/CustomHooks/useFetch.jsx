import { useEffect } from "react";

export default function useFetch(U_R_L, CALL_BACK) {
  useEffect(() => {
    fetch(U_R_L)
      .then(
        (res) => res.json(),
        (err) => ({ err, data: null })
      )
      .then(
        (dats) => {
          CALL_BACK({ err: null, data: dats });
        },
        (ERROR) => {
          CALL_BACK({ err: ERROR ? ERROR : "something occured", data: null });
        }
      );
  }, [U_R_L, CALL_BACK]);
}
