import React, {useEffect, useState} from 'react';
import {Card,Button} from 'react-bootstrap';

function StarViewer() {
  const [star, setStar]=useState([]);
  const [owned, setOwned]=useState(true);

    useEffect(()=>{
        fetch("/data/starMeta/"+new URLSearchParams(window.location.search).get('star')+".json")
          .then((res)=>res.json())
          .then((data)=>{
            setStar(data)
          }).catch((err)=>console.log(err));
    },[])

    const imgSrc=require('../stars/'+new URLSearchParams(window.location.search).get('star')+'.png');
    const owner='PoopBazooka';

    return (
      <center>
    <div className='centered' align='center' style={{paddingTop: '100px', width:'80%', color:'white',textAlign:'center',background:'#00000000', paddingBottom:'25px'}}>
      <div style={{zIndex:'950', backgroundColor:"black", display:'flex', padding:'40px'}} className='row'>
        
        <img className='col' width="200" height="200" alt='' src={imgSrc} style={{marginBottom:'50px', border:'2px', transform:'translateY(25%)'}} />
        <div style={{marginLeft:'50px', marginTop:'50px'}} className='col'>
          <h1>{star['name']}  {owned?'(Sold)':null}</h1>
          <p>Constellation: {star['constellation']}</p>
          <p>Size: {star['size']}</p>
          <p>Number of Constituents: {star['constituents']}</p>
          <p>Owner: {owner}</p>
          <Button style={{width:'200px'}}>Buy</Button>
        </div>
      </div>
    </div>
    </center>
    );
}

export default StarViewer;
