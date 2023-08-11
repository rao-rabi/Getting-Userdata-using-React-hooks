import React, { useState } from "react";

const Body = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  //   for username
  const setUserName = (e) => {
    setName(e?.target?.value);
  };

  //   for useremail
  const setUserEmail = (e) => {
    setEmail(e?.target?.value);
  };

  //   for usernumber
  const setUserNumber = (e) => {
    setPhoneNumber(e?.target?.value);
  };

  //   for userpassword
  const setUserPassword = (e) => {
    setPassword(e?.target?.value);
  };

  // setting data in local storage
  const data = () => {
    const user = {
      username: name,
      useremail: email,
      usernumber: phoneNumber,
      userpassword: password,
    };
    localStorage.setItem("userData", JSON.stringify(user));
  };

  // getting data from local storage
  const getUserData = localStorage.getItem("userData");
  const parsedData = JSON.parse(getUserData);
  // console.log(parsedData);

  //   main app body

  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
      }}
    >
      <div className="container pt-5 d-flex justify-content-center align-items-center">
        <div className="row justify-content-center">
          {/* fb-initiative */}
          <div className="col-md-5 col-12 mt-5 pt-md-5 text-md-start text-center">
            <h1 className="fw-bold display-4 text-primary">facebook</h1>
            <p className="fs-3 fw-medium">
              Facebook helps you connect and share with the people in your life
            </p>
          </div>
          {/* form */}
          <div className="col-lg-4 col-md-6 col-12 text-center">
            <form
              action="submit"
              className="p-3 rounded-3 bg-white"
              style={{ boxShadow: "0 2px 4px rgba(0, 0, 0 , .1)" }}
            >
              {/* name */}
              <input
                type="text"
                className="p-3 w-100 border border-dark-subtle rounded-3 form-control"
                style={{ outline: "none" }}
                placeholder="Name"
                value={name}
                onChange={(e) => setUserName(e)}
              />
              {/* email */}
              <input
                type="email"
                className="p-3 w-100 border border-dark-subtle mt-3 rounded-3 form-control"
                style={{ outline: "none" }}
                placeholder="Email adress"
                onChange={(e) => setUserEmail(e)}
              />
              {/* phone number */}
              <input
                type="tel"
                className="p-3 w-100 border border-dark-subtle mt-3 rounded-3 form-control"
                style={{ outline: "none" }}
                placeholder="Phone Number"
                onChange={(e) => setUserNumber(e)}
              />
              {/* password */}
              <input
                type="password"
                className="p-3 w-100 border border-dark-subtle mt-3 rounded-3 form-control"
                style={{ outline: "none" }}
                placeholder="Password"
                onChange={(e) => setUserPassword(e)}
              />
              <button
                className="bg-primary text-white fw-bold rounded-3 border-0 w-100 mt-3 p-3"
                onClick={data}
              >
                Log In
              </button>
              <p className="text-primary text-center mt-2 mb-3 font-sans-serif">
                Forgotten Password?
              </p>
              <hr />
              <button
                className="text-white fw-bold rounded-3 fs-5 border-0 mt-3 p-2 px-3"
                style={{ backgroundColor: "#42b72a" }}
              >
                Create new account
              </button>
            </form>
            <p className="text-center py-3">
              <b>Create a Page</b> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>
      {/* list to display user data */}
      <div className="p-3">
        <h4 className="text-decoration-underline ps-3">User Data Here:</h4>
        <ul style={{ listStyleType: "circle" }}>
          <li>
            <b>Username: </b>
            <span className="fw-medium">{parsedData?.username}</span>
          </li>
          <li>
            <b>Useremail: </b>
            <span className="fw-medium">{parsedData?.useremail}</span>
          </li>
          <li>
            <b>Userphonenumber: </b>
            <span className="fw-medium">{parsedData?.usernumber}</span>
          </li>
          <li>
            <b>Userpassword: </b>
            <span className="fw-medium">{parsedData?.userpassword}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Body;
