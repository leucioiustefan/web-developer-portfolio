import * as S from './contact-page-text.styles';

const ContactPageText = () => (
  <S.Text>
    <S.Title>Get in touch</S.Title>
    <S.Subtitle>
      If you want to talk to me about a react project collaboration or just say
      hi,
    </S.Subtitle>
    <S.Subtitle>
      fill up the awesome form below or send an email to{' '}
      <S.Anchor title='Personal email' href='mailto:leucioiu.stefan@yahoo.com'>
        leucioiu.stefan@yahoo.com
      </S.Anchor>{' '}
      and let's get in touch.
    </S.Subtitle>
  </S.Text>
);
export default ContactPageText;
