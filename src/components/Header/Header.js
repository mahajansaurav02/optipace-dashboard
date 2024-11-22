import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h2>Dashboard</h2>
        <div className="outstanding-card">
          <p>
            <span className="label">Overall Outstanding</span>
            <span className="symbol">₹</span>
            <span className="amount">12341233</span>
          </p>
        </div>
      </div>

      <div className="header-right">
        <div className="calendar-container">
          <div className="calendar-header">
            <span>July 2022</span>
          </div>
          <div className="calendar-days">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>
          <div className="calendar-dates">
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <div className="selected-date">
              <span className="selected-day">W</span>
              <span className="selected-number">14</span>
            </div>
            <span>15</span>
            <span>16</span>
            <span>17</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
