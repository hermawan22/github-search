import React, { Component } from 'react';
import Helmet from 'react-helmet';
import '../globalStyle.css';
import {
    Image,
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import logo from '../assets/github.png';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          {/* Use react-helmet for head */}
          <Helmet 
            title="Search Github Page"
            link={[
                {rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"},
            ]}
          />

          <Col sm={12} md={12}>

            <h2> <Image src={logo} className="github-logo" circle/> Github Users Search (for Crowdbotics) </h2>
            
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
