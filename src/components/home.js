import React, { Component } from "react";

// import readux library
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import action
import { counter} from "../actions/index"

class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="App">
        <h1>{this.props.number}jhgkfjd</h1>
      </div>
    );
  }
}

//receieving point
function mapStateToProps({ number }) {
  console.log("receieving point",number)
  return { number };
}

//outgoing point
function mapDispatchToProps(dispatch) {
  console.log("outgoing point")
  return bindActionCreators({ counter}, dispatch);
}

// connect with producer main store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
