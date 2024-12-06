import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateRest = () => {
    const navigate= useNavigate();
    const [book , setBook] = useState({
        }
    )
    const [ showToast , setShowToast ] = useState(false);

    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
      };

      const onSubmit = (e) => {
        e.preventDefault();

         // Show the success alert
         toast.success('Book added successfully!', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });

           // Delay the navigation slightly to allow the toast to be seen
        setTimeout(() => {
            setShowToast(false); // Hide the toast
            navigate('/'); // Navigate to homepage
          }, 5000); // Adjust the timeout as needed
          
  
      }
      return (
        <div>
            <input type='text' placeholder='enter name ' name='name'>
            name
            </input>
        </div>
        
      ); 
}
export default CreateRest;