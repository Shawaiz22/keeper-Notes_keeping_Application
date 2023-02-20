import React , {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

function ReadNotes(props) {

    document.title='Note | Keeper';

    let[noteHeading,setNoteHead]=useState("");
    let[noteContent,setNoteCont]=useState("");
    let[noteDate,setNoteDate]=useState("");

    // useParams hook to get the userId to know, which button got clicked!
    const {userId} = useParams();

    // useNavigate hook to navigate the user to another component as soon as he submitted the form!
    // const navigate = useNavigate();


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

    useEffect(()=>{
        if(resData!==null && resData!==undefined){
            if(resData.length!==0){
                let resHead =  resData[userId].heading;
                let resCont =  resData[userId].content;
                let date = resData[userId].date;
                 setNoteHead(resHead);
                 setNoteCont(resCont);
                 setNoteDate(date);
            }
        }
    },[resData,userId])    


    return (
        <>
        <div className='container mt-5'>
           <Link to={'/'} ><button className="btn btn-primary">Back</button></Link>
            <h1 className='text-center'>{noteHeading}</h1>
            <p className='text-center'>Date Added : {noteDate}</p>
            <hr />
            <div className="content text-center mt-5">{noteContent}</div>
        </div>
        <Link to={`/editNoteFromIn/${userId}`}><button className="btn btn-secondary edit">✏ Edit</button></Link>
        </>    
    );
}

export default ReadNotes;