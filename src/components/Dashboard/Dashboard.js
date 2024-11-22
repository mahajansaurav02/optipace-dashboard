import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Card from "../Cards/Card";
import Piecharts from "../PieCharts/Piecharts";
import "./Dashboard.css";
import InvoiceIcon from "../../icons/InvoiceIcon";
import { ReactComponent as PayableIcon } from "../../icons/payableamt.svg";
import { ReactComponent as OverdueIcon } from "../../icons/overdue.svg";
import { ReactComponent as PaidAmtIcon } from "../../icons/paidamt.svg";
import { ReactComponent as DisputeIcon } from "../../icons/dispute.svg";
import { ReactComponent as DepartmentIcon } from "../../icons/department.svg";
import { ReactComponent as VendorsIcon } from "../../icons/vendors.svg";  
import { ReactComponent as Rejected } from "../../icons/rejected.svg";  

const queuesData = [
  { name: "Processing Queue", value: 54 },
  { name: "Exception Queue", value: 26 },
  { name: "Duplicate Queue", value: 10 },
  { name: "Missing PO Queue", value: 5 },
  { name: "Receipt Hold Queue", value: 3 },
  { name: "Supplier Portal Queue", value: 2 },
];

const kpiData = [
  { name: "Role", value: 30 },
  { name: "Person Responsible", value: 54 },
  { name: "Triggers Alert", value: 26 },
];

const queueColors = ["#EE7777", "#4BAAB4", "#1F2439", "#F5B461", "#F9C480", "#EA5455"];
const kpiColors = ["#F4B462", "#4BAAB4", "#1F2439"];

const Dashboard = () => {
  const summaryData = [
    { title: "7 Days", amount: "₹ 1234234" },
    { title: "15 Days", amount: "₹ 2873123" },
    { title: "30 Days", amount: "₹ 31301" },
    { title: "45 Days", amount: "₹ 22343445" },
    { title: "60 Days", amount: "₹ 1200" },
    { title: "90 Days +", amount: "₹ 127234" },
    { title: "180 Days +", amount: "₹ 12332" },
  ];
  const penaltySaved = "₹ 12344";

  const cardsData = [
    {
      icon: InvoiceIcon,
      title: "Invoice Received",
      total: "2123",
      amount: "434355",
    },
    {
      icon: PayableIcon,
      title: "Payable amount",
      total: "450",
      amount: "5354522",
    },
    {
      icon: OverdueIcon,
      title: "Overdue",
      total: "300",
      amount: "35253535",
    },
    {
      icon: PaidAmtIcon,
      title: "Paid amount",
      total: "434",
      amount: "3523553",
    },
    {
      icon: Rejected,
      title: "Rejected",
      total: "3535",
      amount: "235535",
    },
    {
      icon: DisputeIcon,
      title: "Dispute",
      total: "355",
      amount: "23525235",
    },
    {
      icon: DepartmentIcon,
      title: "Department",
      total: "454",
      amount: "43243255",
    },
    {
      icon: VendorsIcon,
      title: "Vendors",
      total: "343",
      amount: "234242352",
    },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <div className="main-content">
          <div className="stats">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                total={card.total}
                amount={card.amount}
              />
            ))}
          </div>
          <div className="piechart-wrapper">
            <Piecharts title="Queues" data={queuesData} colors={queueColors} />
            <Piecharts title="KPI" data={kpiData} colors={kpiColors} />
          </div>
          <div className="summary">
          <div className="summary-header">
  <div className="title-section">
    <h3>Due by Age Summary</h3>
    <p>Payment Due Days Wise</p>
  </div>
  <div className="penalty-saved">
    <span>Penalty Saved Amount</span>
    <div className="penalty-card">
      <h4>{penaltySaved}</h4>
    </div>
  </div>
</div>


            <div className="summary-cards">
              {summaryData.map((item, index) => (
                <div className="summary-card" key={index}>
                  <h5>{item.title}</h5>
                  <p>{item.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
