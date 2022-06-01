import { render, screen } from "@testing-library/react"
import RandomButton from "."

test('RandomButton component renders a button', () => {
  render(<RandomButton />)

  const buttonElement = screen.getByRole('button')

  expect(buttonElement).toBeInTheDocument()
})