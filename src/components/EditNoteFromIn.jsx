import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

function EditNoteFromIn(props) {

    document.title='Edit Note | Keeper';

    let[noteHeading,setNoteHead]=useState("");
    let[noteContent,setNoteCont]=useState("");

    

    // useParams hook to get the userId to know, which button got clicked!
    const {userId} = useParams();

    // useNavigate hook to navigate the user to another component as soon as he submitted the form!
    const navigate = useNavigate();


// useState to update the data coming from the localstorage    
    let[resData,setData] = useState([]);
    
    // useEffect to get the data
    useEffect(()=>{
        getData();

    },[userId])

    // function for getting the data
    const getData = () => {

        try{
            
            let result = JSON.parse(localStorage.getItem('storedNote'));
            
            setData(result);
        }
    
        catch(err){
            console.log(err)
        }
    }

    // useEffect to update the values when the state of the 'resData' updates on every render!
    useEffect(()=>{
        if(resData!==null && resData!==undefined){
            if(resData.length!==0){
                let resHead =  resData[userId].heading;
                let resCont =  resData[userId].content;
                 setNoteHead(resHead);
                 setNoteCont(resCont);
            }
        }
    },[resData,userId])    


    // form submit handler 
    const addValues = (e)=>{
        e.preventDefault();


        setNoteHead(noteHeading);
        
        setNoteCont(noteContent);
        

        submitValues();
    }


    // form submit function which updates the existing values
     function submitValues(){
        try{

            let newRes=resData;
            
            let h1=noteHeading;
            let c1=noteContent;
            newRes[userId].heading=h1;
            newRes[userId].content=c1;

            localStorage.setItem('storedNote',JSON.stringify(newRes));
            alert("Succesfully updated!")
            navigate("/");
        }

        catch(Err){
            alert("Error occured while editing, please try again!")
            console.log(Err)
        }
    }

    return (
        <div className='container mt-5'>
         <Link to={`/readNotes/${userId}`} ><button className="btn btn-primary">Back</button></Link>
        <form onSubmit={addValues} className='mt-5'>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter Note Heading</label>
            <input type="text" className="form-control" id="noteHeading" aria-describedby="emailHelp" placeholder="Heading Here" defaultValue={noteHeading} onChange={e=>{setNoteHead(e.target.value)}}/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Enter Note Description</label>
            <textarea id="noteContent" className="form-control" placeholder="Description here" cols='5' rows='10' defaultValue={noteContent} onChange={e=>{setNoteCont(e.target.value)}}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
    );
}

export default EditNoteFromIn;
