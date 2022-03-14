import React from "react";
import { GoDash } from "react-icons/go";
import { ImCross } from "react-icons/im";
import { ImPlus } from "react-icons/im";
import { TiLocationArrow } from "react-icons/ti";
import userPic from "./../../Images/userProfile.png";

const Cards = () => {
  return (
    <>
      <div className="chatBoxCardWeb">
        <div>
          <div className="fistRowChatBoxWeb">
            <div className="chatBoxPicPartWeb">
              <div className="userPicBackWebContactChat">
                <img
                  src={userPic}
                  alt=""
                  className="userPicWebViewContactChat"
                />
              </div>
              <div>
                <p className="nameWebContactUserChat">Jhone Doe</p>
                <p className="activeStatusTxt">Active now</p>
              </div>
            </div>
            <div className="iconsChatBoxWeb">
              <GoDash className="dashIcon" />
              <ImCross />
            </div>
          </div>
          <hr className="hrLineChatBox" />
          <div>
            <div className="chatBoxPicDesc">
              <div className="userPicBackWebContactChat">
                <img
                  src={userPic}
                  alt=""
                  className="userPicWebViewContactChat"
                />
              </div>

              <div>
                <p className="nameWebContactUserChat">Jhone Doe</p>
                <p className="activeStatusTxt">Active now</p>
                <p className="activeStatusTxt">You're both connected</p>
              </div>
            </div>
          </div>
        </div>
        <div className="chatBoxLastRow">
          <div className="plusIconsChatBox">
            <ImPlus className="plusIcon" />
          </div>

          <div>
            <input
              className="inputTextChatBox"
              type="text"
              placeholder="Hi There"
            />
          </div>

          <div>
            <TiLocationArrow className="sendSmsIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
