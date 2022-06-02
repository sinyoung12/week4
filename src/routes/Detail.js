import { useParams } from "react-router-dom"
import styled from 'styled-components'
import {useEffect , useState} from "react"



function Detail(props) {

  
  


  let { id } = useParams
  let [count,setCount] = useState(0)
  let [alert,setAlert] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{setAlert(false)},2000)
  },[])



  return (
    <>
    {
      alert == true ? <div className="alert alert-warning">2초뒤 사라져라</div>:null
    }
    <body>
    <span>단어</span>
    <input></input>
    <span>설명</span>
    <input></input>
    <span>예문</span>
    <input></input>
    <button>추가하기</button>
    </body>
    </>
  )
}

export default Detail;