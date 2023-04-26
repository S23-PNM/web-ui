import TimeTab from './time-tab';
import GraphTab from './graph';

function OccupancyTab(props) {
  const data = [0.2, 0.9, 0.4, 0.7, 0.6, 0.4, 0.8, 0.2, 1.0];

  return (
    <div
      className="inline-block w-full text-2xl bg-white-500 bg-opacity-75 text-black font-bold border-gray-200 border shadow-xl rounded-lg bg-gray-50"
      style={{ padding: '10px' }}
      type="button"
    >
      {props.title}

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

    </div>

  );
}

export default OccupancyTab;
