import React from "react";
import "./HomePage.css";
import LineChart from "./LineChart";

interface dataProps {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface categoryProps {
  icon: string;
  title: string;
  values: number;
}

interface HomePageProps {
  categories: categoryProps[];
  progress: number;
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const { categories, progress } = props;

  const data: dataProps[] = [
    {
      name: "",
      uv: 0,
      pv: 0,
      amt: 0,
    },
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
    {
      name: "Aug",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Sep",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Oct",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Nov",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Dec",
      uv: 2390,
      pv: 3800,
      amt: 2500,
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

        <div className="homepage-chart-div1">
          <div className="homepage-chart1">
            <LineChart data={data} />
          </div>
          <div className="homepage-progress-container">
            <div
              className="homepage-progress-bar1"
              style={{
                background: ` radial-gradient(closest-side, white 90%, transparent 91% 100%), conic-gradient(#739EF1 ${progress}%, #ebebeb 0)`,
              }}
            ></div>
            <div
              className="homepage-progress-bar2"
              style={{
                background: ` radial-gradient(closest-side, white 90%, transparent 91% 100%), conic-gradient(#FF7374 40%, #ebebeb 0)`,
              }}
            ></div>
            <div
              className="homepage-progress-bar3"
              style={{
                background: ` radial-gradient(closest-side, white 90%, transparent 91% 100%), conic-gradient(#FDB85D 68%, #ebebeb 0)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
