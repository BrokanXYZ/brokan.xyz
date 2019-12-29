import Header from './Header';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';

const layoutStyle = {
  paddingTop: 20
};

const footerStyle = {
  height: '10%'
};

export default function Layout(props) {
  
  let backgroundStyle = {
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: '1000',
    overflowY: 'scroll'
  }

  let colorSet;

  switch(props.gradientType){
    case 'home':
      colorSet = { 
        colorOne: 'rgba(0, 0, 255, 0.6)',
        colorTwo: 'rgba(255, 0, 0, 0.6)',
        colorThree: 'rgba(0, 200, 200, 0.6)',
        colorFour: 'rgba(200, 200, 0, 0.6)'
      };
      break;

    case 'random':
      const colorSets = [
        {
          colorOne: 'rgba(255, 0, 150, 0.6)',
          colorTwo: 'rgba(255, 150, 0, 0.6)',
          colorThree: 'rgba(255, 75, 75, 0.6)',
          colorFour: 'rgba(255, 0, 0, 0.6)'
        },
        {
          colorOne: 'rgba(150, 255, 0, 0.6)',
          colorTwo: 'rgba(0, 255, 150, 0.6)',
          colorThree: 'rgba(75, 255, 75, 0.6)',
          colorFour: 'rgba(0, 255, 0, 0.6)'
        },
        {
          colorOne: 'rgba(0, 150, 255, 0.6)',
          colorTwo: 'rgba(150, 0, 255, 0.6)',
          colorThree: 'rgba(75, 75, 255, 0.6)',
          colorFour: 'rgba(0, 0, 255, 0.6)'
        },
        {
          colorOne: 'rgba(150, 150, 0, 0.6)',
          colorTwo: 'rgba(150, 255, 0, 0.6)',
          colorThree: 'rgba(255, 150, 0, 0.6)',
          colorFour: 'rgba(150, 150, 100, 0.6)'
        },
        {
          colorOne: 'rgba(0, 150, 150, 0.6)',
          colorTwo: 'rgba(0, 255, 150, 0.6)',
          colorThree: 'rgba(0, 150, 255, 0.6)',
          colorFour: 'rgba(100, 150, 150, 0.6)'
        },
        {
          colorOne: 'rgba(150, 0, 150, 0.6)',
          colorTwo: 'rgba(255, 0, 150, 0.6)',
          colorThree: 'rgba(150, 0, 255, 0.6)',
          colorFour: 'rgba(150, 100, 150, 0.6)'
        },
      ];

      let rand = Math.floor(Math.random() * colorSets.length);
      colorSet = colorSets[rand];
      break;
  }

  backgroundStyle.background = 'radial-gradient(farthest-side at top left,' + colorSet.colorOne + ', transparent),radial-gradient(farthest-side at top right,' + colorSet.colorTwo + ', transparent),radial-gradient(farthest-side at bottom left,' + colorSet.colorThree + ', transparent),radial-gradient(farthest-side at bottom right,' + colorSet.colorFour + ', transparent)'; 

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
      <div style={footerStyle}></div>
    </div>
  );
}
