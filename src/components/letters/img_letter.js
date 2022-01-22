import React from "react";
import { useState } from 'react'
import { Box, Button, Modal } from '@material-ui/core'
import styled from 'styled-components';
import { lightTheme, darkTheme } from "../../theme/theme"

const Img_Letter = ({ letter, ctheme }) => {
    return (
        <ILtter ctheme={ctheme?1:0} ltheme={lightTheme} dtheme={darkTheme}>
            {letter}
        </ILtter>
    );
};

const ILtter = styled(Box)`
font-family: 'Work Sans';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;
color: ${({ ctheme, ltheme, dtheme}) => ctheme ? ltheme.font_color1 : dtheme.font_color1};
`


export default Img_Letter;