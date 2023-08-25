import './App.css';
import React, {useState, useEffect, Suspense} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './components/filters';

const ArticlesView = React.lazy(() => import ("./components/articleListView"));


function App() {
  const [ArticlesList, setArticlesList] = useState([{}])
  const [noArticles, setNoArticles] = useState('')
  const [ApiUrl, setApiUrl] = useState("https://easyhome-1-y9546418.deta.app/api/v1/de_inchiriat/?from_price=0&to_price=99999999&skip=0&lenght=40")
  
  

  useEffect(() => {
    axios.get(ApiUrl)
    .then(res => {
      if (res.data.data === undefined || res.data.data.length == 0)
        setNoArticles("empty");
      else
        setNoArticles("data");
        setArticlesList(res.data.data);
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    },[]);
  }, [ApiUrl]);

  const ApplyFilters = (Url) => {
    setApiUrl(Url)
  };
  function ToView(){
    if(noArticles=="empty")
    {
        return(<h3>Nu am gasit imobiliarea aici</h3>)
    }
    else return (<ArticlesView ArticlesList={ArticlesList}/>)
  }
  return (
    <div className='App container-xxl'>
      <h1 className='card text-white bg-dark mb-1'>easyHome</h1>
      <h6 className='card text-white bg-primary mb-3'> Find your new home</h6>
      <div className='row'>
        <div className='col-3 col-xs-12 justify-content-left align-items-center mx-auto' style={{"width":"300px", "marginTop":"15px"}}>
        <Filters ApplyFilters={ApplyFilters} />
        </div>
      
        <div className='col-9 col-xs-12 col-sm-fluid list-group-item justify-content-center align-items-center mx-auto' style={{"marginTop":"15px"}}>
          <h4 className='card text-white bg-dark mb-3'>Anunturi</h4>
            <Suspense fallback={<div>Loading...</div>}>
              <ToView/>
            
            </Suspense>
        </div>

      </div>
    </div>
  );
}

export default App;
