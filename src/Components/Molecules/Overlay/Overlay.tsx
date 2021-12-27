import { useState, useEffect } from 'react';
import { Logo } from '../../Atoms/Logo/Logo';
import * as S from './overlay-styles';

const Overlay = () => {
  const [timer, setTimer] = useState<number>(2);

  //Timer with interval cleanup on dismount
  useEffect(() => {
    const interval: any = setInterval(() => {
      if (timer) {
        const next = timer - 1;
        if (next === 0) return setTimer(0);
        return setTimer(next);
      }
      return clearInterval(interval);
    }, 1000);
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
