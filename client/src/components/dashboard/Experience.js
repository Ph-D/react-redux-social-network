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
      <div key={exp._id} className='row mb-4 p-1 bg-white fb-border'>
        <div className='col-sm-4 p-1'>
          <h5 className='fb-title'>Entreprise</h5>
          <hr />
          <p>{exp.company}</p>
        </div>
        <div className='col-sm-4 p-1'>
          <h5 className='fb-title'>Emploi</h5>
          <hr />
          <p>{exp.title}</p>
        </div>
        <div className='col-sm-4 p-1'>
          <h5 className='fb-title'>Année</h5>
          <hr />
          <Moment format='YYYY/MM/DD'>{exp.from}</Moment>-{" "}
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
          )}
        </div>
        <div className='col-sm-12'>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            type='button'
            className='btn btn-danger '
          >
            <i className='fas fa-times' />
          </button>
        </div>
      </div>
    ));
    return <div className='container '>{experience}</div>;
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
