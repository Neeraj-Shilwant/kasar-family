import React,{useState} from 'react'
import {Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from "@nextui-org/react";

const Navbarmenu = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <>
        {/* <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">

<div className="w-full container mx-auto flex flex-wrap items-center justify-between my-4">

    <div className="pl-4 md:pl-0">

        <a className="flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans" href="#" style={{paddingLeft: "22px"}}>
             Kasar Family Info
        </a>
    </div>
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button 
          variant="bordered" className='flex items-center mr-3 shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white text-sm md:text-base font-bold py-2 px-4 rounded' 
        >
          Other details
          
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem key="new">Family details</DropdownItem>
        <DropdownItem key="copy">Parent Details</DropdownItem>
        
        
      </DropdownMenu>
    </Dropdown>
      

</div>
</nav> */}
<Navbar className='bg-white fixed w-full z-10 top-0 shadow'>
      <NavbarBrand className='w-full container mx-auto flex flex-wrap items-center justify-between my-4'>
        
      <div className="pl-4 md:pl-0">
        <Link className="flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans" href="/" style={{paddingLeft: "22px"}}>
            Kasar Family Info
        </Link>
      </div>
      </NavbarBrand >
      <NavbarItem
        className="menu-button block sm:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </NavbarItem>
      <NavbarContent className={`menu ${menuOpen ? 'active' : ''} menu-button block hidden sm:flex gap-4`} justify="center" style={{paddingRight:"7%"}}>
        <NavbarItem>
          <Link color="foreground" href="/" className='flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:underline font-extrabold font-sans'>
            Family Details
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/Parent" aria-current="page" className='flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:underline font-extrabold font-sans'>
            Parent Details
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/Getmarried" aria-current="page" className='flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:underline font-extrabold font-sans'>
            Get Married
          </Link>
        </NavbarItem>
        
      </NavbarContent>
      
    </Navbar>

    </>
  )
}

export default Navbarmenu