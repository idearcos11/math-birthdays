import { useState } from 'react';
import styled from 'styled-components';
import image from '../images/image.jfif';
import Navbar from '../components/Navbar';


const GeneralContainer = styled.div`
  
  background-color: #BAABDA;
  width:100vw;
  height:100vh;
`

const Container = styled.div`
  margin: 80px auto;
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

  div{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap:10px;
  }

`



function Design1() {

  const [date, setDate] = useState('');


  const handleDate = e => setDate(e.target.value);
  
  let [year, month, day] = date.split('-');

  const dateBorn = new Date(Number(year), Number(month)-1, Number(day));
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
  


  return (
    <>
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
                <input type='date' value={date} onChange={e => handleDate(e)}/>
              </div>
              {nextMathBirthday && <p>🎉Your next math birthday is your <span>{Math.pow(10,exponent)}</span>-day-old birthday on: <span>{text}</span> 🎉!</p>}
            </Right>
          </Container>
        
      </GeneralContainer>
    </>
  );
}

export default Design1;