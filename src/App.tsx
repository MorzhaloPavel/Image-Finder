import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Bookmarks from "./pages/Bookmarks";
import { FlickrState } from "./context/firebase/FlickrState";

function App() {

  return (
    <FlickrState>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className='container' >
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/bookmarks'} component={Bookmarks} />
          </Switch>
        </div>
        <Footer/>
      </BrowserRouter>
    </FlickrState>
  );
}

export default App;
