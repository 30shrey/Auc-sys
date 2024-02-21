//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from  './components/Homepage'
import CreateFurniture from './components/CreateFurniture'
import ShowFurnitureList from './components/ShowFurnitureList'
import ShowfurnitureDetails from './components/ShowfurnitureDetails'
import UpdateFurniture from './components/UpdateFurniture'
import  Features from  './components/Features'
import AllRoutes from  './components/Routes'

function App() {
   return (
      <Router>
         <div>
            <Routes>
               <Route exact path='/' element={<Home />} />
               <Route path='/furniture-list' element={<ShowFurnitureList />} />
               <Route path='/create-furniture' element={<CreateFurniture />} />
               <Route path='/edit-furniture/:id' element={<UpdateFurniture />} />
               <Route path='/show-furnituredetails/:id' element={<ShowfurnitureDetails />} />
               <Route path='/feature' element={<Features />} />
               <Route path='/routes' element={<AllRoutes />} />
            </Routes>
         </div>
      </Router>
   );
}
export default App;
