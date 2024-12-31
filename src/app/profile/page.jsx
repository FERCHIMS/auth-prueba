import { getSession } from "@auth0/nextjs-auth0";
import ProfileServer from "./components/user-server";
import { redirect } from "next/navigation";

const Profile = async() => {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/")
    }
  return (
    <div>
        <h2>SERVER COMPONENT</h2>
        <ProfileServer />
    </div>
  )
}

export default Profile