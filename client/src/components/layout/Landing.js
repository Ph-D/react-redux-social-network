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
      <div className="landing">
        <div className="landing-inner text-light">
          <div className="container">
            <section class="jumbotron text-center">
              <div class="container">
                <h1
                  style={{
                    "border-bottom": "5px solid #3b5998",
                    "padding-bottom": "15px"
                  }}
                  class="jumbotron-heading font-weight-bold fb-title"
                >
                  The DEVbook{" { }"}
                </h1>

                <p class="lead text-muted">Social media for Web Developers.</p>
                <p>
                  <Link to="/register" class="btn btn-lg blue-fb my-2 mr-2">
                    Sign up
                  </Link>
                  <Link
                    to="/login"
                    class="btn btn-lg blue-fb-secondary my-2 mr-2"
                  >
                    Signin
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
