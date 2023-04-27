import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function GraphTab({ data }) {
  const dataToRender = data.map((value, index) => ({
    name: index.toString(),
    numPeople: value * 100,
  }));

  return (
    <ResponsiveContainer height={240}>
      <LineChart data={dataToRender} fontSize={14} fontWeight={500}>
        <Line strokeWidth={4} stroke="#3F3F46" dataKey="numPeople" />
        <Tooltip />
        <XAxis
          height={48}
          label={{
            value: "Time",
            position: "insideBottom",
            textAnchor: "middle",
          }}
          dataKey="name"
        />
        <YAxis
          width={48}
          label={{
            value: "# of people",
            angle: -90,
            position: "insideLeft",
            textAnchor: "middle",
          }}
          dataKey="numPeople"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default GraphTab;
