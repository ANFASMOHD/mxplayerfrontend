import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { addToHistory,deteVideos } from "../services/appApi";

const ViedoCard = ({ item,setDeleteVideoStatus }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () =>  { setShow(true);

  const {caption , embededLink}=item
  const today =new Date 
 /*  console.log(today); */
let timeStamp =new Intl.DateTimeFormat('en-US',{
    year:'numeric',
    month:'2-digit',
    day:'2-digit',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'

  }).format(today)
  console.log(timeStamp);
  let videoDetails ={
    caption,
    embededLink,
    timeStamp
  }
  await addToHistory(videoDetails)
  }
  const removeVideo=async(id)=>{
    const response= await deteVideos(id)
    console.log(response);
    setDeleteVideoStatus(true)
    
  }
  const dragStarted=(e,id)=>{
    console.log(`card no:${id} startded dragging`);
    e.dataTransfer.setData("videoID",id)
  }
  return (
    <div>
      <Card style={{ width: "100%", height: "350px",  }} className="mb-4" draggable onDragStart={(e)=>dragStarted(e,item?.id)}>
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
            <Button onClick={()=>removeVideo(item?.id)}  variant="btn btn-danger">
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
