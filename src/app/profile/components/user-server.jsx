import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";

const ProfileServer = async() => {
    const session = await getSession();
    const user = session?.user;
    console.log("user", user);
    
    if(!user) {
        return null
    }

  return user ? (
    <div>
        <Image src={user.picture} width={500} height={500} alt={user.name} />
        <h2>{user.name} </h2>
        <p>{user.email} </p>
    </div>
  ):(
    <><h2>NO HAY USUARIO REGISTRADO</h2></>
  )
}

export default ProfileServer;