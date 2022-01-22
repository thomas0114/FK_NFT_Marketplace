/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */

import React from "react";
import { FaShareAlt, FaHeart } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { Box } from '@material-ui/core'
import styled from 'styled-components';
import tiger1 from "../../images/tiger1.png";
import icon_logo from "../../images/icon_logo.png";
import { lightTheme, darkTheme } from "../../theme/theme"

import Btn_Customize from "../../components/buttons/btn_container"
const Profile_page_prev = ({ ctheme }) => {

    return (
        <StyledContainer ctheme={ctheme ? 1 : 0} ltheme={lightTheme} dtheme={darkTheme}>
            <Header1>
                <Header1_space display="flex" flex="1" justifyContent="space-between" marginLeft="20%" marginRight="20%">
                    <HLetter>Overview</HLetter>
                    <HLetter>Explore</HLetter>
                    <HLetter>Rankings</HLetter>
                    <HLetter>Activities</HLetter>
                    <HLetter>Manage</HLetter>
                </Header1_space>
            </Header1>
            <Box display="flex" width="100%" marginTop="5%" >
                <Detail_Img display="flex" marginLeft="5%" marginRight="5%" width="100%">
                    <Box display="flex" flex="4"  borderRadius="8px">
                        <img src={tiger1} width="100%" height="100%" borderRadius="8px"></img>
                    </Box>
                    <Box display="flex" flex="5"justifyContent="center">
                        <Box display="flex" flexDirection="column" width="90%">
                            <Box display="flex" flex="2" flexDirection="column" marginTop="1%">
                                <Img_Title1 display="flex" flex="1" fontFamily="Work Sans" fontWeight="800" fontSize="34px" color="#363936" lineHeight="40px" alignItems="center">Profile Activation</Img_Title1>
                                <Img_Title1 display="flex" flex="1" fontFamily="Work Sans" fontWeight="500" fontSize="18px" color="black" lineHeight="40px" alignItems="flex-start">Show off your stats and collectible with your profile  </Img_Title1>
                            </Box>
                            <Box display="flex" flex="1" flexDirection="column" marginTop="1%">
                                <Box display="flex" flex="1" alignItems="flex-end" fontFamily="Work Sans" fontSize="10px" fontWeight="400" color="#757B75">
                                    Lowest price
                                </Box>
                                <Box display="flex" flex="1" alignItems="flex-start" marginTop="10px">
                                    <Box display="flex" alignItems="center">
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <img src={icon_logo} width="24px" height="24px"></img>
                                        </Box>
                                        <Box display="flex" justifyContent="center" alignItems="center" marginLeft="10px" fontFamily="Work Sans" fontSize="18px" fontWeight="400" color="#131413">200.1 FAST</Box>
                                        <Box display="flex" justifyContent="center" alignItems="center" marginLeft="10px" fontFamily="Work Sans" fontSize="12px" fontWeight="400" color="#757B75">$4.05</Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display="flex" flex="2" alignItems="flex-start" marginTop="1%">
                                <Btn_Customize color={'white'} back={'#2BA55D'} width={'100%'} height={'56px'} border={'1px solid #2BA55D'} str={'Pay activation fee now'} borderRadius={'8px'} />

                            </Box>
                        </Box>
                    </Box>
                </Detail_Img>
            </Box>
        </StyledContainer>
    );
};

const Detail_Img = styled(Box)`
flex-direction: row;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const Img_Title1 = styled(Box)`
    @media (max-width: 1000px) {
        font-size: 25px !important;
    }
`

const StyledContainer = styled(Box)`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    background: ${({ ctheme, ltheme, dtheme }) => ctheme ? ltheme.bgcolor_main : dtheme.bgcolor_main};
`

const Header1_space = styled(Box)`
@media (max-width: 1000px) {
    margin-left: 8% !important;
    margin-right: 8% !important;
}
    @media (max-width: 800px) {
        margin-left: 5% !important;
        margin-right: 5% !important;
    }
`

const HLetter = styled(Box)`
    display: flex;
    height:34px;
    justify-content: center;
    align-items: center;
    font-family: Work Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #2BA55D;
    border-top: 4px solid rgba(0,0,0,0);
    &:hover{
        border-top: 4px solid  #2BA55D;
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

`

const Header1 = styled(Box)`
    display: flex;
    width:100%;

`
export default Profile_page_prev;