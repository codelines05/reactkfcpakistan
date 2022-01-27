/* eslint-disable no-unused-vars */
import { useState } from "react";

const AddDrinkRadio = (props) => {
  const dd = props.drinks;

  const [fullDrink, setFullDrink] = useState({
    radio_drink: "",
  });

  const handleDrinkRadio = () => {
    // alert("e.target.value")
    // console.log("clicked");
  };

  return dd.map((dr, i) => {
    return (
      <div key={i} className="form-check">
        <input
          type="radio"
          className="form-check-input"
          selected
          onChange={() => props.setdrink(dr)}
          name="radio_drink"
          id={"radio_drink_" + i}
          value={dr}
          defaultChecked={i===0}
          style={{ cursor: "pointer", marginRight: "10px",boxShadow:'none' }}
        />
        <label
          className="form-check-label font-14"
          htmlFor={"radio_drink_" + i}
          style={{ cursor: "pointer", fontSize: "14px", color: "#444" }}
        >
          {dr}
        </label>
        {/* <button className="btn" onClick={() => props.setdrink(dr)}>Click</button> */}
      </div>
    );
  });
};

export default AddDrinkRadio;
