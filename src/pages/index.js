import LocationTab from "../components/location-tab";
import StatusTab from "../components/status-tab";

export default function Home() {

  return (
    <main>
      <h1 className="text-6xl leading-tight font-bold">Dashboard</h1>
      <button className="text-sm font-bold mb-4 rounded border border-black text-black py-2 px-4 hover:bg-black hover:text-white transition-colors duration-200">Spartan Food Pantry</button>
      <button className="text-sm font-bold mb-4 rounded border border-black text-black py-2 px-4 rounded-none hover:bg-black hover:text-white transition-colors duration-200">The Commons</button>
      <div className="mt-4">
        <StatusTab title="testing" />
      </div>
    </main>
  )
}