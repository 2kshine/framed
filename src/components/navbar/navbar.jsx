import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <h1>
          <span className="logo">FRAMED</span>
        </h1>
      </div>
      <div className="navbarCenter">
        <div className="searchbar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            className="searchInput"
            placeholder="Search for frames, memories or friends"
          />
        </div>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink">Homepage</span>
          <span className="navbarLink">Timeline</span>
        </div>
        <div className="navbarIcons">
          <div className="navIconItem">
            <i class="fa-solid fa-user"></i>
            <span className="navbarIconBadge">1</span>
          </div>
          <div className="navIconItem">
            <i class="fa-brands fa-rocketchat"></i>
            <span className="navbarIconBadge">3</span>
          </div>
          <div className="navIconItem">
            <i class="fa-solid fa-bell"></i>
            <span className="navbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="navbarImg" />
      </div>
    </div>
  );
};

export default Navbar;
