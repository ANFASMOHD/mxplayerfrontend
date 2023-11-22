import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { addToCategories, getAllCategory, getVideo, updateCategory } from "../services/appApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from "react-bootstrap";
import ViedoCard from "./ViedoCard";


const Category = () => {
  const [categoryName,setcategoryName]=useState({})

  const [allCategory,setAllCategory]=useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function ti get all category

  const getallCategory =async()=>{
    const {data}= await getAllCategory()
   /*  console.log(data); */
    setAllCategory(data)
  }
  console.log(allCategory);
  //drag over eventListener
  const dragover=(e)=>{
    //this will prvent reload so that the data that we send from videoCard.jsxwontbe lost
    e.preventDefault()
    console.log('inside dragover');
  }


  const videodrop =async(e,categoryId)=>{
    console.log(`dropped inside the categoryid ${categoryId}`);
    // to get videoID that is send from videoCard components
    const videoid= e.dataTransfer.getData("videoID")
    console.log(videoid);
  
// api to get the particular video that is dragged
const {data}= await getVideo(videoid)
console.log(data);
//to find the particular category with the specified iid
let selectedCategory =allCategory?.find(item=>item.id===categoryId)
console.log(selectedCategory);
// data is added to the all videos array in the particular category
selectedCategory.allVideos.push(data)
console.log(selectedCategory);

await updateCategory(categoryId,selectedCategory)
getAllCategory()
  }


  useEffect(()=>{
    getallCategory()
  },[])

  const handleAddCategory = async ()=>{
    console.log(categoryName);
    if(categoryName){
      let body ={
        categoryName,
        allVideos:[]
      }
      // make api call 
      const response=await addToCategories(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Category Successfully Added')
        //to make the null after successfully addition
        setcategoryName("")
        //to close modaal
        handleClose()
      }
      else{
        console.log(response);
        toast.error('Something Went Wrong Please Try Again Later ')
      }

    }
    else{
      toast.warning('Please fill the category Name')
    }

  }

  
  return (
    <>
      <div className="d-grid ms-3">
        <button  onClick={handleShow} className="btn btn-warning ">Add New Category</button>
      </div>
   {   allCategory?.length>0?
   allCategory?.map((item)=>(<div className="m-5 border border-secondary rounded p-3">
   <div className="d-flex justify-content-between align-items-center"  droppable onDragOver={(e)=>dragover(e)}
   onDrop={(e)=>videodrop(e,item?.id)}> 
     <h6>{item.categoryName}</h6>
     <button className="btn btn-danger">
         <i className="fa-solid fa-trash-can"></i>
       </button>
   </div>
   <Row>
    <Col sm={12}>
      {
        item.allVideos?.length>0?
        item.allVideos.map(card=>(<ViedoCard item={card}/>))
        :<p>Nothing To Display</p>
      }
    </Col>
   </Row>
  </div>))
     :
       <p>Nothing To Display</p>
       }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-warning">
            <i class="fa-solid fa-pencil text-warning me-2"></i>Add New Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <form className="border border-secondry rounded p-3">

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
              <Form.Control  type="text" placeholder="Enter Category Name" onChange={(e)=>setcategoryName(e.target.value)} />
            </Form.Group>
         
          
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="warning">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000}/>
    </>
  );
};
export default Category;
