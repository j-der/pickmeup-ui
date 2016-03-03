import React from 'react';
import Dialog from 'material-ui/lib/dialog';

export default class HowItWorks extends React.Component {

  render() {
    return(
      <div className="modal-content">
        <p className="normal">pickmeUp connects drivers with passengers for regular commutes or one-off trips. If you're making a long commute to work everyday, many others are as well, so why not take turns and save time, money, and the planet.</p>
        <p className="normal">Enter an origin and destination and see all the rides available near you. Results will appear based on your destination. Drivers who are leaving from within 7km will be indicated on the results map.</p>
        <p className="normal">When you find a driver you like, simply request a seat and buckle up!</p>
      </div>
    )
  }
}
