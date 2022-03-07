import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { BiPlusMedical } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";

import logoFamily from "./../../Images/parents.png";

import googleIcon from "./../../Images/google.png";
import { Link, useNavigate } from "react-router-dom";

const Registeration = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = async (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);

    props.setDataFromGoogle(response.profileObj.givenName);
    props.setDataFromGoogle1(response.profileObj.familyName);

    if (response) {
      navigate("/RegisterationSecondS");
    }
    // console.log(response.profileObj.email)

    // console.log(response.profileObj.imageUrl,'bgmbh')

    console.log(response);
  };
  const responseFacebook = (response) => {
    // setFaceBookName(console.Object.name);
    // console.log(console.Object.name);
  };
  const componentClicked = (data) => {
    console.warn(data);
  };

  // useEffect(() => {

  //   responseGoogle()
  // }, []);

  return (
    <>
      <div className="topWebContainerRegisteration">
        <div className="registerS1TopBar">
          <p className="matrimonyHead">Welcome to the Matrimony</p>
        </div>
        <div className="mainRegisterTop">
          <div className="backGroundRedRegisteration">
            <div className="registerationFirstPageLogo">
              <div>
                <img src={logoFamily} alt="" className="familyLogo" />
              </div>

              <div>
                <BiPlusMedical className="plusIcon" />
              </div>
            </div>
          </div>

          <div className="mainContainerRegisteration">
            <div className="registerationContentContainer">
              <div className="googleBtnDiv">
                <img src={googleIcon} alt="" className="googleIcon" />
                <Link to="/registerationSecondS" className="linkRegister">
                  <GoogleLogin
                    className="btnGoogle"
                    clientId="677360402906-dm66f7qv5dkfaoqt0kleshkeoma85fjn.apps.googleusercontent.com"
                    buttonText="Continue with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </Link>
              </div>

              <div className="facebookBtnDiv">
                <FacebookLogin
                  className="btnFacebook"
                  appId="652427389140989"
                  autoLoad={true}
                  fields="name,email,picture"
                  onClick={componentClicked}
                  callback={responseFacebook}
                />
                <FaFacebookF className="fbLogo" />
              </div>
              <div>
                <a href="#">Help me login</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Link to="/RegisterationThirdS">
        <button>Move next</button>
      </Link>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <img src={url} alt="" className="picProfile" /> */}
    </>
  );
};

export default Registeration;
