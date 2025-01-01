/* import { getSession } from "@auth0/nextjs-auth0"; */
/* import { cookies } from "next/headers"; */
/* import ProfileServer from "./components/user-server"; */
/* import { redirect } from "next/navigation";

import CompPrueba from "@/components/Comp-prueba/CompPrueba"
import ProfileServer from "./components/user-server"; */
import { getSession } from '@auth0/nextjs-auth0';
const Profile = async () => {
  /* const res = await fetch('http://localhost:3000/api/auth/session', {
    cache: 'no-store',
  }); */
  const session = await getSession();
  const user = session?.user || null;
  /* const { user } = await res.json();
  console.log("user", user); */


  return (
    <div>
      {!user ? (
        <a href="/api/auth/login">Login</a>
      ):(
      <a href="/api/auth/logout">Logout</a>
      )}
      <h2>{user?.name || 'Guest'}</h2>
    </div>
  );
};

export default Profile;



/* const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/")
    } */


/* {!user ? (
   <a href="/api/auth/login">Login</a>
): (
  <a href="/api/auth/logout">Logout</a>
)} */