import React from 'react';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


class CitySearch extends React.Component {

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
      </>
    );
  }
}

export default CitySearch;