import { useState } from "react";
import Button from "@mui/material/Button";
import BodyForm from "./BodyForm";
import "./body.css";
import Card from "./Card";

const Body = () => {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div>
      <div className="main-body">
        <div className="main-body-top">
          <div>
            <p className="recent-jobs">Recent Jobs</p>
          </div>
          <div className="filter">
            <div
              className={`${active ? "active" : "not-active"}`}
              onClick={handleClick}
            >
              IT
            </div>
            <div
              className={`${!active ? "active" : "not-active"}`}
              onClick={handleClick}
            >
              BPS
            </div>
          </div>
          <div>
            <div>
              <p className="advance-search">Advance Search</p>
            </div>
            <div className="search">
              <div>
                <input placeholder="Enter keyword like (Job Title or Skills or Experience)" />
              </div>
              <div>
                <Button variant="outlined">SEARCH</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="main-body-content">
          <div className="card-container">
            {Array(17)
              .fill("")
              .map(() => {
                return <Card />;
              })}
          </div>
        </div>
      </div>
      <div className="main-body-form">
        <BodyForm />
      </div>
    </div>
  );
};

export default Body;
