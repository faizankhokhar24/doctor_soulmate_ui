import React from "react";
import { BsSearch } from "react-icons/bs";
import "./WebViewBodyUse.css";

import userPic from "./../../../Images/userProfile.png";
const WebViewBodyUse = () => {
  const UserContacts = [
    {
      img: userPic,
      nameUserContacts: "Jane Doe",
    },
    {
      img: userPic,
      nameUserContacts: "Jane Doe",
    },
    {
      img: userPic,
      nameUserContacts: "Jane Doe",
    },
    {
      img: userPic,
      nameUserContacts: "Jane Doe",
    },
    {
      img: userPic,
      nameUserContacts: "Jane Doe",
    },
    {
      img: userPic,
      nameUserContacts: "Jane Doe",
    },
    {
      img: userPic,
      nameUserContacts: "Jane Doe",
    },
    {
      img: userPic,
      nameUserContacts: "Jane Doe",
    },
  ];

  const summaryActCardData = [
    {
      number: "0",
      txtSummary: "No pending invitations",
    },
    {
      number: "0",
      txtSummary: "No pending invitations",
    },
    {
      number: "0",
      txtSummary: "No pending invitations",
    },
    {
      number: "0",
      txtSummary: "No pending invitations",
    },
    {
      number: "0",
      txtSummary: "No pending invitations",
    },
    {
      number: "0",
      txtSummary: "No pending invitations",
    },
  ];
  return (
    <>
      <div className="mainContainerWebBU">
        <div className="webBU1Col">
          <div className="userPicBackWeb">
            {" "}
            <img src={userPic} alt="" className="userPicWebView" />
          </div>
          <div>
            <h1 className="headingUserNameWb">Josef Tribbiano</h1>
            <p>Charted Accountant</p>
          </div>
        </div>
        <div className="webBU2Col">
          <h1 className="headingCol2Web">Your Activity Summary</h1>
          <div className="mainContainerActSumCard">
            {summaryActCardData.map((data) => (
              <div className="activitySumCard">
                <p className="actSumCardTxt">{data.number}</p>
                <p className="actSumCardTxt">{data.txtSummary}</p>
              </div>
            ))}
          </div>
          <div>
            <h1 className="headingCol2Web"> Improve your profile</h1>
            <div className="addProfCard">
              <div className="addProfCardInner">
                <div className="addProfLeft"></div>
                <div className="addProfRight">
                  <p className="addProTxt">Add your professional experience for better responses</p>
                  <p>Current employer</p>
                  <hr />
                  <button className="btnSubmitAddProfCard" type="button">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="webBU3Col">
          <div className="contactsHeadingUserWeb">
            <p className="headingCntcts">Contacts</p>
            <BsSearch className="searchIconWebV" />
          </div>
          <hr/>

          {UserContacts.map((data) => (
            <div className="webContactUserCard">
              <div className="userPicBackWebContact">
                <img src={data.img} alt="" className="userPicWebViewContact" />
              </div>
              <div>
                <p className="nameWebContactUser">{data.nameUserContacts}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WebViewBodyUse;
