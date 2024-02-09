import {
  Container,
  ContainerData,
  ImageAndLinks,
  HelloMessage,
  TextAndButton,
} from './styles';
import { ProfileImage } from '../../profileData/ProfileImage';
import { SocialLinks } from '../../linksIcons/SocialLinks';
import { PrimaryButton } from '../../buttons/PrimaryButton';
import { Link } from 'react-router-dom';

export const MainSobre = () => {
  return (
    <Container>
      <ContainerData>
        <ImageAndLinks
          initial={{ x: -5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <ProfileImage />
          <SocialLinks size={'1.5rem'} />
        </ImageAndLinks>

        <HelloMessage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3>Hi :)</h3>
          <p></p>
        </HelloMessage>

        <TextAndButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p>
            Welcome to my portfolio, a curated space where I showcase my most
            recent work and share insights about my journey in technology.
            <br />
            <br />
            With over a decade of experience, I specialize in FullStack and
            Blockchain Development, continually honing my skills and applying
            them to innovate in both personal and professional projects. My
            expertise spans across a broad range of modern technologies and
            tools, which are detailed further in my skills section.
            <br />
            <br />
            For a comprehensive view of my professional background and academic
            achievements, please feel free to download my complete resume
            available via the link below.
          </p>

          <a
            href="https://drive.google.com/file/d/1_oNGlZRi2UytLv8_6-ILydH43h-2lZ9u/view?usp=sharing"
            target="_blank"
          >
            <PrimaryButton>Resume</PrimaryButton>
          </a>
        </TextAndButton>
      </ContainerData>
    </Container>
  );
};
