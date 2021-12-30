import { useState, useEffect } from 'react';
import { Facebook } from '../../Atoms/Facebook/Facebook';
import { Github } from '../../Atoms/Github/Github';
import { Linkedin } from '../../Atoms/Linkedin/Linkedin';
import * as S from './social-media.styles';

const SocialMedia = () => {
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
    <S.List>
      <S.FollowMe>Follow me</S.FollowMe>
      <S.ListItem slideRight={timer}>
        <S.Anchor
          href='https://www.facebook.com/stefan.leucioiu.1/'
          rel='noreferrer'
          target='_blank'
        >
          <Facebook />
        </S.Anchor>
      </S.ListItem>
      <S.ListItem slideRight={timer}>
        <S.Anchor
          href='https://github.com/leucioiustefan'
          rel='noreferrer'
          target='_blank'
        >
          <Github />
        </S.Anchor>
      </S.ListItem>
      <S.ListItem slideRight={timer}>
        <S.Anchor
          href='https://www.linkedin.com/in/stefan-leucioiu-32b489164/'
          rel='noreferrer'
          target='_blank'
        >
          <Linkedin />
        </S.Anchor>
      </S.ListItem>
    </S.List>
  );
};

export default SocialMedia;
