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
    <Link className="flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans" href="/" style={{paddingLeft: "22px"}}>
        <img src="/logo3.png" alt="" style={{maxWidth:"6%"}} className="img-fluid"/>
            Kasar Family Info
        </Link>
    </div>
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button 
          variant="bordered" className='flex items-center mr-3 shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white text-sm md:text-base font-bold py-2 px-4 rounded' 
        >
         How to fill form
          
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="solid" aria-label="Static Actions">
        <DropdownItem key="new" variant='solid' style={{backgroundColor:'#eaefef' , borderRadius:'8px',border:"1px solid orange"}}>पिंपरी चिंचवड शहरातील सर्व कासार समाज बांधवांची ओळख संपूर्ण समाजाबरोबर व्हावी याकरिता आपण <br/>
        पिंपरी चिंचवड शहर कासार समाज जनगणना हा उपक्रम राबवत आहोत ही जनगणना करत असताना <br/> 
        आपण समाज बांधवांच्या आणि समाजकार्याच्या दृष्टीने काही माहिती घेत आहोत त्यामध्ये प्रामुख्याने आपण <br/>
        ब्लड ग्रुप व्यवसायाची माहिती कुटुंबातील हॅंडीकॅप व्यक्तींविषयी माहिती कलाकार आणि खेळाडू तसेच इतर <br/>
        सोशल ऍक्टिव्हिटी या सर्व विषयांची आपण माहिती घेत आहोत हा फॉर्म भरताना आपण जितकं सोप्यात<br/>
        सोपा करता येईल तेवढा प्रयत्न केलेला आहे काही ठिकाणी आपण टॅब चा वापर केलेला आहे टॅब क्लिक<br/>
        केल्यावर त्या ठिकाणी ऑप्शन दिसणार आहेत आणि त्या ऑप्शन नुसार तुमच्या गरजेचे ऑप्शन क्लिक<br/>
        करून तुमचा तो मुद्दा नमूद केला जाणार आहे याशिवाय या फॉर्ममध्ये कुटुंबप्रमुख पत्नी दोन मुले आई<br/>
        आणि वडील या व्यतिरिक्त आणखी व्यक्ती जर तुमच्या कुटुंबात असतील तर तुम्हाला हाच फॉर्म उर्वरित <br/>
        व्यक्तींच्या नावाने दुसऱ्यांदा भरायचा आहे त्या फॉर्ममध्ये त्याच व्यक्तींची नोंद करा की ज्यांची या फॉर्ममध्ये <br/>
         झालेली नाही.</DropdownItem>
        
        
        
      </DropdownMenu>
    </Dropdown>
    
      

</div>

</nav> */}

<Navbar className='bg-white fixed w-full z-10 top-0 shadow'>
      <NavbarBrand className='w-full container mx-auto flex flex-wrap items-center justify-between my-4'>
      <div className="pl-4 md:pl-0">
      
        <Link className="flex items-center text-yellow-600 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans" href="/" style={{paddingLeft: "22px"}}>
        <img src="/logo3.png" alt="" style={{maxWidth:"6%"}} className="img-fluid"/>
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
      <NavbarContent className={`menu ${menuOpen ? 'active' : ''} menu-button flex block hidden sm:flex gap-4`} justify="center" style={{paddingRight:"7%"}}>
      
      <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button 
          variant="bordered" className='flex items-center mr-3 shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white text-sm md:text-base font-bold py-2 px-4 rounded' 
        >
         How to fill form
          
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="solid" aria-label="Static Actions">
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
      
    </Navbar> 
    
   
    </>
  )
}

export default Navbarmenu