import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import DragImage from "./components/DragImage";
import TwitterIcon from "../../images/icons/twitter.svg";
import DiscordIcon from "../../images/icons/discord.svg";
import TelegramHandle from "../../images/icons/telegram.svg";

const ProfileContent = () => {
  return (
    <>
      <Header>
        <DragImage />
        <ProfileMain>
          <InputGroupType>
            <h1 className="name">Name</h1>
            <div className="inputTags">
              <input type="text" placeholder="Your username" />
            </div>
          </InputGroupType>
          <InputGroupType>
            <h1 className="name">Dscription</h1>
            <div className="inputTags">
              <textarea
                name=""
                id=""
                rows="7"
                placeholder="Tell us a little bit about you"
              />
            </div>
            <h4 className="help">0 Character of 1000 maximum</h4>
          </InputGroupType>
          <InputGroupType>
            <h1 className="name">Name</h1>
            <div className="inputTags">
              <div>
                <img src={TwitterIcon} alt="" />
                <input type="text" placeholder="Your username" />
              </div>
              <div>
                <img src={DiscordIcon} alt="" />
                <input type="text" placeholder="Your username" />
              </div>
              <div>
                <img src={TelegramHandle} alt="" />
                <input type="text" placeholder="Your username" />
              </div>
            </div>
          </InputGroupType>
          <InputGroupType>
            <h1 className="name">Wallet Address</h1>
            <div className="inputTags">
              <input type="text" placeholder="Wallet disconnected" />
            </div>
          </InputGroupType>
        </ProfileMain>
      </Header>
    </>
  );
};

const Header = styled(Box)`
  display: flex;
  flex-direction: column;
`;
const ProfileMain = styled(Box)`
  max-width: 617px;
  display: flex;
  flex-direction: column;
  gap: 39px;
`;
const InputGroupType = styled(Box)`
  display: flex;
  flex-direction: column;
  > .name {
    margin-top: 0px;
    margin-bottom: 0px;
    right: 63.36%;
    top: -5%;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.5px;
    color: #131413;
  }
  > .inputTags {
    margin-top: 17px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    box-sizing: border-box;
    border: 1px solid #cecece;
    border-radius: 8px;
    overflow: hidden;
    input,
    textarea {
      flex-grow: 1;
      border: none;
      padding: 14px 24px;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 12px;
      color: #757b75;
      resize: none;
      /* outline: none; */
    }
    > div {
      display: flex;
      align-items: center;
      border-top: 1px solid #cecece;
      > img {
        margin-left: 16.5px;
        width: 24px;
        height: auto;
      }
    }
    > div:first-child {
      border: none;
    }
  }
  > .help {
    margin-top: 10px;
    margin-bottom: 0px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    text-align: right;
    color: #757b75;
  }
`;
export default ProfileContent;
