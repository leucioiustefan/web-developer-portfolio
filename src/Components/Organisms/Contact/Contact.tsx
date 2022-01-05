import ContactForm from '../../Molecules/ContactForm/ContactForm';
import Menu from '../../Molecules/Menu/Menu';
import Overlay from '../../Molecules/Overlay/Overlay';
import * as S from './contact.styles';

const Contact = () => {
  return (
    <>
      <Overlay />
      <S.Container>
        <Menu />
        <ContactForm />
      </S.Container>
    </>
  );
};

export default Contact;
