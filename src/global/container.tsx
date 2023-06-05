import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;

  .container {
    border-radius: 1.5rem;
    border-top-right-radius: 0;
    box-shadow: 17px 15px 17px -7px rgba(96, 95, 95, 0.431);
    display: flex;
    justify-content: space-between;
 }

 @media (max-width: ${(props) => `${props.theme.screen.phone}px`}) {
    display: block;
    
   .container {
    box-shadow: none;
    border-radius: 0;
    display: block;
   }
  }
`;

export const H2 = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
`
export const H3 = styled.h2`
    font-size: 4rem;
    margin-top: .1rem;
    margin-bottom: 0;
`

export const Card = styled.div<{color?: string}>`
    display: flex;
    justify-content: space-between;
    border-radius: .5rem;
    padding: 1rem;
    background-color: ${props => props.color}; 

    div {
        display: flex;
        gap: .5rem;
    }
`

export const Button = styled.button`
    width: 100%;
    border-radius: 2rem;
    padding: .7rem .5rem;
    background: rgb(57 32 101);
    color: white;
    font-weight: bolder;
    border: none;
    cursor: pointer;
`