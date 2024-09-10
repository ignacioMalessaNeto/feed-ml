import { Post } from "../../components/Post";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Modal } from "../../components/Modal";

import styles from "./Home.module.css";
import "../../global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/ignacioMalessaNeto.png",
      name: "Ignacio Malesa Neto",
      role: "Developer",
    },
    content: [
      { type: "paragraph", title: "Fala galera 👋" },
      {
        type: "paragraph",
        description:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀",
      },
      { type: "link", link: 'https://doctorcare.com' },
    ],
    tags: [
      { type: "link", id: 4, title: '#novoprojeto', link: `http://ip/posts?tag=novoprojeto` },
      { type: "link", id: 5, title: '#dev', link: `http://ip/posts?tag=dev` },
      { type: "link", id: 6, title: '#nlw', link: `http://ip/posts?tag=nlw` }
    ],
    comments: [
      {
        id: 11,
        author: {
          avatarUrl: "https://github.com/ignacioMalessaNeto.png",
          name: "Ignacio Malesa Neto",
          role: "Developer",
          id: 1
        },
        postedAt: new Date("2024-08-29 14:50"),
        description: "Show de bola",
        applauses: 4
      },
      {
        id: 12,
        author: {
          avatarUrl: "https://github.com/ignacioMalessaNeto.png",
          name: "Ignacio Malesa Neto",
          role: "Developer",
          id: 1
        },
        postedAt: new Date("2024-08-29 14:50"),
        description: "Show de bola",
        applauses: 0
      },
      {
        id: 15,
        author: {
          avatarUrl: "https://github.com/ignacioMalessaNeto.png",
          name: "Ignacio Malesa Neto",
          role: "Developer",
          id: 1
        },
        postedAt: new Date("2024-08-29 14:50"),
        description: "Show de bola",
        applauses: 4
      }
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://www.github.com/joaoNeto.png",
      name: "joão neto",
      role: "Developer",
    },
    content: [
      { type: "paragraph", title: "Fala galeraa 👋" },
      {
        type: "paragraph",
        description:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare🚀",
      },
      { type: "link", link: 'ignacio.malessa/doctorcare' },
    ],
    tags: [
      { type: "link", id: 1, title: '#developer', link: "ip/caminhoParaExibirTag"},
      { type: "link", id: 2, title: '#marco', link: "ip/caminhoParaExibirTag"},  
      { type: "link", id: 3, title: '#dev', link : "ip/caminhoParaExibirTag"},
    ],
    comments: [
      {
        id: 47,
        author: {
          avatarUrl: "https://github.com/ignacioMalessaNeto.png",
          name: "Ignacio Malesa Neto",
          role: "Developer",
          id: 1
        },
        postedAt: new Date("2024-08-29 14:50"),
        description: "Show de bola",
        applauses: 4
      },
      {
        id: 54,
        author: {
          avatarUrl: "https://github.com/ignacioMalessaNeto.png",
          name: "Ignacio Malesa Neto",
          role: "Developer",
          id: 1
        },
        postedAt: new Date("2024-08-29 14:50"),
        description: "Show de bola",
        applauses: 0
      },
      {
        id: 45,
        author: {
          avatarUrl: "https://github.com/ignacioMalessaNeto.png",
          name: "Ignacio Malesa Neto",
          role: "Developer",
          id: 1
        },
        postedAt: new Date("2024-08-29 14:50"),
        description: "Show de bola",
        applauses: 4
      }
    ],
    publishedAt: new Date("2024-08-29 21:00:00"),
  }
];


export function Home() {
  return (
    <div>
      <Header />

      <Modal />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
            author={post.author} 
            content={post.content}
            publishedAt={post.publishedAt}
            tags={post.tags}
            comments={post.comments}
            key={post.id}
            />
          )
          })}
        </main>
      </div>
    </div>
  );
}
