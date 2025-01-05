

import CompPrueba from "@/components/Comp-prueba/CompPrueba"
import ProfileServer from "./components/user-server";
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Profile = async () => {
  const session = await getSession();
  const user = session?.user || null;
  console.log("USER NAME:", user);
  
  /* if (!user) {
    redirect("/")
  } */
  return (
    <div>
      {!user ? (
        <Link href="/api/auth/login">Login</Link>
      ) : (
        <Link href="/api/auth/logout">Logout</Link>
      )}
      {user? (
        <div>
          <Image src="https://iili.io/2nNcnDP.png" width={500} height={500} alt="foto profile" />
          <h2 className="text-[4rem] font-bold tracking-tight">{user.name} </h2>
        </div>
      ): (
        <div>
          <h2>NO HAY USUARIO</h2>
        </div>
      )}
    
    </div>
  );
};

export default Profile;
