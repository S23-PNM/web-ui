import { useEffect, useState } from "react";
import TimeTab from "./time-tab";
import GraphTab from "./graph";

function OccupancyTab({ title, location }) {
  const [data, setData] = useState();
  const [period, setPeriod] = useState("1h");

  useEffect(() => {
    fetch(`/api/occupancy?period=${period}&location=${location}`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, [location, period]);

  return (
    <div className="w-full max-w-3xl p-4 inline-block bg-white-500 bg-opacity-75 text-gray-700 font-bold border-gray-200 border rounded-lg bg-gray-50">
      <p>{title}</p>
      <div className="my-4 space-x-2">
        <TimeTab
          active={period === "1m"}
          onClick={() => setPeriod("1m")}
          title="1 Month"
        />
        <TimeTab
          active={period === "1w"}
          onClick={() => setPeriod("1w")}
          title="1 Week"
        />
        <TimeTab
          active={period === "1d"}
          onClick={() => setPeriod("1d")}
          title="1 Day"
        />
        <TimeTab
          active={period === "1h"}
          onClick={() => setPeriod("1h")}
          title="1 Hour"
        />
      </div>
      <div className="h-60">
        {data ? (
          <GraphTab data={data} color="blue" />
        ) : (
          <p className="text-4xl">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default OccupancyTab;
