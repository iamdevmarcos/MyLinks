import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import Link from './Link'

describe('<Link />', () => {
  it('should render correctly', () => {
    render(<Link href="https://github.com/iamdevmarcos" title="Github" />)

    expect(screen.getByText(/github/i)).toBeInTheDocument()
    expect(screen.getByText(/github/i).parentElement).toHaveProperty(
      'href',
      'https://github.com/iamdevmarcos'
    )

    expect(fireEvent.click(screen.getByText(/github/i))).toBeTruthy()
  })
})
