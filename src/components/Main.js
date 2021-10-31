import react from 'react';
import Movie from './Movie';

class Main extends react.Component {
  render() {
    console.log('Main.js :', this.props.movies.results)
    return (
      <>
        {this.props.showItem ? this.props.movies.results.map((movie) => <Movie
          movie={movie}
          key={movie.id} />)
          : <h1>No movies to show</h1>
        }

      </>
    )
  }
}

export default Main;