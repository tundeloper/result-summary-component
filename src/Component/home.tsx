import React from 'react'
import { DivContainer } from '../global/container'
import { StyledResult } from './Result'
import {StyledSummary} from './Summary'
export const Home = () => {
  return (
      <div>
          <DivContainer>
              <div className='container'>
                  <StyledResult />
                  <StyledSummary />
              </div>
          </DivContainer>
    </div>
  )
}

