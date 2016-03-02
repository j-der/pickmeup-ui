import React from 'react';

export default class SplashScroller extends React.Component {

  constructor(props) {
    super(props)
  }

    function scrollBox() {
      $('#demo').scrollbox({
        linear: false,          // Scroll method
        startDelay: 2,          // Start delay (in seconds)
        delay: 2,               // Delay after each scroll event (in seconds)
        speed: 15,              // Delay after each single step (in milliseconds)
        switchItems: 1,         // Items to switch after each scroll event
        direction: 'vertical',
        distance: 'auto',
        autoPlay: true,
        onMouseOverPause: true,
        paused: false,
        queue: null,
        listElement: 'ul',
        listItemElement:'li',
        infiniteLoop: true,     // Infinite loop or not
        switchAmount: 0,        // Give a number if you don't want to have infinite loop
        afterForward: null,     // Callback function after each forward action
        afterBackward: null
    })
    }


render() {
  return(
    <div class="intro-text">
      <span class="name">Find a&nbsp;
        <div id="demo" class="scroll-text">
          <ul class="list-inline">
        <li>Ride</li>
        <li>Carpool</li>
        <li>Lift</li>
        <li>Route</li>
        </ul>
        </div>
      </span>

    </div>


    )
}


}
