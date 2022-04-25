import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import TodoApp from './components/Todo/TodoApp';
import Characters from './components/Rick&Morty/Characters';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Counter />} />
                <Route path="/todo" element={<TodoApp />} />
                <Route path="/character" element={<Characters />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
