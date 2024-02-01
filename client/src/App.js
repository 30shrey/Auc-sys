//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import CreateFurniture from './components/CreateFurniture'
import ShowFurnitureList from './components/ShowFurnitureList'
import ShowFurnitureDetais from './components/ShowFurnitureDetails'
import UpdateFurnitureInfo from './components/UpdateFurnitureInfo'
const App() => {
  return (
     <Router>
       <div>
          <Routes>
             <Route exact path='/'element={<ShowFurnitureList />} />
             <Route exact path='/CreateFurniture'element={<CreateFurniture />} /> 
             <Route exact path='/edit-furniture'element={<UpdateFurnitureInfo />} />
             <Route exact path='/ShowFurnitureDetails/:id'element={<ShowFurnitureDetails />} />
          </Routes>
        </div>
     </Router>
  );
}

export default App;
