import React from 'react';
import Select from 'react-select';


/*
1. simple react-datepicker

Props : {
    defaultValue,
    require,
    isMulti,
    options
}
*/

const MultiSelectDropDown = (props) => {

    
	const [isMultiSelectOpen, setIsMultiSelectOpen] = useState(false);
	const [selectedMultiOption, setSelectedMultiOption] = useState('');
    return (
        <div
					className={`select ${
						(props?.defaultValue && props?.defaultValue.length !== 0) || isMultiSelectOpen || selectedMultiOption
							? 'select-open'
							: 'select-close'
					}`}
				>
                    
					<label htmlFor='name'>
						{props.label} {props.require && <em className='text-red-400'>*</em>}
					</label>
					<Select
						isMulti={props.isMulti}
						isClearable={false}
						classNamePrefix={'my-custom-react-select'}
						placeholder=''
						value={props.defaultValue || selectedMultiOption}
						onChange={(selectedMultiOption) => {
							console.log(selectedMultiOption);
							setSelectedMultiOption(selectedMultiOption);
							props.setValue(selectedMultiOption);
						}}
						options={props.options}
						required
						spellCheck='false'
						onMenuOpen={() => {
							setIsMultiSelectOpen(true);
						}}
						onMenuClose={() => {
							setIsMultiSelectOpen(false);
						}}
					/>
				</div>
    )
}
export default MultiSelectDropDown;