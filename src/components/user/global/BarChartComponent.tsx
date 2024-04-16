import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "00:00",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "01:00",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "02:00",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "03:00",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "04:00",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "05:00",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "06:00",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "07:00",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "08:00",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "09:00",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "10:00",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "11:00",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "12:00",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "13:00",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "14:00",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "15:00",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "16:00",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "17:00",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "18:00",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "19:00",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "20:00",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "21:00",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "22:00",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "23:00",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

export default function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ right: 0, left: -16 }}>
        <XAxis
          // interval={0}
          dataKey="name"
          strokeWidth={0}
          fontSize={12}
          tick={{ fill: "hsl(var(--muted-foreground))" }}
        />
        <YAxis
          strokeWidth={0}
          fontSize={12}
          tick={{ fill: "hsl(var(--muted-foreground))" }}
        />
        <Bar radius={[3, 3, 0, 0]} dataKey="pv" fill="hsl(var(--primary))" />
      </BarChart>
    </ResponsiveContainer>
  );
}
