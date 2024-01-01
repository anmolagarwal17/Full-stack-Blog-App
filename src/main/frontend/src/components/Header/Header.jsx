import React, { useState } from 'react'

import {Link,NavLink} from 'react-router-dom'

export default function Header() {
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-end items-center mx-auto max-w-screen-xl">
                    <div className="flex justify-end">
                        <Link
                            to=""
                            className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Home
                        </Link>
                        <Link
                            to="create"
                            className="text-white bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Create
                        </Link>
                        <Link
                            to="#"
                            className="text-gray-800 bg-orange-500 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            {isLoggedIn ? 'Log out' : 'Log in'}
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
