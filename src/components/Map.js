import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'react-bootstrap/Image'

class Map extends React.Component {

  render() {
    return (
      <>
        <Row className='border border-info'>
          <Col><Img src={this.props.map} roundedCircle fluid alt='map location'></Img></Col>
        </Row>
      </>
    );
  }
}

export default Map;