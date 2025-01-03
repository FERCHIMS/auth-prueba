

import CompPrueba from "@/components/Comp-prueba/CompPrueba"
import ProfileServer from "./components/user-server";
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from "next/navigation";
import Image from "next/image";

const Profile = async () => {
  const session = await getSession();
  const user = session?.user || null;
  if (!user) {
    redirect("/")
  }
  return (
    <div>
      {!user ? (
        <a href="/api/auth/login">Login</a>
      ) : (
        <a href="/api/auth/logout">Logout</a>
      )}
      {user? (
        <div>
          <Image src="https://iili.io/2nNcnDP.png" width={500} height={500} alt="foto profile" />
        </div>
      ): (
        <div>
          
        </div>
      )}
    
    </div>
  );
};

export default Profile;
