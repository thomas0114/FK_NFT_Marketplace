import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { lightTheme, darkTheme } from "../../theme/theme";
import ProfileContent from "./profile.jsx";

const SettingPage = ({ ctheme }) => {
  return (
    <StyledContainer
      ctheme={ctheme ? 1 : 0}
      ltheme={lightTheme}
      dtheme={darkTheme}
    >
      <Header1>
        <Header1_space
          display="flex"
          flex="1"
          justifyContent="space-between"
          marginLeft="20%"
          marginRight="20%"
        >
          <HLetter>Overview</HLetter>
          <HLetter>Explore</HLetter>
          <HLetter>Rankings</HLetter>
          <HLetter>Activities</HLetter>
          <HLetter>Manage</HLetter>
        </Header1_space>
      </Header1>
      <PageTitle>Settings</PageTitle>
      <SettingTap>
        <SettingTapBtn>Profile</SettingTapBtn>
        <SettingTapBtn selected>Notifications</SettingTapBtn>
        <SettingTapBtn>Offers</SettingTapBtn>
        <SettingTapBtn>Support</SettingTapBtn>
      </SettingTap>
      <SettingTapContent>
        <ProfileContent />
      </SettingTapContent>
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)`
  position: relative;
  background: ${({ ctheme, ltheme, dtheme }) =>
    ctheme ? ltheme.bgcolor_main : dtheme.bgcolor_main};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const Header1 = styled(Box)`
  display: flex;
  width: 100%;
`;
const Header1_space = styled(Box)`
  @media (max-width: 1000px) {
    margin-left: 8% !important;
    margin-right: 8% !important;
  }
  @media (max-width: 800px) {
    margin-left: 5% !important;
    margin-right: 5% !important;
  }import ProfileContent from './profile';

`;
const HLetter = styled(Box)`
  display: flex;
  height: 34px;
  justify-content: center;
  align-items: center;
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #2ba55d;
  border-top: 4px solid rgba(0, 0, 0, 0);
  &:hover {
    border-top: 4px solid #2ba55d;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
  @media (max-width: 800px) {
    font-size: 12px;
  }
  @media (max-width: 600px) {
    font-size: 8px;
  }
`;
const PageTitle = styled.h4`
  margin-top: 64px;
  margin-bottom: 0px;
  margin-right: 5%;
  margin-left: 5%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 34px;
  letter-spacing: 0.5px;
  color: #131413;
`;
const SettingTap = styled(Box)`
  margin-top: 42px;
  margin-right: 5%;
  margin-left: 5%;
  border-bottom: 1px solid #cecece;
  display: flex;
  justify-content: flex-start;
  gap: 32px;
`;
const SettingTapBtn = styled.button`
  background: transparent;
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 8px;
  border: none;
  border-bottom: 3px solid ${(p) => (p.selected ? "#2BA55D" : "transparent")};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: ${(p) => (p.selected ? "#2BA55D" : "#757B75")};
  cursor: pointer;
`;
const SettingTapContent = styled(Box)`
  margin-top: 40px;
  margin-left: 5%;
  margin-right: 5%;
`;

export default SettingPage;
