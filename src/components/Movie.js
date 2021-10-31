import React from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


class Movie extends React.Component {


  render() {
    return (
      <>
        {/* <Row > */}

            <Col className="m-3">
          <Card className="m-1" bg='secondary' style={{ width: '20rem', height: '25rem'}} border='dark'>
            <Card.Img style={{ height: '20rem' }} variant="top" src={this.props.movie.backdrop_path} alt={this.props.movie.title} />
              <Card.Body>
                <Card.Title>{this.props.movie.title}</Card.Title>
                <Card.Text>
                  Description: {this.props.movie.overview} <br />
                  Average Votes: {this.props.movie.vote_average} <br />
                  Release Date: {this.props.movie.release_date} <br />
                </Card.Text>
              </Card.Body>
          </Card>
            </Col>

        {/* </Row> */}

      </>
    )
  }
}

export default Movie;
