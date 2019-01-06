import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileActions";

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      // <tr key={exp._id}>
      //   <td>{exp.company}</td>
      //   <td>{exp.title}</td>
      //   <td>
      //     <Moment format="YYYY/MM/DD">{exp.from}</Moment>-{" "}
      //     {exp.to === null ? (
      //       " Now"
      //     ) : (
      //       <Moment format="YYYY/MM/DD">{exp.to}</Moment>
      //     )}
      //   </td>
      //   <td>
      //     <button
      //       onClick={this.onDeleteClick.bind(this, exp._id)}
      //       className="btn btn-danger"
      //     >
      //       Delete
      //     </button>
      //   </td>
      // </tr>

      <div className="row mb-4 p-1 bg-white fb-border">
        <div class="col-sm-4 p-1">
          <h5 className="fb-title">Company</h5>
          <hr />
          <p>{exp.company}</p>
        </div>
        <div className="col-sm-4 p-1">
          <h5 className="fb-title">Title</h5>
          <hr />
          <p>{exp.title}</p>
        </div>
        <div className="col-sm-4 p-1">
          <h5 className="fb-title">Years</h5>
          <hr />
          <Moment format="YYYY/MM/DD">{exp.from}</Moment>-{" "}
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </div>
        <div className="col-sm-12">
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn blue-fb m-4 m-auto"
          >
            Delete
          </button>
        </div>
      </div>
    ));
    return <div class="container ">{experience}</div>;
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
