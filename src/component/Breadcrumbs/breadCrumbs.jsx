import { Link, useLocation } from 'react-router-dom';
import './crumb.css';

const Breadcrumbs = () => {
  let currentLink = '';
  const location = useLocation();
  let crumb = location.pathname
    .split('/')
    .filter(pathnames => pathnames !== '')
    .map(crumb => {
      currentLink += `/${crumb}`;

      return (
        <div className='crumb' key={crumb}>
          <Link to={currentLink}> {crumb} </Link>
        </div>
      );
    });

  return <div className='crumb-container'>{crumb}</div>;
};

export default Breadcrumbs;
