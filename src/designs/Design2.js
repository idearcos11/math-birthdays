import { useState } from 'react';
import styled from 'styled-components';
import image from '../images/image.jfif';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

const GeneralContainer = styled.div`
  
  width:100vw;
  height:100vh;
  background-color: #35589A;
`

const Container = styled.div`
  margin:80px auto;
  display: flex;
  justify-content: center;
  align-items:center;
  height: 600px;
  width:800px;
  min-width: 200px;
  background-color: #fff;
  border-radius: 10px;
`
const Left = styled.div`
  flex:1;

    img{
      width:100%;
      object-fit:fill;
    }
`
const Right = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  gap:60px;
  justify-content: center;
  padding:20px;
  font-family: 'DM Sans', sans-serif;

  h1{
    font-weight: bold;
    margin:  0 auto;
  }

  p{
    margin:  0 auto;
    font-size:20px;
    text-align: center;
    font-size:16px;
  }

  span{
    font-weight: bold;
  }

  h2{
    font-weight: 400;
    margin:  0 auto;
    text-align: center;
  }

  input {
    width: 200px;
    margin:  0 auto;
    font-family: 'DM Sans', sans-serif;
    padding:3px;
  }

  
  

`

const InputContainer = styled.div`
    display: flex;
    gap:10px;
    justify-content: center;
    margin-top:20px;    
    input{
        width: 70px;
    }
    select{
        height:35px;
    }

`






function Design2() {

  

  const [dateFromInputs, setDateFromInputs] = useState({month:'', year:'', date: ''})


  const months = {January:0, February:1, March:2, April:3, May:4, June:5, July:6, August:7, September:8, October:9, November:10, December:11};


  const dateBorn = new Date(dateFromInputs.year, months[dateFromInputs.month], dateFromInputs.date);
  const today = new Date(); 
 
  

  const maxAge = 120*365; //days (years*days)
  const maxN = Math.ceil(Math.log10(maxAge));
  let text;
  let exponent=1;
  let nextMathBirthday;

  for (let n = 1; n<= maxN; n++) {
    let mathBirthday = new Date(dateBorn.getFullYear(),dateBorn.getMonth(),dateBorn.getDate()+Math.pow(10,n));
    if(mathBirthday>today){
      nextMathBirthday = mathBirthday;
      text = nextMathBirthday.toDateString();
      exponent=n;
      n+=maxN;
    }
  }
  
  
  const mapping = (month) => {
      return <option>{month}</option>
  } 


  const handleChange = e => {
      setDateFromInputs(prev => {
          return {...prev, [e.target.id]: e.target.value};
      })
  }



  return (
    <GeneralContainer>

      <Navbar />
      <Container>
        <Left>
          <img src={image}/>
        </Left>
        <Right>
          <h1>Math Birthdays!</h1>
            <div>
            <h2>Select your date of birth:</h2>

            <InputContainer>
                <div><input value={dateFromInputs.date} placeholder='Date' type="number" max="31" min="1" id='date' onChange={e => handleChange(e)}/></div>

                <div>
                    <select className='form-select' value={dateFromInputs.month} aaria-label="Disabled select example" id='month' onChange={e => handleChange(e)}>
                        <option selected disabled>Select a month</option>
                        {Object.keys(months).map(mapping)}
                    </select>
                </div>

                <div><input value={dateFromInputs.year} placeholder='Year' type='number' id='year'onChange={e => handleChange(e)}/></div>
            </InputContainer>
            </div>

          
          {nextMathBirthday && <p>🎉Your next math birthday is your <span>{Math.pow(10,exponent)}</span>-day-old birthday on: <span>{text}</span> 🎉!</p>}
        </Right>
      </Container>
    </GeneralContainer>
  );
}

export default Design2;