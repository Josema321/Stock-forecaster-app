import React, {ReactNode} from 'react'
import Image from "next/image";
import Link from "next/link";

import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";


const Header: React.FC = () => {

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center" >
                    <span className="relative h-32 w-[200px]">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Aeris logo"
                            fill
                            priority
                            sizes="220px"
                            className="object-contain"
                        />
                    </span>
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
