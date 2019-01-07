import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className='row mb-4 mt-4'>
      <div class='col-md-4 mb-1'>
        <Link to='/edit-profile' className='btn btn-light btn-block fb-border'>
          <i className='fas fa-user-circle' /> Editer Profil
        </Link>
      </div>
      <div class='col-md-4 mb-1'>
        <Link
          to='/add-experience'
          className='btn btn-light btn-block fb-border'
        >
          <i className='fas fa-user-tie mr-1' />
          Ajouter Expérience
        </Link>
      </div>
      <div class='col-md-4 mb-1'>
        <Link
          to='./add-education'
          className='btn  btn-light btn-block fb-border'
        >
          <i class='fas fa-university' /> Ajouter Parcours Scolaire
        </Link>
      </div>
    </div>
  );
};

export default ProfileActions;
