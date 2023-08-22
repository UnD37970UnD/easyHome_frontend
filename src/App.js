import './App.css';
import ArticlesView from "./components/articleListView"
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './components/filters';


function App() {
  const [ArticlesList, setArticlesList] = useState([{}])
  const [ApiUrl, setApiUrl] = useState("https://easyhome-1-y9546418.deta.app/api/v1/de_inchiriat/?from_price=0&to_price=99999999&skip=0&lenght=40")
  
  

  useEffect(() => {
    axios.get(ApiUrl)
    .then(res => {
      setArticlesList(res.data.data);
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    },[]);
  }, [ApiUrl]);

  const ApplyFilters = (Url) => {
    setApiUrl(Url)
  };

  return (
    <div className='App container'>
      <h1 className='card text-white bg-dark mb-1'>easyHome</h1>
      <h6 className='card text-white bg-primary mb-3'> Find your new home</h6>
      <div className='row'>
        <div className='col-1 justify-content-left align-items-center mx-auto' style={{"width":"300px", "marginTop":"15px"}}>
        <Filters ApplyFilters={ApplyFilters} />
        </div>
      
        <div className='col-8 list-group-item justify-content-center align-items-center mx-auto' style={{"marginTop":"15px"}}>
          <h4 className='card text-white bg-dark mb-3'>Anunturi</h4>
          <div>
            <ArticlesView ArticlesList={ArticlesList}/> 
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
