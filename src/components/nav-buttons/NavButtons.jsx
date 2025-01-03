import { getSession } from "@auth0/nextjs-auth0"
import Link from "next/link";
import { redirect } from "next/navigation";

const NavButtons = () => {
    const session = getSession();
    const user = session?.user || null;
    if (user) {
        redirect("/profile")
    }
  return (
    <div >
        {!user ? (
            <div className="flex gap-3">
                <Link href="/api/auth/login">LOGIN</Link>
                <Link href="/api/auth/signup">SIGN UP</Link>
            </div>
        ) : (
            <div className="flex gap-3">
                <Link ref="/api/auth/login">LOGOUT</Link>
            </div>
        )}
    </div>
  )
}

export default NavButtons