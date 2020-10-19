import React from "react";
import PropTypes from "prop-types";

const Select = ({ name, label, value = '', options = [], prompt = 'Select', error, autoFocus, onChange, onKeyUp }) => {
    return (
        <div className="form-group">
            {
                label && <label className={`${error ? 'text-danger' : ''}`} htmlFor={name}>{label}</label>
            }
            <select
                   className={`form-control ${error ? 'is-invalid' : ''}`}
                   id={name}
                   name={name}
                   value={value}
                   aria-describedby={name}
                   autoFocus={autoFocus}
                   onChange={onChange}
                   onKeyUp={onKeyUp}
            >
                <option value="">{prompt}</option>
                {
                    options.map((option, i) => <option key={i} value={option.value}>{option.label}</option>)
                }
            </select>
            {
                error && <small id={`${name}`} className="form-text text-danger">{error}</small>
            }
        </div>
    );
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    prompt: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onKeyUp: PropTypes.func
};

export default Select;
