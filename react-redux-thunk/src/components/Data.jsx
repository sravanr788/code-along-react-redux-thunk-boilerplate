import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../util/redux/action';
const Data = () => {
    const dispatch = useDispatch();
    const data = useSelector(storeData=>storeData.user);
    console.log(data)
 
  return (
    <div>
        <button style={{
            padding : "10px",
            borderRadius : "8px",
            fontSize : "20px",
            color : "black", backgroundColor : "white"
        }} onClick={()=>{
            dispatch(FetchData());
        }} >
            Fetch Data
        </button>

        {   data?.map((elem, idx) => (
                <div className='elemdiv' key={idx}>
                  <h2>{elem.name}</h2>
                  <h3>{elem.email}</h3>
                  <br />
                  <hr />
                  </div>
              ))
        }
    </div>
  )
}

export default Data