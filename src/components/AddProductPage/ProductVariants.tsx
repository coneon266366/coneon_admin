import React from "react";
import "./ProductVariants.css";

interface ProductVariantsProps {}

const ProductVariants: React.FC<ProductVariantsProps> = () => {
  return (
    <>
      <div className="product-variant-container">
        <h1 className="add-product-head">Product Variants</h1>
        <div className="product-variant-all"></div>
      </div>
    </>
  );
};

export default ProductVariants;
