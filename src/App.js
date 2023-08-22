import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import LayoutTemplate from './Components/organisms/Drawer';
function App() {
    return (_jsx("div", { className: 'container min-w-full', children: _jsx(LayoutTemplate, {}) }));
}
export default App;
