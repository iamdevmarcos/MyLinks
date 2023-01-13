import React from 'react'
import { Gi3DGlasses } from 'react-icons/gi'

import { render, screen } from '@testing-library/react'

import SocialLink from './SocialLink'

describe('<SocialLink />', () => {
  it('should render correctly', () => {
    render(
      <div data-testid="social-link">
        <SocialLink href="https://google.com" icon={Gi3DGlasses} />
      </div>
    )

    const myLink = screen.getByTestId('social-link').firstElementChild

    expect(myLink).toBeInTheDocument()
    expect(myLink).toHaveProperty('href', 'https://google.com/')
  })
})
