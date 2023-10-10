import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Agecal from "./Components/Agecal";
function App() {
  const appstyle = { width: "100%", minHeight: "100vh", minWidth: "100vw" };
  const agecalStyle = { width: "100%", height: "100%" };
  return (
    <div
      style={appstyle}
      className="background d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="text-center fw-bold">Age Calculator</h1>
      <div
        className="d-flex justify-content-center align-items-center"
        style={agecalStyle}
      >
        <Agecal />
      </div>
    </div>
  );
}

export default App;
