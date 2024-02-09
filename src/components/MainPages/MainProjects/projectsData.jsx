import govpi from '../../../assets/images/govpi.png';
import mtcidadao from '../../../assets/images/mtcidadao.png';
import bfluence from '../../../assets/images/bfluence.png';
import bvh from '../../../assets/images/bvh.png';
import adminGlampartner from '../../../assets/images/adminglampartner.png';
import interactiveResume from '../../../assets/images/interactiveresume.png';
import SunflowerLand from '../../../assets/images/sunflowerland.png';

export const projectsData = [
  {
    title: 'GovPi - Digital Government Platform',
    image: govpi,
    technologies: [
      'JavaScript',
      'TypeScript',
      'ReactJS',
      'Styled Components',
      'React Native',
      'Docker',
      'Kubernetes',
    ],
    links: [
      {
        name: 'Página',
        link: 'https://www.pi.gov.br/',
      },
    ],
  },
  {
    title: 'Bfluence - Influencer Platform',
    image: bfluence,
    technologies: ['NestJs', 'NodeJS', 'Postgres', 'AWS', 'Angular'],
    links: [
      {
        name: 'Página',
        link: 'https://bfluence.com.br/',
      },
    ],
  },
  {
    title: 'MT Cidadão - Digital Government Platform',
    image: mtcidadao,
    technologies: ['React Native', 'JavaScript', 'ReactJS', 'Docker', 'Gitlab'],
    links: [
      {
        name: 'Página',
        link: 'https://www.mtcidadao.mt.gov.br/',
      },
    ],
  },

  {
    title: 'Blockchain Vehicle History',
    image: bvh,
    technologies: [
      'JavaScript',
      'Solidity',
      'ReactJS',
      'NodeJs',
      'NestJs',
      'GCP',
      'Hyperledger Fabric',
    ],
    links: [
      {
        name: 'gitHub',
        link: 'https://github.com/rbragadev/ford-service-blockchain',
      },
    ],
  },
  {
    title: 'Admin Glampartner - Backend of Bfluence Program',
    image: adminGlampartner,
    technologies: [
      'NestJs',
      'AWS',
      'Postgres',
      'SQL',
      'Angular',
      'NodeJs',
      'TypeScript',
    ],
    links: [
      {
        name: 'Página',
        link: 'https://admin-influencerconnect.web.app/home',
      },
    ],
  },
  {
    title: 'Interactive Resume - 800.000+ views on Linkedin',
    image: interactiveResume,
    technologies: [
      'Html',
      'Css',
      'JavaScript',
      'TypeScript',
      'ReactJS',
      'Figma',
    ],
    links: [
      {
        name: 'Página',
        link: 'https://interactive-resume-react.vercel.app/',
      },
      {
        name: 'gitHub',
        link: 'https://github.com/rbragadev/interactive-resume-react',
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:6994005377298120704/',
      },
    ],
  },
  {
    title: 'Sunflower Land - NFT Game',
    image: SunflowerLand,
    technologies: ['JavaScript', 'Solidity', 'ReactJS'],
    links: [
      {
        name: 'Página',
        link: 'https://sunflower-land.com/',
      },
    ],
  },
];
