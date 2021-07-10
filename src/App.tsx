import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MyCollection from "./pages/MyCollection";

function App() {

  return (
    <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className='container' >
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/bookmarks'} component={MyCollection} />
          </Switch>
        </div>
        <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
