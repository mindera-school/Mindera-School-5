import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import MainAdan from "./Adan/MainAdan";
import MainGabriel from "./Gabriel/MainGabriel";
import MainLeo from "./Leo/MainLeo";
import MainJoao from "./Joao/MainJoao";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="adan" element={<MainAdan />} />
          <Route path="gabriel" element={<MainGabriel />} />
          <Route path="leo" element={<MainLeo />} />
          <Route path="joao" element={<MainJoao />} />
          <Route />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
