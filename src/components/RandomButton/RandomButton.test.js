import { fireEvent, render, screen } from "@testing-library/react"
import RandomButton from "."

test('RandomButton component renders a button with text', () => {
  render(<RandomButton>Test</RandomButton>)

  const buttonElement = screen.getByText('Test')

  expect(buttonElement).toBeInTheDocument()
})

test('callback works when button is clicked', () => {
  const callback = jest.fn()

  render(<RandomButton onClick={callback}>Test</RandomButton>)

  const buttonElement = screen.getByRole('button')

  fireEvent.click(buttonElement)
  fireEvent.click(buttonElement)

  expect(callback).toHaveBeenCalledTimes(2)
})

