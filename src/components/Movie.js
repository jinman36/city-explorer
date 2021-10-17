import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'react-bootstrap/Image'

class Movie extends React.Component {

  render() {
    // let movieArr = this.props.movies.map((element, idx) => 
    // key={idx},
    // title={element.title},
    // overview={element.overview},
    // votes={element.average_votes},
    // popularity={element.popularity},
    // release={element.release_date}
       
    // )
    return (
      <>
      <Row className='d-flex justify-center m-1 border border-info'>
        <h1>Movies</h1>

      {/* <Row>
        {movieArr}
      </Row> */}


        <Row className='justify-center m-1 border border-info'>
          <Col>
            <h1>{this.props.movies[0].title}</h1>
            <h4>{this.props.movies[0].overview}</h4>
            <h4>Average Votes: {this.props.movies[0].average_votes}</h4>
            <h4>Popularity: {this.props.movies[0].popularity}</h4>
            <h4>Release Date: {this.props.movies[0].release_date}</h4>
          </Col>
          <Col>
            <Img src={this.props.movies[0].image} roundedCircle fluid alt='Movie Poster'></Img>
          </Col>
        </Row>

      </Row>
      </>
    )
  }
}

export default Movie;
