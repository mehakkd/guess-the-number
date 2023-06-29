import * as React from 'react';
import './App.css';
import TextField from '@mui/material/TextField';

const guess = () => {
  console.log("Hey");
}

function App() {
  return (
    <div className="App">
      <h1>Guess the Number Game</h1>
      <p><b>Try to guess the random number!</b></p>
      <br></br>
      <TextField
          id="outlined-number"
          label="Input Your Guess Here"
          type="number"
          size= "extra-large"
          
          color="secondary" focused
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br></br>
        <br></br>
        <button onClick= {guess} ><b>Guess</b></button>
    </div>
  );
}

export default App;
