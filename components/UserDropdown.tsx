'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import NavItems from "@/components/NavItems";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push("/sign-in");
    };

    const user = { name: "John", email: "testjohn@gmail.com" };

    return (
        <div className="dropdown dropdown-end">
            {/* Dropdown Trigger */}
            <div tabIndex={0} role="button" className="btn btn-ghost flex items-center gap-3 text-gray-400 hover:text-yellow-500">
                {/* Avatar */}
                <div className="avatar">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                            src="/assets/images/avatar-icon.png"
                            alt="User Avatar"
                            width={32}
                            height={32}
                        />
                    </div>
                </div>

                {/* Username (only visible on md+) */}
                <div className="hidden md:flex flex-col items-start">
                    <span className="text-base font-medium text-gray-400">
                        {user.name}
                    </span>
                </div>
            </div>

            {/* Dropdown Content */}
            <ul
                tabIndex={0}
                className="dropdown-content menu menu-sm mt-3 z-[1] p-4 shadow-lg bg-base-100 rounded-box w-60 text-gray-400"
            >
                {/* Header with user info */}
                <li className="mb-2 pointer-events-none">
                    <div className="flex items-center gap-3 py-1">
                        <div className="avatar">
                            <div className="w-10 h-10 rounded-full">
                                <Image
                                    src="/assets/images/avatar-icon.png"
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base font-medium text-gray-300">
                                {user.name}
                            </span>
                            <span className="text-sm text-gray-500">
                                {user.email}
                            </span>
                        </div>
                    </div>
                </li>

                <div className="divider my-1"></div>

                {/* Logout option */}
                <li>
                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 text-gray-200 hover:text-yellow-500 transition-colors"
                    >
                        <LogOut className="h-4 w-4" />
                        Logout
                    </button>
                </li>

                <div className="divider my-1 sm:hidden"></div>

                {/* Mobile-only NavItems */}
                <li className="sm:hidden">
                    <NavItems />
                </li>
            </ul>
        </div>
    );
};


export default UserDropdown;
