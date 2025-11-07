import Header from "@/components/Header";
import {ReactNode} from "react";

const Layout: React.FC<{ children: ReactNode }> = ({children}) => {

    return (
        <main className="min-h-screen flex text-gray-400">
            <Header />
            <div className="contain py-10">
                {children}
            </div>
        </main>
    )
}

export default Layout;