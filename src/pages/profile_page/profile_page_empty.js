/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { useState } from 'react'
import { FaCamera, FaPencilAlt } from "react-icons/fa";
import { FiMove } from "react-icons/fi";
import { Box, Slider } from '@material-ui/core'
import styled from 'styled-components';
import cover_big1 from '../../images/cover/collection_header.png';
import small_ellipse from "../../images/small_ellipse2.png"
import tiger_circle1 from "../../images/tiger_circle1.png"
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
import Btn_Customize from "../../components/buttons/btn_container"
import Btn_Customize_Save from "../../components/buttons/btn_customize_save"
import Last_Drop from "../../components/carts/cart_drop"
import Img_Letter from "../../components/letters/img_letter"
import { lightTheme, darkTheme } from "../../theme/theme"



const Profile_page_empty = ({ ctheme }) => {

    const [flag_move, set_move] = useState(false);


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
            <Show_Detail>
                <Box display="flex" flex="1" marginLeft="5%" marginTop="6%" flexDirection="column" marginRight="5%" position="relative">
                    <Camera_move1 display="flex" flex="210" width="100%" >
                        <img src={cover_big1} width="100%" height="210px"></img>
                        <Box position="absolute" display="none" width="9%" height="12%" justifyContent="center" alignItems="center" right="0px" bottom="10%">
                            <Box width="25%" height="100%" bgcolor="white" borderRadius="100%" justifyContent="center" alignItems="center" marginRight="5%" >
                                <FaCamera fontSize="18px" color="#323232"></FaCamera>
                            </Box>
                            <Box width="25%" height="100%" bgcolor="white" borderRadius="100%" justifyContent="center" alignItems="center" onClick={() => { set_move(!flag_move) }}>
                                <FiMove fontSize="18px" color="#323232" fontWeight="bold"></FiMove>
                            </Box>
                        </Box>
                        <Drag_reposition display="none" position="absolute" top="40%" left="40%" width="25%" height="40px" bgcolor="#FCFCFC" borderRadius="8px" fontSize="20px" fontWeight="300" fontFamily="Work Sans" alignItems="center" justifyContent="center">Drag to reposition{'\u00a0'}{'\u00a0'}<FiMove/></Drag_reposition>
                    </Camera_move1>
                    <Box display="flex" flex="50"  marginTop="1%" width="100%">
                        {flag_move === true ? <Box position="absolute" display="flex" width="100%" justifyContent="flex-end" alignItems="center">
                            <Box display="flex" width="30%" fontSize="20px" fontWeight="800" fontFamily="Work Sans" alignItems="center" bgcolor="#FFFFFF" border="1px solid #CECECE" borderRadius="8px" marginRight="2%">
                            {'\u00a0'}{'\u00a0'}-{'\u00a0'}{'\u00a0'}<Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/>{'\u00a0'}{'\u00a0'}+{'\u00a0'}{'\u00a0'}</Box>
                            <Btn_Customize_Save color={'white'} back={'#2BA55D'} width={'10%'} height={'40px'} border={'1px solid #2BA55D'} str={'Save'} borderRadius={'8px'} />
                        </Box> : null}
                    </Box>
                    <Tiger_img1 position="absolute" bottom="-15%" left="10%" width="7%">
                        <img src={tiger_circle1} width="100%" height="80px"></img>
                        <Tiger_camera position="absolute" left="30%" top="30%" width="40%" height="40%" display="none" bgcolor="white" borderRadius="100%" justifyContent="center" alignItems="center">
                            <FaCamera fontSize="18px" color="#323232"></FaCamera>
                        </Tiger_camera>
                    </Tiger_img1>



                </Box>
                <Box display="flex" flex="1" marginLeft="5%" marginRight="5%" marginTop="5%" >
                    <Box display="flex" flex="1" flexDirection="column" justifyContent="center" marginLeft="5%">
                        <Detail_Letter0 display="flex" alignItems="flex-start" fontFamily="Work Sans" fontSize="24px" fontWeight="600">Name
                            <Box marginLeft="3%" display="none">
                                <FaPencilAlt fontSize="20px" color="#323232"></FaPencilAlt>
                            </Box>
                        </Detail_Letter0>
                        <Detail_letter1 display="flex" fontFamily="Work Sans" fontSize="18px" color="#363936" lineHeight="22px">
                            <pre>Lorem ipsum dolor sit amet, <br />
                                consectetur adipiscing elit. Placerat <br />
                                praesent in dictum arcu consequat.<br />
                                Porttitor nisl enim dictum ut non<br />
                                consectetur euismod. Aliquam lorem <br />
                                neque, lobortis neque arcu.</pre>
                            <Box marginLeft="5%" marginTop='2%' display="none">
                                <FaPencilAlt fontSize="20px" color="#323232"></FaPencilAlt>
                            </Box>
                        </Detail_letter1>
                    </Box>
                    <Box_Price1 display="flex" flex="1" justifyContent="flex-end" alignItems="center" flexDirection='column'>
                        <Box display="flex" flex="1"></Box>
                        <Box_Letter1 width="80%" display="flex" flex="1" border="1px solid #CECECE" borderRadius="8px">
                            <Box_Letter2 display="flex" flex="1" flexDirection="column" borderRight="1px solid #CECECE">
                                <Detail_letter2 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="20px" fontFamily="Work Sans" fontWeight="800">
                                    47
                                </Detail_letter2>
                                <Detail_letter3 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="12px" fontFamily="Work Sans" color="#757B75">
                                    Items
                                </Detail_letter3>
                            </Box_Letter2>
                            <Box_Letter2 display="flex" flex="1" flexDirection="column" borderRight="1px solid #CECECE">
                                <Detail_letter2 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="20px" fontFamily="Work Sans" fontWeight="800">
                                    $9,251
                                </Detail_letter2>
                                <Detail_letter3 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="12px" fontFamily="Work Sans" color="#757B75">
                                    Ave. Value
                                </Detail_letter3>
                            </Box_Letter2>
                            <Box display="flex" flex="1.2" flexDirection="column">
                                <Detail_letter2 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="20px" fontFamily="Work Sans" fontWeight="800">
                                    $24,239
                                </Detail_letter2>
                                <Detail_letter3 display="flex" flex="1" justifyContent="center" alignItems="center" fontSize="12px" fontFamily="Work Sans" color="#757B75">
                                    Total Value
                                </Detail_letter3>
                            </Box>
                        </Box_Letter1>
                        <Box width="80%" display="flex" flex="1">

                        </Box>
                        <Box_create_nft display="flex" flex="1" width="80%" justifyContent="flex-end">
                            <Btn_Customize color={'white'} back={'#2BA55D'} width={'60%'} height={'56px'} border={'1px solid #2BA55D'} str={'+ Create NFT'} borderRadius={'8px'} />
                        </Box_create_nft>
                    </Box_Price1>
                </Box>
            </Show_Detail>
            <Show_Items>
                <Underline_link display="flex" marginLeft="5%" marginRight="5%" marginTop="2%" borderBottom="1px solid #CECECE" width="100%">
                    <LItem_group display="flex" width="5%" marginRight="5%" justifyContent="center">
                        <LItem_upletter justifyContent="center" alignItems="flex-start">All</LItem_upletter>
                        <LItem_upletter1 justifyContent="flex-start" alignItems="flex-start">35</LItem_upletter1>
                    </LItem_group>
                    <LItem_group display="flex" width="7%" marginRight="5%" justifyContent="center">
                        <LItem_upletter justifyContent="center" alignItems="flex-start">Owned</LItem_upletter>
                        <LItem_upletter1 justifyContent="flex-start" alignItems="flex-start">22</LItem_upletter1>
                    </LItem_group>
                    <LItem_group display="flex" width="12%" marginRight="5%" justifyContent="center">
                        <LItem_upletter justifyContent="center" alignItems="flex-start">On Auction</LItem_upletter>
                        <LItem_upletter1 justifyContent="flex-start" alignItems="flex-start">14</LItem_upletter1>
                    </LItem_group>
                    <LItem_group display="flex" width="7%" marginRight="5%" justifyContent="center">
                        <LItem_upletter justifyContent="center" alignItems="flex-start">Sold</LItem_upletter>
                        <LItem_upletter1 justifyContent="flex-start" alignItems="flex-start">5</LItem_upletter1>
                    </LItem_group>
                    <LItem_group display="flex" width="12%" marginRight="5%" justifyContent="center">
                        <LItem_upletter justifyContent="center" alignItems="flex-start">Watch List</LItem_upletter>
                        <LItem_upletter1 justifyContent="flex-start" alignItems="flex-start">10</LItem_upletter1>
                    </LItem_group>
                    <LItem_group display="flex" width="7%" justifyContent="center">
                        <LItem_upletter justifyContent="center" alignItems="flex-start">Hidden</LItem_upletter>
                        <LItem_upletter1 justifyContent="flex-start" alignItems="flex-start">3</LItem_upletter1>
                    </LItem_group>
                </Underline_link>
            </Show_Items>

            <Box display="flex" width="100%" marginTop="3%">
                <Box display="flex" marginLeft="5%" marginRight="5%" marginTop="3%" width="100%">
                    <Box display="flex" flex="1" alignItems="center" marginRight="2%">
                        <Btn_Customize color={'white'} back={'#2BA55D'} width={'100%'} height={'32px'} border={'1px solid #2BA55D'} str={'All 7'} borderRadius={'8px'} />
                    </Box>
                    <Tab_letter1 display="flex" flex="2" fontSize="14px" fontFamily="Work Sans" fontWeight="600" alignItems="center" justifyContent="center" marginRight="2%">On auction 4</Tab_letter1>
                    <Tab_letter1 display="flex" flex="1" fontSize="14px" fontFamily="Work Sans" fontWeight="600" alignItems="center" marginRight="2%">Sold 3</Tab_letter1>
                    <Tab_letter1 display="flex" flex="5"></Tab_letter1>
                    <Box display="flex" flex="3" alignItems="center" justifyContent="flex-end">
                        <Btn_Customize color={'#757B75'} back={'white'} width={'100%'} height={'32px'} border={'1px solid #757B75'} str={'Price - lowest'} borderRadius={'8px'} />
                    </Box>
                </Box>
            </Box>
            <Part_Drop>
                <Box display="flex" flexDirection="column" marginLeft="5%" marginRight="5%">
                    {/* <Img_Letter letter={'Latest drops 🚀'} ctheme={ctheme} /> */}
                    <Box display="flex" flexDirection="column" marginTop="2%">
                        <Collection_Image display="flex" flex="1" marginBottom="2%">
                            <Box display="flex" flex="1" marginRight="2%">
                                <Last_Drop img={cover4} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1" marginRight="2%">
                                <Last_Drop img={cover5} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1" marginRight="2%">
                                <Last_Drop img={cover6} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1" >
                                <Last_Drop img={cover7} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                        </Collection_Image>
                        <Collection_Image display="flex" flex="1" marginBottom="2%">
                            <Box display="flex" flex="1" marginRight="2%">
                                <Last_Drop img={cover8} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1" marginRight="2%">
                                <Last_Drop img={cover9} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1" marginRight="2%">
                                <Last_Drop img={cover10} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                            <Box display="flex" flex="1">
                                <Last_Drop img={cover11} simg={small_ellipse} simg1={small_duke} name={'Creator Name'} price={'310.9 DUKE'} ctheme={ctheme}></Last_Drop>
                            </Box>
                        </Collection_Image>
                    </Box>
                    <Box marginTop="150px" display="flex" justifyContent="center">
                        <Btn_Customize display="flex" color={'white'} back={'#2BA55D'} width={'230px'} height={'56px'} border={'1px solid #2BA55D'} str={'Explore more'} borderRadius={'8px'} />

                    </Box>
                </Box>
            </Part_Drop>

        </StyledContainer>
    );
};

const Drag_reposition = styled(Box)`
    opacity: 0.8;
`

const Box_create_nft = styled(Box)`
    @media (max-width: 600px) {
        display: none !important;
    }
`

const Camera_move1 = styled(Box)`
    &:hover{
        div{
            display: flex !important;
        }
    }
`

const Tiger_img1 = styled(Box)`
    &:hover{
        div{
            display: flex !important;
        }
    }
`

const Tiger_camera = styled(Box)`
`

const Underline_link = styled(Box)`
    flex-direction: row;

`

const Collection_Image = styled(Box)`
    flex-direction: row;
    @media (max-width: 600px) {
        flex-direction: column;
    }


`

const Box_Price1 = styled(Box)`

@media (max-width: 600px) {
    display: none !important;
    }
`

const Tab_letter1 = styled(Box)`
@media (max-width: 960px) {
    display: none !important;
    }
`

const Detail_Letter0 = styled(Box)`
    @media (max-width: 1000px) {
        font-size: 20px !important;
    }
    @media (max-width: 600px) {
        font-size: 15px !important;
        }
        &:hover{
            cursor: pointer;
            div{
                display: flex !important;
            }
        }
`

const Box_Letter1 = styled(Box)`
    display: flex;
    flex-direction: row;
    @media (max-width: 600px) {
        flex-direction: column;
        height: 120px !important;   
    }

    

`
const Box_Letter2 = styled(Box)`

    @media (max-width: 600px) {
        border-right: none !important;
        border-bottom: 1px solid #CECECE !important;
    }
`

const Detail_letter1 = styled(Box)`
    @media (max-width: 1200px) {
        font-size: 15px !important;
    }
    @media (max-width: 1000px) {
        font-size: 12px !important;
    }
    @media (max-width: 1000px) {
        font-size: 10px !important;
    }
    @media (max-width: 600px) {
        font-size: 8px !important;
        &:hover{
            cursor: pointer;
            div{
                display: flex !important;
            }
    }

`

const Detail_letter2 = styled(Box)`
    @media (max-width: 1200px) {
    font-size: 15px !important;
    }
    @media (max-width: 1000px) {
        font-size: 12px !important;
    }
    @media (max-width: 800px) {
        font-size: 9px !important;
    }


`

const Detail_letter3 = styled(Box)`
    @media (max-width: 1200px) {
    font-size: 10px !important;
    }

    @media (max-width: 1000px) {
        font-size: 8px !important;
        }

`

const Part_Drop = styled(Box)`
    display: flex;
    width: 100%;
    margin-top:5%;
    flex-direction: column;

`

const LItem_group = styled(Box)`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    color: #757B75;
    border-bottom: 4px solid rgba(0,0,0,0);
    &:hover{
        color: #2BA55D;
        border-bottom: 4px solid #2BA55D;
    }
`
const LItem_upletter = styled(Box)`
    font-size: 18px;
    @media (max-width: 1000px) {
        font-szie: 12px !important;
    }
`


const LItem_upletter1 = styled(Box)`
    font-size: 12px;
    @media (max-width: 1000px) {
        font-szie: 9px !important;
    }
`

const LItem1 = styled(Box)`
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #757B75;
    border-bottom: 4px solid rgba(0,0,0,0);
    &:hover{
        color: #2BA55D;
        border-bottom: 4px solid #2BA55D;
    }
`

const Show_Items = styled(Box)`
    width:100%;
    display: flex;
    margin-top:5%;
    @media (max-width: 900px) {
        display: none !important;
    }
`

const Show_Detail = styled(Box)`
    width:100%;
    display: flex;
    height:520px;
    flex-direction: column;
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
export default Profile_page_empty;