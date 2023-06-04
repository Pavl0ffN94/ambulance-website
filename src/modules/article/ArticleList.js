import ArticleCard from './ArticleCard';
import {articleList} from '../helpers//article/articleList';
import './article.css';

const ArticleList = () => {
  return (
    <div className='person_list-wrapper'>
      {articleList.map(list => {
        return (
          <ArticleCard key={list.id} title={list.title}>
            <div className='article_title'>{list.title}</div>
            <div className='article_text'> {list.text1}</div>
            <div className='article_text'> {list.text2}</div>
            <div className='article_text'> {list.text3}</div>
            <div className='article_text'> {list.text4}</div>
            <div className='article_text'> {list.text5}</div>
            <div className='article_coclusion'> {list.conclusion}</div>
          </ArticleCard>
        );
      })}
    </div>
  );
};

export default ArticleList;
