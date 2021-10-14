import React from 'react';
import './App.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AlertDismissible from './components/AlertDismissible';
import Map from './components/Map';
import LatLong from './components/LatLong.js'
import Weather from './components/Weather'
// import CitySearch from './components/CitySearch';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      locationObj: {},
      map: {},
      errorCode: {},
      errorAlert: false,
      weather: {}
    }
  }

  onErrorClose = () => {
    this.setState({ errorAlert: false })
  }


  getLocation = async () => {
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.cityName}&format=json`;

    try {
      let locData = await axios.get(url)
      // console.log(locData)
      let oneObject = locData.data[0];
      // console.log(oneObject)
      this.setState({ locationObj: oneObject })

      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${oneObject.lat},${oneObject.lon}&zoom=14&size=480x480`
      this.setState({ map: mapUrl })

      let weatherUrl = `localhost:3001/weather?searchQuery=${this.state.cityName}`
      this.setState({weather: weatherUrl})
      console.log(this.state.weather)
    }


    catch (error) {
      console.log(`there was an App.js error: ${error}`)
      this.setState({ errorCode: error.message })
      this.setState({ errorAlert: true })
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
        {/* <CitySearch search={this.state.cityName} /> */}
        <AlertDismissible
          errorCode={this.state.errorCode}
          errorAlert={this.state.errorAlert}
          onErrorClose={this.onErrorClose}/>
        {this.state.locationObj.display_name &&
          <Container>
            <Row>
              <Col><h1>{this.state.locationObj.display_name}</h1></Col>
            </Row>
            <LatLong latLong={this.state.locationObj} />
            <Row>
            <Col><Map map={this.state.map} /></Col>
            <Col>
            <Weather 
            weather={this.state.weather}/> 
            </Col>
            </Row>
          </Container>
        }
      </>
    );
  }
}

export default App;
