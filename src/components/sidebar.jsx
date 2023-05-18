import { FaPlus } from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar-container">
      <div className="sidebar-wrapper">
        <div className="sidebar-div">
          <h1>Trending Songs</h1>
          <div className="drop-container">
            <div className="drop-content">
              <p>Unavailable by <span className='span-p'>Davido</span></p>
              <FaPlus className='icon' size={13}/>
            </div>
            <div className="drop-content">
              <p>Unavailable by <span className='span-p'>Davido</span></p>
              <FaPlus className='icon' size={13}/>
            </div>
            <div className="drop-content">
              <p>Unavailable by <span className='span-p'>Davido</span></p>
              <FaPlus className='icon' size={13}/>
            </div>
            <div className="drop-content">
              <p>Unavailable by <span className='span-p'>Davido</span></p>
              <FaPlus className='icon' size={13}/>
            </div>
            <div className="drop-content">
              <p>Unavailable by <span className='span-p'>Davido</span></p>
              <FaPlus className='icon' size={13}/>
            </div>
          </div>
          <button className='side-button'>View More</button>
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;


