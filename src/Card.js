import styled from 'styled-components'
import axios from 'axios'
import React, {useEffect,useState} from 'react'
import ChangeAdvice from './ChangeAdvice'
import CopyLine from './CopyLine'

const Wrapper = styled.div`
margin: auto;
margin-top: 40vh;
background-color: var(--color-card);
width: 29rem;
    height: 16rem;
    padding: 2rem;
    
display: flex;
flex-direction: column;
align-items: center;
border-radius: var(--radii);

@media(min-width: 767px){
margin-top: 25vh;
}
`
const AdviceNumber = styled.h1`
color: var(--color-ico);
font-family: var(--family-h1);
text-transform: uppercase;
letter-spacing: 0.3rem;
font-size: 16px;

`
const SomeAdvice = styled.p`
color: var(--color-text);
font-family: var(--family-quote);
font-weight: var(--fw-bold);
font-size: var(--fs-md);
text-align: center;
`

const Card = () => {
    const [change, setChange] = useState('');
    const [number, setNumber] = useState('')
    const [advice, setAdvice] = useState('');

    useEffect(()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then(({data})=>
        {
            setAdvice(data.slip.advice);
            setNumber(data.slip.id);
        }
        )
    },[advice,change])
  return (
    <Wrapper className="App">
       <AdviceNumber>Advice #{number}</AdviceNumber>
       <SomeAdvice>"{advice}"</SomeAdvice>
       <CopyLine text = {advice}></CopyLine>
       <ChangeAdvice onClick = {(e)=>setChange(e)}></ChangeAdvice>
    </Wrapper>
  );
}

export default Card;
