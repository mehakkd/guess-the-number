import * as React from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import {useState} from 'react';

const App= () => {
  const [guess, setGuess] = useState(0);

  const handleChange = (event) => {
    setGuess(event.target.value);
    console.log("value of guess has been changed");
  }

  const handleClick = () => {
    console.log("button clicked the current guess is", guess);
  }


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
          onChange={handleChange}
          value={guess}
          color="secondary" focused
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br></br>
        <br></br>
        <button onClick= {handleClick} ><b>Guess</b></button>
    </div>
  );
}

export default App;
