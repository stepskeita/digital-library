import Nav from "./components/layout/Nav";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import RecentlyAdded from "./pages/RecentlyAdded";
import Book from "./pages/Book";
import Bookmarks from "./pages/Bookmarks";
import ReadBook from "./pages/ReadBook";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="py-7">
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/recently-added" component={RecentlyAdded} />
        <Route exact path="/bookmarks" component={Bookmarks} />
        <Route exact path="/book/:slug" component={Book} />
        <Route exact path="/read/:slug" component={ReadBook} />
      </div>
    </BrowserRouter>
  );
}

export default App;
