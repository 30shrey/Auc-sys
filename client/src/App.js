//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import CreateFurniture from './components/CreateFurniture'
// import ShowFurnitureList from './components/ShowFurnitureList'
// import ShowfurnitureDetails from './components/ShowfurnitureDetails'
// import UpdateFurniture from './components/UpdateFurniture'
function App () {
  return (
     <Router>
       <div>
          <Routes>
             {/* <Route exact path='/' element={<FurnitureCard />}/> */}
             {/* <Route path='/furniture-list'element={<ShowFurnitureList />}/> */}
             <Route  path='/create-furniture' element={<CreateFurniture />}/> 
             {/* <Route  path='/edit-furniture'element={<UpdateFurniture />}/>
             <Route  path='/show-furnituredetails/:id'element={<ShowfurnitureDetails />}/> */}
          </Routes>
        </div>
     </Router>
  );
}
export default App;
