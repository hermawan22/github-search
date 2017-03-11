import React from 'react';
import {
    Image,
    Row,
    Col
} from 'react-bootstrap';
import { Link } from 'react-router';
import './listUser.css';

const ListUser = ({search}) => {
    return (
        <Row className="show-grid list-user">
            {search.items && search.items.map((result, key) => {
                return (
                    <Col sm={3} md={3} key={key} className="row-list-user">
                        <Link to={result.login}>
                            <Image src={result.avatar_url} thumbnail />
                            <div className="name-user"> {result.login} </div>
                        </Link>
                    </Col>
                );
            })}
        </Row>
    );
}

export default ListUser;