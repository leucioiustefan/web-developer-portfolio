import ContactForm from '../../Molecules/ContactForm/ContactForm';
import ContactPageText from '../../Atoms/ContactPageText/ContactPageText';
import Menu from '../../Molecules/Menu/Menu';
import Overlay from '../../Molecules/Overlay/Overlay';
import * as S from './contact.styles';
import ArrowLeft from '../../Atoms/ArrowLeft/ArrowLeft';

const Contact = () => {
  return (
    <>
      <Overlay />
      <S.Container>
        <Menu />
        <div>
          <ContactPageText />
          <ContactForm />
        </div>
        <ArrowLeft
          navigate='/projects'
          position='absolute'
          top='45%'
          left='3%'
        />
      </S.Container>
    </>
  );
};

export default Contact;
