import React from 'react'

function ArticleItem({articol,index}){
    var link_poza = articol.photos;
    if (Array.isArray(articol.photos))
    {link_poza=articol.photos[0];}
    return (
        <div key={index} className='col-lg-4 col-sm-12 mb-3'>
        <div className='card' id={articol.id}>
        <img src={link_poza} className='card-img-top img-fluid' style={{"objectFit": "cover","width":"100%", "height":"300px"}}></img>
        <div className='card-body'>
            <h5 className='card-body text-truncate'>{articol.title}</h5>
            <h6 className='card-text descriere_articol'>{articol.description}</h6>
            <h5 className='card-text'>{articol.price} {articol.currency}</h5>
            <a href={articol.url} className="btn btn-primary">Vezi anuntul</a>
        </div>
        </div>
        </div>
    )
}

export default ArticleItem;