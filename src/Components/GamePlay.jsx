import React, { useState } from 'react'

import TotalScore  from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import Rules from './Rules';
// import { Button } from '../styled/Button';

const GamePlay = () => {

const resetScore = () =>{
   setScore(0);
}
   const [score , setScore] = useState(0);
   const [selectedNumber, setSelectedNumber] = useState();
   const [currentDice, setCurrentDice] = useState (1);
   const [error,setError] = useState("");

   const [showRules,setShowRules] = useState(false);

  const  generateRandomNumber = (min,max) =>{
    return Math.floor(Math.random()*(max-min)+min);
  };
  
  
  const rolDice = () =>{
     const rendomNumber = generateRandomNumber(1,7);
  
     setCurrentDice((prev)=>rendomNumber)


  if(!selectedNumber){
    setError("You have not selected any number");
    return;
  }
  // setError("");


  if(selectedNumber === rendomNumber){
    setScore((prev)=> prev + rendomNumber);
  }else{
    setScore((prev)=> prev - 2);
  }

  setSelectedNumber(undefined);
          
  };
      
  return (
<MainContainer>
    <div className='top_section'> 
      <TotalScore score = {score} />
      <NumberSelector 
       error={error}
       setError={setError}
      selectedNumber={selectedNumber}
      setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDice   currentDice={currentDice} rolDice={rolDice}/>

      <div className='btns'>
        <button className='button1' onClick={resetScore}>Reset Score</button>
        <button   onClick={() => setShowRules(prev => !prev)} className='button2'>{showRules ? "Hide" : "Show"} Rules</button>
      </div>
    {showRules && <Rules/>}
</MainContainer>  
)
}

export default GamePlay;

const MainContainer = styled.main `

padding-top:70px;

.top_section{
    display:flex;
    justify-content:space-around;
    align-items:end;
}

.btns{
  display:flex;
  flex-direction:column;
  justify-content:center;
  max-width:250px;
  width:3px
  align-items:center;
  margin-left:700px;
  /* background-color: #000000; */
  gap:10px;
  /* background: #000000; */
  border-radius: 5px;
  margin-top:40px;


  
}

.button1{
 border-radius:5px;
 width:150px;
 height:30px;
 background-color:black;
 color:white;
 font-size:20px;
 font-family: cursive;


}
.button1:hover{
  background-color:white;
  color:black;

}

.button2{
  border-radius:5px;
 width:150px;
 height:30px;
 font-size:20px;
 font-family: cursive;

}

.button2:hover{
  background-color:black;
  color:white;
  border:1px solid transparent;

}

`;






