import react,{useState} from 'react';
import imgA from'../img/color01.jpg';
import imgB from'../img/color02.jpg';
import imgC from'../img/color03.jpg';
import "../App.css";

function Tab() {
  let [idx,setIdx] = useState(0);
  let contents = [<Con1 />,<Con2 />,<Con3 />];
  function tab(e){
    let num = e.target.dataset.num;
    let li = document.querySelectorAll('.App li');

    li.forEach(function(el,k){
        if(num == k){
          el.classList.add('active');
        }else{
          el.classList.remove('active');
        }
    });
    setIdx(num);
  }
  return (
    <div className="App">
      <ul>
        <li onClick={tab} data-num="0" className="active">color01</li>
        <li onClick={tab} data-num="1">color02</li>
        <li onClick={tab} data-num="2">color03</li>
      </ul>
      {contents[idx]}
    </div>
  );
}
function Con1(){
  return( <div><img src={imgA} width='300' height='200' alt='testA'/></div> );
}
function Con2(){
  return( <div><img src={imgB} width='300' height='200' alt='testB'/></div> );
}
function Con3(){
  return( <div><img src={imgC} width='300' height='200' alt='testC'/></div> );
}

export default Tab;