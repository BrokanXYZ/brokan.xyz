import Layout from '../components/HomeLayout';
import ProjectCard from '../components/ProjectCard';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Index = () => (
  <Layout gradientType='1'>
    <h5>About</h5>
    <hr/>
    <Container>
      <Row>
        <ProjectCard
          title='AR Sandbox Game'
          imgSrc='/media/projectCardImages/sandboxCard.png'
          pageLink='arsandbox'
        />
        <ProjectCard
          title='Visualizing Network Traffic in 3D'
          imgSrc='/media/projectCardImages/networkVizCard.png'
          pageLink='networkvis'
        />
      </Row>
    </Container>
  </Layout>
);

export default Index;
