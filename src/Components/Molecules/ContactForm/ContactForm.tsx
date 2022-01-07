import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { renderInputEnum } from '../../../utils';
import InputNameIcon from '../../Atoms/InputNameIcon/InputNameIcon';
import InputEmailIcon from '../../Atoms/InputEmailIcon/InputEmailIcon';
import InputMessageIcon from '../../Atoms/InputMessageIcon/InputMessageIcon';
import CustomButton from '../../Atoms/CustomButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import * as S from './contact-form.styles';

const ContactForm = () => {
  const formRef = useRef<any>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [renderInput, setRenderInput] = useState<string>(renderInputEnum.name);
  const [isName, setIsName] = useState<string>('');
  const [isEmail, setIsEmail] = useState<string>('');
  const [isMessage, setIsMessage] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_zoz2z4d',
        'template_nkp1wrl',
        formRef.current,
        'user_FCFUEAwRnz1lZ0oaIZYJA',
      )
      .then(
        result => {
          setIsName('');
          setIsEmail('');
          setIsMessage('');
          setIsTyping(false);
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
  };

  return (
    <S.Form autoComplete='off' onSubmit={handleSubmit} ref={formRef}>
      {renderInput === 'name' && (
        <CustomInput
          id='name'
          icon={<InputNameIcon />}
          name='name'
          isTyping={isTyping}
          setIsTyping={setIsTyping}
          val={isName}
          setIsName={setIsName}
          setRenderInput={() => setRenderInput(renderInputEnum.email)}
          type='text'
          innerText='enter your name'
        />
      )}
      {renderInput === 'email' && (
        <CustomInput
          id='email'
          icon={<InputEmailIcon />}
          name='email'
          isTyping={isTyping}
          setIsTyping={setIsTyping}
          val={isEmail}
          setIsName={setIsEmail}
          setRenderInput={() => setRenderInput(renderInputEnum.message)}
          type='email'
          innerText='now your email'
        />
      )}
      {renderInput === 'message' && (
        <CustomInput
          id='message'
          icon={<InputMessageIcon />}
          name='message'
          isTyping={isTyping}
          setIsTyping={setIsTyping}
          val={isMessage}
          setIsName={setIsMessage}
          type='text'
          innerText='now write your awesome message'
        />
      )}
      <CustomButton btnType='submit'>Submit your message</CustomButton>
      <S.FormGhost>
        <CustomInput name='name' val={isName} type='text' id='name' />
        <CustomInput name='email' val={isEmail} type='email' id='email' />
        <CustomInput name='message' val={isMessage} type='text' id='message' />
      </S.FormGhost>
    </S.Form>
  );
};

export default ContactForm;
