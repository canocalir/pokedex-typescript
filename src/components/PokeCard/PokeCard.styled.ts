import styled from "styled-components";

const PokeCardContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #fcfcfc;
    height: 25rem;
    width: 20rem;
    border-radius: 1rem;
    border: 2px solid #a385b1;
`

const PokeCardButton = styled.button`
    border: none;
`

export {PokeCardContainer, PokeCardButton}