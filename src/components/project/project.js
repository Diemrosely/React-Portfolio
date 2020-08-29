import React from 'react';
import { Card, CardColumns} from 'react-bootstrap'

 let Projects = ({portf}) => {
  const {name, img, github, deployed} = portf
  return (
    <CardColumns>
    <Card>
      <a className= "atag" href={deployed} target="_blank">
      <Card.Img className="Imgs" variant="top" src={img} />
      </a><Card.Body>
        <Card.Title>{name}</Card.Title>
        <a className= "atag" href={github} target="_blank">
        <Card.Text>
         Github
        </Card.Text>
      </a>
      </Card.Body>
    </Card>
    </CardColumns>
  );
}

export default Projects;