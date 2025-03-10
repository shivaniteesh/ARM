import React from "react";
import '../styles/User.css'
function Admin(){
    const scroll=(id)=>{
        const element=document.getElementById(id)
        if(element){
            element.scrollIntoView({behavior:"smooth"})
        }
    }
    return(
       
        <div className="admin">
            <nav>
                <h2 className="nav" onClick={()=>scroll('stats')}> Stats</h2>
                <h2 className="nav" onClick={()=>scroll('users')}>Users</h2>
                <h2 className="nav" onClick={()=>scroll('vehicles')}>Vehicles</h2>
                <h2 className="nav" onClick={()=>scroll('feedback')}>Feedbacks</h2>
            </nav>
            <section id="about">
                <h1>Hey chief Welcome to Dashboard..!</h1>
            </section>
            <section id="stats">Stats</section>
            <section id="users">Users</section>
            <section id="vehicles">Vehicles</section>
            <section id="feedback"fb></section>
            <button className="b">Top</button>
        </div>
    );
}
export default Admin;