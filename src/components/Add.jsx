import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { uploadAllViedos } from "../services/appApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add =({setUploadVideoStatus}) =>{
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [viedo, setViedo] = useState({
    id: "",
    caption: "",
    url: "",
    embededLink: "",
  });

  const embededViedoLink = (e) => {
    const { value } = e.target;
    const Link = `https://www.youtube.com/embed/${value.slice(-11)}`;
    setViedo({ ...viedo, embededLink: Link });
  };
  const handleUpload = async () => {
    const { id, caption, url, embededLink } = viedo;
    if (!id || !caption || !url || !embededLink) {
      toast.warning("please fill the form !");
    } else {
      const responce = await uploadAllViedos(viedo);
      if (responce.status >= 200 && responce.status <= 300) {
        toast.success(`${responce.data.caption} is succesfully upload`);
        
        setUploadVideoStatus(responce.data)

        setViedo({
          id: "",
          caption: "",
          url: "",
          embededLink: "",
        })
        handleClose();
      } else {
        console.log(responce);
        toast.error("something went wrong :)");
      }
    }
  };

  
  return (
    <>
      <div className="d-flex align-items-center">
        <h4>Upload a New Video</h4>
        <button onClick={handleShow} className="btn">
          <i className="fa-solid fa-cloud-arrow-up fa-2x"></i>
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">
            <i className="fa-solid fa-film me-3"></i>Upload Video
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill The Form Completly</p>

          <form className="border border-secondry rounded p-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Viedo ID"
                onChange={(e) => setViedo({ ...viedo, id: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Viedo Caption"
                onChange={(e) =>
                  setViedo({ ...viedo, caption: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Viedo Image URL"
                onChange={(e) => setViedo({ ...viedo, url: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Youtube Viedo Link"
                onChange={embededViedoLink}
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="warning">
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000}/>
    </>
  );
};
export default Add;
