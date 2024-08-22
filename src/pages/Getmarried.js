
import { Inter } from 'next/font/google'
import React,{useState,useEffect} from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import {JWT}  from 'google-auth-library'
import Head from 'next/head';
import style from'@/styles/style.module.css'
import{ BeatLoader,DotLoader,BounceLoader} from "react-spinners";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
                    //spinner refresh 
  setTimeout(()=>setrefresh(false),3000);
}, [])

// Config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID3;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY =process.env.GOOGLE_SERVICE_PRIVATE_KEY;
const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];


//google auth library JWT
const jwtFromEnv = new JWT({
  email: GOOGLE_CLIENT_EMAIL,
  key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: SCOPES,
});

// GoogleSpreadsheet Initialize
const doc = new GoogleSpreadsheet(SPREADSHEET_ID,jwtFromEnv);

// Append Function
const appendSpreadsheet = async (row) => {
  try {
    
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow(row);
  } catch (e) {
    console.error('Error: ', e);
  }
};

const submitForm = async (e) => {
  e.preventDefault();
  setloading(true);
  if (
    form.fullname !== '' && 
    form.email !== ''
    
  ) {
    // Data add for append
    // const newRow = {
        
      
    //   FullName: form.fullname,
    //   Bloodgroup:form.blood,
    //   Education:form.education,
    //   Age:form.age,
      
    
    // };

    // 

    // appendSpreadsheet(newRow);
    // Perform your form submission logic here

    
    
    //Mongo connection
    // const res =  await fetch("api/route",{
    //   method:"POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body:JSON.stringify({newRow}),
    // });

    const emailresponse = await fetch("api/hello",{
      method:"POST",
      headers:{
          "Content-type": "application/json",
      },
      body:JSON.stringify({email:form.email}),
    });
   
    setTimeout(() => {
      setSuccessMessage('Form submitted successfully!'); // Hide the loader
      setloading(false);
    }, 5000);
    
    
    
    setForm(initialvalues);
    setErrorMessage('');
    
    
 
  }
  else{
    setTimeout(() => {
      setErrorMessage('Check the mandatory fields.'); // Hide the loader
      setloading(false);
    }, 5000);
    
    
    setSuccessMessage('');
   
  }
};

  const initialvalues = {
   
    //primary key Fullname
    fullname:'',
    email:'',
    
    
    
    
  };
  const [form, setForm] = useState(initialvalues);
  
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setloading] = useState(false);
  const [refresh, setrefresh] = useState(true);
  

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    
    
    setForm((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
 
  };

  
 


  return (<>
  
    <Head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
    <title>KASAR FAMILY</title>
   
    </Head>
    
    <main 
      className={`flex min-h-screen flex-col items-center justify-between  p-0 md:p-24 ${inter.className}`}
    >
      
    <div className='container justify-center w-full flex flex-wrap mx-auto px-2 pt-4 '>
    {refresh ? (<div className='justify-center' style={{
        display: 'flex',
        paddingTop:'7rem'
      }}>
    <BounceLoader color={'#F79F3A'} loading={refresh} size={45} />
    </div>
    ) : 
        <div className="w-full lg:w-4/5 p-4 lg:px-8">

            {/* <!--Title--> */}
            <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
            विवाह इच्छा युक्त व्यक्ती
			</h1>

            
            {/* <!--/Card--> */}

            {/* <!--divider--> */}
            <hr className="bg-gray-300 my-3"/>
            {/* <!--Title--> */}
            <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Give Details</h2>


            {/* <!--Card--> */}
            
             <div   className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
             
             <form  onSubmit={submitForm} >
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                Full Name
                                <span className={style.requiredStar}>*</span>
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" value={form.fullname}  name ="fullname"  placeholder='full-name' onChange={handleChange}/>
                        </div>
                    </div>
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                Email
                                <span className={style.requiredStar}>*</span>
                            </label>
                        </div>
                        <div className="md:w-2/3">

                            <input value={form.email} className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name ="email"  placeholder='education' onChange={handleChange}/>

                        </div>
                    </div>
                    
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                        
                        </div>
                        <div className="md:w-2/3">
                          {loading && <BeatLoader
                                color={'#F79F3A'}
                                loading={loading}
                                size={20}
                              />}
                        {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
                        {successMessage && <p className={style.successMessage}>{successMessage}</p>}
                              
                            <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" >
                                Save
                            </button>
                            
                        </div>
                    </div>
                    
                    
                    
                </form>

            </div> 


            

        </div>
      }
    </div>
   
    <script  type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js" async/>
    <script  type="text/javascript" src="src/js/formfunc.js" async/>

    
    
    
    </main>
    
    </>
  )
}
