import { Post } from "./Post.jsx";
import { Header } from "./components/header.jsx";
import './styles.css';

export function App() {

  return (
    <div>
      <Header />

      <Post 
      author="Ignacio"
      content="lore ipsum"
      />
      <Post />
      <Post 
      author="Teste Post"
      content="lore ipsum2"
      />
      <Post />
    </div>
  )
}

