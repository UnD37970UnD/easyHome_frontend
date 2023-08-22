import React from 'react'

function ArticleItem(articol,index){
    return (
        <li key={index} id={articol.id}>
        <p>
        <b>{articol.title}</b> <br></br>
        {articol.description}
        </p>
        </li>

    )
}

export default ArticleItem;