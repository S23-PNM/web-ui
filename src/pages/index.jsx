import { useEffect, useMemo, useState } from "react";
import LocationTab from "../components/location-tab";
import StatusTab from "../components/status-tab";
import OccupancyTab from "../components/occupancy-tab";

export default function Home() {
  const [location, setLocation] = useState("FOOD_PANTRY");
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/status")
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  const status = useMemo(() => {
    if (data) return data.find((d) => d.location === location);
    return { level: "Loading...", count: 0 };
  }, [data, location]);

  if (!status) return null;

  return (
    <main className="max-w-3xl">
      <h1 className="text-6xl leading-tight mb font-bold">Dashboard</h1>
      <LocationTab
        title="Spartan Food Pantry"
        active={location === "FOOD_PANTRY"}
        onClick={() => setLocation("FOOD_PANTRY")}
      />
      <LocationTab
        title="The Commons"
        active={location === "DINING_HALL"}
        onClick={() => setLocation("DINING_HALL")}
      />
      <div className="mt-4 w-full flex justify-stretch space-x-2">
        <StatusTab title="Status" value={status.level} status={status.level} />
        <StatusTab title="Current Occupancy" value={`${status.count} People`} />
      </div>
      <div className="mt-4">
        <OccupancyTab title="Recent Occupancy" location={location} />
      </div>
    </main>
  );
}
