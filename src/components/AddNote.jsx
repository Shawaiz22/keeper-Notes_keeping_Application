import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

function AddNote(props) {

    document.title='Add Note | Keeper';

    let[noteHeading,setNoteHead]=useState("");
    let[noteContent,setNoteCont]=useState("");
    let date = new Date().toLocaleDateString();

    let noteStorer=[]

    let navigate = useNavigate();

    const addValues = (e)=>{
        e.preventDefault();


        let a = e.target.noteHeading.value;
        let b = e.target.noteContent.value;

        setNoteHead(a);
        console.log(noteHeading);
        setNoteCont(b);
        console.log(noteContent);

        submitValues();
    }



    function submitValues(){
        try{
            let obj={
                heading:noteHeading,
                content:noteContent,
                date:date
            }

            let check=localStorage.getItem('storedNote');
            console.log(check);

            if(check===undefined || check===null){

            }
            else{

                noteStorer = JSON.parse(localStorage.getItem('storedNote'));
            }

            noteStorer.push(obj);
            localStorage.setItem('storedNote', JSON.stringify(noteStorer));
            alert("Note added Succesfully!");
            navigate("/");
        }
        catch(Err){
            alert("Some error occured, please try again!");
            console.log(Err)
        }
    }

    return (
        <div className='container mt-5'>
        <Link to={'/'}><button className="btn btn-primary"> Back </button></Link>
        <form onSubmit={addValues} className='mt-5'>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter Note Heading</label>
            <input type="text" className="form-control" id="noteHeading" aria-describedby="emailHelp" placeholder="Heading Here" value={noteHeading} onChange={e=>{setNoteHead(e.target.value)}}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Enter Note Description</label>
            <textarea id="noteContent" className="form-control" placeholder="Description here" cols='5' rows='10' value={noteContent} onChange={e=>{setNoteCont(e.target.value)}}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!noteHeading || !noteContent} >Add Note</button>
        </form>
        </div>
    );
}

export default AddNote;