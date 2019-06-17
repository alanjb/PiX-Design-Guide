import React from 'react';
import ArticleIndexBarComponent from '../layout/ArticleIndexBarComponent';
import ArticleToolBar from '../layout/ArticleToolBarComponent';
import Info from '../../components/assets/InfoButton';
import NewArticle from '../../components/assets/NewArticle';
import EditArticle from '../../components/assets/EditArticle';
import Bookmark from '../../components/assets/Bookmark';

export default class Article extends React.Component {
  constructor(props: any) {
    super(props);
  };

  render() {
    return (
      <div className="row h-100"> 
        <ArticleIndexBarComponent/>
        <div className="col-xs-1 col-sm-2 col-md-2 col-lg-1">
           <div className="article-toolbar-largescreens">
            <EditArticle/>
            <NewArticle/>
            <Info/>
            <Bookmark/>
          </div> 
        </div>  
        <div className="article col-xs-10 col-sm-8 col-md-8 col-lg-10">
          <h1 className="article-title">USCENTCOM Medical Security Cooperation</h1>
        </div>  
        <div className="col-xs-1 col-sm-2 col-md-2 col-lg-1"/> 
        <ArticleToolBar/> 
      </div>   
    );
  }
}
