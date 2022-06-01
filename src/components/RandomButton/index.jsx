import { ButtonWrapper } from "./styles/Button"
import { string, func } from 'prop-types'

const RandomButton = ({ children, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
}

RandomButton.propTypes = {
  children: string,
  onClick: func
}
export default RandomButton