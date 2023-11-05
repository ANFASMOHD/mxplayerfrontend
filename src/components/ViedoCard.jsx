import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ViedoCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: "18rem", height: "400px", marginLeft: "10rem" }}>
        <Card.Img
          variant="top"
          height={"300px"}
          style={{ objectFit: "cover" }}
          src={item.url}
          alt="no image"
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h5>{item.caption}</h5>
            <Button variant="btn btn-danger">
              <i className="fa-solid fa-trash-can"></i>
            </Button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{item.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="480"
            src={item.embededLink}
            title="React JS &amp; Tailwind CSS Responsive Website - Beginner Friendly"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default ViedoCard;
