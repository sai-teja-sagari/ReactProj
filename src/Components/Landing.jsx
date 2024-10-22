import {Link} from 'react-router-dom';
import '../styles/LandingPage.css';
const Landing = () => {
    return ( 
        <div className="page">
            <Link to='/adminlogin'>
            <h1>Admin</h1>
            </Link>
            <Link to='/userlogin'>
            <h1>User</h1>
            </Link>
        </div>
     );
}
 
export default Landing;