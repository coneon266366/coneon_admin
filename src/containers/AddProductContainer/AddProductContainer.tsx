import React, { useState } from "react";
import AddProductPage from "../../components/AddProductPage/AddProductPage";

const AddProductContainer: React.FC = () => {
  const [isSelected, setIsSelected] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(Number(event.target.value));
  };

  return <AddProductPage isSelected={isSelected} handleChange={handleChange} />;
};

export default AddProductContainer;
