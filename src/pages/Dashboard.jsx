import "../styles/dashboard.css";
import { dashboardData } from "../data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Dashboard = () => {
  const { checkIndex, setCheckIndex } = useGlobalContext();

  const handleDiseaseClick = (index) => {
    console.log(index);
    setCheckIndex(index === checkIndex ? null : index);
  };

  return (
    <>
      <main className="dashboard">
        <h2>Diseases Type</h2>
        {dashboardData.map((each, i) => {
          const { id, icon, disease } = each;
          return (
            <Link to="/disease" key={i}>
              <div
                className={`disease-con ${
                  checkIndex === id ? "add-disease-con-css" : ""
                }`}
                onClick={() => handleDiseaseClick(id)}
              >
                <img src={icon} alt="" />
                <p>{disease}</p>
              </div>
            </Link>
          );
        })}
      </main>
    </>
  );
};

export default Dashboard;
