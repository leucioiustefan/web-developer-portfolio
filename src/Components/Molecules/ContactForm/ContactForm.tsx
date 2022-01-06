import { useState } from 'react';
import { renderInputEnum } from '../../../utils';
import InputNameImage from '../../Atoms/InputNameImage/InputNameImage';
import CustomButton from '../../Atoms/CustomButton/CustomButton';
import * as S from './contact-form.styles';

const ContactForm = () => {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [renderInput, setRenderInput] = useState<string>(renderInputEnum.name);
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleInputRender = () => {
    switch (renderInput) {
      case renderInputEnum.name:
        return (
          <>
            <S.Label htmlFor='name' isTyping={isTyping}>
              Enter your name
            </S.Label>
            <S.Input
              value={value}
              type='text'
              id='name'
              onChange={e => {
                setIsTyping(true);
                setValue(e.target.value);
              }}
            />
            <CustomButton
              btnType='submit'
              clicked={() => {
                setValue('');
                handleInputRender();
                setRenderInput('email');
                setIsTyping(false);
              }}
            >
              Next
            </CustomButton>
          </>
        );
      case renderInputEnum.email:
        return (
          <>
            <S.Label htmlFor='email' isTyping={isTyping}>
              Now your email
            </S.Label>
            <S.Input
              value={value}
              type='text'
              id='email'
              onChange={e => {
                setIsTyping(true);
                setValue(e.target.value);
              }}
            />
            <CustomButton
              btnType='button'
              clicked={() => {
                setValue('');
                handleInputRender();
                setRenderInput('message');
                setIsTyping(false);
              }}
            >
              Next
            </CustomButton>
          </>
        );
      case renderInputEnum.message:
        return (
          <>
            <S.Label htmlFor='message' isTyping={isTyping}>
              Enter your message
            </S.Label>
            <S.Input
              value={value}
              type='text'
              id='message'
              onChange={e => {
                setIsTyping(true);
                setValue(e.target.value);
              }}
            />
            <CustomButton
              btnType='button'
              clicked={() => {
                setValue('');
                handleInputRender();
                setIsTyping(false);
              }}
            >
              Next
            </CustomButton>
          </>
        );
    }
  };

  return (
    <S.Form autoComplete='off' onSubmit={handleSubmit}>
      <S.IconWrapper>
        <InputNameImage />
      </S.IconWrapper>
      {handleInputRender()}
      <CustomButton btnType='submit' clicked={() => console.log('clicked')}>
        Submit your message
      </CustomButton>
    </S.Form>
  );
};

export default ContactForm;
