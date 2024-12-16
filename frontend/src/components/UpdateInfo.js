import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateInfo(props) {
  const [item, setItem] = useState({
    name: '',
    phonenumber: '',
    location: '',
    date: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/restaurant/${id}`)
      .then((res) => {
        setItem({
            name: req.body.name,
            phonenumber: req.body.phonenumber,
            location: req.body.location,
            date: req.body.date,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateInfo GET request');
        console.log(err)
      });
  }, [id]);

  const onChange = (e) => {
    setItem({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
        name: req.body.name,
        phonenumber: req.body.phonenumber,
        location: req.body.location,
        date: req.body.date
    };

    axios
      .put(`/api/restaurant/${id}`, data)
      .then((res) => {
        navigate(`/show-restaurant/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateInfo PUT request ->');
        console.log(err)
      });
  };

  return (
    <div className='UpdateInfo'>
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Items List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Book</h1>
            <p className='lead text-center'>Update Item's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                placeholder='Name'
                name='name'
                className='form-control'
                value={item.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='phonenumber'>Phone NUmber</label>
              <input
                type='text'
                placeholder='Phone number'
                name='phonenumber'
                className='form-control'
                value={item.phonenumber}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='location'>Address</label>
              <input
                type='text'
                placeholder='Address'
                name='locationr'
                className='form-control'
                value={item.location}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='date'>Date</label>
              <textarea
                type='date'
                placeholder='Date'
                name='date'
                className='form-control'
                value={item.date}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Book
            </button>
            <br /> <br />
          </form>
        </div>
      </div>

    </div>
  );
}

export default UpdateInfo;