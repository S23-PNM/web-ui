import LocationTab from "../components/location-tab";
import StatusTab from "../components/status-tab";

export default function Home() {
  
  return (
    <main>
      <h1 className="text-6xl leading-tight font-bold">Dashboard</h1>
      <LocationTab title="Spartan Food Pantry" />
      <LocationTab title="The Commons" />
      <div className="mt-4">
        <StatusTab title="testing" />
      </div>
      
    </main>
  )
}
