import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Weather extends React.Component {

  render() {
    console.log(this.props.weather)
    return (
      <>

        
        <Row className='d-flex justify-content-center m-4 border border-info'>
          <h1>Weather Data</h1>
        <Col>
          <Row className='border border-info'>
            <h1>Today:</h1>
            <h4>{this.props.weather[0].date}</h4>
            <h4>{this.props.weather[0].description}</h4>
          </Row>
        </Col>
        <Col>
          <Row className='border border-info'>
            <h1>Tomorrow:</h1>
            <h4>{this.props.weather[1].date}</h4>
            <h4>{this.props.weather[1].description}</h4>
          </Row>
        </Col>
        <Col>
          <Row className='border border-info'>
            <h1>Next Day:</h1>
            <h4>{this.props.weather[2].date}</h4>
            <h4>{this.props.weather[2].description}</h4>
          </Row>
        </Col>
        </Row>
      </>
    );
  }
}

// class WeatherClass {
//   constructor()
// }

export default Weather
