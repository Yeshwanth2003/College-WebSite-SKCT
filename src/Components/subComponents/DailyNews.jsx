import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mkMonth } from "../IndexPages/EventsAndMainRunner";
import "./Style/dailynews.css";

export default function DailyNews() {
  const [currentData, setCUrData] = useState(null);

  return (
    <>
      {currentData && (
        <>
          <div className="dailyNews-viewer">
            <div className="dailynews-viewer-headingdiv">
              <h2 className="dailynews-viewer-h2">
                {`SKCT Digest - ${mkMonth(
                  Number(currentData?.reverse()[0].date.split(".")[1])
                )}`}
              </h2>
            </div>
            <embed
              className="dailynews-viewer-embed"
              src={`https://data.skct.edu.in${currentData?.reverse()[0].pdf}#view=FitH&toolbar=0&scrollbar=0`}
              type="application/pdf"
            />
          </div>
        </>
      )}
      <details className="dailyNews-details-more">
        <summary>More.....</summary>
        <DailyTable setCUrData={setCUrData} />
      </details>
    </>
  );
}

// Under Use For All Event too

export function DailyTable({ title, link, p1, p2, inpage, setCUrData }) {
  let [newsData, setNewsData] = useState([]);
  let [searchNewsData, setSearchNewsData] = useState([]);

  // useFetch(
  //   link !== undefined ? link : "https://data.skct.edu.in/skd",
  //   ({ err, data }) => {
  //     setCUrData(data);
  //     setNewsData(data);
  //     setSearchNewsData(data);
  //   }
  // );

  useEffect(() => {
    fetch(link !== undefined ? link : "https://data.skct.edu.in/skd")
      .then((res) => res.json())
      .then((dats) => {
        setCUrData(dats);
        setNewsData(dats);
        setSearchNewsData(dats);
      });
  }, [link, setCUrData]);

  function FilterResults(eve) {
    let sValue = eve.target.value.trim();
    let filteredData = [];

    if (sValue.length === 0) {
      setSearchNewsData(newsData);
      return;
    }

    filteredData = newsData.reverse().filter((elem, index) => {
      return (
        (p2 !== undefined
          ? elem.name.includes(sValue)
          : elem.date.includes(sValue)) ||
        (p1 !== undefined
          ? elem.date.includes(sValue)
          : elem.digest.includes(sValue)) ||
        (index + 1).toString().includes(sValue)
      );
    });

    setSearchNewsData(filteredData);
  }

  return (
    <>
      <div className="dailyNews-wrapper">
        <div className="dailyNews-content">
          <div className="dailyNews-headerDiv">
            <div className="dailyNews-headerDiv1">
              {title !== undefined ? (
                <h2 className="dailyNews-heading">{title} </h2>
              ) : (
                <></>
              )}
            </div>
            <div className="dailyNews-headerDiv2">
              <div className="dailyNews-searchDiv">
                <div className="dailyNews-inputWrapper">
                  <input
                    type="text"
                    className="dailyNew-input"
                    placeholder="Search"
                    onChange={(event) => {
                      FilterResults(event);
                    }}
                  />
                </div>
                <div className="dailyNews-searchIconWrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                    width="100%"
                    height="100%"
                  >
                    <path d="M 52.349609 14.400391 C 42.624609 14.400391 32.9 18.1 25.5 25.5 C 10.7 40.3 10.7 64.399219 25.5 79.199219 C 32.9 86.599219 42.600391 90.300781 52.400391 90.300781 C 62.200391 90.300781 71.900781 86.599219 79.300781 79.199219 C 94.000781 64.399219 93.999219 40.3 79.199219 25.5 C 71.799219 18.1 62.074609 14.400391 52.349609 14.400391 z M 52.300781 20.300781 C 60.500781 20.300781 68.700391 23.399219 74.900391 29.699219 C 87.400391 42.199219 87.4 62.5 75 75 C 62.5 87.5 42.199219 87.5 29.699219 75 C 17.199219 62.5 17.199219 42.199219 29.699219 29.699219 C 35.899219 23.499219 44.100781 20.300781 52.300781 20.300781 z M 52.300781 26.300781 C 45.400781 26.300781 38.9 29 34 34 C 29.3 38.7 26.700391 44.800391 26.400391 51.400391 C 26.300391 53.100391 27.600781 54.4 29.300781 54.5 L 29.400391 54.5 C 31.000391 54.5 32.300391 53.199609 32.400391 51.599609 C 32.600391 46.499609 34.699219 41.799219 38.199219 38.199219 C 41.999219 34.399219 47.000781 32.300781 52.300781 32.300781 C 54.000781 32.300781 55.300781 31.000781 55.300781 29.300781 C 55.300781 27.600781 54.000781 26.300781 52.300781 26.300781 z M 35 64 A 3 3 0 0 0 32 67 A 3 3 0 0 0 35 70 A 3 3 0 0 0 38 67 A 3 3 0 0 0 35 64 z M 83.363281 80.5 C 82.600781 80.5 81.850781 80.800391 81.300781 81.400391 C 80.100781 82.600391 80.100781 84.499609 81.300781 85.599609 L 83.800781 88.099609 C 83.200781 89.299609 82.900391 90.6 82.900391 92 C 82.900391 94.4 83.8 96.700391 85.5 98.400391 L 98.300781 111 C 100.10078 112.8 102.39922 113.69922 104.69922 113.69922 C 106.99922 113.69922 109.29961 112.79961 111.09961 111.09961 C 114.59961 107.59961 114.59961 101.90039 111.09961 98.400391 L 98.300781 85.599609 C 96.600781 83.899609 94.300391 83 91.900391 83 C 90.500391 83 89.2 83.300391 88 83.900391 L 85.5 81.400391 C 84.9 80.800391 84.125781 80.5 83.363281 80.5 z M 91.900391 88.900391 C 92.700391 88.900391 93.5 89.200781 94 89.800781 L 106.69922 102.5 C 107.89922 103.7 107.89922 105.59922 106.69922 106.69922 C 105.49922 107.89922 103.6 107.89922 102.5 106.69922 L 89.800781 94.099609 C 89.200781 93.499609 88.900391 92.700391 88.900391 91.900391 C 88.900391 91.100391 89.200781 90.300781 89.800781 89.800781 C 90.400781 89.200781 91.100391 88.900391 91.900391 88.900391 z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="dailyNews-body">
            <div className="dailyNews-tableDiv">
              <table className="dailyNews-table">
                <thead className="dailyNews-tableHead">
                  <tr className="dailyNews-tableHeadRow">
                    <td
                      align="justify"
                      className="dailyNews-tableHeadData dailyNews-centerLa-vennum"
                    >
                      S.NO
                    </td>
                    <td align="justify" className="dailyNews-tableHeadData">
                      {p1 !== undefined ? p1 : "DATE"}
                    </td>
                    <td align="justify" className="dailyNews-tableHeadData">
                      {p2 !== undefined ? p2 : "DIGEST"}
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {searchNewsData.length > 0 &&
                    searchNewsData.reverse().map((elem, index) => {
                      return (
                        <>
                          <NewsRowCard
                            DATE={p2 !== undefined ? elem.name : elem.date}
                            DIGEST={p2 !== undefined ? elem.date : elem.digest}
                            NewsDataLink={
                              link !== undefined
                                ? `/allevents/${elem.pk}`
                                : `https://data.skct.edu.in${elem.pdf}`
                            }
                            SNO={index + 1}
                            key={index.toString()}
                            inpage={inpage}
                          />
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NewsRowCard({ SNO, DATE, DIGEST, NewsDataLink, inpage }) {
  return (
    <>
      <tr className="dailyNews-bodyRow">
        <td className="dailyNews-bodyRowData dailyNews-centerLa-vennum">
          {SNO}
        </td>
        <td className="dailyNews-bodyRowData">{DATE}</td>
        <td className="dailyNews-bodyRowData">
          {inpage === true ? (
            <Link to={NewsDataLink} className="dailyNews-dataLink">
              {DIGEST}
            </Link>
          ) : (
            <a
              target={"_blank"}
              href={NewsDataLink}
              className="dailyNews-dataLink"
              rel="noreferrer"
            >
              {DIGEST}
            </a>
          )}
        </td>
      </tr>
    </>
  );
}