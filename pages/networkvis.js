import Layout from '../components/Layout';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';


const jumbotronStyle = {
    backgroundColor: 'rgb(255,255,255,0.9)',
}

const bottomPaddingDivStyle = {
    paddingBottom: '2rem'
}

const captionStyle = {
    textAlign: 'center'
}

const NetworkVis = () => (
  <Layout gradientType='random'>
    <Jumbotron style={jumbotronStyle}>
        <div className='col-sm-10 mx-auto'>


            <div style={bottomPaddingDivStyle}>
                <h2>Visualizing Network Traffic in 3D</h2>
                <p>I spent my final year of undergraduate study (2017-18) working on this project as my honors thesis. I attended the 2018 SEC Cyber Security conference in Auburn, Alabama where I presented my work to academic, industry, and government security professionals. 
                    I completed my thesis by defending my work in front of a committee of professors and several members from the University of Arkansas's network security team.
                    This project resulted in the creation of a web application that takes in flow data (sFlow, NetFlow, etc.) and outputs interactive 3D visualizations.
                </p>
                <Button variant="outline-dark" href='http://scholarworks.uark.edu/cgi/viewcontent.cgi?article=1049&context=csceuht' target='_blank'>Final Paper</Button>
            </div>

            <div style={bottomPaddingDivStyle}>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dBGhoMTLDuk" allowFullScreen></iframe>
                </div>
            </div>

            <div style={bottomPaddingDivStyle}>
                <h5>Abstract</h5>
                <p>Monitoring network traffic has always been an arduous and tedious
                    task because of the complexity and sheer volume of network data
                    that is being consistently generated. In addition, network growth
                    and new technologies are rapidly increasing these levels of
                    complexity and volume. An effective technique in understanding
                    and managing a large dataset, such as network traffic, is data
                    visualization. There are several tools that attempt to turn network
                    traffic into visual stimuli. Many of these do so in 2D space and
                    those that are 3D lack the ability to display network patterns
                    effectively. Existing 3D network visualization tools lack user
                    interaction, dynamic generation, and intuitiveness. This project
                    proposes a user-friendly 3D network visualization application that
                    creates both dynamic and interactive visuals. This application was
                    built using the Bablyon.js graphics framework and uses
                    anonymized data collected from a campus network.
                </p>
            </div>

            <Figure>
                <div className='col-sm-9 mx-auto'>
                    <Figure.Image
                    width={1500}
                    height={1125}

                        src="/media/networkvis/SEC.jpg"
                    />
                </div>
                <Figure.Caption style={captionStyle}>
                    Me and my mentor, Professor Dale Thompson, at the University of Auburn for the 2018 SEC Cyber Security Conference.
                </Figure.Caption>
            </Figure>

        </div>
    </Jumbotron>
  </Layout>
);

export default NetworkVis;
