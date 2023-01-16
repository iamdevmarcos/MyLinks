import React from 'react'

import { render, screen } from '@testing-library/react'

import Wrapper from '../Wrapper'

describe('<Wrapper />', () => {
  it('should render correctly', () => {
    render(
      <Wrapper>
        <h1>Some heading</h1>
      </Wrapper>
    )

    expect(
      screen.getByRole('heading', { name: /some heading/i })
    ).toBeInTheDocument()
  })
})
