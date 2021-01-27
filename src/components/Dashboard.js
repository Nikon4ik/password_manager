import React from "react";
import DashboardList from "./DashboardList";
import DashboardForm from "./DashboardForm";

function Dashboard() {
    const keys = Object.keys(localStorage);
    
    for(let key of keys) {
        if (key.match(/authorize_user/) !== null && key.match(/authorize_user/).index !== 0) {
            window.location.assign('#login')
            window.location.reload()
            return
        }
    }
    function LogOut() {
        for(let key of keys) {
            if ( key.match('authorize_user') !== null && key.match('authorize_user').index === 0 ) {
                localStorage.removeItem(key)
            }
        }
        window.location.assign('#login')
        window.location.reload()
    }
    return (
        <div style={{width: '600px', margin: 'auto'}}>

            <button className="big-button" style={{marginBottom: '40px'}} onClick={LogOut}>Log out</button>
            <DashboardForm />
            <ul>
                <li>Name</li>
                <li>Login</li>
                <li>Password</li>
            </ul>
            <DashboardList />
            
        </div>
    )
}

export default Dashboard