import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';

const linkStyle = {
  marginRight: 15
};

const socialColStyle = {
  textAlignLast: 'end',
};

const socialIconStyle = {
  height: 50,
  width: 50,
  marginLeft: 10
}

const Header = () => (
  <Row>
    <Col xs={3}>Brokan.xyz</Col>
    <Col xs={5}></Col>
    <Col xs={4} style={socialColStyle}><SocialIcon style={socialIconStyle} bgColor="#24292E" fgColor="#FFFFFF" url="https://github.com/BrokanXYZ" target="_blank" /><SocialIcon style={socialIconStyle} bgColor="#0077B5" fgColor="#FFFFFF" url="https://www.linkedin.com/in/brokanstafford/" target="_blank" /></Col>
  </Row>
);

export default Header;
