import React, {ReactNode} from 'react'
import Image from "next/image";
import Link from "next/link";

import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";


const Header: React.FC = () => {

    console.log("Header rendered ✅");

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/public">
                    <Image
                        src="/assets/images/logo.png"
                        alt="Aeris logo"
                        width={1080}
                        height={720}
                        className="h-8 w-auto cursor-pointer"
                    />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
                <UserDropdown />


            </div>
        </header>
    )
}

export default Header
