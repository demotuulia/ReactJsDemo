/**
 * A generic component to render HTML select menu
 * 
 */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import selectStyles from './Select.module.scss';

function Select(props) {

    const selectId = 'select_' + props.name;
    const selectClass = props.class != undefined
        ? props.class : selectStyles.select;

    const [options, setOptions] = useState([]);
    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (selected != props.selected) {
            setOptions(props.options);
            setSelected(props.selected);
        }
    });

    /**
     * Emit change to the parent function
     * 
     */
    function handleChange() {
        var value = document.getElementById(selectId).value;
        props.emitChange(value);
    }


    return (
        <>
            <select
                id={selectId}
                name={props.name}
                onChange={handleChange}
                className={selectClass}
                value={selected}
            >
                {options.map((option, index) =>
                (
                    <option
                        key={"userTypeLink_" + index}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))
                }

            </select>
        </>
    )
}
Select.propTypes = {
    name: PropTypes.string,         // Name property of the Select menu
    options: PropTypes.array,       // select options as an array of objects
                                    // example 
                                    //  [ 
                                    //      {label: 'label1', value: 'value1'}, 
                                    //      {label: 'label2', value: 'value2'}  
                                    //   ]
    class: PropTypes.string,        // CSS class of the element, if not defined the default style
                                    // is used.
    selected: PropTypes.string,     // The current selected value               
    emitChange: PropTypes.func      // Function to emit actions in the parent wit onChange event

};

export default Select;