import * as React from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import {useState} from 'react';

let numberToGuess= getRandomInt(0, 10);
  console.log("The number to guess is", numberToGuess);

function getRandomInt(min, max) {
   min = Math.ceil(min);
  max = Math.floor(max);
  let final= Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  return final;
} 

const App= () => {
  const [guess, setGuess] = useState(0);

  const handleChange = (event) => {
    setGuess(event.target.value);
  }

  const handleClick = () => {
    console.log("button clicked the current guess is", guess);
    if (parseInt(guess)===numberToGuess){
      console.log("The guess was correct");
    } else {
      console.log("The guess was wrong");
    }
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
