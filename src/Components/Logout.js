import React, { useState } from 'react';

const Logout = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, for now, let's just log the form data
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Age:', age);
    console.log('Sex:', sex);
  };

  return (
    <div className="container" style={{ backgroundColor: '#1D2B53', color: '#FAEF5D', paddingTop: '50px', height: '100vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#FF004D' }}>Login</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6" style={{ textAlign: 'center' }}>
          <label htmlFor="username" className="form-label">Username (GCU-mail)</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }}
          />
        </div>
        <div className="col-md-6" style={{ textAlign: 'center' }}>
          <label htmlFor="password" className="form-label">Password (mobile number)</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }}
          />
        </div>
        <div className="col-12" style={{ textAlign: 'center' }}>
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }}
          />
        </div>
        <div className="col-12" style={{ textAlign: 'center' }}>
          <label htmlFor="sex" className="form-label">Sex</label>
          <select
            className="form-select"
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            required
            style={{ backgroundColor: '#7E2553', color: '#FAEF5D' }}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="col-12" style={{ textAlign: 'center' }}>
          <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#FF004D', color: '#FAEF5D' }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Logout;
