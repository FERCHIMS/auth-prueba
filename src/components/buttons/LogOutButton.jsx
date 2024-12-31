import Link from "next/link"



const LogOutButton = () => {
  return (
    <Link href="/api/auth/logout">LOGOUT</Link>
  )
}

export default LogOutButton