import React from 'react';

export default class AddClock extends React.Component {
  constructor(props) {
    super(props);
    // https://www.npmjs.com/package/countries-and-timezones
    // npm install --save countries-and-timezones
    const ct = require('countries-and-timezones');
    this.countries = ct.getAllCountries();
    let countryArray = Object.keys(this.countries).map(key => this.countries[key]);
    countryArray.sort((a, b) => a.name.localeCompare(b.name));
    this.timezoneList = [];
    for (const country of countryArray) {
      for (const timezone of country.timezones) {
        this.timezoneList.push(
          <option value={timezone} key={timezone} >{`${country.name} - ${timezone}`}</option>
        );
      }
    }
  }

  handleNew = () => {
    // let selectedTimezone = document.querySelector('#timezoneSelect');
    // this.props.handleNew(selectedTimezone === '0' ? null : selectedTimezone);
    let timezoneSelect = document.querySelector('#timezoneSelect');
    this.props.handleNew(timezoneSelect.options[timezoneSelect.selectedIndex].value);
  }

  render() {
    return (
      <div className="input-group my-5">
        <select className="custom-select" id="timezoneSelect" aria-label="Timezone select with button addon" defaultValue="0">
          <option value={Intl.DateTimeFormat().resolvedOptions().timeZone}>Choose a timezone...</option>
          {this.timezoneList}
        </select>
        <div className="input-group-append">
          <button onClick={this.handleNew} className="btn btn-primary" type="button">New Clock</button>
        </div>
      </div>
    );
  }
}