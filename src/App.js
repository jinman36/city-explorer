import React from 'react';
import './App.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      locationObj: {}
    }
  }
  getLocation = async () => {
    let apiKey = 'pk.a4a323609b1a833bc130851d6a2b59ec';
    let url = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${this.state.cityName}&format=json`;

    try {
    let locData = await axios.get(url)
    this.setState({ locationObj: locData.data[0] })

  }
  catch (error) {
    console.log(`there was an error: ${error}`)
    
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
        {this.state.locationObj.display_name &&
          <Container>
            <Row>
              <Col><h2>City Name: {this.state.locationObj.display_name}</h2></Col>
            </Row>
            <Row>
              <Col><h2>Latitude: {this.state.locationObj.lat}</h2></Col>
              <Col><h2>longitude: {this.state.locationObj.lon}</h2></Col>
            </Row>
          </Container>
        }
      </>
    );


  }
}

export default App;
