import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/header"; // Ensure case sensitivity
import Experience from "./component/Experience/Experience"; // Ensure case sensitivity
import Footer from "./component/Footer/Footer"; // Ensure case sensitivity
import About from "./component/About"; // Import About component
// import "App.css"; // Correct import statement

const App = () => (
  <Router>
    <Header />
    <div className="portfolio-background">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <About />
                <Experience />
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
