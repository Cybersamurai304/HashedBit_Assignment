import React from 'react'
import "./style.css"
import { useState } from 'react'

const SurveyForm = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        rating:'',
        feedback:'',
    });
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('Form Data submitted:',formData);
    };
  return (
    <div>
      <div className="form-container">
      <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                name="name"
                value={formData.name}
                placeholder='Name'
                required
                onChange={handleChange}
            />
            <input type="email" 
                name="email"
                value={formData.email}
                placeholder='Email'
                onChange={handleChange}
            />   
            <textarea name="feedback" value={formData.feedback} onChange={handleChange} placeholder='Feedback' required/>
            <select name="rating" value={formData.rating} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="average">Average</option>
            <option value="poor">Poor</option>
            </select>
            <button type='submit'>Submit</button> 
        </form>
      </div>
    </div>
  )
}

export default SurveyForm
