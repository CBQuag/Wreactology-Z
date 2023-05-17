import './App.css';
import Header from './Header';
import MainArticle from './MainArticle'
import PhotoArticle from './PhotoArticle';
import QuickArticle from './QuickArticle';
import SearchBreak from './SearchBreak';
import ShortArticle from './ShortArticle';
import SubscribeBox from './SubscribeBox';
import TagBox from './TagBox'
import TaggedArticle from './TaggedArticle';

function App() {
  return (
    <div className="page-container App-logo">
      <Header />
      <div className='main-content App-logo'>
        <MainArticle 
          bg='https://unsplash.it/300/300'
          type='TIPS'
          title='5 ways to improve your digital project management'
          profilePic='https://unsplash.it/30/30'
          author='John Carter'
          date='June 16, 2022' />
        <ShortArticle
          type='TIPS'
          title='How to choose the best management software' />
        <ShortArticle
          type='TIPS'
          title='3 tips to avoid Internet distractions at work' />
        <ShortArticle
          last='true'
          type='RESOURCES'
          title='7 great productivity apps for your new iPad' />
        <h2>Latest Articles</h2>
        <PhotoArticle
          type='TIPS'
          image='https://unsplash.it/300/300'
          title='How to choose the best management software'
          description='Viverra tristique gravida dolor vel aenean egestas libero enim consequat arcu augue euismod est.'
          profilePic='https://unsplash.it/30/30'
          author='John Carter'
          date='June 18, 2022' />
        
        <SearchBreak 
          description='Tellus id nisl blandit vitae quam magna nisl aliquet aliquam arcu ultricies commodo felisoler massa ipsum erat non sit amet.'/>
        <TagBox types='TIPS RESOURCES GUIDES' />
        <TaggedArticle
          bg='https://unsplash.it/300/300'
          type='RESOURCES'
          description='How to choose the best management software' />
        <br /><br />
        <h2>Popular articles</h2>
        <br />
        <QuickArticle image='https://unsplash.it/100/100' description='10 Best collaboration software for your team' />
        <QuickArticle image='https://unsplash.it/100/100' description='A complete guide to learn project management'/>
      </div>
      <SubscribeBox/>
    </div>
  );
}

export default App;
