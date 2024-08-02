import React from "react";
import "./HomePage.css";

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

  // const VerticalLinesWithHorizontal = () => {
  //   const lineHeights = [70, 50, 120, 160, 200];

  //   // Calculate the normalized heights as percentages
  //   const maxHeight = Math.max(...lineHeights);
  //   const normalizedHeights = lineHeights.map(
  //     (height) => (height / maxHeight) * 100
  //   );

  //   // Calculate the coordinates for the SVG path (connecting bottoms of lines)
  //   const pathData =
  //     normalizedHeights
  //       .map((height, index) => {
  //         const x = index * 50 + 10; // X-coordinate position
  //         const y = 100 - height; // Inverted Y-coordinate for SVG (0 at top)
  //         return `${index === 0 ? "M" : "L"}${x},${y}`;
  //       })
  //       .join(" ") + " L100,100"; // Ensure the path ends at the bottom-right corner

  //   return (
  //     <div className="graph-container">
  //       <svg width="100%" height="200">
  //         <path d={pathData} stroke="blue" strokeWidth="2" fill="none" />
  //         {lineHeights.map((height, index) => (
  //           <g key={index}>
  //             <line
  //               x1={index * 50 + 10}
  //               y1={200 - height}
  //               x2={index * 50 + 10}
  //               y2="200"
  //               stroke="black"
  //               strokeWidth="2"
  //             />
  //           </g>
  //         ))}
  //       </svg>
  //     </div>
  //   );
  // };

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

      {/* <VerticalLinesWithHorizontal /> */}
    </>
  );
};

export default HomePage;
