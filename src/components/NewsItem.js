import React from "react";

export default function NewsItem (props) {

    let { title, description , imgurl , newsurl , date,author , source } = props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left:'90%' , zIndex : '1'}}>{source}</span> 
          <img src={!imgurl?"https://www.reuters.com/resizer/6_j1lgfiHu_zHSaySpu8gK82PuU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FOELD7H7AVNMTIYK5BIXOKEFZI.jpg":imgurl} style={{height : '250px'}}className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?'Unknown':author} On {new Date(date).toUTCString()} </small></p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">
             Read More
            </a>
          </div>
        </div>
      </div>
    )
  }

