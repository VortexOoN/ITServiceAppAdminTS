import React from 'react';
import UserList from "../Components/UserList.tsx"
import StatPanel from '../Components/StatPanel.tsx';
import { FaUser } from "react-icons/fa";
import UserFilter from '../Components/UserFilter.tsx';
import SiteName from '../Components/SiteName.tsx';
function Users(){
    return (
        <>
        <div className="row text-start">
            <SiteName text="Users Panel"><FaUser />
            </SiteName>
        </div>
        
        <UserFilter/>
        <UserList/>
        </>
    );
}
export default Users;