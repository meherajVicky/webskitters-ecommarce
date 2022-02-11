import {
  AppBar,
  Badge,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import ShoppingBagRoundedIcon from "@mui/icons-material/ShoppingBagRounded";
import styled from "@emotion/styled";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "5rem",
  },
  container: {
    height: "5rem",
  },
  toolbar: {
    justifyContent: "space-between",
    height: "100%",
  },
  btn: {
    margin: `20px!important`,
  },
  logo: {
    width: "175px",
    height: "40px",
    cursor: "pointer",
  },
});
const Badges = styled(Badge)`
  box-sizing: border-box;
  font-size: 40px;
  cursor: pointer;
  & .MuiBadge-badge {
    background: rgb(196, 59, 104);
    color: #fff;
    box-shadow: 0 0 0 1px #0000;
    border-radius: 50%;
    z-index: auto;
    text-align: center;
    position: absolute;
    top: 5px;
    font-family: "old standard tt", serif;
  }
`;

export default function Nav() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Container maxWidth="xl" className={classes.container}>
        <Toolbar component="div" disableGutters className={classes.toolbar}>
          <Typography noWrap component="div" sx={{ ml: 4 }}>
            <img
              src="https://www.webskitters.com/wp-content/uploads/2020/10/logo.png"
              className={classes.logo}
              alt="logo"
            />
          </Typography>
          <Tooltip title="cart items">
            <IconButton sx={{ mr: 15 }}>
              <Badges badgeContent={1}>
                <ShoppingBagRoundedIcon sx={{ fontSize: 30 }} />
              </Badges>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
