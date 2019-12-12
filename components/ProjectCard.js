import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const cardStyle = {
    width: '15rem',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    color: 'white',
};

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

const ProjectCard = props => (
    <Col xs={3}>
        <Card style={cardStyle}>
            <Card.Title style={titleStyle}>{props.title}</Card.Title>
            <Card.Img style={imgStyle} src={props.imgSrc} />
        </Card>
    </Col>
);

export default ProjectCard;
