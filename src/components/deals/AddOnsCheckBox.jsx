/* eslint-disable no-unused-vars */
import { useState } from "react";

const adonBtnStyle = {
    outline: "none",
    boxShadow: 'none'
};
const adonBtnStyleNotActive = {
    outline: "none",
    boxShadow: 'none',
    cursor: 'default',
    backgroundColor: '#FFFFFF',
    color: '#dc3545'
};

const AddOnsCheckBox = (props) => {
    const { id, name, price } = { ...props.addon };
    const [checkBoxCount, setCheckBoxCount] = useState(1);
    const [checkBoxValue, setCheckBoxValue] = useState([false]);

    const chekboxHandleChange = () => {
        if (checkBoxValue === true)
            setCheckBoxValue(false)
        else
            setCheckBoxValue(true)

        if (checkBoxValue === true)
            setCheckBoxCount(1);
    }

    const handleAddonIncrement = () => {
        if (checkBoxValue === true) {
            setCheckBoxCount(checkBoxCount + 1);
        }
    }

    const handleAddonDerement = () => {
        if (checkBoxValue === true) {
            if (checkBoxCount > 1) {
                setCheckBoxCount(checkBoxCount - 1);
            }
        }
    }

    return (
        <div className="addons-check-box d-flex justify-content-between mb-2">
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={name}
                    id={'addonValueCheck'+id}
                    onChange={chekboxHandleChange}
                />
                <label className="form-check-label" htmlFor={'addonValueCheck'+id} style={{fontSize:'14px', color:'#444'}}>
                    {name}
                </label>
            </div>
            <div className="addons-price-box d-flex align-items-center">
                <p className="m-0 font-14 me-1" style={{fontSize:'14px', color:'#444'}}>PKR</p>
                <p className="addons-price m-0 font-14" style={{fontSize:'14px', color:'#444'}}>{price}</p>
                {
                    checkBoxValue===true? <button
                    className="btn btn-outline-danger btn-decrement rounded-0 py-0 px-2 ms-1"
                    style={adonBtnStyle}
                    onClick={handleAddonDerement} >
                    -
                </button> : <button
                    className="btn btn-outline-danger btn-decrement rounded-0 py-0 px-2 ms-1"
                    style={adonBtnStyleNotActive} >
                    -
                </button>
                }
                
                <p className="addons-check-count m-0 font-14 ms-1" id={'addons_counts_value_'+id} style={{fontSize:'14px', color:'#444'}}>{checkBoxCount}</p>
                {
                    checkBoxValue===true? <button
                    className="btn btn-outline-danger btn-increment rounded-0 py-0 px-2 ms-1"
                    style={adonBtnStyle}
                    onClick={handleAddonIncrement}>
                    +
                </button>: <button
                    className="btn btn-outline-danger btn-increment rounded-0 py-0 px-2 ms-1"
                    style={adonBtnStyleNotActive}>
                    +
                </button>
                }
            </div>
        </div>
    );
};

export default AddOnsCheckBox;
