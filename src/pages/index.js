import LocationTab from "../components/location-tab";
import StatusTab from "../components/status-tab";
import OccupancyTab from "../components/occupancy-tab";
import TimeTab from "../components/time-tab";
import GraphTab from "../components/graph";

export default function Home() {

  const data = [0.2, 0.9, 0.4, 0.7, 0.6, 0.4, 0.8, 0.2, 1.0];

  return (
    <main>
      <h1 className="text-6xl leading-tight mb-6 font-bold font-serif">Dashboard</h1>
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
      <div className="mt-4">
      <TimeTab title="1 Month" /> 
      <TimeTab title="1 Week" /> 
      <TimeTab title="1 Day" /> 
      <TimeTab title="12 Hours" /> 
      <TimeTab title="1 Hour" /> 
      </div>

      <div>
        <GraphTab data={data} width={400} height={300} color="blue" />
      </div>

    </main>
  )
}