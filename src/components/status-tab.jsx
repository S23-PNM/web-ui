import clsx from "clsx";

function StatusTab({ title, value, status = "Default" }) {
  // eslint-disable-next-line no-param-reassign
  status = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <div
      className={clsx(
        "w-full h-24 mr-4 p-4 border rounded-lg font-bold",
        status === "Crowded" &&
          "border-purple-200 bg-purple-50 text-purple-700",
        status === "Moderate" &&
          "border-orange-200 bg-orange-50 text-orange-700",
        status === "Empty" && "border-blue-200 bg-blue-50 text-blue-700",
        status === "Closed" && "border-red-200 bg-red-50 text-red-700",
        status === "Default" && "border-gray-200 bg-gray-50 text-gray-700"
      )}
    >
      <p className="first-letter:capitalize text-base">{title}</p>
      <p className="first-letter:capitalize text-2xl">{value}</p>
    </div>
  );
}

export default StatusTab;