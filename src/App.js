import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CalculatorPage, Header, HomePgae, QuotesPage } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<HomePgae />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
