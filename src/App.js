import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import Schedule from"./components/Schedule";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Main>
        <Header />
        <Routes>
          <Route exact path= '/' element={<Note/>} />
          <Route exact path= '/Schedule' element={<Schedule/>} />
        </Routes>
      </Main>
    </>
  );
};
export default App;
