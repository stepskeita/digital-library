import Nav from "./components/layout/Nav";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import RecentlyAdded from "./pages/RecentlyAdded";
import Book from "./pages/Book";
import Bookmarks from "./pages/Bookmarks";
import ReadBook from "./pages/ReadBook";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboad from "./pages/Dashboad";
import AuthorSearch from "./pages/AuthorSearch";
import CategorySearch from "./pages/CategorySearch";
import KeywordSearch from "./pages/KeywordSearch";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="">
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/dashboard" component={Dashboad} />

        <Route exact path="/recently-added" component={RecentlyAdded} />
        <Route exact path="/bookmarks" component={Bookmarks} />
        <Route exact path="/book/:slug" component={Book} />
        <Route exact path="/read/:slug" component={ReadBook} />
        <Route exact path="/author/:slug" component={AuthorSearch} />
        <Route exact path="/category/:slug" component={CategorySearch} />
        <Route exact path="/keyword/:slug" component={KeywordSearch} />
      </div>
    </BrowserRouter>
  );
}

export default App;
