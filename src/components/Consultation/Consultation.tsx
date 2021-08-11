import React, { useEffect, useState } from "react";
import { styled } from "@material-ui/styles";
import { Theme } from '@material-ui/core';
import MenuBar from "./components/MenuBar/MenuBar";
import MobileTopMenuBar from "./components/MobileTopMenuBar/MobileTopMenuBar";
// import PreJoinScreens from "./components/PreJoinScreens/PreJoinScreens";
import ReconnectingNotification from "./components/ReconnectingNotification/ReconnectingNotification";
import Room from "./components/Room/Room";

import useHeight from "./hooks/useHeight/useHeight";

const Container = styled("div")({
  display: "grid",
  gridTemplateRows: "1fr auto",
});

const Main = styled("main")(({ theme }: { theme: Theme }) => ({
  overflow: "hidden",
  background: "black",
  [theme.breakpoints.down("sm")]: {
    paddingBottom: `${theme.mobileFooterHeight + theme.mobileTopBarHeight}px`, // Leave some space for the mobile header and footer
  },
}));

export default function Appointment() {
  // Here we would like the height of the main container to be the height of the viewport.
  // On some mobile browsers, 'height: 100vh' sets the height equal to that of the screen,
  // not the viewport. This looks bad when the mobile browsers location bar is open.
  // We will dynamically set the height with 'window.innerHeight', which means that this
  // will look good on mobile browsers even after the location bar opens or closes.
  const height = useHeight();

  return (
    <Container style={{ height }}>
      <Main>
        <ReconnectingNotification />
        <MobileTopMenuBar />
        <Room />
        <MenuBar />
      </Main>
    </Container>
  );
}
