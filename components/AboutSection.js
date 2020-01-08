
import {Row, Col, Image} from 'react-bootstrap';


const aboutRowStyle = {
    paddingBottom: '20px',
    paddingRight: '5%',
    paddingLeft: '5%',
  };

const aboutRowStyleMobile = {
    paddingBottom: '35px',
    paddingRight: '5%',
    paddingLeft: '5%',
};

export default function AboutSection(props) {

    


    return(
        <>
        {props.isMobile ? 
            <div>
            <Row className="align-items-center justify-content-center" style={aboutRowStyleMobile}>
                <Col xs={6}>
                    <Image fluid src="/media/index/Brokan-headshot.jpg" roundedCircle />
                </Col>
            </Row>
            <Row className="align-items-center justify-content-center" style={aboutRowStyleMobile}>
                <Col>
                    <div className='speech-bubble'>
                        <p>Howdy! The name's Brok. I'm a tea sippin', insect lovin', tech cravin' individual. Below are personal projects  some of the past projects I've worked on and the projects I'm currently working on! Most of these projects are computer science related. Click on a card to learn more!</p>
                    </div>
                </Col>
            </Row>

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
                top: 0;
                left: 50%;
                width: 0;
                height: 0;
                border: 21px solid transparent;
                border-bottom-color: rgb(255,255,255,0.9);
                border-top: 0;
                margin-left: -21px;
                margin-top: -21px;
            }
            `}</style>

            </div>            
        :
        <Row className="align-items-center justify-content-center" style={aboutRowStyle}>
            <Col xs={5} md={4} lg={3}>
                <Image fluid src="/media/index/Brokan-headshot.jpg" roundedCircle />
            </Col>
            <Col xs={7} md={8} lg={9}>
                <div className='speech-bubble'>
                    <p>Howdy! The name's Brok. I'm a tea sippin', insect lovin', tech cravin' individual. Below are some of the past projects I've worked on and the projects I'm currently working on! Most are computer science related. Click on a card to learn more!</p>
                </div>
            </Col>

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
        </Row>
        }
        </>
    );    
}




      
      