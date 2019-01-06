import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileActions";

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(edu => (
      // <tr key={edu._id}>
      //   <td>{edu.school}</td>
      //   <td>{edu.degree}</td>
      //   <td>
      //     <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
      //     {edu.to === null ? (
      //       " Now"
      //     ) : (
      //       <Moment format="YYYY/MM/DD">{edu.to}</Moment>
      //     )}
      //   </td>
      //   <td>
      //     <button
      //       onClick={this.onDeleteClick.bind(this, edu._id)}
      //       className="btn btn-danger"
      //     >
      //       Delete
      //     </button>
      //   </td>
      // </tr>
      <div className="row mb-4 p-1 bg-white fb-border">
        <div class="col-sm-4 p-1">
          <h5 className="fb-title">School</h5>
          <hr />
          <p>{edu.school}</p>
        </div>
        <div className="col-sm-4 p-1">
          <h5 className="fb-title">Degree</h5>
          <hr />
          <p>{edu.degree}</p>
        </div>
        <div className="col-sm-4 p-1">
          <h5 className="fb-title">Years</h5>
          <hr />
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </div>
        <div className="col-sm-12">
          <button
            onClick={this.onDeleteClick.bind(this, edu._id)}
            className="btn blue-fb m-4 m-auto"
          >
            Delete
          </button>
        </div>
      </div>
    ));
    return (
      // <div>
      //   <h4 className="mb-4">Education Credentials</h4>
      //   <table className="table">
      //     <thead>
      //       <tr>
      //         <th>School</th>
      //         <th>Degree</th>
      //         <th>Years</th>
      //         <th />
      //       </tr>
      //       {education}
      //     </thead>
      //   </table>
      // </div>
      <div class="container ">{education}</div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
