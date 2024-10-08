import { Navigate } from 'react-router-dom';
import { Navbar } from './navbar/navbar';

export const RouteProtector = ({ children }) => {
    let token = localStorage.getItem('token');
    console.log(token);
    console.log(!token);
    
    if (!token) {
        return <Navigate to='/login' replace />;
    }

    return (
        <div className='menu-list'>
            <Navbar/>
                <div className="component-body">
                    {children}
                </div>
        </div>
    );
};
