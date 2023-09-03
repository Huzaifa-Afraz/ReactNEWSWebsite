import React from 'react';

export default function NewsComponent(props){
    return (
        <>
      <div className="card" style={{width:"18rem"}}>
  <img src={props.imgUrl} className="card-img-top" alt={props.title}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.discreption}</p>
    <a href={props.url} className="btn btn-primary">{props.btnText}</a>
  </div>
</div>
        
      </>
    )
  }

NewsComponent.defaultProps={
    title:"Enter a title",
    discreption:"Enter Discreption",
    btnText:"Btn Txt"
}