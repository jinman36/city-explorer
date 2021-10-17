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
import Movie from './components/Movie'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      locationObj: {},
      map: {},
      errorCode: {},
      errorAlert: false,
      weather: [],
      movies: [],
      movieBar: false
    }
  }

  onErrorClose = () => {
    this.setState({ errorAlert: false })
  }

  onMovieClose = () => {
    this.setState({ movieBar: false })
  }


  getLocation = async () => {
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.cityName}&format=json`;

    try {
      let locData = await axios.get(url)
      let oneObject = locData.data[0];
      this.setState({ locationObj: oneObject })

      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${oneObject.lat},${oneObject.lon}&zoom=13&size=480x480`
      this.setState({ map: mapUrl })
      this.getWeather()
    }
    catch (error) {
      console.log(`there was an App.js error: ${error}`)
      this.setState({ errorCode: error.message })
      this.setState({ errorAlert: true })
    };
  }

  getWeather = async () => {
    let weatherUrl = `http://localhost:3001/weather?lat=${this.state.locationObj.lat}&lon=${this.state.locationObj.lon}&city=${this.state.cityName}`

    try {
      let weatherData = await axios.get(weatherUrl)
      let weatherObject = weatherData.data
      this.setState({ weather: weatherObject })
    }
    catch (error) {
      console.log(`there was an error with the weather cell: ${error}`)
      this.setState({ errorCode: error.message })
      this.setState({ errorAlert: true })

    };
  }

  getMovies = async () => {
    let movieURL = `http://localhost:3001/movies?city=${this.state.cityName}`

    try {
      let movieData = await axios.get(movieURL);
      // console.log(movieData.data)
      let movieArr = movieData.data
      this.setState({ movies: movieArr })
    }
    catch (error) {
      console.log(`there was an error with the movie cell: ${error}`)
      this.setState({ errorCode: error.message })
      this.setState({ errorAlert: true })
    }
  }

  render() {
    // console.log(this.state.movies)
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

        <AlertDismissible
          errorCode={this.state.errorCode}
          errorAlert={this.state.errorAlert}
          onErrorClose={this.onErrorClose} />
        {this.state.locationObj.display_name &&
          <Container>
            <Row>
              <Col><h1>{this.state.locationObj.display_name}</h1></Col>
            </Row>
            <LatLong latLong={this.state.locationObj} />
            <Row>
              <Col><Map map={this.state.map} /></Col>
            </Row>

            <Row>
              <Button onClick={this.getMovies}>See Movies About {this.state.cityName}!
              </Button>
              {this.state.movies.length > 0 &&
                <Movie
                  movies={this.state.movies} />
              }
            </Row>




            <Col>
              {this.state.weather.length > 0 &&
              <Weather weather={this.state.weather} />
              }
            </Col>
          </Container>
        }
      </>
    );
  }
}

export default App;
