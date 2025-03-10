import React from "react";
import '../styles/User.css'
function User(){
    const scroll=(id)=>{
        const element=document.getElementById(id)
        if(element){
            element.scrollIntoView({behavior:"smooth"})
        }
    }
    const cars=[
        {
            id:1,
            image:"Audi.jpg",
            model:'Audi xyz',
            vehicleType:'petrol',
            Dailyrate:1900,
            availability:true,
        },
        {
            id:2,
            image:'vw.jpg',
            model:'VolksWagen xyz',
            vehicleType:'petrol',
            Dailyrate:2000,
            availability:true,
        },
        {
            id:3,
            image:'uw.jpg',
            model:'sUv',
            vehicleType:'petrol',
            Dailyrate:3000,
            availability:true,
        }
    ];
    const bikes=[{
        id:11,
        image:'re.jpg',
        model:'Royal enfiled xyz',
        vehicleType:'petrol',
        Dailyrate:500,
        availability:true,
    },
    {
        id:12,
        image:'kawasaki.jpg',
        model:'Kawasaki xyz',
        vehicleType:'petrol',
        Dailyrates:600,
        availability:true,
    },
    {
        id:13,
        img:'scooty.jpg',
        model:'scooty xyz',
        Dailyrate:400,
        vehicleType:'petrol',
        availability:true,
    },
];
const profile=[{
    id:1,
    name:'dsn',
    email:'asafsd',
    phno:21432453543,
    aadhar:2143242,
    license:24324234,
}]
    return(
       
        <div className="user">
            <nav>
                <h2 className="nav" onClick={()=>scroll('Cars')}> Book Car</h2>
                <h2 className="nav" onClick={()=>scroll('Bikes')}>Rent Bikes</h2>
                <h2 className="nav" onClick={()=>scroll('profile')}>Profile</h2>
                <h2 className="nav" onClick={()=>scroll('feedback')}>Feedback</h2>
            </nav>
            <section id="about">
                <h1>
                    Automotive Resource Manager
                </h1>
                <p>
                    At ARM ,we are dedicated to provide you with a seamless vehicle rental experience.Our mission is to offer a diverse fleet
                    of hgh quality vehicles that cater to your travel needs
                </p>
                <p>
                    Our team of experts aare committed to ensuring that every vehicle meets our rigourous dtandards of safety and performance 
                </p>
                <p>Join us in experiencing the freedom of the open road.visit ARM manager today and drive away the perfect vehicle for yyour needs</p>
            </section>
            <section id="Cars">
                <div className="card">
                    {
                        cars.map((car)=>(
                            <div className="vc" key={car.id}>
                            <image id="img" src={car.image} alt="car image"/>
                            <h1>{car.model}</h1>
                            <h1>{car.vehicleType}</h1>
                            <h1>{car.Dailyrate}</h1>
                            <h1>{car.availability?"Available":"Not available"}</h1>
                            <button>View details</button>
                            <button className="butt">Book and pay</button>
                            </div>
                        ))
                    }

<button className="b" onClick={()=>scroll('about')}>Back toTop</button>
                </div>
            </section>
            <section id="Bikes">
                 <div className="card">
                    {
                        bikes.map((car)=>(
                            <div className="vc" key={car.id}>
                            <image id="img" src={car.image} alt="bike image"/>
                            <h1>{car.model}</h1>
                            <h1>{car.vehicleType}</h1>
                            <h1>{car.Dailyrate}</h1>
                            <h1>{car.availability?"Available":"Not available"}</h1>
                            <button>View details</button>
                            <button className="Butt">Book and pay</button>
                            </div>
                        ))
                    }

<button className="b" onClick={()=>scroll('about')}> Back to Top</button>
                </div>
            </section>
            <section id="profile">
                <div>
                    {
                        profile.map((p)=>(
                            <div key={p.id}>
                                <section id="first">
                                <h1>NAME:{p.name}</h1>
                                </section>
                                <section id="second">
                                <h1>AADHAR:
                                    {p.aadhar}
                                </h1>
                                <h1>EMAIL:
                                    {p.email}
                                </h1>
                                <h1>PHNO:{p.phno}</h1>
                                </section>
                                </div>
                        ))
                    }
                    
            <button className="b" onClick={()=>scroll('about')}> Back to Top</button>
                </div>
            </section>
            <section id="feedback"fb>
             
                <form id="fb">
                    <textarea id="fb" rows="12"/>
                    <button>Submit</button>
                </form>
            </section>
            <button className="b" onClick={()=>scroll('about')}>Back to Top</button>
        </div>
    );
}
export default User;