import Overlay from '../../Molecules/Overlay/Overlay';
import SocialMedia from '../../Molecules/SocialMedia/SocialMedia';
import AboutMeInfo from '../../Molecules/AboutMeInfo/AboutMeInfo';
import PageControl from '../../Atoms/PageControl/PageControl';
import * as S from './about-me.styles';

const AboutMe = () => {
  return (
    <>
      <Overlay />
      <S.Container>
        <SocialMedia />
        <AboutMeInfo />
        <PageControl />
      </S.Container>
    </>
  );
};

export default AboutMe;
