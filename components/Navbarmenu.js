import React,{useState,useEffect} from 'react'
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
import style from'./Navbar.module.css'
const Navbarmenu = () => {
  // const handleTouchEnd = () => {
  //   setMenuOpen(true);
  // };
  
  // const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };
  useEffect(() => {
    const closeMobileMenu = () => {
      setIsMobileMenuVisible(false);
    };

    window.addEventListener('click', closeMobileMenu);

    return () => {
      window.removeEventListener('click', closeMobileMenu);
    };
  }, []);
  return (
    <>
    
    

{/* <Navbar className='bg-white fixed w-full  top-0 shadow'>
      <NavbarBrand className='w-full container mx-auto flex flex-wrap items-center justify-between my-4'>
      <div className="pl-4 md:pl-0">
      
        <Link className="flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans" href="/" >
        <img src="/logo2.jpeg" alt="" style={{maxWidth:"6%"}} className="img-fluid"/>

        पी.सी.एम.सी कासार समाज जनगणना अभियान
        <img src="/logo3.png" alt="" style={{maxWidth:"4%"}} className="img-fluid"/>
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
      <NavbarContent className={`menu ${menuOpen ? 'active' : ''} menu-button flex block hidden sm:flex gap-4`} justify="center" style={{paddingRight:"7%"}}>
      
      <Dropdown backdrop="blur" trigger='press' >
      <DropdownTrigger >
        <Button 
          variant="bordered" className='flex items-center mr-3 shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white text-sm md:text-base font-bold py-2 px-4 rounded' 
        >
         How to fill form
          
        </Button>
      </DropdownTrigger>
      <DropdownMenu  variant="solid" aria-label="Static Actions">
        <DropdownItem key="new" variant='solid' style={{backgroundColor:'#eaefef' , borderRadius:'8px',border:"1px solid orange"}}>
          पिंपरी चिंचवड शहरातील सर्व कासार समाज बांधवांची ओळख <br/>संपूर्ण समाजाबरोबर व्हावी याकरिता आपण 
        पिंपरी चिंचवड<br/> शहर कासार समाज जनगणना हा उपक्रम राबवत आहोत <br/> ही जनगणना करत असताना  
        आपण समाज बांधवांच्या आणि <br/> समाजकार्याच्या दृष्टीने काही माहिती घेत आहोत त्यामध्ये प्रामुख्याने <br/>आपण 
        ब्लड ग्रुप व्यवसायाची माहिती कुटुंबातील हॅंडीकॅप<br/> व्यक्तींविषयी माहिती कलाकार आणि खेळाडू तसेच इतर 
        सोशल <br/>ऍक्टिव्हिटी या सर्व विषयांची आपण माहिती घेत आहोत हा <br/> फॉर्म भरताना आपण जितकं सोप्यात
        सोपा करता येईल <br/>तेवढा प्रयत्न केलेला आहे  काही ठिकाणी आपण टॅब चा वापर <br/> केलेला आहे  टॅब क्लिक
        केल्यावर त्या ठिकाणी ऑप्शन दिसणार <br/> आहेत  आणि त्या ऑप्शन नुसार तुमच्या गरजेचे ऑप्शन क्लिक<br/>
        करून तुमचा तो मुद्दा नमूद केला जाणार आहे याशिवाय या फॉर्ममध्ये <br/> कुटुंबप्रमुख पत्नी दोन मुले आई
        आणि वडील या व्यतिरिक्त आणखी <br/> व्यक्ती जर तुमच्या कुटुंबात असतील तर तुम्हाला हाच फॉर्म उर्वरित <br/>
        व्यक्तींच्या नावाने दुसऱ्यांदा भरायचा आहे त्या फॉर्ममध्ये त्याच <br/>व्यक्तींची नोंद करा की ज्यांची या फॉर्ममध्ये 
         झालेली नाही.</DropdownItem>
      </DropdownMenu>
    </Dropdown>
        
      </NavbarContent>
      
    </Navbar>  */}
    <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between my-4">
        <div className="pl-4 md:pl-0">
          
            <Link className="flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans" href="/" >
        <img src="/logo2.jpeg" alt="" style={{maxWidth:"6%"}} className="img-fluid"/>

        पी.सी.एम.सी कासार समाज जनगणना अभियान
        <img src="/logo3.png" alt="" style={{maxWidth:"4%"}} className="img-fluid"/>
        </Link>
         
        </div>
        <div className={`${style.userMenu} pr-0 flex justify-end`}>
          <div className="flex relative inline-block float-center">
            <div className="relative text-sm">
              <button
                id="userButton"
                className={` flex items-center mr-3 shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white text-sm md:text-base font-bold py-2 px-4 rounded`}
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the click event from propagating to the window
                  toggleMobileMenu();
                }}
              >
                How to Fill Form
                <svg
                  className={`pl-2 h-2 fill-current text-white ${
                    isMobileMenuVisible ? 'rotate-180' : ''
                  }`}
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 129 129"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  enableBackground="new 0 0 129 129"
                >
                  <g>
                    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                  </g>
                </svg>
              </button>

              <div
                id="userMenu"
                className={`${style.userMenu}rounded shadow-md mt-2 mr-2 absolute mt-12 top-0  min-w-full overflow-auto z-30 ${
                  isMobileMenuVisible ? 'visible' : 'invisible'
                } ${style.userMenu}`}
                style={{backgroundColor:"#eaefef",width:"217%",borderRadius:'8px',border:"1px solid orange"}}
                onClick={(e) => e.stopPropagation()} // Prevents the click event from closing the menu
              >
                <div style={{padding:"1%"}}>
                  
                      पिंपरी चिंचवड शहरातील सर्व कासार समाज बांधवांची ओळख <br/>संपूर्ण समाजाबरोबर व्हावी याकरिता आपण 
        पिंपरी चिंचवड<br/> शहर कासार समाज जनगणना हा उपक्रम राबवत आहोत <br/> ही जनगणना करत असताना  
        आपण समाज बांधवांच्या आणि <br/> समाजकार्याच्या दृष्टीने काही माहिती घेत आहोत त्यामध्ये प्रामुख्याने <br/>आपण 
        ब्लड ग्रुप व्यवसायाची माहिती कुटुंबातील हॅंडीकॅप<br/> व्यक्तींविषयी माहिती कलाकार आणि खेळाडू तसेच इतर 
        सोशल <br/>ऍक्टिव्हिटी या सर्व विषयांची आपण माहिती घेत आहोत हा <br/> फॉर्म भरताना आपण जितकं सोप्यात
        सोपा करता येईल <br/>तेवढा प्रयत्न केलेला आहे  काही ठिकाणी आपण टॅब चा वापर <br/> केलेला आहे  टॅब क्लिक
        केल्यावर त्या ठिकाणी ऑप्शन दिसणार <br/> आहेत  आणि त्या ऑप्शन नुसार तुमच्या गरजेचे ऑप्शन क्लिक<br/>
        करून तुमचा तो मुद्दा नमूद केला जाणार आहे याशिवाय या फॉर्ममध्ये <br/> कुटुंबप्रमुख पत्नी दोन मुले आई
        आणि वडील या व्यतिरिक्त आणखी <br/> व्यक्ती जर तुमच्या कुटुंबात असतील तर तुम्हाला हाच फॉर्म उर्वरित <br/>
        व्यक्तींच्या नावाने दुसऱ्यांदा भरायचा आहे त्या फॉर्ममध्ये त्याच <br/>व्यक्तींची नोंद करा की ज्यांची या फॉर्ममध्ये 
         झालेली नाही.
         </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

   
    </>
  )
}

export default Navbarmenu