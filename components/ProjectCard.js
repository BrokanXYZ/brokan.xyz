import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';



const imgStyle = {
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
};

const titleStyle = {
    paddingLeft: 10,
    paddingTop: 10,
    height: '55px',
};

export default function ProjectCard(props) {

    const yearColors = [
        'aquamarine',
        'coral',
        'chartreuse',
        'gold',
        'firebrick',
        'cornflowerblue'
    ];

    const subtitleStyle = {
        paddingLeft: 10,
        paddingTop: 10
    };

    const yearColorStyle = {
        color: yearColors[props.year%yearColors.length]
    }

    let cardStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        color: 'white',
        marginBottom: '50px'
    };

    if(!props.isMobile){
        cardStyle.maxWidth = '15rem';
    }

    const pageLink = props.pageLink;

    return (
            <>
            {pageLink=='' ? 
                <span>
                    <Card className='coolLink' style={cardStyle}>
                        <Card.Subtitle style={subtitleStyle}>
                            <i style={yearColorStyle}>{props.year} </i> 
                            {props.inProgress && <font>- <u>In Progress</u></font>}
                        </Card.Subtitle>
                        <Card.Title style={titleStyle}>{props.title}</Card.Title>
                        <Card.Img style={imgStyle} src={props.imgSrc} />
                    </Card>
                </span>
            :
                <Link  href={'/' + props.pageLink}>
                    <span>
                        <Card className='coolLink' style={cardStyle}>
                            <Card.Subtitle style={subtitleStyle}>
                                <i style={yearColorStyle}>{props.year} </i> 
                                {props.inProgress && <font>- <u>In Progress</u></font>}
                            </Card.Subtitle>
                            <Card.Title style={titleStyle}>{props.title}</Card.Title>
                            <Card.Img style={imgStyle} src={props.imgSrc} />
                        </Card>
                        <style jsx>{`
                        span {
                            cursor: pointer
                        }
                    `}</style>
                    </span>
                </Link>
            }
            </>
            
    );
}