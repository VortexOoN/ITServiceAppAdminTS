import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.tsx';
import Sidebar2 from './Components/Sidebar2.tsx';
import Card from './Components/Card.tsx'
import SiteName from './Components/SiteName.tsx'
import Chart from './Components/Chart.tsx'
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Layout from './Pages/Layout.tsx';
function App() {
  return (
      <Layout/>
  );
}

export default App;
