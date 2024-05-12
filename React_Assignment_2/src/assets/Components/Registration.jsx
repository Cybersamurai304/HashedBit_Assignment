import React from 'react'
import "./style.css"
import { useState } from 'react'

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const handeleInputChange = (e)=>{
        const {name , value } = e.target;
        setFormData({ ...formData, [name]:value});
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    };
  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" 
                    name='name'
                    value={formData.name}
                    onChange={handeleInputChange}
                    placeholder='Name'
                    className="input-field"
                    required
                />
            </div>
            <div>
                <input type="email" 
                        name='email'
                        value={formData.email}
                        onChange={handeleInputChange}
                        placeholder='Email'
                        className="input-field"
                        required
                    />
            </div>
            <div>
                <input type="password" 
                    name='password'
                    value={formData.password}
                    onChange={handeleInputChange}
                    placeholder='Password'
                    className="input-field"
                    required
                />
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  );
};

export default Registration
