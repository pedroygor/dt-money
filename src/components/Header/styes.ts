import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['white']};
  font-weight: bold;
  border-radius: 6px;
  padding: 0 1.25rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background 0.2s;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 1.625rem;
    color: ${(props) => props.theme['gray-100']};

  }
`;


