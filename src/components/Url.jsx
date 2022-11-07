import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const Url = (url) => {

  const [data, setData] = useState({});
  let urlFinal = url.url;

  useEffect(() => {
    axios.get(urlFinal).then((res) => {
      setData(res.data);
    })
  }, [])

  console.log(data);

  return (
    <>
      <div className='container-characters'>
        <div className="image-container">
          <img src={data.image} alt="" />
        </div>
        <div className="data-container">
          <div className='name-card'>

          { 

            data.status === 'Alive' ? (
              <div className='span' style={{background: 'green'}}></div>
            ) : data.status === 'Dead' ? (
              <div className='span' style={{background: 'red'}}></div>
            ): <div className='span' style={{background: 'yellow'}}></div>

            
          }

            <b>{data?.name}</b>
          </div>
          <br />
          <p>Lugar de origen: {data.origin?.name}</p>
          <p>Cantidad de episodios que aparece: {data.episode?.length}</p>
        </div>
      </div>
    </>
  );
};

export default Url;