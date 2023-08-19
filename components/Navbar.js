import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">

<div className="w-full container mx-auto flex flex-wrap items-center justify-between my-4">

    <div className="pl-4 md:pl-0">

        <a className="flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans" href="#" style={{paddingLeft: "22px"}}>
             Kasar Family Info
        </a>
    </div>

    {/* <div className="pr-0 flex justify-end">

        <div className="flex relative inline-block float-right">

            <div className="relative text-sm">

                <button id="userButton" className="flex items-center mr-3 shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white text-sm md:text-base font-bold py-2 px-4 rounded">
                    Menu
                    <svg className="pl-2 h-2 fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 129 129">
                        <g>
                            <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                        </g>
                    </svg>
                </button>

                <div id="userMenu" className="bg-white rounded shadow-md mt-2 mr-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
                    <ul className="list-reset">
                        <li><a href="#" className="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline">My account</a></li>
                        <li><a href="#" className="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline">Notifications</a></li>
                        <li>
                            <hr className="border-t mx-2 border-gray-400"/>
                        </li>
                        <li><a href="#" className="px-4 py-2 block text-yellow-600 font-bold hover:bg-yellow-600 hover:text-white no-underline hover:no-underline">Logout</a></li>
                    </ul>
                </div>
            </div>

        </div>

    </div> */}

</div>
</nav>

    </>
  )
}

export default Navbar