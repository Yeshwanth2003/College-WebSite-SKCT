import { useEffect } from "react";

export default function useImport(P_ATH, CALL_BACK) {
  useEffect(() => {
    import(`../DataCenter/${P_ATH}`)
      .then((res) => res.default)
      .then(
        (dats) => {
          CALL_BACK({ err: null, data: dats });
        },
        (ERROR) => {
          CALL_BACK({ err: ERROR ? ERROR : "something occured", data: null });
        }
      )
      .catch((err) => {
        console.log(err);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
