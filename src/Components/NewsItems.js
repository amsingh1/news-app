import React from 'react'

export default function NewsItems(props) {
  return (
    <div >
        <div className ="card newItem" style={{width: '18rem',}}>
  <img src={props.img} className ="card-img-top" style={{height: '200px'}} alt="image"/>
  <div className ="card-body">
    <h5 className ="card-title">{props.title}</h5>
    <p className ="card-text">{props.description}</p>
    <a href={props.url} target="_blank" className ="btn btn-primary">Details</a>
  </div>
</div>
    </div>
  )
}
