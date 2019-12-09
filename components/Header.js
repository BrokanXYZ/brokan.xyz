import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <Container>
    <Row>
      <Col xs={3}>Brokan.xyz</Col>
      <Col xs={5}>2 of 3 (wider)</Col>
      <Col xs={4}>3 of 3</Col>
    </Row>
  </Container>
);

export default Header;
