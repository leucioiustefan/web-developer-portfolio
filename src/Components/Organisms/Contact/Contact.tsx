import ContactForm from '../../Molecules/ContactForm/ContactForm';
import ContactPageText from '../../Atoms/ContactPageText/ContactPageText';
import Menu from '../../Molecules/Menu/Menu';
import Overlay from '../../Molecules/Overlay/Overlay';
import * as S from './contact.styles';

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
      </S.Container>
    </>
  );
};

export default Contact;
