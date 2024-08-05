import React from "react";
import "./HomePage.css";
import { AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts";

interface categoryProps {
  icon: string;
  title: string;
  values: number;
}

interface HomePageProps {
  categories: categoryProps[];
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { categories } = props;

  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="homepage">
        <div className="homepage-cards">
          {categories.map((category: categoryProps, index: number) => {
            return (
              <div key={index} className="homepage-card">
                <img src={category.icon} />
                <div>
                  <p className="homepage-cardTitle">{category.title}</p>
                  <p className="homepage-cardValue">{category.values}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AreaChart width={700} height={400} data={data}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </>
  );
};

export default HomePage;
