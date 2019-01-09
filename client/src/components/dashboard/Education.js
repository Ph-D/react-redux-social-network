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
      <div key={edu._id} className='row mb-4 p-1 bg-white fb-border'>
        <div className='col-sm-4 p-1'>
          <h5 className='fb-title'>École</h5>
          <hr />
          <p>{edu.school}</p>
        </div>
        <div className='col-sm-4 p-1'>
          <h5 className='fb-title'>Diplôme</h5>
          <hr />
          <p>{edu.degree}</p>
        </div>
        <div className='col-sm-4 p-1'>
          <h5 className='fb-title'>Année</h5>
          <hr />
          <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
          )}
        </div>
        <div className='col-sm-12'>
          <button
            onClick={this.onDeleteClick.bind(this, edu._id)}
            type='button'
            className='btn btn-danger mr-1'
          >
            <i className='fas fa-times' />
          </button>
        </div>
      </div>
    ));
    return <div className='container'>{education}</div>;
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
