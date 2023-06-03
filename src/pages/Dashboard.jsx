import Header from "../components/Header"
import "../styles/dashboard.css"
import {dashboardData} from "../data"

const Dashboard = () => {
  return (
    <>
    <main className="dashboard">
      <Header header="Dashboard"/>
        <h2>Diseases Type</h2>
        <div>
            <img src="../images/Hypertension.png" alt="img"/>
        </div>
    </main>
    </>
  );
}

export default Dashboard;
