import { BrowserRouter } from "react-router-dom";
import { AppUsers } from "./appUsers.routes";
export function Routes() {
  return (
    <BrowserRouter>
      <AppUsers />
    </BrowserRouter>
  );
}
