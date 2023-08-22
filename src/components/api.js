import axios from 'axios';

export const fetchArticles = (apiUrl,setArticlesList) => {
  axios.get(apiUrl)
    .then(res => {
      setArticlesList(res.data.data);
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    });
};