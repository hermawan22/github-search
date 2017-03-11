import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    Image,
    Row,
    Col,
    Panel,
    Accordion,
    Button
} from 'react-bootstrap';
import './userDetails.css';
import { fetchUserRepos, fetchUser } from '../actions/userDetails';

class UserDetails extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchUser(this.props.params.username)
        this.props.fetchUserRepos(this.props.params.username)
    }

    render() {
        const {repos, user, fetching} = this.props;
        console.log(repos, 'ini adalah reponya');
        console.log(user, 'ini adalah usernya');

        return (
            <div className="user-details">
                <Button className="button-back" onClick={() => this.context.router.push('/')}> ← Back</Button>

                <div>
                    {fetching && <div className="loading"> Loading.. </div>}

                    <Col md={4}>
                        <Row className="show-grid">
                            {user && <Image src={user.avatar_url} thumbnail />}
                            {user && <span className="user-details-name"> {user.login} </span>} <br />
                            {user && <span className="user-details-bio"> {user.bio} </span>}
                        </Row>
                        <Row className="show-grid follow">
                            <Col md={6}>
                                <Panel>
                                <h3> Followers </h3> <h4 > {user && user.followers} </h4>
                                </Panel>
                            </Col>
                            <Col md={6}>
                                <Panel>
                                <h3> Following </h3> <h4> {user && user.following} </h4>
                                </Panel>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={8}>
                        <div className="header-repository"> Repositories </div>
                        <Accordion>
                            {repos && repos.map((result, key) => {
                                return (
                                    <Panel header={result.name} eventKey={key} key={key}>
                                        <div className="repo-description"> {result.description} </div>
                                        <a href={result.html_url}> {result.html_url} </a>
                                    </Panel>
                                )
                            })}
                        </Accordion>
                    </Col>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.userDetails.user,
    repos: state.userDetails.repos,
    fetching: state.userDetails.fetching
  };
}

export default connect(mapStateToProps, { fetchUserRepos, fetchUser })(UserDetails);