import React from "react";
import { DayInput, MonthSelect, YearInput } from "./styles/formStyles";
import { daysInMonth } from "../../util/helpers";

class DateForm extends React.Component {
  state = {
    maxDays: 31
  };

  componentDidMount() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    this.props.updateDate(this.props.id, {
      day,
      month,
      year
    });
    this.setState({ maxDays: daysInMonth(month, year) });
  }

  handleDayChange = e => {
    const day = e.target.value;
    this.props.updateDate(this.props.id, { ...this.props.date, day });
  };

  handleMonthChange = e => {
    const month = e.target.value;
    const year = this.props.date.year;
    this.handleMonthAndYear(month, year);
  };

  handleYearChange = e => {
    const month = this.props.date.month;
    const year = e.target.value;
    this.handleMonthAndYear(month, year);
  };

  handleMonthAndYear = (month, year) => {
    const maxDays = daysInMonth(month, year);
    let day = this.props.date.day;
    if (day > maxDays) {
      day = maxDays;
    }
    this.props.updateDate(this.props.id, { day, month, year });
    this.setState({ maxDays });
  };

  render() {
    return (
      <span>
        <DayInput
          type="number"
          name="day"
          value={this.props.date.day}
          onChange={this.handleDayChange}
          min="1"
          max={this.state.maxDays}
        />
        <MonthSelect
          name="month"
          value={this.props.date.month}
          onChange={this.handleMonthChange}
        >
          <option value="0">leden</option>
          <option value="1">únor</option>
          <option value="2">březen</option>
          <option value="3">duben</option>
          <option value="4">květen</option>
          <option value="5">červen</option>
          <option value="6">červenec</option>
          <option value="7">srpen</option>
          <option value="8">září</option>
          <option value="9">říjen</option>
          <option value="10">listopad</option>
          <option value="11">prosinec</option>
        </MonthSelect>
        <YearInput
          type="number"
          name="year"
          value={this.props.date.year}
          onChange={this.handleYearChange}
          min="1970"
          max="2030"
        />
      </span>
    );
  }
}

export default DateForm;
