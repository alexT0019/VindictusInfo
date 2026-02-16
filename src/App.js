import './App.css';
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";

import Test from './Pages/test';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
                      default-src 'self';
                      script-src 'self';
                      img-src 'self';
                      media-src 'self';
                `}
        ></meta>
      </Helmet>

      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
