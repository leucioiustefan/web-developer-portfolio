import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { renderInputEnum } from '../../../utils';
import InputNameIcon from '../../Atoms/InputNameIcon/InputNameIcon';
import InputEmailIcon from '../../Atoms/InputEmailIcon/InputEmailIcon';
import InputMessageIcon from '../../Atoms/InputMessageIcon/InputMessageIcon';
import CustomButton from '../../Atoms/CustomButton/CustomButton';
import CustomInput from '../CustomInput/CustomInput';
import EnteredInformation from '../../Atoms/EnteredInformation/EnteredInformation';
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
          setRenderInput(renderInputEnum.name);
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <EnteredInformation
        yourName={isName}
        yourEmail={isEmail}
        yourMessage={isMessage}
      />
      <S.Form autoComplete='off' onSubmit={handleSubmit} ref={formRef}>
        {renderInput === 'name' && (
          <CustomInput
            id='forName'
            icon={<InputNameIcon />}
            name='forName'
            isTyping={isTyping}
            setIsTyping={setIsTyping}
            val={isName}
            setVal={setIsName}
            setRenderInput={() => setRenderInput(renderInputEnum.email)}
            type='text'
            innerText='enter your name'
            isDisabled={isName.trim() === '' ? true : false}
          />
        )}
        {renderInput === 'email' && (
          <CustomInput
            id='forEmail'
            icon={<InputEmailIcon />}
            name='forEmail'
            isTyping={isTyping}
            setIsTyping={setIsTyping}
            val={isEmail}
            setVal={setIsEmail}
            setRenderInput={() => setRenderInput(renderInputEnum.message)}
            type='email'
            innerText='now your email'
            isDisabled={isEmail.trim() === '' ? true : false}
          />
        )}
        {renderInput === 'message' && (
          <CustomInput
            id='forMessage'
            icon={<InputMessageIcon />}
            name='forMessage'
            isTyping={isTyping}
            setIsTyping={setIsTyping}
            val={isMessage}
            setVal={setIsMessage}
            setRenderInput={setRenderInput}
            type='text'
            innerText='now write your awesome message'
            isDisabled={true}
          />
        )}
        <CustomButton
          btnType='submit'
          disabled={
            renderInput === 'message' && isMessage.trim() !== '' ? false : true
          }
        >
          Submit your message
        </CustomButton>
        <S.FormGhost>
          <CustomInput name='name' val={isName} type='text' id='name' />
          <CustomInput name='email' val={isEmail} type='text' id='email' />
          <CustomInput
            name='message'
            val={isMessage}
            type='text'
            id='message'
          />
        </S.FormGhost>
      </S.Form>
    </>
  );
};

export default ContactForm;
