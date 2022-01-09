import * as S from './arrow-left-styles';

interface Iprops {
  navigate: string;
  position: string;
  left: string;
  top: string;
}

const ArrowLeft = ({ navigate, position, left, top }: Iprops) => {
  return (
    <S.ArrowLeft to={navigate} position={position} left={left} top={top}>
      <S.Empty />
    </S.ArrowLeft>
  );
};

export default ArrowLeft;
