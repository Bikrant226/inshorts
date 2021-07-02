import {React,useState} from 'react';
import './style/fileupload.css'
const FileUpload=({hi})=>{

    const [file,setFile]=useState('');

    const onchange=(e)=>{
        setFile(e.target.files[0]);
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('file',file);
        hi(prev=>[...prev,formData]);
        // try{
        //     const response=await fetch('/home',formData,{
        //         method:"POST"
        //     });
   
            
        //     const data= await response.json();
        //     console.log(data)
        //     if(data.status===422 || !data){
        //         window.alert('Error in posting data');
        //     }else{
        //        window.alert('Sucessfully posted');
        //     }
    // catch(err){
    //     console.log(err);
    }
    return(
        <div>
       <input type="file"  onChange={onchange} />
       <button type="submit" className="submit" value='POST'  onClick={handleSubmit}>POST IMAGE</button>
       </div>
    )
}

export default FileUpload;