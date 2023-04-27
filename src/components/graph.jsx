import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function GraphTab({ data }) {
  return (
    <ResponsiveContainer height={240}>
      <LineChart data={data} fontSize={14} fontWeight={500}>
        <Line strokeWidth={4} stroke="#3F3F46" dataKey="count" />
        <Tooltip />
        <XAxis
          height={48}
          label={{
            value: "Time",
            position: "insideBottom",
            textAnchor: "middle",
          }}
          dataKey="time"
        />
        <YAxis
          width={48}
          label={{
            value: "# of people",
            angle: -90,
            position: "insideLeft",
            textAnchor: "middle",
          }}
          dataKey="count"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default GraphTab;