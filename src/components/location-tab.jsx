import clsx from "clsx";

function LocationTab({ title, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "inline-block text-sm font-bold mb-4 mr-4 mt-6 rounded-full border border-blue-700 text-blue-700 py-2 px-4 transition duration-200",
        active
          ? "bg-blue-700 text-white"
          : "bg-white text-blue-700 hover:opacity-80"
      )}
      type="button"
    >
      {title}
    </button>
  );
}

export default LocationTab;