import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className='landing'>
        <div className='landing-inner text-light'>
          <div className='container'>
            <section className='jumbotron text-center'>
              <div className='container'>
                <h1
                  style={{
                    "border-bottom": "5px solid #3b5998",
                    "padding-bottom": "15px"
                  }}
                  className='jumbotron-heading font-weight-bold fb-title'
                >
                  The DEVbook{" { }"}
                </h1>

                <p className='lead text-muted'>
                  Réseau social pour développeurs.
                </p>
                <p>
                  <Link to='/register' class='btn btn-lg blue-fb my-2 mr-2'>
                    Inscription
                  </Link>
                  <Link
                    to='/login'
                    className='btn btn-lg blue-fb-secondary my-2 mr-2'
                  >
                    Connexion
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
