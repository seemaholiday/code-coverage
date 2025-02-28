import {useState} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    name: "", email: "", designation: "", phone: "",
    hobbies: "", teaEvent: false, coffyEvent: false, 
    shakeEvent: false, male:false, female:true
  })
  const handleSubmit = (e) => {
    console.log("dataaaaa", data)
    e.preventDefault();
  }
  return (
    <div className="App">
     <div className="flex-css">
        <h3>User Form</h3>
        <form onSubmit={handleSubmit}>
          <input aria-label="nameInput" placeholder='Name' name="name" value={data.name} onChange={(e) => { setData({ ...data, name: e.target.value }) }} />
          <input aria-label="emailInput" type='email' placeholder='Email' name="email" value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
          <input aria-label="designationInput" placeholder='Designation' name="designation" value={data.designation} onChange={(e) => { setData({ ...data, designation: e.target.value }) }} />
          <input aria-label="phoneInput" placeholder='Phone' name="phone" value={data.phone} onChange={(e) => { setData({ ...data, phone: e.target.value }) }} />
          <select aria-label="hobbiesInput" onChange={(e) => setData({ ...data, hobbies: e.target.value })} value={data.hobbies}>
            <option>Hobbies</option>
            <option>Travel</option>
            <option>Cooking</option>
            <option>Vlogging</option>
          </select>
          <legend>What you Like?</legend>
          <div>
            <input aria-label='teaEvent' type="checkbox" name="teaEvent" checked={data.teaEvent} value="tea" onChange={(e) => setData({ ...data, teaEvent: e.target.checked })} />
            <label> Tea </label>
          </div>
          <div>
          <input aria-label="coffyEvent" type="checkbox" checked={data.coffyEvent}
            name="coffyEvent"
            value="coffy" onChange={(e) => setData({ ...data, coffyEvent: e.target.checked })} />
          <label>Coffy</label>
          </div>
          <div>
            <input aria-label="shakeEvent" type="checkbox" checked={data.shakeEvent}
                   name="shakeEvent" 
                   value="shake" onChange={(e)=> setData({...data, shakeEvent:e.target.checked})}/>
            <label>Shake</label>
          </div>

            <legend>Gender</legend>
          <div>
            <input aria-label="maleEvent" type="radio" id="male" name="gender" value={data.male} onChange={(e)=> setData({...data, male:e.target.value})}/>
            <label>Male</label>
          </div>
          <div>
            <input aria-label="femaleEvent" defaultChecked type="radio" id="female" name="gender" value={data.female} onChange={(e)=> setData({...data, female:e.target.value})}/>
            <label>Female</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
