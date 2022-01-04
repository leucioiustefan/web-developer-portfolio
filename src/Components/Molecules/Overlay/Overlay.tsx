import { useState, useEffect } from 'react';
import { Logo } from '../../Atoms/Logo/Logo';
import { countdown } from '../../../utils';
import * as S from './overlay.styles';

const Overlay = () => {
  const [timer, setTimer] = useState<number>(2);

  //Timer with interval cleanup on dismount
  useEffect(() => {
    const interval = countdown(timer, setTimer);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <>
      {timer > 0 && (
        <S.Backdrop>
          <S.ImageCenter>
            <Logo />
          </S.ImageCenter>
        </S.Backdrop>
      )}
    </>
  );
};

export default Overlay;
