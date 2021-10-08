import React from 'react';
import Alert from 'react-bootstrap/Alert'

class AlertDismissible extends React.Component {

  render() {
    return (
      <>
        <Alert variant="danger" dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            {this.props.errorCode}
          </p>
        </Alert>
      </>

    )
  }

}


export default AlertDismissible;