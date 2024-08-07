import React from "react";
import "./CategoryPage.css";
import searchLogo from "../../assets/headerImages/search logo.svg";
import addIcon from "../../assets/addIcon.svg";

interface CategoryPageProps {
  isActive: boolean;
  handleActive: () => void;
  labels: string[];
}

const CategoryPage: React.FC<CategoryPageProps> = (props) => {
  const { isActive, handleActive, labels } = props;

  const getLabelClass = (active: boolean) =>
    !active
      ? "category-Box1-label category-Box1-label-active"
      : "category-Box1-label category-Box1-label-inActive";

  return (
    <div className="category-container">
      <div className="category-box">
        <div className="category-Box1">
          <p className={getLabelClass(isActive)} onClick={handleActive}>
            Category
          </p>
          <p className={getLabelClass(!isActive)} onClick={handleActive}>
            Sub-Category
          </p>
        </div>

        <div className="category-Box2">
          <input
            type="text"
            className="category-search"
            placeholder={isActive ? "Search Sub-Category" : "Search Category"}
          />
          <img
            className="category-search-logo"
            src={searchLogo}
            alt="category-logo"
          />

          <div className="category-search">
            <button className="category-btn">
              <img src={addIcon} alt="add-logo" />
              Add {isActive ? "Sub-Category" : "Category"}
            </button>
          </div>
        </div>
      </div>
      <div className="category-box3">
        <div className="user-alignLabels">
          {labels.map((label, index) => {
            return (
              <p key={index} className="user-labels">
                {label}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
