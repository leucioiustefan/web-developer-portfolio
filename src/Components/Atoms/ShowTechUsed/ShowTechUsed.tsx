import { techUsed } from '../../../utils';
import * as S from './show-tech-used.styles';

interface Iprops {
  show: boolean;
}

const ShowTechUsed = ({ show }: Iprops) => {
  return (
    <S.Container show={show}>
      {techUsed.map(tech => (
        <S.Button>{tech}</S.Button>
      ))}
    </S.Container>
  );
};

export default ShowTechUsed;
