import React from "react";
import PropTypes from "prop-types";
import { daysInMonth } from "../../util/helpers";
import { minYear, maxYear, dateShape } from "../../util/constants";
import {
  WrapperSpan,
  DayInput,
  MonthSelect,
  YearInput
} from "./styles/formStyles";

class DateForm extends React.Component {
  static propTypes = {
    date: PropTypes.shape(dateShape).isRequired,
    updateDate: PropTypes.func.isRequired
  };

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
      <WrapperSpan>
        <DayInput
          type="number"
          name="day"
          value={this.props.date.day}
          onChange={this.handleDayChange}
          min="1"
          max={this.state.maxDays}
        />
        .
        <MonthSelect
          name="month"
          value={this.props.date.month}
          onChange={this.handleMonthChange}
        >
          <option value="0">ledna</option>
          <option value="1">února</option>
          <option value="2">března</option>
          <option value="3">dubna</option>
          <option value="4">května</option>
          <option value="5">června</option>
          <option value="6">července</option>
          <option value="7">srpen</option>
          <option value="8">září</option>
          <option value="9">října</option>
          <option value="10">listopadu</option>
          <option value="11">prosince</option>
        </MonthSelect>
        <YearInput
          type="number"
          name="year"
          value={this.props.date.year}
          onChange={this.handleYearChange}
          min={minYear}
          max={maxYear}
        />
      </WrapperSpan>
    );
  }
}

export default DateForm;
