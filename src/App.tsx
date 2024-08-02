import "./App.css";
import DashboardContainer from "./containers/DashboardContainer/DashboardContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardContainer />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
