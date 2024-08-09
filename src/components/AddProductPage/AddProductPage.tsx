import React from "react";
import "./AddProductPage.css";
import icon1 from "../../assets/productPageImages/search.svg";
import ProductVariants from "./ProductVariants";

interface productColors {
  colorName: string;
}

interface AddProductPageProps {
  isSelected: number;
  handleIsVariants: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showColors: boolean;
  handleShowColors: () => void;
  colors: productColors[];
  colorInput: string;
  handleColorSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleColorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedColors: string[];
  // sizes: string[];
}

const AddProductPage: React.FC<AddProductPageProps> = (props) => {
  const {
    isSelected,
    handleIsVariants,
    showColors,
    handleShowColors,
    colors,
    colorInput,
    handleColorSearch,
    handleColorChange,
    selectedColors,
    // sizes,
  } = props;
  return (
    <>
      <div className="add-product-container">
        <h1 className="add-product-head">Select a product type </h1>
        <p className="add-product-text1">
          Choosing the best product type ensures that you can see the most
          appropriate data field for your product
        </p>

        <div className="add-product-box1">
          <div className="add-product-inputBox">
            <input
              type="text"
              className="add-product-input1"
              placeholder="Search Category"
            />
            <img className="add-product-icon1" src={icon1} alt="search" />
          </div>
          <div className="add-product-inputBox">
            <input
              type="text"
              className="add-product-input1"
              placeholder="Search Sub Category"
            />
            <img className="add-product-icon1" src={icon1} alt="search" />
          </div>
          <div className="add-product-inputBox">
            <input
              type="text"
              className="add-product-input1"
              placeholder="Search Brand"
            />
            <img className="add-product-icon1" src={icon1} alt="search" />
          </div>
        </div>

        <div className="add-product-box2">
          <div className="add-product-box2-div1">
            <p className="add-product-label">Product Name:</p>
            <input
              className="add-product-inputBox1 add-product-inputMain"
              placeholder="Product Name"
            />
          </div>
          <div className="add-product-box2-div1">
            <p className="add-product-label">HSN Code:</p>
            <input
              className="add-product-inputBox2 add-product-inputMain"
              placeholder="001 001"
            />
          </div>

          <div className="add-product-box2-div1">
            <p className="add-product-label">Description:</p>
            <textarea
              className="add-product-inputBox3"
              rows={10}
              placeholder="Write some"
            />
          </div>
        </div>

        <div className="add-product-divider"></div>

        <div className="add-product-box2">
          <div className="add-product-box2-div2">
            <p className="add-product-label">Variations:</p>
            <div className="add-product-align1">
              <p className="add-product-text2">
                Does the product have variations ?
              </p>
              <div className="add-product-align1">
                <div className="add-product-align2">
                  <input
                    type="radio"
                    name="selection"
                    value={1}
                    checked={isSelected === 1}
                    onChange={handleIsVariants}
                    className={isSelected === 1 ? "add-product-radio1" : ""}
                  />
                  <label className="add-product-text2">Yes</label>
                </div>

                <div className="add-product-align2">
                  <input
                    type="radio"
                    name="selection"
                    value={0}
                    checked={isSelected === 0}
                    onChange={handleIsVariants}
                    className={isSelected === 0 ? "add-product-radio1" : ""}
                  />
                  <label className="add-product-text2">No</label>
                </div>
              </div>
            </div>
          </div>

          <div className="add-product-box2-div1">
            <p className="add-product-label">Choose variation type:</p>
            <div className="add-product-box3">
              <div style={{ position: "relative" }}>
                <p
                  className="add-product-text2"
                  style={{ margin: "0px 0px 4px 0px" }}
                >
                  Colors
                </p>
                <input
                  type="text"
                  className="add-product-inputMain"
                  placeholder="Search Colors"
                  value={colorInput}
                  onChange={handleColorSearch}
                  onClick={handleShowColors}
                />

                {showColors && (
                  <div className="add-product-dropdown">
                    {colors.map((color, index) => {
                      return (
                        <div key={index} className="add-product-dropdown-align">
                          <input
                            type="checkbox"
                            value={color.colorName}
                            className="add-product-dropdown-check"
                            style={{ accentColor: `${color.colorName}` }}
                            onChange={handleColorChange}
                            checked={selectedColors.includes(color.colorName)}
                          />
                          <p
                            className="add-product-text2"
                            style={{ margin: 0 }}
                          >
                            {color.colorName}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div style={{ position: "relative" }}>
                <p
                  className="add-product-text2"
                  style={{ margin: "0px 0px 4px 0px" }}
                >
                  Size
                </p>
                <input
                  type="text"
                  className="add-product-inputMain"
                  placeholder="Search Sizes"
                />
                {/* {colorInput.length > 0 && (
                  <div className="add-product-dropdown">
                    {colors.map((color, index) => {
                      return (
                        <div key={index} className="add-product-dropdown-align">
                          <input
                            type="checkbox"
                            value={color.colorName}
                            className="add-product-dropdown-check"
                            style={{ accentColor: `${color.colorName}` }}
                            onChange={handleColorChange}
                            checked={selectedColors.includes(color.colorName)}
                          />
                          <p
                            className="add-product-text2"
                            style={{ margin: 0 }}
                          >
                            {color.colorName}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )} */}
              </div>
              <div>
                <p
                  className="add-product-text2"
                  style={{ margin: "0px 0px 4px 0px" }}
                >
                  Weight
                </p>
                <input
                  type="text"
                  className="add-product-inputMain"
                  placeholder="Search Weights"
                />
              </div>
              <div>
                <p
                  className="add-product-text2"
                  style={{ margin: "0px 0px 4px 0px" }}
                >
                  Shape
                </p>
                <input
                  type="text"
                  className="add-product-inputMain"
                  placeholder="Search Shapes"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="add-product-divider1"></div>
        <p className="add-product-text2">
          Your variation child ASINs have been created. To complete your
          listings, find the variation child listings in your inventory and
          select ‘Edit’ to add an image for each variation child , Please note
          that each variation child requires an image to be active on the CONEON
          website.
        </p>

        <div className="add-product-checkedBox">
          <div className="add-product-colorBoxAlign">
            {selectedColors.map((selectedColor, index) => {
              return (
                <div
                  key={index}
                  className="add-product-colorBox"
                  style={{ backgroundColor: `${selectedColor}` }}
                >
                  <img />
                </div>
              );
            })}
          </div>
        </div>

        <ProductVariants />
      </div>
    </>
  );
};

export default AddProductPage;
