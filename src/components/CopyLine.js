import styled from "styled-components"
import React, {useState, useEffect} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {IoCheckmarkCircleOutline} from 'react-icons/io5'
const Wrapper = styled(CopyToClipboard)`
position: fixed;
margin-top: 12.5rem;
`
const Ico = styled(IoCheckmarkCircleOutline)``
const Copy = styled.div`
width: 5rem;
height: 1.5rem;
background-color: var(--color-ico);
position: fixed;

border-radius: 0.2rem;
text-align: center;
color:  var(--color-card);
margin-top: 6.5rem;
margin-left: 11.4rem;
`
const CopyLine = ({text}) => {
    const [copy, setCopy] = useState(false)
    
    return(
    
        <Wrapper text = {text}  >
            
           <div onClick = {()=>{setCopy(!copy); setTimeout(()=>setCopy(false),2000)}}>
           <svg  width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path className="svg" fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
           {copy ? (<Copy>Copied <Ico/></Copy> )
           : null}
           </div>
        </Wrapper>

    )
}
export default CopyLine