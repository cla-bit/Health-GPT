import Header from "../components/Header";
import "../styles/dashboard.css";
import { dashboardData } from "../data";

const Dashboard = () => {
  return (
    <>
      <Header header="Dashboard" />
      <main className="dashboard">
        <h2>Diseases Type</h2>
        {dashboardData.map((each, i) => {
          const { id, icon, disease } = each;
          return (
            <div className="disease-con" key={i}>
              <span>{icon}</span>
              <p>{disease}</p>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Dashboard;
