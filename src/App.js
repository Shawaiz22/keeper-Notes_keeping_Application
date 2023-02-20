import Home from "./components/Home";
import NavB from "./components/NavB";
import About from "./components/About";
import AddNote from "./components/AddNote";
import ReadNotes from "./components/ReadNotes";

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EditNote from "./components/EditNote";
import EditNoteFromIn from "./components/EditNoteFromIn";



function App(props) {
  return (
    
    <BrowserRouter>
    <NavB />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/addNote' element={<AddNote />}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path="/editNotes/:userId" element={<EditNote />}></Route>
      <Route path="/editNoteFromIn/:userId" element={<EditNoteFromIn />}></Route>
      <Route path="/readNotes/:userId" element={<ReadNotes />}></Route>
    </Routes>
    
  </BrowserRouter>
 
  );
}

export default App;
