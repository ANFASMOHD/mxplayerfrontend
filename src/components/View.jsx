import { Col, Row } from "react-bootstrap";
import VideoCard from "../components/ViedoCard";
import { getAllViedos } from "../services/appApi";
import { useEffect, useState } from "react";

const View = () => {
  const [allviedos, setAllViedos] = useState([]);

  const getUploadViedos = async () => {
    const responce = await getAllViedos();
    setAllViedos(responce.data);
  };

  useEffect(() => {
    getUploadViedos();
  }, []);

  return (
    <div>
      <Row>
        {allviedos.length > 0 ? (
          allviedos?.map((item) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard item={item}/>
            </Col>
          ))
        ) : (
          <p>Nothing to display</p>
        )}
      </Row>
    </div>
  );
};
export default View;
