import Header from "./Components/Header";
import Button from "./Components/Button";
import NewPerson from "./Pages/NewPerson";
import RetrieveInfo from "./Pages/RetrieveInfo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Button />
      <Routes>
        <Route path="/" element={<NewPerson />} />
        <Route path="/retrieve" element={<RetrieveInfo />} />
      </Routes>
    </div>
  );
}

export default App;
