/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

import "./index.css";

const Grids = ({ GridItems, GridColumns, Width }) => {
  return (
    <div
      className="grid-container"
      style={{ gridTemplateColumns: GridColumns, width: Width }}
    >
      {GridItems.map((item, index) => (
        <div className="grid-item" key={index}>
          <Card className="main-card">
            {item.image ? (
              !item.status ? (
                <Card.Img
                  variant="top"
                  style={{ height: "80px", width: "100%" }}
                  src={item.image}
                />
              ) : (
                <a href={item.url} rel="noreferrer" target="_blank">
                  <Card.Img
                    variant="top"
                    style={{ height: "70px", width: "100%" }}
                    src={item.image}
                  />
                </a>
              )
            ) : (
              ""
            )}
            <Card.Body className={!item.status ? "invalid-overlay" : ""}>
              <Card.Title>{item.name}</Card.Title>
              {item.description ? (
                <Card.Text>{item.description}</Card.Text>
              ) : (
                ""
              )}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Grids;
