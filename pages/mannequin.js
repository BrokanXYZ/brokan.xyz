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

const Mannequin = () => (
  <Layout gradientType='random'>
    <Jumbotron style={jumbotronStyle}>
        <div className='col-sm-10 mx-auto'>


            <div style={bottomPaddingDivStyle}>
                <h2>Mannequin Art Project</h2>
                <p>
                    One late night years ago, I stumbled across a video of a strange performace art set. 
                    The artist was dressed well, placing huges globs of clay on his face, shaping the clay into amazingly unsettling faces, yelling, and violenting convulsing. 
                    Olivier De Sagazan's art struck a creative nerve in my body. The video below (first 6 min) was the one that inspired me the most. 
                    I wanted to be able to create something in the same vein that wasn't as short-lived.
                    I had the idea to buy a mannequin, dress it, and then shape the face with clay and paint since the first night I was introduced to Olivier. 
                    I've created 3 seperate face designs in 2019 and have plans for more in the future.
                </p>
            </div>

            <div style={bottomPaddingDivStyle}>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/pzi6JIzj6N8" allowFullScreen></iframe>
                </div>
            </div>

            <Figure>
                <div className='col-sm-9 col-md-8 col-lg-7 mx-auto'>
                    <Figure.Image
                        src="/media/mannequin/mannequin1.jpg"
                    />
                </div>
                <Figure.Caption style={captionStyle}>
                    Full shot of first design dried
                </Figure.Caption>
            </Figure>

            <Figure>
                <div className='col-sm-9 col-md-8 col-lg-7 mx-auto'>
                    <Figure.Image
                        src="/media/mannequin/mannequin2.jpg"
                    />
                </div>
                <Figure.Caption style={captionStyle}>
                    First design headshot
                </Figure.Caption>
            </Figure>

            <Figure>
                <div className='col-sm-9 col-md-8 col-lg-7 mx-auto'>
                    <Figure.Image
                        src="/media/mannequin/mannequin3.jpg"
                    />
                </div>
                <Figure.Caption style={captionStyle}>
                    Second design headshot
                </Figure.Caption>
            </Figure>

            <Figure>
                <div className='col-sm-9 col-md-8 col-lg-7 mx-auto'>
                    <Figure.Image
                        src="/media/mannequin/mannequin4.jpg"
                    />
                </div>
                <Figure.Caption style={captionStyle}>
                    Third desgin headshot
                </Figure.Caption>
            </Figure>

        </div>
    </Jumbotron>
  </Layout>
);

export default Mannequin;
