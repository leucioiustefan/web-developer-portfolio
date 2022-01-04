import Typist from 'react-typist';
import * as S from './about-me-info.styles';

const AboutMeInfo = () => {
  return (
    <S.Container>
      <Typist
        startDelay={2000}
        avgTypingDelay={25}
        stdTypingDelay={1}
        cursor={{ show: false }}
      >
        <h2>Hello, my name is Stefan Leucioiu.</h2>
      </Typist>
      <Typist
        startDelay={2700}
        avgTypingDelay={20}
        stdTypingDelay={0}
        cursor={{ show: false }}
      >
        <h3>
          I am a front end software developer with a focus on UI/UX using the
          react library.
        </h3>
      </Typist>

      <Typist
        startDelay={4500}
        avgTypingDelay={20}
        stdTypingDelay={0}
        cursor={{ show: false }}
      >
        <h3>
          I am looking for a full time remote collaboration with react,
          javascript/typescript, css, graphql/rest.
        </h3>
      </Typist>

      <Typist
        startDelay={6500}
        avgTypingDelay={20}
        stdTypingDelay={10}
        cursor={{ show: false }}
      >
        <h3>
          Remotely available UTC−1 to UTC+8.{' '}
          <S.Anchor
            title='Contact Email'
            href='mailto:leucioiu.stefan@yahoo.com'
            rel='noreferrer'
          >
            leucioiu.stefan@yahoo.com
          </S.Anchor>
          .
        </h3>
      </Typist>
    </S.Container>
  );
};

export default AboutMeInfo;
