import React from 'react';
import ArticleToolBarComponentLargeScreen from './ArticleToolBarComponentLargeScreen';
import ArticleIndexBarComponent from './ArticleIndexBarComponent';
import ArticleToolBar from './ArticleToolBarComponent';
import Info from '../assets/InfoButton';
import NewArticle from '../assets/NewArticle';
import EditArticle from '../assets/EditArticle';
import Bookmark from '../assets/Bookmark';
import Tab from '../layout/Tab';
import Section from './Section';
import IndexSidePanel from '../articles/IndexSidePanel';
import { Container, Row, Col } from 'reactstrap';
import indexButton from '../../assets/index2svg-01.svg';
import sampleImage2 from '../../assets/sampleImage2.png';
import sampleImage3 from '../../assets/sampleImage3.png';
import IndexButton from '../assets/IndexButton';
import ArticleIcon from '../assets/ArticleIcon';

class Article2 extends React.Component<Props, State>  {
  constructor(props: any) {
    super(props);
  };

  state: State = {
    isSidePanelClosed: false
  };

  public toggleIndexSidePanel = () => {
    this.setState((prevState) => {
      return {
        isSidePanelClosed: !prevState.isSidePanelClosed
      }
    });
  }

  public render() {
    let { isSidePanelClosed } = this.state;
    let tableofcontentsheaderClasses = 'tableofcontents-header '
    let sidePanelClasses = 'sidebar-article2 ';
    let tableofcontentsHeaderTextClasses = 'tableofcontents-header-text ';
    let sectionitemsClasses = 'sectionitems ';
    
    if(isSidePanelClosed){
      sidePanelClasses = 'sidebar-article2 close';
      tableofcontentsHeaderTextClasses = 'tableofcontents-header-text close'; // hide Table of Contents text
      tableofcontentsheaderClasses = 'tableofcontents-header close';
      // sectionitemsClasses = 'sectionitems closed';
    }

    return (
      <React.Fragment>
        <header data-test="Article-Component">
          <div className="article-container">

          <div className="article-navigation">
            <div className={tableofcontentsheaderClasses}>
              <IndexButton toggleIndexSidePanel={this.toggleIndexSidePanel}/>
              <h2 className={tableofcontentsHeaderTextClasses}>Table of Contents</h2>
            </div>

            <div className="article-indexbar-article2">
                <div className="indexbar-container">
                  <div className="breadcrumbs-container-article2">
                    <a className="breadcrumbs-article2">Community</a> <span className="breadcrumb-caret"> > </span> <a className="last-breadcrumb">Iraq</a> <span className="breadcrumb-caret"> > </span> <button className="breadcrumbs-button">...add more</button>  
                  </div>
                </div>
                <div className="article-banner">
                  <span className="banner-title">
                    PiX Iraq
                  </span>
              </div>
            </div>
          </div>


          <div className="body-article2">
            {/*side panel div here*/}
            <div className={sidePanelClasses}>
              <div className={sectionitemsClasses}>
                <div className="section-toc itemSelected">
                  <ArticleIcon/>
                  <h2 className="tableofcontents-header-text-sections">2019 Civil Unrest in Iraq Overview</h2>
                </div>

                <div className="section-toc">
                  <ArticleIcon/>
                  <h2 className="tableofcontents-header-text-sections">Causes of October Protests</h2>
                </div>

                <div className="section-toc">
                  <ArticleIcon/>
                  <h2 className="tableofcontents-header-text-sections">Damage, Violence, and Other Consequences</h2>
                </div>

                <div className="section-toc">
                  <ArticleIcon/>
                  <h2 className="tableofcontents-header-text-sections">September-October Events</h2>
                </div>
              </div>
            </div>
            
            <div className="main">

            <div className="article-content-article2 row">
              <div className="col-xs-2 col-sm-1 col-md-1 col-lg-1">
              <div className="article-toolbar-largescreens">
              <Info/>
              <NewArticle/>
              <EditArticle/>
              <Bookmark/>
            </div>
              </div>
              <div className="article-sections col-xs-7 col-sm-7 col-md-8 col-lg-9">
                <h1 className="article-title">2019 Civil Unrest in Iraq </h1> 
                <div className="tag-area">
                <div className="article-tag first-tag">
                  <span><a>Politics &amp; Governance</a></span>
                </div>
                <div className="article-tag">
                  <span><a>Iraq</a></span>
                </div>
                </div>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
                <Section/>
              </div>   
              <div className="col-xs-3 col-sm-1 col-md-1 col-lg-2">
                <div className="Article-List row">
                  <h2 className="recommended">Related Articles</h2>
                  <div className="scrollable-area">
                    <div className="article-list-item">
                      <img className="recommended-image" src={sampleImage2} />
                    </div>

                    <div className="article-list-item">
                      <img className="recommended-image" src={sampleImage3} />
                    </div>

                    <div className="article-list-item">
                      <img className="recommended-image" src={sampleImage2} />
                    </div>

                    <div className="article-list-item">
                      <img className="recommended-image" src={sampleImage3} />
                    </div>
                    <div className="article-list-item">
                      <img className="recommended-image" src={sampleImage2} />
                    </div>

                    <div className="article-list-item">
                      <img className="recommended-image" src={sampleImage3} />
                    </div>
                  </div>
                </div> 
              </div> 
            </div>
            <ArticleToolBar/> 
            </div>
          </div>
        </div>
        </header>
      </React.Fragment>
    );
  }
}

type State = {
  isSidePanelClosed: boolean;
};

type MyProps = {
  toggleIndexSidePanel: () => any;
};

type Props = MyProps;

export default Article2;