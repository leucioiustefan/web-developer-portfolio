import * as S from './view-code.styles';

const ViewCode = () => {
  return (
    <S.Button>
      <S.Anchor
        href='https://github.com/leucioiustefan/web-developer-portfolio'
        target='_blank'
        rel='noreferrer'
      >
        View code on Github
      </S.Anchor>
    </S.Button>
  );
};

export default ViewCode;
