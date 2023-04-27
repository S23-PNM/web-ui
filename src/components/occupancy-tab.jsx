import { useEffect, useMemo, useState } from "react";
import TimeTab from "./time-tab";
import GraphTab from "./graph";

function OccupancyTab({ title, location }) {
  const [type, setType] = useState("enter");
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`/api/occupancy`)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  const dataToRender = useMemo(() => {
    if (!data) return null;
    const locationData = data.find((d) => d.location === location);
    return locationData.times
      .sort((a, b) => a.time - b.time)
      .map(({ time, ...d }) => ({
        time: `${new Date(
          locationData.now + time * 60 * 60 * 1000
        ).getHours()}:00`,
        ...d,
      }));
  }, [data, location]);

  return (
    <div className="w-full max-w-3xl p-4 inline-block bg-white-500 bg-opacity-75 text-gray-700 font-bold border-gray-200 border rounded-lg bg-gray-50">
      <p>{title}</p>
      <div className="my-4 space-x-2">
        <TimeTab
          active={type === "enter"}
          onClick={() => setType("enter")}
          title="Enter"
        />
        <TimeTab
          active={type === "exit"}
          onClick={() => setType("exit")}
          title="Exit"
        />
      </div>
      <div className="h-60">
        {data ? (
          <GraphTab data={dataToRender} type={type} />
        ) : (
          <p className="text-4xl">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default OccupancyTab;
