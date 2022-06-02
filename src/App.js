import './App.css';
import { Navbar,Container,Nav,Image } from 'react-bootstrap';
import bg from './img/다운로드.jpg';
import { useState } from 'react';
import data from './data.js'
import {Route,Routes,Link,useNavigate,Outlet} from 'react-router-dom'
import Detail from './routes/Detail';
import Cart from './Cart';


function App() {

  let [eksdj] = useState(data)
  let navigate = useNavigate();



  return (

    <div className="App">


      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">단어장</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home"></Nav.Link> */}
            <Nav.Link href="/detail">추가하자</Nav.Link>
            {/* <Nav.Link href="#pricing"></Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      

      <Routes>
        <Route path='/' element={
          <>
                <div className='main-bg' style={{backgroundImage : 'url('+ bg +')'}}></div>
                <div className='container'>
                  <div  className='row'>
                    {/* <Card eksdj={eksdj[0]}></Card>
                    <Card eksdj={eksdj[1]}></Card>
                    <Card eksdj={eksdj[2]}></Card> */}
                    {
                      eksdj.map((a,i)=>{
                        return (
                          <Card eksdj={eksdj[i]}></Card>
                        )
                      })
                    }
                    </div>
                  </div>
                  </>
        }/>
        <Route path="/detail" element={<Detail eksdj={eksdj}/>}/>
        <Route path ="/cart" element={<Cart></Cart>}/>
      </Routes>
      </div>
  );
}




function Card(props) {
  return (
    <div className='col-md-4'>
          <img src={process.env.PUBLIC_URL + '/K40284073.jpg'} width='30%'/>
          <h4>{props.eksdj.eksdj1}</h4>
          <p>[{props.eksdj.quddma}]</p>
          <p>{props.eksdj.dmlal}</p>
          <p className='rmf'>{props.eksdj.dPans}</p>
          <p className='rmf'>{props.eksdj.gotjr}</p>
          </div>
  )
}
// function Card2(props) {
//   return (
//     <div className='col-md-4'>
//           <img src={process.env.PUBLIC_URL + '/K40284073.jpg'} width='30%'/>
//           <h4>{props.eksdj[1].eksdj1}</h4>
//           <p>[{props.eksdj[1].quddma}]</p>
//           <p>{props.eksdj[1].dmlal}</p>
//           <p className='rmf'>{props.eksdj[1].dPans}</p>
//           <p className='rmf'>{props.eksdj[1].gotjr}</p>
//           </div>
//   )
// }
// function Card3(props) {
//   return (
//     <div className='col-md-4'>
//           <img src={process.env.PUBLIC_URL + '/K40284073.jpg'} width='30%'/>
//           <h4>{props.eksdj[2].eksdj1}</h4>
//           <p>[{props.eksdj[2].quddma}]</p>
//           <p>{props.eksdj[2].dmlal}</p>
//           <p className='rmf'>{props.eksdj[2].dPans}</p>
//           <p className='rmf'>{props.eksdj[2].gotjr}</p>
//           </div>
//   )
// }


export default App;
