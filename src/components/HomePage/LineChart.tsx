import React from "react";
import { AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts";

interface dataProps {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface LineChartProps {
  data: dataProps[];
}

const LineChart: React.FC<LineChartProps> = (props) => {
  const { data } = props;

  return (
    <>
      <AreaChart width={700} height={400} data={data}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5a8dee" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#5a8dee" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#5a8dee"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </>
  );
};

export default LineChart;
