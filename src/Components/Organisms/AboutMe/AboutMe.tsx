import Overlay from '../../Molecules/Overlay/Overlay';
import SocialMedia from '../../Molecules/SocialMedia/SocialMedia';
import AboutMeInfo from '../../Molecules/AboutMeInfo/AboutMeInfo';
import PageControl from '../../Atoms/PageControl/PageControl';
import ViewCode from '../../Atoms/ViewCode/ViewCode';
import Menu from '../../Molecules/Menu/Menu';
import * as S from './about-me.styles';

const AboutMe = () => {
  return (
    <>
      <Overlay />
      <S.Container>
        <Menu />
        <SocialMedia />
        <AboutMeInfo />
        <PageControl navigate='/projects' position='relative' left='-5%' />
        <ViewCode />
      </S.Container>
    </>
  );
};

export default AboutMe;
