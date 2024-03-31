"use client";

import Image from "next/image";
import Logo from '../../../../../public/logo.svg';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashNavBar from "@/app/components/DashNavbar";
import Dashboard from "./Dashboard";
import ContentPage from "./Content";

// import { useSession } from "next-auth/react";

// http://localhost:3000/c89ovt/yh789rf/admin
const AdminPage = () => {
    const [page, setPage] = useState(1);

    return(
        <div className="w-full overflow-x-hidden h-[100vh] flex">

         <DashNavBar  setPage={setPage} page={page}/>
         {page === 1 &&
         <Dashboard/>
            }

            {page === 2 &&
            <ContentPage  />
            }

           
            
        </div>
    )
};


export default AdminPage;