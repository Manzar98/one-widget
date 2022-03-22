import React from 'react';
import DatePicker from "react-datepicker";

/*
1. simple react-datepicker

Props : {
    selectedDate,
    setSelectedDate,
    minDate,
    maxDate,
    filteredDate
}
*/

const DateInput = (props) => {
    return (
        <DatePicker
            className="form-control"
            selected={props?.selectedDate}
            onChange={(date) => { props?.setSelectedDate(date) }}
            minDate={props?.minDate}
            maxDate={props?.maxDate}
            filterDate={props?.filteredDate}
        />
    )
}
export default DateInput;