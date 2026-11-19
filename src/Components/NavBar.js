import { MenuComponent } from "./MenuComponent";
import { WorkspaceComponent } from "./WorkspaceComponent";
import myImage from "../Images/my-photo.jpg";

export function NavBar() {
  return (
    <div className="nav">
      <h2>TaskFlow</h2>
      <div className="menu">
        <p className="menu-head">MENU</p>
        <div className="menu-container">
          <MenuComponent className="dashboard-container">
            <i className="fas fa-th-large nav-icon "></i>
            <p className="text">Dashboard</p>
          </MenuComponent>
          <MenuComponent className="tasks-container">
            <i className="fas fa-clipboard-list nav-icon"></i>
            <p className="text">Tasks</p>
          </MenuComponent>
          <MenuComponent className="calendar-container">
            <i className="far fa-calendar-alt nav-icon"></i>
            <p className="text"> Calendar</p>
          </MenuComponent>
          <MenuComponent className="projects-container">
            <i className="fas fa-folder-open nav-icon"></i>
            <p className="text">Projects</p>
          </MenuComponent>
          <MenuComponent className="notes-container">
            <i className="far fa-file-alt nav-icon"></i>
            <p className="text">Notes</p>
          </MenuComponent>
        </div>
      </div>
      <div className="workspaces">
        <p className="workspaces-head">WORKSPACES</p>
        <div className="workspaces-container">
          <WorkspaceComponent className="designTeam-container">
            <i className="fa-solid fa-circle workspaces-icon i1"></i>
            <p className="text">DesignTeam</p>
          </WorkspaceComponent>
          <div></div>
          <WorkspaceComponent className="marketing-container">
            <i className="fa-solid fa-circle workspaces-icon i2"></i>
            <p className="text">Marketing</p>
          </WorkspaceComponent>
          <WorkspaceComponent className="personal-container">
            <i className="fa-solid fa-circle workspaces-icon i3" id="3"></i>
            <p className="text">Personal</p>
          </WorkspaceComponent>
        </div>
      </div>
      <hr></hr>
      <div className="profile-container">
        <div className="profile">
          <img src={myImage} alt="profile" />
          <div className="profile-data">
            <p className="name">Shahd Elhlwaney</p>
            <p className="email">shahd@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="log-out">
            <i className="fa fa-sign-out logout-icon" aria-hidden="true"></i>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
