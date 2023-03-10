import logoImg from '../../assets/logo.svg';
import { ContainerTitle, HeaderContainer, HeaderContent, NewTransactionButton } from './styes';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ContainerTitle>
          <img src={logoImg} alt="" />
          <h1>DT Money</h1>
        </ContainerTitle>

        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}