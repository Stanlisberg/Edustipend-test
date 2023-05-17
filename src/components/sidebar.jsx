import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className="sidebar-div">
          <h2>Trending Songs</h2>
          <div className="drop-container">
            <div className="drop-content">
              <p>Unavailable by Davido</p>
              <FaPlus />
            </div>
            <div className="drop-content">
              <p>Unavailable by Davido</p>
              <FaPlus />
            </div>
            <div className="drop-content">
              <p>Unavailable by Davido</p>
              <FaPlus />
            </div>
            <div className="drop-content">
              <p>Unavailable by Davido</p>
              <FaPlus />
            </div>
            <div className="drop-content">
              <p>Unavailable by davido</p>
              <FaPlus />
            </div>
          </div>
          <button>View More</button>
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;




  /* <div className="dropdown">
<button className="dropdown-button" onClick={toggleDropdown}>
Dropdown
</button>
{isOpen && (
<ul className="dropdown-menu">
    <li>Option 1</li>
    <li>Option 2</li>
</ul>
)}
</div> */
