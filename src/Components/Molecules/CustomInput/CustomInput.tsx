import * as S from './custom-input.styles';
import CustomButton from '../../Atoms/CustomButton/CustomButton';
import { SyntheticEvent } from 'react';

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
  isDisabeled?: any;
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
  isDisabeled,
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
        disabeled={isDisabeled}
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
