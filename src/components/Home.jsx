import React from 'react';
import Footer from './Footer';

import Notes from './Notes';

function Home(props) {
    document.title='Home | Keeper';
    return(
        <>
        <h1 className='text-center mt-5' style={{textDecoration:'underline'}}>MY NOTES </h1>
        <Notes/>
        <Footer/>
        </>
        ) 
}

export default Home;