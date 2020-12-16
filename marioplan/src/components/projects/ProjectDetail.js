import React from 'react'

export default function ProjectDetail(props) {

    const id = props.match.params.id;

    return (
       <div className="contianer section project-details">
           <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Projext Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, excepturi! Cupiditate delectus porro non reiciendis, repellendus, sit enim dicta labore praesentium id quaerat itaque nobis eum et voluptatum. Error, ab!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by prabesh</div>
                    <div>2nd june, 2am</div>
                </div>
           </div>
       </div>
    )
}

