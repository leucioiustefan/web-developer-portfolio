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
                <S.StyledLink to='/'>About</S.StyledLink>
                <S.StyledLink to='/projects'>Projects</S.StyledLink>
                <S.StyledLink to='/resume'>Resume</S.StyledLink>
                <S.StyledLink to='/contact'>Contact</S.StyledLink>
              </S.MenuItemsContainer>
            </S.Container>
          ),
      )}
    </>
  );
};

export default MenuItems;
