import styled from "styled-components";

const Wrapper = styled.div`
:hover{
    box-shadow: var(--shadow)
}
width: 3rem;
height: 3rem;
background-color: var(--color-ico);
border-radius: 3rem;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
margin-top: 16.5rem;
`

const ChangeAdvice = ({ onClick }) => {
    return (

        <Wrapper className="ChangeAdvice" onClick={onClick}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" ><path onClick={onClick} d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
        </Wrapper>
    );
}

export default ChangeAdvice;
