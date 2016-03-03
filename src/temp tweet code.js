shouldComponentUpdate: function(nextProps, nextState) {
     return nextProps.originField !== this.props.originField
  },

  componentWillUpdate() {
    console.log("componentWillUpdate");
    this.loadRidesDetails();
  }