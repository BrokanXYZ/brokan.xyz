import Layout from '../components/HomeLayout';
import ProjectCard from '../components/ProjectCard';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Index = () => (
  <Layout gradientType='1'>
    <p>About & Resume</p>
    <hr/>
    <Container>
      <Row>
        <ProjectCard
          title='AR Sandbox Game'
          imgSrc='/images/sandboxCard.png'
        />
        <ProjectCard
          title='Visualizing Network Traffic'
          imgSrc='/images/networkVizCard.png'
        />
      </Row>
    </Container>
  </Layout>
);

export default Index;
