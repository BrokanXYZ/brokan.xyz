import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import AboutSection from '../components/AboutSection';
import {CardDeck} from 'react-bootstrap';
import { withUserAgent } from 'next-useragent'

const projectsByYearList = {
  '2018': [
    {
      title: 'AR Sandbox Game',
      imgSrc: '/media/index/sandboxCard.png',
      pageLink: 'arsandbox',
      inProgress: false
    },
    {
      title: 'Visualizing Network Traffic in 3D',
      imgSrc: '/media/index/networkVizCard.png',
      pageLink: 'networkvis',
      inProgress: false
    }
  ],
  '2019': [
    {
      title: 'Brokan.xyz Site',
      imgSrc: '/media/index/constructionCard.png',
      pageLink: 'brokanxyz',
      inProgress: false
    },
    {
      title: 'Mannequin Art Project',
      imgSrc: '/media/index/constructionCard.png',
      pageLink: 'mannequin',
      inProgress: false
    }
  ],
  '2020': [
    {
      title: 'Bork - Angband Bot',
      imgSrc: '/media/index/constructionCard.png',
      pageLink: 'bork',
      inProgress: true
    },
  ],
};

class IndexPage extends React.Component{

  static async getInitialProps(ctx) {
    return { useragent: ctx.ua.source }
  }

  render() {
    const { ua, useragent } = this.props

    return (
  <Layout gradientType='home'>
    
      <AboutSection
        isMobile={ua.isMobile}
      />

      <CardDeck className='justify-content-center'>
        {
          (Object.keys(projectsByYearList).sort((a, b) => b-a)).map((key, index) => ( 
            projectsByYearList[key].map(project => (
              <ProjectCard
                pageLink={project.pageLink}
                title={project.title}
                imgSrc={project.imgSrc}
                year={key}
                isMobile={ua.isMobile}
              />
            ))
          ))
        }
      </CardDeck>

  </Layout>
    );
        }
      }


export default withUserAgent(IndexPage);
