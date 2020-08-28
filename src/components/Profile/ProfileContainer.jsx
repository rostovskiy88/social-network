import React, {Component} from 'react';
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";
import {getProfile} from "../../api/api";
import * as axios from "axios";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 9457;
            // userId = 8245;
        }
        getProfile(userId)
            .then(response => {
                    this.props.setUserProfile(response.data);
                }
            );
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);