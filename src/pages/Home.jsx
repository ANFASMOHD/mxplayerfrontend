import Add from "../components/Add";
import { Link } from "react-router-dom";
import View from "../components/View";
import Cartgory from "../components/Category";
import { useState } from "react";

const Home = () => {
  // create state to do state-lifting

  const [UploadVideoStatus,  setUploadVideoStatus]= useState({})
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center ">
        <div className="add-vedios">
          <Add setUploadVideoStatus ={setUploadVideoStatus} />
        </div>
        <Link
          style={{ textDecoration: "none", color: "white", fontSize: "30px" }}
          to="/watchhistory"
        >
          Watch History
        </Link>
      </div>
      <div className="continer-fluid w-100 mt-5 mb-5 d-flex justify-content-between">
        <div className="all viedos col-lg-9">
          <h4 className="mb-5">All Videos</h4>
          <View  UploadVideoStatus={UploadVideoStatus}/>
        </div>
        <div className="category col-lg-3">
          <Cartgory />
        </div>
      </div>
    </>
  );
};
export default Home;
