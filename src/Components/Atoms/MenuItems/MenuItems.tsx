import { useTransition } from 'react-spring';
import * as S from './menu-items.styles';

interface Iprops {
  isVisible: boolean;
}

const MenuItems = ({ isVisible }: Iprops) => {
  const transition = useTransition(isVisible, {
    from: { y: -1000 },
    enter: { y: 0 },
    leave: { transform: 'translateY(-1000px)' },
  });
  return (
    <>
      {transition((style, item) => item && <S.DarkOverlay style={style} />)}
      {transition(
        (style, item) =>
          item && (
            <S.Container style={style}>
              <S.MenuItemsContainer>
                <h1>About</h1>
                <h1>Projects</h1>
                <h1>Resume</h1>
                <h1>Contact</h1>
              </S.MenuItemsContainer>
            </S.Container>
          ),
      )}
    </>
  );
};

export default MenuItems;
