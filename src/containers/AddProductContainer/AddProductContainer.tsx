import React, { useEffect, useRef, useState } from "react";
import AddProductPage from "../../components/AddProductPage/AddProductPage";

const AddProductContainer: React.FC = () => {
  const colorRef = useRef<HTMLDivElement>(null);
  const [isSelected, setIsSelected] = useState<number>(0);
  const [showColors, setShowColors] = useState(false);
  // const [showSizes, setShowSizes] = useState(false);
  const [colors, setColors] = useState([
    { colorName: "green" },
    { colorName: "red" },
    { colorName: "yellow" },
    { colorName: "grey" },
    { colorName: "blue" },
  ]);
  const [filteredColors, setFilteredColors] = useState(colors);
  const [colorInput, setColorInput] = useState("");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  // const sizes: string[] = ["mm", "cm", "m", "in"];

  // const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    setFilteredColors(
      colors.filter((color) =>
        color.colorName.toLowerCase().includes(colorInput.toLowerCase())
      )
    );
  }, [colors, colorInput]);

  const handleShowColors = () => {
    setShowColors(true);
  };

  const handleClickOutSide = (e: MouseEvent) => {
    if (colorRef.current && !colorRef.current.contains(e.target as Node)) {
      setShowColors(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  const handleIsVariants = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsSelected(Number(e.target.value));
  const handleColorSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setColorInput(e.target.value);
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  return (
    <AddProductPage
      isSelected={isSelected}
      handleIsVariants={handleIsVariants}
      showColors={showColors}
      handleShowColors={handleShowColors}
      colors={filteredColors}
      colorInput={colorInput}
      handleColorSearch={handleColorSearch}
      handleColorChange={handleColorChange}
      selectedColors={selectedColors}
      // sizes={sizes}
    />
  );
};

export default AddProductContainer;
