import React from "react";
import ProductsPage from "../../components/ProductsPage/ProductsPage";
import { useNavigate } from "react-router-dom";
import { AddProduct } from "../../Routes/Constants";

const ProductsContainer: React.FC = () => {
  const navigate = useNavigate();
  const labels: string[] = [
    "S No.",
    "Category Name",
    "Status",
    "Login Type",
    "Signup Date",
    "Last Login",
  ];

  const handleAddProduct = () => {
    navigate(AddProduct);
  };

  return <ProductsPage labels={labels} handleAddProduct={handleAddProduct} />;
};

export default ProductsContainer;
