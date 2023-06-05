import Nav from "./components/layout/Nav";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import RecentlyAdded from "./pages/RecentlyAdded";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="py-7">
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/recently-added" component={RecentlyAdded} />
      </div>
    </BrowserRouter>
  );
}

export default App;
