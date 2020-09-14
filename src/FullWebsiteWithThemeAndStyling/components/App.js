import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/ui/Footer";
import LandingPage from "./LandingPage";
import Services from "./Services";
import CustomSoftware from "./ui/CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./Websites";
import theme from "./ui/Theme";
import Header from "./ui/Header";
import Revolution from "./Revolution";
import About from "./About";
import Contact from "./Contact";
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    //theme provider wraps the whole app in a theme - value is the theme file
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/" component={LandingPage} setValue={setValue} />
          <Route path="/services" component={Services} />
          <Route path="/customsoftware" component={CustomSoftware} />
          <Route path="/mobileapps" component={MobileApps} />
          <Route path="/websites" component={Websites} />
          <Route path="/revolution" component={Revolution} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
