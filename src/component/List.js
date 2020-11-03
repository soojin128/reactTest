import React from 'react';
import imgA from'../img/color01.jpg';
import imgB from'../img/color02.jpg';
import imgC from'../img/color03.jpg';

function List() {
  let data = [
    {tit:'color01',img:<img src={imgA} width='90%' height='100' alt=''/>},
    {tit:'color02',img:<img src={imgB} width='90%' height='100' alt=''/>},
    {tit:'color03',img:<img src={imgC} width='90%' height='100' alt=''/>}
  ]

  let dataArr = [];
  data.forEach((d,k)=>{
    dataArr.push(
      <div key={k}>
        <h2>{d.tit}</h2>
        <p>{d.img}</p>
      </div>
    );
  });
  return ( 
    <article className="gallery">
      {dataArr}
    </article>
  );
}

export default List;
