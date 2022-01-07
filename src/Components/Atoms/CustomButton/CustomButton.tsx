import * as S from './custom-button.styles';

interface Iprops {
  children: string;
  btnType: 'button' | 'submit' | 'reset' | undefined;
  clicked?: any;
  disabled?: any;
}

const CustomButton = ({ children, btnType, clicked, disabled }: Iprops) => (
  <S.Button type={btnType} onClick={clicked} disabled={disabled}>
    <S.Inner disabled={disabled}>{children}</S.Inner>
  </S.Button>
);

export default CustomButton;
