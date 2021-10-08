import React from 'react';
import './App.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'react-bootstrap/Image'
import AlertDismissible from './AlertDismissible';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      locationObj: {},
      map: {},
      errorCode: false
    }
  }
  getLocation = async () => {
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.cityName}&format=json`;
    try {
      let locData = await axios.get(url)
      // console.log(locData)
      let oneObject = locData.data[0]
      this.setState({ locationObj: oneObject })
      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${oneObject.lat},${oneObject.lon}&zoom=14&size=480x480`
      this.setState({ map: mapUrl })
    }
    catch (error) {
      console.log(`there was an error: ${error}`)
      this.setState({ errorCode: error})
    };
  }

  render() {
    return (
      <>
        <Container className='d-flex justify-content-center m-4'>
          <h2>Enter a City to Explore</h2>
          <input onChange={(event) => this.setState({ cityName: event.target.value })}>
          </input>
          <Button variant="info" onClick={this.getLocation}>
            Explore!
          </Button>
        </Container>
        <AlertDismissible />
        {this.state.locationObj.display_name &&
          <Container>
            <Row>
              <Col><h1>{this.state.locationObj.display_name}</h1></Col>
            </Row>
            <Row className='border border-info'>
              <Col><h2>Latitude: {this.state.locationObj.lat}</h2></Col>
              <Col><h2>longitude: {this.state.locationObj.lon}</h2></Col>
            </Row>
            <Row className='border border-info'>
              <Col><Img src={this.state.map} roundedCircle fluid alt='map location'></Img></Col>
              <Col></Col>
            </Row>
          </Container>
        }
      </>
    );
    

  }
}

export default App;
