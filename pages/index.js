import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';


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
      title: 'Mannequin Project',
      imgSrc: '/media/index/constructionCard.png',
      pageLink: 'brokanxyz',
      inProgress: false
    }
  ],
  '2020': [
    {
      title: 'Bork - Angband Bot',
      imgSrc: '/media/index/constructionCard.png',
      pageLink: 'brokanxyz',
      inProgress: true
    },
  ],
};

const aboutRowStyle = {
  paddingBottom: '20px',
  paddingRight: '5%',
  paddingLeft: '5%',
};

const Index = () => (
  <Layout gradientType='home'>
    
      <Row className="align-items-center justify-content-md-center" style={aboutRowStyle}>
        <Col xs={5} md={4} lg={3}>
          <Image fluid src="/media/index/Brokan-headshot.jpg" roundedCircle />
        </Col>
        <Col xs={7} md={8} lg={9}>
        <div className='speech-bubble'>
          <p>Howdy! The name's Brok. I'm a tea sippin', insect lovin', tech cravin' individual. Below are personal projects  some of the past projects I've worked on and the projects I'm currently working on! Most of these projects are computer science related. Click on a card to learn more!</p>
        </div>
        </Col>
      </Row>

      <CardDeck className='justify-content-md-center'>
        {
          (Object.keys(projectsByYearList).sort((a, b) => b-a)).map((key, index) => ( 
            projectsByYearList[key].map(project => (
              <ProjectCard
                pageLink={project.pageLink}
                title={project.title}
                imgSrc={project.imgSrc}
                year={key}
              />
            ))
          ))
        }
      </CardDeck>


      <style jsx>{`
          .speech-bubble {
            position: relative;
            background: rgb(255,255,255,0.9);
            border-radius: .4em;
            padding: 20px;
          }
          
          .speech-bubble:after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 0;
            height: 0;
            border: 20px solid transparent;
            border-right-color: rgb(255,255,255,0.9);
            border-left: 0;
            border-bottom: 0;
            margin-top: -10px;
            margin-left: -20px;
          }
      `}</style>
  </Layout>
);

export default Index;
