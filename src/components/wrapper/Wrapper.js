import styled from 'styled-components';

export default styled.div`
  width: ${props => props.size};
  background-color: ${props => props.backgroundColor};
  margin-left: ${props => props.marginLeft};
`;
