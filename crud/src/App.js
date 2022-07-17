
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './components/Page/Page';
import PostsProvider from './provider/PostsProvider';
import Post from './components/Post/Post';
import Posts from './components/Posts/Posts';
import FormCreate from './components/Form/FormCreate';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page></Page>}>
          <Route index element={<Posts/>} />
          <Route path='posts/new' element={<FormCreate/>}/>
          <Route path='posts/:id' element={<Post/>}/>

          {/* <Route index element={<HomePage />} />
          <Route path="drift" element={<DriftPage />}/>
          <Route path="timeattack" element={<TimeAttackPage />}/>
          <Route path="forza" element={<ForzaPage />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
