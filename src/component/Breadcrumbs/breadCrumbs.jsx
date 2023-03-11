import { Link, useLocation } from 'react-router-dom';
import './crumb.css';

const Breadcrumbs = () => {
  let currentLink = '';
  const location = useLocation();

  const crumb = location.pathname
    .split('/')
    .filter(pathnames => pathnames !== '')
    .map(currCrumb => {
      currentLink += `/${currCrumb}`;

      return (
        <div className='crumb' key={currCrumb}>
          <Link to={currentLink}> {currCrumb} </Link>
        </div>
      );
    });

  return <div className='crumb-container'>{crumb}</div>;
};

export default Breadcrumbs;
