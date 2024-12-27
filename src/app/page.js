
/* import { useUser } from '@auth0/nextjs-auth0/client'; */
/* import CompPrueba from '@/components/Comp-prueba/CompPrueba'; */
import { getSession } from '@auth0/nextjs-auth0';

import Image from 'next/image';
import Link from 'next/link';
export default async function Home() {
  /* const { user } = useUser() */

  const session = await getSession()
  const user = session?.user
  /* console.log("user", user); */

  return (
    <>
    <h2>ESTO ES UN HOME</h2>
      {/* {user ? (
        <div>
          <h2>{user.name} </h2>
          <Link href="/api/auth/logout" >LOGOUT </Link>
          <CompPrueba />
        </div>
      ) : (
        <div>
          <Link href="/api/auth/login" >LOGIN </Link>
        </div>
      )} */}
    </>
  )
}
