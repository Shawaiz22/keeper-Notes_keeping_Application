import React from 'react';
import Footer from './Footer';

function About(props) {
    document.title='About | Keeper';
    return (
        <>
        <div className='container mt-5'>
            <h1 className="text-center mt-5">About Keeper</h1>
            <div className="content mt-5 text-center">
               Keeper is a Note Storing utility application for the users to store important notes!
               Keeper is inspired by google keep, which is a famous note storage application
               <br />
               Keeper is used to store notes and they get saved in your device inside browser's local storage so that whenever you open the app with the link, it directy opens the interface in which you can acces your saved notes there 
               <br />
               Here, You can perform the following operations : 
               <ul style={{listStyle:'none'}}>
                <li> <b>* Add new notes</b></li> 
                <li> <b>* Update Existing Notes</b></li> 
                <li> <b>* Delete the non-usable Notes</b></li> 
                </ul>
            
               <br />
               So, Go and checkout this app, I hope you will like it!
               <br />
            </div>
        </div>
        <Footer/>
        </>
    );
} // enhancements :  archive + dates of adding note

export default About;