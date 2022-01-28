import React from "react";

const Header = () => {
  return (
    <div className="topnav">
      <a className="logo">Kreyat </a>Professional Course
      <div>
        <form>
          <a>Add Course</a>
          <input type="text" placeholder="Search......" name="search" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
