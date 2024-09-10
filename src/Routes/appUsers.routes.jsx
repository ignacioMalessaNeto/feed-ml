import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home"

export function AppUsers() {
  return (
  <Routes>
    <Route path="/home" element={<Home />} />
    {/* Rotas para perfil */}
    {/* <Route path="/profile" element={<Profile />} /> */}
    {/* <Route path="/editProfile/:id" element={<UpdateProfile />} /> */}
    {/* <Route path="/deleteProfile/:id" element={<Profile />} /> */}

    {/* Rotas para posts */}
    {/* <Route path="/addPost" element={<AddPost />} /> */}
    {/* <Route path="/deletePost/:id" element={<DeletePost />} /> */}
    {/* <Route path="/updatePost/:id" element={<UpdatePost />} /> */}

    {/* Rotas para comentários dos posts */}
    {/* <Route path="/addComment" element={<AddComment />} /> */}
    {/* <Route path="/deleteComment/:id" element={<DeleteComment />} /> */}
    {/* <Route path="/updateComment/:id" element={<UpdateComment />} /> */}

  </Routes>
  );
}
