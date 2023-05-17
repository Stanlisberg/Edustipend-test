import React, { useState } from 'react';

function Sidebar () {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    }

    return(
        <aside classname='sidebar-container'>
            <div classNme='sidebar-wrapper'>
                <h2>Trending Songs</h2>
                <div className='drop-container'>
                    <div>
                        <p></p>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <button>View More</button>
            </div>
        </aside>
    )
}
export default Sidebar;

{/* <div className="dropdown">
<button className="dropdown-button" onClick={toggleDropdown}>
Dropdown
</button>
{isOpen && (
<ul className="dropdown-menu">
    <li>Option 1</li>
    <li>Option 2</li>
</ul>
)}
</div> */}