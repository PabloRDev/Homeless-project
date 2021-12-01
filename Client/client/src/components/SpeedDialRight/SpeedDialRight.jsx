import React from "react";
//@MUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
// ICONS-MATERIAL
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PlaceIcon from "@mui/icons-material/Place";
import EventIcon from "@mui/icons-material/Event";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
// ROUTER
import { Link } from "react-router-dom";
const withLink = (to, children) => <Link to={to}>{children}</Link>;

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: withLink("/", <HomeIcon />), name: "Home" },
  { icon: withLink("/donde-acudir", <PlaceIcon />), name: "Dónde acudir" },
  { icon: withLink("/eventos", <EventIcon />), name: "Comparte tu evento" },
  { icon: withLink("/ayuda", <AttachFileIcon />), name: "Recursos" },
  { icon: withLink("/acerca", <InfoIcon />), name: "Acerca del proyecto" },
  { icon: withLink("/acceso", <LoginIcon />), name: "Acceso" },
  { icon: withLink("/logout", <LogoutIcon />), name: "Logout" },
];

export default function PlaygroundSpeedDial() {
  const direction = "right";
  const hidden = false;

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <Box sx={{ position: "relative", mt: 0, height: 0 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
