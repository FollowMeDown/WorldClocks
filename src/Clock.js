import React from 'react';

export default class Clock extends React.Component {

  handleClose = () => {
    this.props.handleClose(this.props.timezone.id);
  }

  /**********************
    Check these for formating dates and times:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
  **********************/
  render() {
    // show a light card in AM, dark card in PM hours
    let cardClass = Number(this.props.time.toLocaleString('en-US', {
      hour: 'numeric',
      hour12: false,
      timeZone: this.props.timezone.name
    })) % 24 < 12 ? 'card bg-light' : 'card text-white bg-dark';
    return (
      <div className={cardClass} >
        <div className="card-header">
          {this.props.timezone.name}
          <button type="button" className="close" aria-label="Close" onClick={this.handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="card-body text-primary">
          <h5 className="card-title">
            {this.props.time.toLocaleString('en-US', {
              hour: 'numeric', minute: 'numeric', second: 'numeric', 
              timeZone: this.props.timezone.name,
            })}
          </h5>
          <p className="card-text text-muted">
          {this.props.time.toLocaleString('en-US', {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
              timeZone: this.props.timezone.name,
              timeZoneName: 'short'
            })}
            
          </p>
        </div>
      </div>
    );
  }
}
