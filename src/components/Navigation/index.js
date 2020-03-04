import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import * as ROLES from '../../constants/roles'
import styles from '../Navigation/index.css'


const Navigation = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? (
                <NavigationAuth authUser={authUser} />
            ) : (<NavigationNonAuth />
                )}
    </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
    <div className='sideBar'>
    <ul>
        {/* <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
    </li> */}
        <li className='sideBar_link'>
            <Link to={ROUTES.HOME}>Hem</Link>
            </li> <li className='sideBar_link'>
            <Link to={ROUTES.ACCOUNT}>Konto</Link>
        </li>
        {authUser.roles.includes(ROLES.ADMIN) && (
                <li className='sideBar_link'>
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
        )}
            <li className='sideBar_link'>
            <SignOutButton />
        </li> </ul>
            </div>
);
        
        const NavigationNonAuth = () => (
    <ul>
        {/*  <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li> */}
        <li>
            <Link to={ROUTES.SIGN_IN}>Logga In</Link>
        </li>
    </ul>
);

export default Navigation;
