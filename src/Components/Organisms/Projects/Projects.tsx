import { useState } from 'react';
import PersonalWebsite from '../../Atoms/PersonalWebsite/PersonalWebsite';
import Menu from '../../Molecules/Menu/Menu';
import ViewCode from '../../Atoms/ViewCode/ViewCode';
import ShowTechUsed from '../../Atoms/ShowTechUsed/ShowTechUsed';
import * as S from './projects.styles';
const Projects = () => {
  const [showTech, setShowTech] = useState(false);
  return (
    <S.Container>
      <Menu />
      <S.Project
        onMouseEnter={() => setShowTech(true)}
        onMouseLeave={() => setShowTech(false)}
      >
        <PersonalWebsite />
        <S.Name>Personal Website</S.Name>
        <ShowTechUsed show={showTech} />
      </S.Project>
      <ViewCode />
    </S.Container>
  );
};

export default Projects;
