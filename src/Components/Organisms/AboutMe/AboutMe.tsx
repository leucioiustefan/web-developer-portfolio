import Overlay from '../../Molecules/Overlay/Overlay';
import SocialMedia from '../../Molecules/SocialMedia/SocialMedia';
import AboutMeInfo from '../../Molecules/AboutMeInfo/AboutMeInfo';
import PageControl from '../../Atoms/PageControl/PageControl';
import ViewCode from '../../Atoms/ViewCode/ViewCode';
import * as S from './about-me.styles';

const AboutMe = () => {
  return (
    <>
      <Overlay />
      <S.Container>
        <SocialMedia />
        <AboutMeInfo />
        <PageControl />
        <ViewCode />
      </S.Container>
    </>
  );
};

export default AboutMe;
