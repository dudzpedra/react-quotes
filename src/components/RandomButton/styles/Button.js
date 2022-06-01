import styled from "styled-components";

export const ButtonWrapper = styled.button`
  border: 1px solid;
  background-color: transparent;
  color: #fff;
  font-family: inherit;
  width: 20%;
  margin: 1rem auto 0;
  padding: 1rem;
  box-shadow: 0 0 6px 1px;
  cursor: pointer;
  transform: scale(1);
  transition: all .2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  &:hover {
    background: #fff;
    color: #222;
    font-weight: 700;
  }
  &:active {
    transform: scale(0.97);
  }
`