import React from "react";
import "./ProductsPage.css";
import searchLogo from "../../assets/headerImages/search logo.svg";
import addIcon from "../../assets/addIcon.svg";

interface ProductsPageProps {
  labels: string[];
  handleAddProduct: () => void;
}

const ProductsPage: React.FC<ProductsPageProps> = (props) => {
  const { labels, handleAddProduct } = props;
  return (
    <>
      <div className="products-container">
        <div className="products-Box1">
          <div className="products-Box1-div">
            <input
              type="text"
              className="category-search"
              placeholder="Search Products"
            />
            <img
              className="category-search-logo"
              src={searchLogo}
              alt="category-logo"
            />

            <div className="category-search">
              <button
                className="category-btn"
                onClick={() => handleAddProduct()}
              >
                <img src={addIcon} alt="add-logo" />
                Add Product
              </button>
            </div>
          </div>
        </div>
        <div className="products-alignLabels">
          {labels.map((label, index) => {
            return (
              <p key={index} className="products-labels">
                {label}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
