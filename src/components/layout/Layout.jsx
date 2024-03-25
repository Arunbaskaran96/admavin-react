import { Outlet } from "react-router-dom";
import Topbar from "../topbar/Topbar";

function Layout() {
  return (
    <div>
      <Topbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
