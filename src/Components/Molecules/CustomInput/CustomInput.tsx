import { SyntheticEvent } from 'react';
import CustomButton from '../../Atoms/CustomButton/CustomButton';
import * as S from './custom-input.styles';

interface Iprops {
  id: string;
  icon?: JSX.Element;
  name: string;
  isTyping?: boolean | any;
  setIsTyping?: any;
  setVal?: any;
  setRenderInput?: any;
  val: string;
  type: string;
  innerText?: string;
  isDisabled?: any;
}

const CustomInput = ({
  id,
  icon,
  name,
  isTyping,
  setIsTyping,
  val,
  setVal,
  setRenderInput,
  type,
  innerText,
  isDisabled,
}: Iprops) => {
  return (
    <>
      <S.IconWrapper>{icon}</S.IconWrapper>
      <S.Label htmlFor={name} isTyping={isTyping}>
        {innerText}
      </S.Label>
      <S.Input
        name={name}
        value={val}
        type={type}
        id={id}
        onChange={(e: SyntheticEvent) => {
          setIsTyping(true);
          setVal((e.target as HTMLInputElement).value);
        }}
      />
      <CustomButton
        disabled={isDisabled}
        btnType='button'
        clicked={() => {
          setRenderInput();
          setIsTyping(false);
        }}
      >
        Next
      </CustomButton>
    </>
  );
};

export default CustomInput;
