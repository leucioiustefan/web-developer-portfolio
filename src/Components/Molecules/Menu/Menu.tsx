import { useState } from 'react';
import MenuItems from '../../Atoms/MenuItems/MenuItems';
import * as S from './menu.styles';

const Menu = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <S.Menu active={isActive} onClick={() => setIsActive(!isActive)}>
        <S.MiddleLine />
      </S.Menu>
      <MenuItems isVisible={isActive} />
    </>
  );
};

export default Menu;
