import React from 'react'
import styled from 'styled-components';
import { Button } from '../styled/Button';

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img  src='/Images/dices.png' />
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            {/* <Button>Play Now</Button> */}
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
 max-width:1180px;
 display:flex;
 height:100vh;
 margin:0 auto;
 align-items:center;


 .content{
    h1{
    font-size:96px;
    white-space:nowrap;
}
}
`;



