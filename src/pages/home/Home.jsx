import Chart from "../../components/adminDashboard/chart/Chart";
import FeaturedInfo from "../../components/adminDashboard/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/adminDashboard/widgetSm/WidgetSm";
import WidgetLg from "../../components/adminDashboard/widgetLg/WidgetLg";
import Sidebar from "../../components/adminDashboard/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="d-flex">
      <div><Sidebar /></div>
      <div className="home">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
      </div>
    </div>
  );
}
