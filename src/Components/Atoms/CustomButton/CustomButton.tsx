import * as S from './custom-button.styles';

interface Iprops {
  children: string;
  btnType: 'button' | 'submit' | 'reset' | undefined;
  clicked: any;
}

const CustomButton = ({ children, btnType, clicked }: Iprops) => {
  return (
    <S.Button type={btnType} onClick={clicked}>
      <S.Inner>{children}</S.Inner>
    </S.Button>
  );
};

export default CustomButton;
