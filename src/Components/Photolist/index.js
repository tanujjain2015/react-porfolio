import React, { useState } from 'react';
//import Modal from '../Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import images from '../../assets/image/RunBuddy.png'
//import Image from 'react-bootstrap/Image';

const PhotoList = () => {

  const [photos] = useState([
    {
      name: 'Run Buddy',
      category: 'commercial',
      description: 'HTML/CSS',
      image: 'RunBuddy.png',
      gitlink: 'https://tanujjain2015.github.io/run-buddy/'
    },
    {
      name: 'Event Planner',
      category: 'commercial',
      description: 'Javascript/HTML/CSS',
      image: 'EventUniverse.png',
      gitlink: 'https://tanujjain2015.github.io/concertplanner/'
    }
  ]);

  //const currentPhotos = photos.filter((photo) => photo);
  const [currentPhoto, setCurrentPhoto] = useState();
  //const {name, category, description, imagelocation, gitlink} = photos;
  //const [isModalOpen, setIsModalOpen] = useState(false);
  //const toggleModal = (image, i) => {
   // setCurrentPhoto({...image, index: i});
  //};

  const filepath = (filePath) => {
    return require(`../../assets/image/${filePath}`)
  }

  return (
    <Container fluid>
          <Row>
              <Col> 
                  <br></br>
              </Col>
          </Row>
          <Row>
              <Col> 
                  <h2 className='font-weight-bold'>Portfolio</h2>
              </Col>
          </Row>
          <Col> 
                  <br></br>
          </Col>
          <Row>
              {photos.map((image) => (
                <Col xs={6} md={4}>
                 <img
                  src={filepath(image.image)}
                  alt={image.name}
                  className="img-thumbnail mx-1"
                  key={image.name}
                />
                </Col>
              ))}
          </Row>
      </Container>
  );
};

/*
 <div>
       {isModalOpen && (
          <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
        )}
      <div className="flex-row">
        {photos.map((image, i) => (
          <img
          src={image.image}
          alt={image.name}
          className="img-thumbnail mx-1"
          onClick={() => toggleModal(image, i)}
          key={image.name}
        />
        <img
                  src={require(images)}
                  alt={image.name}
                  className="img-thumbnail mx-1"
                  key={image.name}
                />
        ))}
      </div>
    </div>

*/

export default PhotoList;