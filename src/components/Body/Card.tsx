import { Button } from "@mui/material";

const Card = () => {
  return (
    <div className="card-tile">
      <div className="card-tile-top">
        <div className="category">IT</div>
        <div className="role">
          <span>Tech Lead</span>
        </div>
      </div>
      <div className="card-tile-middle">
        <div>
          <span>Skills: Vehicle Transmission System</span>
        </div>
        <div>
          <span>Experience: 2 - 8 Years</span>
        </div>
        <div>
          <span>Location: PUNE</span>
        </div>
      </div>
      <div className="card-tile-bottom">
        <Button variant="outlined">APPLY/SHORTLIST</Button>
      </div>
    </div>
  );
};

export default Card;
