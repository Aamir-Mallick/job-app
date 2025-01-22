/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@mui/material/Button";
import { SetStateAction, useState } from "react";
import "./body.css";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { studyLevelConstants } from "../../constants";
import { auth, db } from "../../firebase";
import { useContext } from "react";
import { userContext, USER } from "../../context/userContext";
import { useNavigate } from "react-router";

const BodyForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(userContext) as USER;
  const [formDetails, setFormDetails] = useState<any>({});
  const [value, setValue] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setValue(event.target.value);
    setFormDetails({ ...formDetails, Guardian: event.target.value });
  };

  const handleDetailsChange = (e: any) => {
    setFormDetails({ ...formDetails, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    console.log("e", e);
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      formDetails.email,
      formDetails.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("tt", user);
        setUser(user.uid);
        saveUser();

        // ...
      })
      .catch((error) => {
        console.log("ty", error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      });
  };

  const saveUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), formDetails);
      console.log("Document written with ID: ", docRef.id);
      navigate("/");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Father/Mother/Guardian Name *
              </FormLabel>
              <RadioGroup
                aria-required
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Father"
                  control={<Radio />}
                  label="Father"
                />
                <FormControlLabel
                  value="Mother"
                  control={<Radio />}
                  label="Mother"
                />
                <FormControlLabel
                  value="Guardian"
                  control={<Radio />}
                  label="Guardian"
                />
              </RadioGroup>
            </FormControl>

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
              id="UniversityorBoardName"
              label="University or Board Name"
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
          <Button type="submit" variant="outlined">
            SUBMIT
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BodyForm;
