import React from 'react'
import styled from 'styled-components'
import { H2, H3 } from '../global/container'

type props = {
    className?: string
}

 const Result:React.FC<props> = ({className}) => {
  return (
      <div className={className}>
          <H2 className='result'>Your Result</H2>
          <div className='percentage'>
              <div>
              <H3>76</H3>
              <span>of 100 </span>
              </div>
          </div>
          <h2 >Great</h2>
          <p>You score higher than 65% of people who have taken the test </p>
    </div>
  )
 }

export const StyledResult = styled(Result)`
    padding: 0 1rem;
    padding-bottom: 1rem;
    width: 16rem;
    background: linear-gradient(to bottom, rgb(117 24 244), rgb(35 22 219));
    color: white;
    border-radius: 1.5rem;
    

    .result {
        color: #fef2dc;
    }

    .percentage {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
        div {
            background: linear-gradient(to bottom, rgb(35 22 219), rgb(24 29 244 / 8%));
            border-radius: 100%;
            padding: 1rem;
            width: 8rem;
            height: 8rem;
            display: flex;
            justify-content: center;
            flex-direction: column;

        }

        span {
            font-weight: bolder;
            color: #fef2dc;
        }
    }
    p {
        color: #fef2dc;
        font-weight: 600;
    }

    @media (max-width: ${(props) => `${props.theme.screen.phone}px`}) {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        width: auto;
        padding-top: 1rem;

        .result {
            margin-top: -.2rem
        }

        .container {
        box-shadow: none;
        border-radius: 0;
        display: block;
    }
  }
`
