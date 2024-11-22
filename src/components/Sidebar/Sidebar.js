// Sidebar.js
import React from "react";
import "./Sidebar.css";
import { FaTachometerAlt, FaFileAlt, FaUserPlus, FaFileInvoice, FaBuilding } from "react-icons/fa"; // Import icons
import { MdAttachMoney } from "react-icons/md";
import { ReactComponent as Dashboard } from "../../icons/dashboard.svg";
import { ReactComponent as Report } from "../../icons/report.svg";
import { ReactComponent as AddInvoice } from "../../icons/AddInvoice.svg";
import { ReactComponent as Adduser } from "../../icons/aduser.svg";
import { ReactComponent as Withoutpo } from "../../icons/withoutpo.svg";
import { ReactComponent as Company } from "../../icons/company.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <div className="sidebar-item">
        <Dashboard className="sidebar-icon" />
        <span>Dashboard</span>
      </div>
      <div className="sidebar-item">
        <Report className="sidebar-icon" />
        <span>Report</span>
      </div>
      <div className="sidebar-item">
        <AddInvoice className="sidebar-icon" />
        <span>Add Invoice</span>
      </div>
      <div className="sidebar-item">
        <Adduser className="sidebar-icon" />
        <span>Add User</span>
      </div>
      <div className="sidebar-item">
        <Withoutpo className="sidebar-icon" />
        <span>Without PO</span>
      </div>
      <div className="sidebar-item">
        <Company className="sidebar-icon" />
        <span>Company</span>
      </div>
    </div>
  );
};

export default Sidebar;
