import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.scss";

class DateInput extends Component {
  state = {
    startDate: "",
  };

  handleDateChange = date => {
    this.setState({ startDate: date });
  };

  render() {
    return (
      <form className="inputDeliveryDate">
        <DatePicker
          id="datePicker"
          locale={ko}
          name="day1"
          selected={this.state.startDate}
          closeOnScroll={true}
          minDate={new Date()}
          popperModifiers={{ preventOverflow: { enabled: true } }}
          popperPlacement="auto"
          onChange={this.handleDateChange}
          placeholderText="수령일을 선택해주세요."
          dateFormat="eeee, yyyy-MM-dd"
        />
      </form>
    );
  }
}
export default DateInput;
