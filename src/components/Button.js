import styled from 'styled-components';

const Button = styled.a`
  width: 200px;
  padding: 10px 10px;
  color: var(--red);
  font-size: 2rem;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid var(--red);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--red);
    color: var(--white);
  }
`;

export default Button;
