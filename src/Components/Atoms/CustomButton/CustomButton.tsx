import * as S from './custom-button.styles';

interface Iprops {
  children: string;
  btnType: 'button' | 'submit' | 'reset' | undefined;
  clicked?: any;
  disabeled?: any;
}

const CustomButton = ({ children, btnType, clicked, disabeled }: Iprops) => {
  return (
    <S.Button type={btnType} onClick={clicked} disabled={disabeled}>
      <S.Inner disabled={disabeled}>{children}</S.Inner>
    </S.Button>
  );
};

export default CustomButton;
