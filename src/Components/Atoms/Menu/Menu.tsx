import { useState } from 'react';
import * as S from './menu.styles';

const Menu = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <S.Menu isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
      <S.MiddleLine />
    </S.Menu>
  );
};

export default Menu;
