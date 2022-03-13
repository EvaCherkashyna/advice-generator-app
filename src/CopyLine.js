import styled from "styled-components"
import {CopyToClipboard} from 'react-copy-to-clipboard';
const Wrapper = styled(CopyToClipboard)`
position: fixed;
margin-top: 13rem;
`

const CopyLine = ({text}) => {
    return(
        <Wrapper text = {text}>
            <svg className="svg" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path className="svg" fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        </Wrapper>
    )
}
export default CopyLine