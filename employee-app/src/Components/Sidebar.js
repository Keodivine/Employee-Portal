import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><a href="#add-employee">Add Employee</a></li>
        <li><a href="#employee-list">Employee List</a></li>
        <li><a href="#filter-employees">Filter Employees</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
