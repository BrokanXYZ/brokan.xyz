import Layout from '../components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const jumbotronStyle = {
    backgroundColor: 'rgb(255,255,255,0.9)',
}

const bottomPaddingDivStyle = {
    paddingBottom: '2rem'
}

const buttonStyle = {
    marginRight: '15px'
}

const ArSandvbox = () => (
  <Layout gradientType='random'>
    <Jumbotron style={jumbotronStyle}>
        <div className='col-sm-10 mx-auto'>


            <div style={bottomPaddingDivStyle}>
                <h2>Brokan.xyz </h2>
                <p>I began working on this project during the summer of 2017. I spent a year on and off learning how to build a web-based 3D video game using <a href='https://www.babylonjs.com/' target='_blank'>BabylonJS</a> and <a href='https://www.blender.org/' target='_blank'>Blender</a>. After graduating in the spring of 2018 I spent the next 6 months building an Augmented Reality sandbox and the system that would allow it to interface with the game I had created. The final result of my work is essentially a proof of concept. The game is simplistic and turning it into something fully fledge would require time and a team.</p>
                <Button variant="outline-dark" style={buttonStyle} href='https://www.linkedin.com/pulse/ar-sandbox-game-untitled-brok-stafford/' target='_blank'>Linked-In Article</Button>
                <Button variant="outline-dark" style={buttonStyle} href='https://github.com/BrokanXYZ/UntitledGame' target='_blank'>Github Repo</Button>    
            </div>

        </div>
    </Jumbotron>
  </Layout>
);

export default ArSandvbox;
