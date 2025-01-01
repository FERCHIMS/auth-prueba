/* import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";

const ProfileServer = async() => {
    const session = await getSession();
    const user = session?.user;
    console.log("user", user);
    
    if(!user) {
        return null
    }

  return  (
    <div>
        <h2>{user.name}</h2>
    </div>
  )
}

export default ProfileServer; */