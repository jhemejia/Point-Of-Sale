import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useLocation, Link } from 'react-router-dom';
function Breadcrumbs() {
    const location = useLocation();
    const crumbs = location.pathname.split("/").filter(crumb => crumb !== '');
    //function to format the crumbs
    const formatCrumb = (crumb) => {
        return crumb.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };
    return (_jsx("div", { children: crumbs.map((crumb, index) => {
            return (_jsxs(Link, { to: `/${crumb}`, className: 'underline text-gray-800', children: [formatCrumb(crumb), "/ "] }, index));
        }) }));
}
export default Breadcrumbs;
