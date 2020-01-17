import Link from 'next/link';
import {Row, Col, Button} from 'react-bootstrap';
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

export default function Header(props) {

  let pageTitleStyle = {};
  let dividerStyle = {};

  if(props.isHomePage){
    pageTitleStyle.color='white';
    dividerStyle.backgroundColor='white';
  }

  return(
    <>
      <Row>
      <Col xs={6}>
        <Link href="/"><span><h1 style={pageTitleStyle}>Brokan.xyz</h1></span></Link>
      </Col>

      <Col xs={6} style={socialColStyle}>
        <Button variant="success" size="lg" href="BrokStafford-Resume.pdf" target="_blank">
          Resume!
        </Button>
        <SocialIcon style={socialIconStyle} bgColor="#24292E" fgColor="#FFFFFF" url="https://github.com/BrokanXYZ" target="_blank" />
        <SocialIcon style={socialIconStyle} bgColor="#0077B5" fgColor="#FFFFFF" url="https://www.linkedin.com/in/brokanstafford/" target="_blank" />
      </Col>
    
      <style jsx>{`
          span {
              cursor: pointer
          }
      `}</style>
    </Row>
    <hr style={dividerStyle}/>
  </>
  );
}