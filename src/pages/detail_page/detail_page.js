/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */

import React from "react";
import { FaShareAlt, FaHeart } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import small_ellipse from "../../images/small_ellipse2.png";
import small_duke from "../../images/small_duke1.png";
import cover from "../../images/cover/cover.png";
import cover1 from "../../images/cover/cover-1.png";
import cover2 from "../../images/cover/cover-2.png";
import cover3 from "../../images/cover/cover-3.png";
import cover4 from "../../images/cover/cover-4.png";
import cover5 from "../../images/cover/cover-5.png";
import cover6 from "../../images/cover/cover-6.png";
import cover7 from "../../images/cover/cover-7.png";
import cover8 from "../../images/cover/cover-8.png";
import cover9 from "../../images/cover/cover-9.png";
import cover10 from "../../images/cover/cover-10.png";
import cover11 from "../../images/cover/cover-11.png";
import cover12 from "../../images/cover/cover-12.png";
import cover13 from "../../images/cover/cover-13.png";
import cover14 from "../../images/cover/cover-14.png";
import cover15 from "../../images/cover/cover-15.png";
import icon_logo from "../../images/icon_logo.png";
import detail_chart1 from "../../images/detail_chart1.png";
import Btn_Customize from "../../components/buttons/btn_container";
import Last_Drop from "../../components/carts/cart_drop";
import List_ULetter from "../../components/letters/list_uletter";
import { lightTheme, darkTheme } from "../../theme/theme";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const Detail_Page = ({ ctheme }) => {
  const history = useHistory();
  const nftsIndex = parseInt(history.location.search.slice(1));
  const { nfts } = useSelector((store) => store.product);
  const mainData = nfts[nftsIndex];
  if (mainData === undefined || mainData === null) {
    history.push("/");
    return <></>;
  }
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
      <Box display="flex" width="100%" marginTop="5%">
        <Detail_Img
          display="flex"
          marginLeft="5%"
          marginRight="5%"
          width="100%"
        >
          <Box display="flex" flex="4" borderRadius="8px">
            <img
              src={mainData.img}
              width="100%"
              height="100%"
              borderRadius="8px"
            ></img>
          </Box>
          <Box display="flex" flex="5" justifyContent="center">
            <Box display="flex" flexDirection="column" width="90%">
              <Box display="flex" flex="1" alignItems="center">
                <Box
                  display="flex"
                  flex="1"
                  justifyContent="flex-start"
                  fontFamily="Work Sans"
                  fontWeight="500"
                  fontSize="18px"
                  color="#2BA55D"
                >
                  Collection name
                </Box>
                <Box display="flex" flex="1" justifyContent="flex-end">
                  <FaShareAlt fontSize="18px" color="#757B75"></FaShareAlt>
                </Box>
              </Box>
              <Box
                display="flex"
                flex="2"
                flexDirection="column"
                marginTop="1%"
              >
                <Img_Title1
                  display="flex"
                  flex="1"
                  fontFamily="Work Sans"
                  fontWeight="800"
                  fontSize="34px"
                  color="#363936"
                  lineHeight="40px"
                  alignItems="center"
                >
                  {/* NFT artwork titleNFT */}
                  {mainData.title}
                </Img_Title1>
                <Img_Title1
                  display="flex"
                  flex="1"
                  fontFamily="Work Sans"
                  fontWeight="800"
                  fontSize="34px"
                  color="#363936"
                  lineHeight="40px"
                  alignItems="center"
                >
                  artwork title
                </Img_Title1>
              </Box>
              <Box display="flex" flex="1" alignItems="center" marginTop="1%">
                <Box
                  display="flex"
                  flex="60"
                  alignItems="center"
                  justifyContent="center"
                  fontFamily="Work Sans"
                  fontSize="12px"
                  fontWeight="400"
                  color="#757B75"
                >
                  Owned by{" "}
                </Box>
                <Box
                  display="flex"
                  flex="75"
                  alignItems="center"
                  justifyContent="center"
                  fontFamily="Work Sans"
                  fontSize="12px"
                  fontWeight="400"
                  color="#2BA55D"
                >
                  User's name
                </Box>
                <Box
                  display="flex"
                  flex="95"
                  alignItems="center"
                  justifyContent="center"
                  fontFamily="Work Sans"
                  fontSize="12px"
                  fontWeight="400"
                  color="#757B75"
                >
                  <MdRemoveRedEye fontSize="20px" />
                  {"\u00a0"}2.4 K views
                </Box>
                <Box
                  display="flex"
                  flex="95"
                  alignItems="center"
                  justifyContent="center"
                  fontFamily="Work Sans"
                  fontSize="12px"
                  fontWeight="400"
                  color="#757B75"
                >
                  <FaHeart fontSize="20px" />
                  {"\u00a0"}201 favorited
                </Box>
                {/* <Box display="flex" flex="100" alignItems="center" justifyContent="center" fontFamily="Work Sans" fontSize="12px" fontWeight="500" color=""></Box> */}
              </Box>
              <Box
                display="flex"
                flex="2"
                flexDirection="column"
                marginTop="1%"
              >
                <Box
                  display="flex"
                  flex="1"
                  alignItems="flex-end"
                  fontFamily="Work Sans"
                  fontSize="10px"
                  fontWeight="400"
                  color="#757B75"
                >
                  Lowest price
                </Box>
                <Box
                  display="flex"
                  flex="1"
                  alignItems="flex-start"
                  marginTop="10px"
                >
                  <Box display="flex" alignItems="center">
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <img src={icon_logo} width="24px" height="24px"></img>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      marginLeft="10px"
                      fontFamily="Work Sans"
                      fontSize="18px"
                      fontWeight="400"
                      color="#131413"
                    >
                      200.1 FAST
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      marginLeft="10px"
                      fontFamily="Work Sans"
                      fontSize="12px"
                      fontWeight="400"
                      color="#757B75"
                    >
                      $4.05
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                flex="2"
                alignItems="flex-start"
                marginTop="1%"
              >
                <Btn_Customize
                  color={"white"}
                  back={"#2BA55D"}
                  width={"100%"}
                  height={"56px"}
                  border={"1px solid #2BA55D"}
                  str={"Place a bid"}
                  borderRadius={"8px"}
                />
              </Box>
            </Box>
          </Box>
        </Detail_Img>
      </Box>
      <Box display="flex" width="100%">
        <Underline1
          display="flex"
          marginLeft="5%"
          marginRight="5%"
          width="100%"
          marginTop="2%"
        >
          <Box display="flex" flex="4" width="100%" justifyContent="flex-start">
            <Box display="flex" width="95%" flexDirection="column">
              <List_ULetter
                ctheme={ctheme}
                str={"Description"}
                width1={"100%"}
                height1={"40px"}
              ></List_ULetter>
              <Box
                display="flex"
                flexDirection="column"
                marginTop="30px"
                width="100%"
              >
                <Box
                  display="flex"
                  flex="1"
                  alignItems="center"
                  justifyContent="flex-start"
                  fontFamily="Work Sans"
                  fontSize="18px"
                  fontWeight="400"
                  color="#363936"
                >
                  Create by <Box color="#2BA55D">{"\u00a0"}username</Box>
                </Box>
                <Box
                  display="flex"
                  flex="1"
                  alignItems="center"
                  justifyContent="flex-start"
                  fontFamily="Work Sans"
                  fontSize="18px"
                  fontWeight="400"
                  color="#363936"
                >
                  Lorem ipsum dolor sit amet, consectetur
                </Box>
                <Box
                  display="flex"
                  flex="1"
                  alignItems="center"
                  justifyContent="flex-start"
                  fontFamily="Work Sans"
                  fontSize="18px"
                  fontWeight="400"
                  color="#363936"
                >
                  adipiscing elit. Aliquet nibh faucibus feugiat
                </Box>
                <Box
                  display="flex"
                  flex="1"
                  alignItems="center"
                  justifyContent="flex-start"
                  fontFamily="Work Sans"
                  fontSize="18px"
                  fontWeight="400"
                  color="#363936"
                >
                  et mus habitasse. Sed nisi, vestibulum vitae
                </Box>
                <Box
                  display="flex"
                  flex="1"
                  alignItems="center"
                  justifyContent="flex-start"
                  fontFamily="Work Sans"
                  fontSize="18px"
                  fontWeight="400"
                  color="#363936"
                >
                  consequat.
                </Box>
              </Box>
              <List_ULetter
                ctheme={ctheme}
                str={"Property"}
                width1={"100%"}
                height1={"40px"}
              ></List_ULetter>
              <List_ULetter
                ctheme={ctheme}
                str={"About this collection"}
                width1={"100%"}
                height1={"40px"}
              ></List_ULetter>
              <List_ULetter
                ctheme={ctheme}
                str={"Details"}
                width1={"100%"}
                height1={"40px"}
              ></List_ULetter>
            </Box>
          </Box>
          <Underline3
            display="flex"
            flex="5"
            width="100%"
            justifyContent="center"
          >
            <Underline2 display="flex" width="90%" flexDirection="column">
              <List_ULetter
                ctheme={ctheme}
                str={"Price history"}
                width1={"100%"}
                height1={"40px"}
              ></List_ULetter>
              <Box display="flex">
                <img src={detail_chart1} width="100%" height="100%"></img>
              </Box>
            </Underline2>
          </Underline3>
        </Underline1>
      </Box>

      <Box display="flex" width="100%">
        <Box
          display="flex"
          marginLeft="5%"
          marginRight="5%"
          width="90%"
          marginTop="2%"
          flexDirection="column"
        >
          <List_ULetter
            ctheme={ctheme}
            str={"Items activity"}
            width1={"100%"}
            height1={"40px"}
          ></List_ULetter>
          <Drop_chart1>Need to make table here</Drop_chart1>
        </Box>
      </Box>

      <Box display="flex" width="100%">
        <Box
          display="flex"
          marginLeft="5%"
          marginRight="5%"
          width="90%"
          marginTop="2%"
          flexDirection="column"
        >
          <List_ULetter
            ctheme={ctheme}
            str={"Other items in this collection"}
            width1={"100%"}
            height1={"40px"}
          ></List_ULetter>
        </Box>
      </Box>

      <Part_Drop>
        <Box
          display="flex"
          flexDirection="column"
          marginLeft="5%"
          marginRight="5%"
        >
          <Box display="flex" flexDirection="column" marginTop="2%">
            <Collection_Image display="flex" flex="1" marginBottom="2%">
              <Box display="flex" flex="1" marginRight="2%">
                <Last_Drop
                  index={1}
                  img={cover4}
                  simg={small_ellipse}
                  simg1={small_duke}
                  name={"Creator Name"}
                  price={"310.9 DUKE"}
                  ctheme={ctheme}
                ></Last_Drop>
              </Box>
              <Box display="flex" flex="1" marginRight="2%">
                <Last_Drop
                  index={1}
                  img={cover5}
                  simg={small_ellipse}
                  simg1={small_duke}
                  name={"Creator Name"}
                  price={"310.9 DUKE"}
                  ctheme={ctheme}
                ></Last_Drop>
              </Box>
              <Box display="flex" flex="1" marginRight="2%">
                <Last_Drop
                  index={1}
                  img={cover6}
                  simg={small_ellipse}
                  simg1={small_duke}
                  name={"Creator Name"}
                  price={"310.9 DUKE"}
                  ctheme={ctheme}
                ></Last_Drop>
              </Box>
              <Box display="flex" flex="1">
                <Last_Drop
                  index={1}
                  img={cover7}
                  simg={small_ellipse}
                  simg1={small_duke}
                  name={"Creator Name"}
                  price={"310.9 DUKE"}
                  ctheme={ctheme}
                ></Last_Drop>
              </Box>
            </Collection_Image>
          </Box>
        </Box>
      </Part_Drop>
    </StyledContainer>
  );
};

const Collection_Image = styled(Box)`
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Underline1 = styled(Box)`
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Underline2 = styled(Box)`
  @media (max-width: 800px) {
    width: 95% !important;
  }
`;

const Underline3 = styled(Box)`
  @media (max-width: 800px) {
    justify-content: flex-start !important;
  }
`;

const Detail_Img = styled(Box)`
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Img_Title1 = styled(Box)`
  @media (max-width: 1000px) {
    font-size: 25px !important;
  }
`;

const Part_Drop = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 20px;
  flex-direction: column;
`;

const Drop_chart1 = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 160px;
  background: linear-gradient(
    273.64deg,
    rgba(187, 230, 204, 0.33) 3.14%,
    rgba(198, 231, 255, 0.31) 97.12%
  );
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: black;
  // color: ${({ ctheme, ltheme, dtheme }) => (ctheme ? "black" : "white")};
`;
const StyledContainer = styled(Box)`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: ${({ ctheme, ltheme, dtheme }) =>
    ctheme ? ltheme.bgcolor_main : dtheme.bgcolor_main};
`;

const Header1_space = styled(Box)`
  @media (max-width: 1000px) {
    margin-left: 8% !important;
    margin-right: 8% !important;
  }
  @media (max-width: 800px) {
    margin-left: 5% !important;
    margin-right: 5% !important;
  }
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

const Header1 = styled(Box)`
  display: flex;
  width: 100%;
`;
export default Detail_Page;
