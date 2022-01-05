import { useState } from 'react';
import User from '../../Atoms/User/User';
import CustomButton from '../../Atoms/CustomButton/CustomButton';
import * as S from './contact-form.styles';

const ContactForm = () => {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <S.Container>
      <S.Text>
        <S.Title>Get in touch</S.Title>
        <S.Subtitle>
          If you want to talk to me about a react project collaboration or just
          say hi,
        </S.Subtitle>
        <S.Subtitle>
          fill up the awesome form below or send an email to{' '}
          <S.Anchor
            title='Personal email'
            href='mailto:leucioiu.stefan@yahoo.com'
          >
            leucioiu.stefan@yahoo.com
          </S.Anchor>{' '}
          and let's get in touch.
        </S.Subtitle>
      </S.Text>
      <S.Form autoComplete='off'>
        <S.IconWrapper>
          <User />
        </S.IconWrapper>
        <S.Label htmlFor='name' isTyping={isTyping}>
          Fill with your name
        </S.Label>
        <S.Input type='text' id='name' onChange={() => setIsTyping(true)} />
        <CustomButton>Next</CustomButton>
        <CustomButton>Submit your message</CustomButton>
      </S.Form>
    </S.Container>
  );
};

export default ContactForm;
