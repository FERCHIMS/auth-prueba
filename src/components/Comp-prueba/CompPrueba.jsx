/* import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import Image from "next/image"


const CompPrueba = async() => {
  const session = await getSession()
  const {user} = session?.user
  
  if(!user) {
    redirect("/")
  }
  console.log("usuario", user);
  

  return (
    <div className="w-full h-full bg-blue-300">
        
        <h2 className="text-[6rem] font-bold">{user.name} </h2>
        
    </div>
  )
}

export default CompPrueba */