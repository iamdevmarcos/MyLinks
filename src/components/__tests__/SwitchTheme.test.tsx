import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'

import SwitchTheme from '../SwitchTheme'

describe('<SwitchTheme />', () => {
  it('should render correctly', () => {
    render(
      <div data-testid="toggle-theme">
        <SwitchTheme />
      </div>
    )

    const element = screen.getByTestId(/toggle-theme/i).firstElementChild!
    expect(fireEvent.click(element)).toBeTruthy()
  })
})
