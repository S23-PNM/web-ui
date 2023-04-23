import LocationTab from "../components/location-tab";
import StatusTab from "../components/status-tab";

export default function Home() {

  return (
    <main>
      <h1 className="text-6xl leading-tight font-bold">Dashboard</h1>
      <button className="text-3xl font-bold mb-4 rounded-full bg-blue-500 text-white py-3 px-6">Spartan Food Pantry</button>
      <button className="text-3xl font-bold mb-4 rounded-full bg-blue-500 text-white py-3 px-6">The Commons</button>
      <div className="mt-4">
        <StatusTab title="testing" />
      </div>
    </main>
  )
}
