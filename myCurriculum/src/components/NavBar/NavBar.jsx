import { useEffect } from "react";
import "./NavBar.css";
import feather from "feather-icons";

const NavBar = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div class="header">
      <div class="header__logo">
        <img id="profile-pic" src="../../../profile_pic.jpg"></img>
      </div>
      <nav class="navbar">
        <ul class="navbar__menu">
          <li class="navbar__item">
            <a href="#" class="navbar__link">
              <i data-feather="home"></i>
              <span>About me</span>{" "}
            </a>
          </li>
          <li class="navbar__item">
            <a href="#" class="navbar__link">
              <i data-feather="message-square"></i>
              <span>Projects</span>
            </a>
          </li>
          <li class="navbar__item">
            <a href="#" class="navbar__link">
              <i data-feather="users"></i>
              <span>Hobbies</span>
            </a>
          </li>
          <li class="navbar__item">
            <a href="#" class="navbar__link">
              <i data-feather="folder"></i>
              <span>Graduation</span>
            </a>
          </li>
          <li class="navbar__item">
            <a href="#" class="navbar__link">
              <i data-feather="help-circle"></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
