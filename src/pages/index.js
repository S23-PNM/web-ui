import LocationTab from "../components/location-tab";
import StatusTab from "../components/status-tab";

export default function Home() {

  return (
    <main>
      <h1 className="text-6xl leading-tight font-bold">Dashboard</h1>
      <button className="text-sm font-bold underline mb-4 rounded bg-blue-500 text-white py-2 px-4">Spartan Food Pantry</button>
      <button className="text-sm font-bold underline mb-4 rounded bg-blue-500 text-white py-2 px-4 rounded-none">The Commons</button>
      <div className="mt-4">
        <StatusTab title="testing" />
      </div>
    </main>
  )
}