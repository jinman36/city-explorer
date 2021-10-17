import React from 'react';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'


class Movie extends React.Component {
  
  render() {
    return (
      <>
        <Row className="m-3 justify-content-center ">
         <Card className="m-1" bg='secondary' style={{ width: '25rem' }} border='dark'>
          <Card.Img style={{ height: '20rem' }} variant="top" src={this.props.movies[0].image} />
          <Card.Body>
            <Card.Title>{this.props.movies[0].title}</Card.Title>
            <Card.Text>
              Description: {this.props.movies[0].overview} <br />
              Average Votes: {this.props.movies[0].average_votes} <br />
              Release Date: {this.props.movies[0].release_date} <br />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-1" bg='secondary' style={{ width: '25rem' }} border='dark'>
          <Card.Img style={{ height: '20rem' }} variant="top" src={this.props.movies[1].image} />
          <Card.Body>
            <Card.Title>{this.props.movies[1].title}</Card.Title>
            <Card.Text>
              Description: {this.props.movies[1].overview} <br />
              Average Votes: {this.props.movies[1].average_votes} <br />
              Release Date: {this.props.movies[1].release_date} <br />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-1" bg='secondary' style={{ width: '25rem' }} border='dark'>
          <Card.Img style={{ height: '20rem' }} variant="top" src={this.props.movies[2].image} />
          <Card.Body>
            <Card.Title>{this.props.movies[2].title}</Card.Title>
            <Card.Text>
              Description: {this.props.movies[2].overview} <br />
              Average Votes: {this.props.movies[2].average_votes} <br />
              Release Date: {this.props.movies[2].release_date} <br />
            </Card.Text>
          </Card.Body>
        </Card>
        </Row>
      </>
    )
  }
}

export default Movie;
