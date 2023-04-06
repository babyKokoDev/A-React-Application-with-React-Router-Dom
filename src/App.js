import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import PricingRoute from './Routes/PricingRoute'
import FaqRoute from './Routes/FaqRoute'
import ContactRoute from './Routes/ContactRoute';

function App() {
  return (
      <>
           <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/PricingRoute' element={<PricingRoute />} />
             <Route path='/FaqRoute' element={<FaqRoute />} />
             <Route path='/ContactRoute' element={<ContactRoute />} />
           </Routes>
      </>
  );
}

export default App;
