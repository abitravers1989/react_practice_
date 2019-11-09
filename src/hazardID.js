import React, { Component } from "react";
 
class HazardID extends Component {
  constructor(props) {
    super(props)
    this.state = {status: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({status: event.target.value});
  }

  handleSubmit(event) {
    //send the info to backend 
    alert('status: ' + this.state.status);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h2>Hazard ID</h2>
        <p>To ensure that all types of harm or danger which can give rise to a catastrophic failure 
          or major incident are identified and quantified. The organisation of this information into 
          specific scenarios which cover how a hazard may give rise to a major incident, in what 
          circumstances, where or when in terms of location and activity and to determine the initial 
          consequences in terms of susceptible people, assets and the environment.</p>
          <section class="question_box">
           <h3><span class="h3_span">1.1</span> Complete Inventory</h3>
           <h4><span class="bold_span">a)</span> Are all hazardous substances and hazardous conditions (stored energy, 
             rotating machinery, high tension electricity, high temperatures and pressures) identified and quantified? </h4>
          <form onSubmit={this.handleSubmit}>
            <label>
              Status:
              {/* <input type="text" value={this.state.value} onChange= {this.handleChange} /> */}
              <select id="status" value={this.state.status} onChange= {this.handleChange} >
                <option value="Fulfilled">Fulfilled</option>
                <option value="Gap">Gap</option>
                <option value="Missing">Missing</option>
                <option value="Unclear">Unclear</option>
                <option value="Not Applicable">Not Applicable</option>
              </select>
            </label>
            <input type="submit" value="Submit"/>
          </form>
          </section>
      </div>
    );
  }
}
 
export default HazardID;