import React, { useRef } from 'react';
import './dropdown.css';

const Dropdown = ({ defaultValue, value, name, onChange, disabled, keyValue }) => {
    const refDet = useRef(null);
    return (
        <>
            {disabled ?
                <select className="disabled-selector" disabled={true}>
                    <option>Select...</option>
                </select> :

                <details className="custom-select" name={name} ref={refDet}>
                    <summary className="radios">
                        {defaultValue ?
                                <input
                                    defaultChecked
                                    type="radio"
                                    name={name}
                                    id={`${name}-${defaultValue.id}`}
                                    title={defaultValue.name}
                                /> :
                                <input
                                    defaultChecked
                                    type="radio"
                                    name={name}
                                    id="default"
                                    title="Select..."
                                />
                        }
                        {value.map((el) => {
                            return <input
                                key={`${name}-${el.id}`}
                                type="radio"
                                name={name}
                                id={`${name}-${el.id}`}
                                title={el[keyValue]}
                                onChange={() => {
                                    refDet.current.open = false;
                                    onChange(el)
                                }}
                            />;
                        })}
                    </summary>
                    <div className="container-list">
                        <ul className="drop-list">
                            {value.map((el) => {
                                return <li key={`${name}-${el.id}`} className="drop-item">
                                    <label className="drop-item-text" htmlFor={`${name}-${el.id}`}>{el[keyValue]}</label>
                                </li>
                            })}
                        </ul>
                    </div>
                </details>
            }
        </>
    );
};

export default Dropdown;
