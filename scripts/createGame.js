import React from 'react';
import ReactDOM from 'react-dom';

class CreateGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <div>
        <h1>Create a game room!</h1>
      </div>
    );
  }
}

alert("Hi!");
ReactDOM.render(<CreateGame />, document.getElementById("createGame"));
