import Header from './Header';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';

export default function Layout(props) {

  const layoutStyle = {
    paddingTop: 20
  };
  
  let backgroundStyle = {
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: '1000',
    overflowY: 'scroll'
  }

  let colorOne, colorTwo, colorThree, colorFour;

  switch(props.gradientType){
    case '1':
      colorOne = 'rgba(0, 0, 255, 0.6)';
      colorTwo = 'rgba(255, 0, 0, 0.6)';
      colorThree = 'rgba(0, 200, 200, 0.6)';
      colorFour = 'rgba(200, 200, 0, 0.6)';
      break;
    case '2':
      colorOne = 'rgba(255, 0, 150, 0.5)';
      colorTwo = 'rgba(255, 150, 0, 0.5)';
      colorThree = 'rgba(255, 75, 75, 0.5)';
      colorFour = 'rgba(255, 0, 0, 0.5)';
      break;
    case '3':
      colorOne = 'rgba(150, 255, 0, 0.5)';
      colorTwo = 'rgba(0, 255, 150, 0.5)';
      colorThree = 'rgba(75, 255, 75, 0.5)';
      colorFour = 'rgba(0, 255, 0, 0.5)';
      break;
  }

  backgroundStyle.background = 'radial-gradient(farthest-side at top left,' + colorOne + ', transparent),radial-gradient(farthest-side at top right,' + colorTwo + ', transparent),radial-gradient(farthest-side at bottom left,' + colorThree + ', transparent),radial-gradient(farthest-side at bottom right,' + colorFour + ', transparent)'; 

  return (
    <div style={backgroundStyle}>
      <Container style={layoutStyle}>
        <Head>
          <title></title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
        </Head>
        <Header/>
        <hr/>
        {props.children}
      </Container>
    </div>
  );
}
