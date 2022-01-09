import * as S from './page-control.styles';

interface Iprops {
  navigate: string;
  position: string;
  left: string;
  top?: any;
}

const PageControl = ({ navigate, position, left, top }: Iprops) => (
  <S.Arrow to={navigate} position={position} left={left} top={top}>
    <S.Empty />
  </S.Arrow>
);

export default PageControl;
