import { createTheme, ThemeProvider} from "@mui/material";
import AbilityButton from "./components/AbilityButton";
import './App.css';
import ResponsiveAppBar from "./components/AppBar";
import SetupButton from "./components/SetupButton";
import React from "react";
import CleanRoomButton from "./components/CleanRoomButton";
import ResetButton from "./components/ResetButton";
import StartButton from "./components/StartButton";
import NightInfoButton from "./components/NightInfoButton";
import SitButton from "./components/SitButton";
import RoleCheckButton from "./components/RoleCheckButton";

const theme = createTheme({
  palette:{
    primary:{
      main: "#2e1667",
    },
    secondary:{
      main:"#c7d8ed"
    },
  },
  typography:{
    fontFamily:[
        'Roboto'
    ],
    h4:{
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5:{
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  const [nbrPlayers, setNbrPlayers] = React.useState(9);
  const [stage, setStage] = React.useState("no");

  return(
      <div className="App">
        <ThemeProvider theme={theme}>

          <ResponsiveAppBar/>
          <br/>

          <SetupButton setNbrPlayers={setNbrPlayers}/>
          <br/>

          <ResetButton/>
          <br/>

          <CleanRoomButton/>
          <br/>

          <br/>
          <br/>

          <StartButton/>
          <br/>

          <NightInfoButton/>
          <br/>

          <br/>
          <br/>
          <br/>

          <SitButton nbrPlayers={nbrPlayers} />
          <br/>

          <RoleCheckButton/>
          <br/>

          <AbilityButton/>
          <br/>

          {/*<SetupDialog/>*/}
          {/*<GameGrid></GameGrid>*/}
          {/*<SimpleDialogDemo/>*/}
        </ThemeProvider>
      </div>
  )
}

export default App;
