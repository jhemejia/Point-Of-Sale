import { useLocation, Link } from 'react-router-dom';



function Breadcrumbs() {
    const location = useLocation()
    const crumbs = location.pathname.split("/").filter(crumb=> crumb !== '')
    
    //function to format the crumbs
    const formatCrumb = (crumb:string)=>{
        return crumb.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    return (
      <div>{crumbs.map((crumb, index)=>{
        return (
            <Link to={`/${crumb}`} className='underline text-gray-800' key={index}>{formatCrumb(crumb)}/ </Link>
        )
      })}
      </div>
    );
  }
  export default Breadcrumbs