import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Characters from './components/Characters';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import TodoApp from './components/TodoApp';

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
