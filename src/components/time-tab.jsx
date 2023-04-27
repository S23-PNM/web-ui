import clsx from "clsx";

function TimeTab({ title, active, onClick }) {
  return (
    <button
      className={clsx(
        "text-base rounded-full border py-1 px-4 transition duration-200",
        active
          ? "bg-gray-700 text-white"
          : "border-gray-700 text-gray-700 hover:opacity-80"
      )}
      type="button"
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default TimeTab;
