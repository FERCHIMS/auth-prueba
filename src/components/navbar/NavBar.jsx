'use client'
import { useUser } from "@auth0/nextjs-auth0/client"
import Link from "next/link";
import LogInButton from "../buttons/LogInButton";
import LogOutButton from "../buttons/LogOutButton";
import SignUpButton from "../buttons/SignUpButton";

const NavBar = () => {
    const { user, error, isLoading } = useUser();

    return (
        <div className="h-16 w-full bg-gray-300 ">
            <div className="w-full flex justify-start gap-6 pl-3">
                <Link href="/">Home</Link>
                <Link href="/profile">server protected profile</Link>
                <Link href="/protected">Middleware protected</Link>
                <Link href="/auth-protected">Auth Protected</Link>
                <Link href="/api/data">Protected Api</Link>
            </div>
            <div className="flex gap-5">
                {!user && !isLoading && (
                    <>
                        <SignUpButton />
                        <LogInButton />
                    </>
                )}
                {user && !isLoading && (
                    <LogOutButton />
                )}
            </div>
        </div>
    )
}

export default NavBar