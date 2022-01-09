import { useState } from 'react';
import PersonalWebsite from '../../Atoms/PersonalWebsite/PersonalWebsite';
import Menu from '../../Molecules/Menu/Menu';
import ShowTechUsed from '../../Atoms/ShowTechUsed/ShowTechUsed';
import Overlay from '../../Molecules/Overlay/Overlay';
import * as S from './projects.styles';
import PageControl from '../../Atoms/PageControl/PageControl';
import ProjectsPageText from '../../Atoms/ProjectsPageText/ProjectsPageText';
import ArrowLeft from '../../Atoms/ArrowLeft/ArrowLeft';
const Projects = () => {
  const [showTech, setShowTech] = useState(false);
  return (
    <>
      <Overlay />
      <S.Container>
        <Menu />
        <ProjectsPageText />
        <S.Project
          to='/'
          onMouseEnter={() => setShowTech(true)}
          onMouseLeave={() => setShowTech(false)}
        >
          <PersonalWebsite />
          <S.Name>Personal Website</S.Name>
          <ShowTechUsed show={showTech} />
        </S.Project>
        <PageControl
          navigate='/contact'
          position='absolute'
          left='93%'
          top='75%'
        />
        <ArrowLeft navigate='/' position='absolute' top='75%' left='3%' />
      </S.Container>
    </>
  );
};

export default Projects;
