import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class LatLong extends React.Component {

  render() {
    console.log(this.props)
    return (
      <>
        <Row className='border border-info'>
          <Col><h2>Latitude: {this.props.latLong.lat}</h2></Col>
          <Col><h2>longitude: {this.props.latLong.lon}</h2></Col>
        </Row>
      </>
    )
  }

}

export default LatLong;