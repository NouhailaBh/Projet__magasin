import styled from "styled-components";


export const ButtonContainer1 = styled.button`
//margin-left: 58rem;
text-transform:capitalize;
font-size:1.4rem;
background :transparent;
border:0.2rem solid var(--mainRed);
color: var(--mainRed);
border-radius :0.5rem;
padding :0.2rem 0.5 rem;
margin:0.5rem 0.5rem 0.8rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--mainRed);
    color:var(--mainWhite);
}
&:focus{
    outline: none;
}
`;