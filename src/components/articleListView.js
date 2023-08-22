import ArticleItem from "./article";

export default function ArticlesView(props){
    const listItems = props.ArticlesList.map((articol,index) => ArticleItem(articol,index));
      return <ul>{listItems}</ul>;

}