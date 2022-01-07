import InputNameIcon from '../InputNameIcon/InputNameIcon';
import InputMessageIcon from '../InputMessageIcon/InputMessageIcon';
import InputEmailIcon from '../InputEmailIcon/InputEmailIcon';
import * as S from './entered-information.styles';

interface Iprops {
  yourName: string;
  yourEmail: string;
  yourMessage: string;
}

const EnteredInformation = ({ yourName, yourEmail, yourMessage }: Iprops) => {
  return (
    <S.Container>
      <S.InfoContainer>
        <InputNameIcon />
        <S.Info>{yourName}</S.Info>
      </S.InfoContainer>
      <S.InfoContainer>
        <InputEmailIcon />
        <S.Info>{yourEmail}</S.Info>
      </S.InfoContainer>
      <S.InfoContainer>
        <InputMessageIcon />
        <S.Info>{yourMessage}</S.Info>
      </S.InfoContainer>
    </S.Container>
  );
};

export default EnteredInformation;
