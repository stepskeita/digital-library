import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Route,
  useHistory,
  useRouteMatch,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import UploadBook from "./UploadBook";
import CustomTitle from "../components/layout/CustomTitle";
import SideNav from "../components/dashboard/SideNav";
import RegisterUser from "./RegisterUser";

const Dashboad = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const history = useHistory();
  let { path, url } = useRouteMatch();
  console.log(path, url);

  useEffect(() => {
    if (!userInfo) history.push("/login");
  }, [userInfo, history]);
  return (
    <div className="h-screen flex items-stretch overflow-y-hidden">
      <CustomTitle title="Dashboard" />
      <SideNav url={url} />
      <div className="flex-1 h-full overflow-y-auto">
        <Switch>
          <Route component={UploadBook} exact path={path} />
          <Route
            component={RegisterUser}
            exact
            path={`${path}/register-user`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboad;
