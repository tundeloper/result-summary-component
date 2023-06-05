import React from 'react'
import styled from 'styled-components'
import { Button, Card, H2 } from '../global/container'

interface prop {
    className? : string
}

const Summary = ({className}: prop) => {
  return (
      <div className={className}>
          <H2 style={{ textAlign: 'left', }}>Summary</H2>
          <div className='summary'>
              <Card color='#f7e2d8'>
                  <div>
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#F55" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"/></svg></span>
                      <span style={{color: "rgb(246 118 4)"}}>Reaction</span>
                  </div>
                  <span>80 / 100</span>
              </Card>
              <Card color='#f7f7d8'>
                  <div>
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"/><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"/><path stroke="#FFB21E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"/></svg></span>
                      <span style={{color: "#dd9c24"}}>Memory</span>
                  </div>
                  <span>92 / 100</span>
            </Card>
            <Card color='#d8f7d8'>
                  <div>
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#00BB8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"/></svg></span>
                      <span style={{color: "rgb(36 221 91)"}}>Verbal</span>
                  </div>
                  <span>61 / 100</span>
            </Card>
            <Card color='#d8d8f7'>
                <div>
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/><path stroke="#1125D6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"/></svg></span>
                      <span style={{color: "rgb(52 96 244)"}}>Visual</span>
                  </div>
                  <span>72 / 100</span>
            </Card>
          </div>
          
          <Button>Continue</Button>
    </div>
  )
}

export const StyledSummary = styled(Summary)`
    width: 16rem;
    color: #111010;
    padding: 0 1rem;
    padding-bottom: 1rem;
    .summary {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1.5rem;
        font-weight: 600;
    }
    /* background-color: grey; */
    @media (max-width: ${(props) => `${props.theme.screen.phone}px`}) {
        width: auto;
    }

`
