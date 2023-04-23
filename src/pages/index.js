import LocationTab from "../components/location-tab";
import StatusTab from "../components/status-tab";
import OccupancyTab from "../components/occupancy-tab";
import TimeTab from "../components/time-tab";

export default function Home() {

  return (
    <main>
      <h1 className="text-6xl leading-tight font-bold">Dashboard</h1>
      <LocationTab title="Spartan Food Pantry" />
      <LocationTab title="The Commons" />
      <div className="mt-4">
        <StatusTab title="testing" /> 
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
    </main>
  )
}