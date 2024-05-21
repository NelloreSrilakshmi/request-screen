import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import logo from "../src/logo.png";
import linkedin from "../src/linkedin.png";
import youtube from "../src/youtube.png";
import instagram from "../src/instagram.png";
import facebook from "../src/facebook.png";
import { FiDownloadCloud } from "react-icons/fi";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    // Do something with the selected file, like uploading it
    // You can perform file upload logic here using XMLHttpRequest, fetch API, etc.
  };

  const [email, setEmail] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [subject, setSubject] = useState("");
  const [subjecterror, setSubjectError] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionerror, setDescriptionError] = useState("");
  const [category, setCategory] = useState("");
  const [categoryerror, setCategoryError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Reset email error message when input changes
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setSubjectError(""); // Reset email error message when input changes
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setDescriptionError(""); // Reset email error message when input changes
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCategoryError(""); // Reset email error message when input changes
  };

  const handleSubmit = () => {
    if (!emailRegex.test(email)) {
      setEmailError(
        <>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#F52626"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16H12.01"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Enter a valid email
        </>
      );
    } else {
      // Perform submission logic
    }
    if (!subject) {
      setSubjectError(
        <>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#F52626"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16H12.01"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Please fill
        </>
      );
    } else {
      // Perform submission logic
    }
    if (!description) {
      setDescriptionError(
        <>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#F52626"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16H12.01"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Please fill
        </>
      );
    } else {
      // Perform submission logic
    }
    if (!category) {
      setCategoryError(
        <>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#F52626"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16H12.01"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Select a Category
        </>
      );
    } else {
      // Perform submission logic
    }
  };

  return (
    <Container>
      <Row>
        <div className="iQuizUAnswerlogo">
          <img src={logo} alt="" className="logo"></img>
        </div>
      </Row>
      <Row>
        <div className="d-flex flex">
          <Col lg={6}>
            <div className="support">
              <div>
                <div className="heading-text">
                  <h1 className="heading">SUBMIT A REQUEST</h1>
                </div>
                <div>
                  <div className="support-email">
                    <input
                      type="text"
                      placeholder="Email Id*"
                      className={emailerror ? "email error" : "email"}
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {emailerror && (
                      <div className="error-message">{emailerror}</div>
                    )}
                  </div>
                </div>
                <div>
                  <div
                    className={"support-subject" + (subject ? "" : " error")}
                  >
                    <input
                      type="text"
                      placeholder="Subject*"
                      className={subjecterror ? "subject error" : "subject"}
                      value={subject}
                      onChange={handleSubjectChange}
                    />
                    {subjecterror && (
                      <div className="error-message">{subjecterror}</div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="support-description">
                    <textarea
                      rows="5"
                      cols="60"
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Description*"
                      className={
                        descriptionerror ? "description error" : "description"
                      }
                      value={description}
                      onChange={handleDescriptionChange}
                    ></textarea>{" "}
                    {descriptionerror && (
                      <div className="error-message">{descriptionerror}</div>
                    )}
                  </div>
                </div>
                <div>
                  <p className="support-paragraph">
                    Please enter the details of your request. A member of our
                    support staff will respond as soon as possible.
                  </p>
                </div>
                <div>
                  <div class="support-category">
                    <select
                      className="category"
                      value={category}
                      onChange={handleCategoryChange}
                    >
                      <option value="">Select a Category*</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>

                    {categoryerror && (
                      <div className="error-message">{categoryerror}</div>
                    )}
                  </div>
                </div>
                <div className="d-flex flex">
                  <div>
                    <p className="attach">Attachments</p>
                  </div>
                  <div className="support-inputcontainer">
                    <label htmlFor="fileInput" className="input-label">
                      <FiDownloadCloud className="icon" />
                      <span className="file-text">Add file</span>
                    </label>
                    <input
                      type="file"
                      id="fileInput"
                      className="support-files"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    {file && <p>{file.name}</p>}
                  </div>
                </div>
                <div>
                  <p className="support-para">
                    Please provide any attachments that may help us better
                    understand your request.
                  </p>
                </div>
                {/* Other input fields and form elements */}
                <div>
                  <button className="support-button" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div>
              <div className="support-details">
                <p className="support-headquaters">
                  <svg
                    width="25"
                    height=""
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="support-icons"
                  >
                    <path
                      d="M21.0292 10C21.0292 17 12.0167 23 12.0167 23C12.0167 23 3.00417 17 3.00417 10C3.00417 7.61305 3.9537 5.32387 5.64387 3.63604C7.33405 1.94821 9.62641 1 12.0167 1C14.4069 1 16.6993 1.94821 18.3895 3.63604C20.0797 5.32387 21.0292 7.61305 21.0292 10Z"
                      stroke="#FAD24E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0167 13C13.6758 13 15.0208 11.6569 15.0208 10C15.0208 8.34315 13.6758 7 12.0167 7C10.3575 7 9.01251 8.34315 9.01251 10C9.01251 11.6569 10.3575 13 12.0167 13Z"
                      stroke="#FAD24E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Headquarters
                </p>

                <div>
                  <p className="support-address">
                    707 Whitelock Ave SW, STE H-11, Marietta, GA 30064
                  </p>
                </div>
                <div>
                  <p className="support-offshore">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="support-icons"
                    >
                      <path
                        d="M21.0292 10C21.0292 17 12.0167 23 12.0167 23C12.0167 23 3.00417 17 3.00417 10C3.00417 7.61305 3.9537 5.32387 5.64387 3.63604C7.33405 1.94821 9.62641 1 12.0167 1C14.4069 1 16.6993 1.94821 18.3895 3.63604C20.0797 5.32387 21.0292 7.61305 21.0292 10Z"
                        stroke="#FAD24E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.0167 13C13.6758 13 15.0208 11.6569 15.0208 10C15.0208 8.34315 13.6758 7 12.0167 7C10.3575 7 9.01251 8.34315 9.01251 10C9.01251 11.6569 10.3575 13 12.0167 13Z"
                        stroke="#FAD24E"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Offshore
                  </p>
                </div>
                <div>
                  <p className="support-address1">Nellore, Andhrapradesh</p>
                </div>
                <div>
                  <div className="d-flex flex">
                    <img
                      src={linkedin}
                      alt=""
                      className="support-linkedin"
                    ></img>
                    <img src={youtube} alt="" className="support-youtube"></img>
                    <img
                      src={instagram}
                      alt=""
                      className="support-instagram"
                    ></img>
                    <img
                      src={facebook}
                      alt=""
                      className="support-facebook"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
}

export default App;
