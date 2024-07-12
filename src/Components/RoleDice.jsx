import React, { useState } from 'react'
import styled from 'styled-components';


const RoleDice = ({rolDice, currentDice}) => {





  return (
    <DiceContainer>
      <div className='dice' onClick={rolDice}>
           <img src= {`/Images/dice_${currentDice}.png`} alt='Dice_1' />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
      margin-top:48px;
      display:flex;
      flex-direction:column;
      align-items:center;

      p{
        font-size:20px;
      }

      .dice{
        cursor:pointer;
      }
`;