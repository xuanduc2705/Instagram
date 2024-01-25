import React from 'react';
import '../taskbar/taskbar.css';

function Taskbar() {
  return (
    <div className="Taskbar">
      <ul className="Taskbar-list">
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
        {/* Add more tasks here */}
      </ul>
    </div>
  );
}

export default Taskbar;