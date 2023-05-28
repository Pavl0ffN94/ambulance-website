import ArticleCard from './ArticleCard';
import {articleList} from '../helpers/articleList';
import './article.css';

const ArticleList = () => {
  return (
    <div className='person_list-wrapper'>
      {articleList.map(list => {
        return (
          <ArticleCard key={list.id} title={list.title}>
            <div className='article_title'>{list.text}</div>
          </ArticleCard>
        );
      })}
    </div>
  );
};

export default ArticleList;
