import * as S from './custom-button.styles';

interface Iprops {
  children: string;
}

const CustomButton = ({ children }: Iprops) => {
  return (
    <S.Button>
      <S.Inner>{children}</S.Inner>
    </S.Button>
  );
};

export default CustomButton;
