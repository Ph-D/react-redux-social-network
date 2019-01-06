import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    // <div className="btn-toolbar profileAction-btn" role="group">
    //   <Link
    //     to="/edit-profile"
    //     className="btn btn-secondary btn-block btn-light fb-border-hover"
    //   >
    //     <i className="text-info mr-1" /> Edit Profile
    //   </Link>
    //   <Link
    //     to="/add-experience"
    //     className="btn btn-secondary btn-block btn-light fb-border-hover"
    //   >
    //     <i className="text-info mr-1" />
    //     Add Experience
    //   </Link>
    //   <Link
    //     to="./add-education"
    //     className="btn btn-secondary btn-block btn-light fb-border-hover"
    //   >
    //     <i className="ftext-info mr-1" />
    //     Add Education
    //   </Link>

    // </div>

    <div className="row mb-4 mt-4">
      <div class="col-md-4 mb-1">
        <Link to="/edit-profile" className="btn btn-light btn-block fb-border">
          <i className="fas fa-user-circle" /> Edit Profile
        </Link>
      </div>
      <div class="col-md-4 mb-1">
        <Link
          to="/add-experience"
          className="btn btn-light btn-block fb-border"
        >
          <i className="fas fa-user-tie mr-1" />
          Add Experience
        </Link>
      </div>
      <div class="col-md-4 mb-1">
        <Link
          to="./add-education"
          className="btn  btn-light btn-block fb-border"
        >
          <i class="fas fa-university" /> Add Education
        </Link>
      </div>
    </div>
  );
};

export default ProfileActions;
