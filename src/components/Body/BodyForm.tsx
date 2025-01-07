import Button from "@mui/material/Button";
import { useState } from "react";
import "./body.css";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { studyLevelConstants } from "../../constants";

const BodyForm = () => {
  const [formDetails, setFormDetails] = useState<any>({});

  const handleDetailsChange = (e: any) => {
    setFormDetails({ ...formDetails, [e.target.id]: e.target.value });
  };

  const handleFromDetails = () => {
    console.log(formDetails);
  };
  return (
    <div className="form">
      <div>
        <h1>Student Registration Form</h1>
      </div>
      <div className="form-details">
        <div className="from-personal-details">
          <h2>Personal Details</h2>
          <TextField
            onChange={handleDetailsChange}
            required
            id="firstName"
            label="First Name"
            defaultValue=""
          />
          <TextField
            onChange={handleDetailsChange}
            required
            id="lastName"
            label="Last Name"
            defaultValue=""
          />
          <TextField
            onChange={handleDetailsChange}
            required
            id="fatherName"
            label="Father Name"
            defaultValue=""
          />
          <TextField
            onChange={handleDetailsChange}
            required
            id="phNo1"
            label="Phone Number 1"
            defaultValue=""
          />
          <TextField
            onChange={handleDetailsChange}
            required
            id="phNo2"
            label="Phone Number 2"
            defaultValue=""
          />
          <TextField
            onChange={handleDetailsChange}
            required
            id="email"
            label="Email ID"
            defaultValue=""
          />
          <TextField
            onChange={handleDetailsChange}
            type="password"
            id="password"
            required
            label="Password"
            defaultValue=""
          />
          <TextField
            onChange={handleDetailsChange}
            id="transactionID"
            label="Transaction ID/ UTRID"
            defaultValue=""
          />
        </div>
        <div className="form-education-details">
          <h2>Educational Details</h2>
          <TextField
            onChange={handleDetailsChange}
            required
            id="universityName"
            label="University Name"
            defaultValue=""
          />
          <TextField
            onChange={handleDetailsChange}
            required
            id="collegeName"
            label="College Name"
            defaultValue=""
          />
          <TextField
            onChange={handleDetailsChange}
            required
            select
            id="studyLevel"
            helperText="Please select your study level"
            label="Study Level"
            defaultValue=""
          >
            {studyLevelConstants.map((option) => {
              return (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            onChange={handleDetailsChange}
            required
            id="subjectBranch"
            label="Subject Branch / Group"
            defaultValue=""
          />
          <TextField
            onChange={handleDetailsChange}
            required
            id="collegeAddress"
            label="College Address Details"
            defaultValue=""
          />
          <TextField
            onChange={handleDetailsChange}
            id="cityVillageAddress"
            label="City / Village Name"
            defaultValue=""
          />
          <TextField
            onChange={handleDetailsChange}
            id="district"
            label="Disctrict"
            defaultValue=""
          />
        </div>
      </div>
      <div className="form-submit-button">
        <Button onClick={handleFromDetails} variant="outlined">
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default BodyForm;
