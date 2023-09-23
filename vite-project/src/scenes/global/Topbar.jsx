// import React from 'react'
import { Box, IconButton, useTheme } from '@mui/theme'
import { useContext } from 'react'
import { colorModeContext, tokens } from '../../theme'
import InputBase from '@mui/material';
import LightModeOutlinedIcon  from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlinedIcon";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlinedIcon";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlinedIcon";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlinedIcon";
import searchIcon from "@mui/icons-material/search";

function Topbar() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colorModeContext)

  return (
    <Box>Topbar</Box>
  )
} 

export default Topbar