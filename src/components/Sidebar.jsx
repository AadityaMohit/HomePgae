import React from 'react';
import './Sidebar.css';  // Custom CSS file for sidebar styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

