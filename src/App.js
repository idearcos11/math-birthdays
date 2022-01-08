import Design1 from "./designs/Design1"
import Design2 from "./designs/Design2"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' exact element={<Design1 />} />
        <Route path='/design1' element={<Design1 />} />
        <Route path='/design2' element={<Design2 />} />
      </Routes>
    </Router>
    
  );
}

export default App;
