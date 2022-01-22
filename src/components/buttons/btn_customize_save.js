import React from "react";
import { useState } from 'react'
import { Box, Button, Modal } from '@material-ui/core'
import { MdSave } from "react-icons/md";
import styled from 'styled-components';

const Btn_Customize_Save = ({ color, back, width, height, border, str, borderRadius, marginL }) => {
    return (
        <Btn_Cus display="flex" justifyContent="center" alignItems="center" width={width} height={height} color={color}
            bgcolor={back} border={border} borderRadius={borderRadius} marginLeft={marginL}
            sx={{
                fontFamily: 'Work Sans',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '18px',
                lineHeight: '24px',
            }}
        > <MdSave color="#FCFCFC"></MdSave>{'\u00a0'}{str}</Btn_Cus >
    );
};

const Btn_Cus = styled(Box)`

@media (max-width: 800px) {
    font-size: 15px !important;
    }
    @media (max-width: 600px) {
        font-size: 12px !important;
        }


&:hover{
    cursor: pointer;
    box-shadow:
    inset 0 -3em 3em rgba(0,0,0,0.1),
          0 0  0 0px rgb(255,255,255),
          0.3em 0.3em 1em rgba(0,0,0,0.3);
}
`


export default Btn_Customize_Save;