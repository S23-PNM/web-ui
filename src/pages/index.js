import LocationTab from "../components/location-tab";
import StatusTab from "../components/status-tab";
import OccupancyTab from "../components/occupancy-tab";
import TimeTab from "../components/time-tab";
import GraphTab from "../components/graph";

export default function Home() {

  

  return (
    <main>
      <h1 className="text-6xl leading-tight mb font-bold">Dashboard</h1>
      <LocationTab title="Spartan Food Pantry" />
      <LocationTab title="The Commons" />
      <div className="mt-4">
        <StatusTab title="Status" value="Crowded" />
        <StatusTab title="Current Occupancy" value="5 People" />
        <StatusTab title="Minimum Occupancy" value="5 People" />
      </div>
      <div className="mt-4">
      <OccupancyTab title="Recent Occupancy" /> 
      </div>
      

    </main>
  )
}
