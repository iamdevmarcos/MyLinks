import React from 'react'

import { render, screen } from '@testing-library/react'

import Profile from './Profile'

describe('<Profile />', () => {
  it('should render correctly', () => {
    render(
      <Profile
        name="John Doe"
        photoUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      />
    )

    expect(
      screen.getByRole('img', {
        name: /avatar/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
  })
})
