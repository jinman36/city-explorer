import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Weather extends React.Component {

  render() {
    return (
      <>
      <Row>
        <Col>
        <h1>
        Weather Report: {this.props.weather}
        </h1>
        </Col>
      </Row>
      </>
    );
  }
}


export default Weather
