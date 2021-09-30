import { Paper } from "@mui/material";
import Dashboard from "../components/Dashboard";

export interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = (props) => {
  return (
    <>
      <div>
        <>
          <Dashboard />
        </>
      </div>
    </>
  );
};

export default HomePage;
