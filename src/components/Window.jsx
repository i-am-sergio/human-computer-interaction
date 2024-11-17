import './Window.css';
import Works from "./Works";

function Window({ section, onClose }) {
  return (
    <div className="window-overlay">
      <div className="window flex flex-col py-2 min-w-[98%] min-h-[98%]">
        <div className="window-header">
          <span className='window-title'>{section}</span>
          <button className='close-button' onClick={onClose}>X</button>
        </div>
        <div className="window-content">
          <Works />
        </div>
      </div>
    </div>
  );
}

export default Window;
