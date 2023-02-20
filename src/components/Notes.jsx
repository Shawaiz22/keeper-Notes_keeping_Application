
import React, { useEffect, useState } from 'react';
import '../css/Notes.css';
import { Link } from 'react-router-dom';




const Notes = (props)=> {


    let [resData, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    // function for getting the data
    const getData = () => {

        try {

            let result = JSON.parse(localStorage.getItem('storedNote'));

            if (result == null) {
                result = [];
            }

            setData(result);
        }

        catch (err) {
            console.log(err)
        }
    }

    const deleteNoteAt = (noteId) => {

        let cn = window.confirm("Are you sure to delete it?");

        if (cn) {

            let newRes = resData.filter((e, i) => {
                return i !== noteId;
            })
            setData(newRes);

            localStorage.setItem('storedNote', JSON.stringify(newRes));

        }


    }


    return (
        <>
        <div className="notesParent">

            {resData.length !== 0 ? resData.map((e, i) => {
                return (
            
                        <div className="card" key={i}>
                            <div className="card-header">
                            <div className="utilBtns">
                                    <button className="deleteNote" onClick={() => deleteNoteAt(i)}>🗑️ Delete</button>
                                    <Link to={`/editNotes/${i}`}><button className="editNote">✏ Edit</button></Link>
                                </div>
                            </div>
                            <div className="card-body">
                            <div className="card-sub">
                                <h5 className="card-title">{e.heading}</h5>
                                <div className="subBody">
                                <p className="card-text">{e.content}</p>
                                </div>
                            </div>
                                <Link to={`/readNotes/${i}`} className="btn btn-primary readMore">... Read More</Link>
                                <p>Date : {e.date}</p>
                            </div>
                        </div>
                    
                )

            }) : <>No Notes Here, Please Click 'ADD NOTE' to add a note ! </>}

        </div>
        <Link to={'/addNote'}><button className="btn btn-primary addNote"> + Add Note </button></Link>
        </>
    );
}

export default Notes;