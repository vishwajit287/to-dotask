import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="p-6">
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
