
import { Inter } from 'next/font/google'
import React,{useState,useEffect} from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import {JWT}  from 'google-auth-library'
import Head from 'next/head';
import style from'@/styles/style.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  

// Config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID2;
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

const submitForm = (e) => {
  e.preventDefault();

  if (
    //primary key fullname
    form.fullname !== '' &&
    //father
    
    
    form.fathername !== '' &&
    form.fatherblood !== '' &&
    form.fatherdob !== '' &&
    form.fatherprofession !== '' &&
    form.fathermobile !== '' &&
    //mother
    form.mothername !== '' &&
    form.motherblood !== '' &&
    form.motherdob !== '' && 
    form.motherprofession !== ''&&
    form.mothermobile !== ''
    
    
    

    
  ) {
    // Data add for append
    const newRow = {
        
      
      FullName: form.fullname,
      FatherName:form.fathername,
      Bloodgroup : form.fatherblood,
      DateofBirth:form.fatherdob,
      Profession:form.fatherprofession,
      Mobilenumber:form.fathermobile,
      MotherName:form.mothername,
      MotherBloodgroup:form.motherblood,
      MotherDateofBirth:form.motherdob,
      MotherProfession:form.motherprofession,
      MotherMobilenumber:form.mothermobile
    
    };

    appendSpreadsheet(newRow);
    // Perform your form submission logic here
    setSuccessMessage('Form submitted successfully!');
    setErrorMessage('');
    setForm(initialvalues);
  }
  else{
    setErrorMessage('Check the mandatory fields.');
    setSuccessMessage('');
  }
};

    const initialvalues = {
   
        //primary key Fullname
        fullname:'',
        //father 
        fathername:'',
        fatherblood:'',
        fatherdob:'',
        fatherprofession:'',
        fathermobile:'',
        //mother
        mothername:'',
        motherblood:'',
        motherdob:'',
        motherprofession:'',
        mothermobile:''
        
        
      };
  const [form, setForm] = useState(initialvalues);

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
   
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
      
        <div className="w-full lg:w-4/5 p-4 lg:px-8">

            {/* <!--Title--> */}
            <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
				Parent details
			</h1>

            
            {/* <!--/Card--> */}

            {/* <!--divider--> */}
            <hr className="bg-gray-300 my-3"/>
            {/* <!--Title--> */}
            <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Father Details</h2>


            {/* <!--Card--> */}
            
             <div   className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
             
             <form  onSubmit={submitForm} >
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Full Name(Your Name)
                                <span className={style.requiredStar}>*</span>
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="fullname"  placeholder='your-name' onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="md:flex mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-radio">
                                Father Name
                                <span className={style.requiredStar}>*</span>
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="fathername"  placeholder='father-name' onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                Blood group
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                            <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="fatherblood"  placeholder='father-blood-group' onChange={handleChange}/>
                            <p className="py-2 text-sm text-gray-600">Ex: O+ , AB-</p>
                        </div>

                    </div>

                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Date of Birth
                                <span className={style.requiredStar}>*</span>
                            </label>
                        </div>
                        <div className="md:w-2/3">

                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name ="fatherdob"  placeholder='date-of-birth' onChange={handleChange}/>

                            <p className="py-2 text-sm text-gray-600">Ex: dd/mm/yyyy</p>
                        </div>
                    </div>
                    
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Profession
                                <span className={style.requiredStar}>*</span>
                             </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="fatherprofession"  placeholder='work' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                Mobile Number
                               
                                <span className={style.requiredStar}>*</span>
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="fathermobile"  placeholder='mobile' onChange={handleChange}/>
                        </div>
                    </div>
                    
                    
                    
                    
                </form>

            </div> 


            {/* child 2 */}
            <hr className="bg-gray-300 my-3"/>
            {/* <!--Title--> */}
            <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Mother Details</h2>


            {/* <!--Card--> */}
            
             <div   className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
             
             <form  onSubmit={submitForm} >
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Mother Name
                                <span className={style.requiredStar}>*</span>
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="mothername"  placeholder='full-name' onChange={handleChange}/>
                        </div>
                    </div>
                    
                    
                    

                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                Blood group
                                <span className={style.requiredStar}>*</span>
                            </label>
                        </div>
                            <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="motherblood"  placeholder='blood-group' onChange={handleChange}/>
                            <p className="py-2 text-sm text-gray-600">Ex: O+ , AB-</p>
                        </div>

                    </div>

                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Date of Birth
                                <span className={style.requiredStar}>*</span>
                            </label>
                        </div>
                        <div className="md:w-2/3">

                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name ="motherdob"  placeholder='date-of-birth' onChange={handleChange}/>

                            <p className="py-2 text-sm text-gray-600">Ex: dd/mm/yyyy</p>
                        </div>
                    </div>
                    
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Profession            
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="motherprofession"  placeholder='work' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                Mobile Number            
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="mothermobile"  placeholder='mobile' onChange={handleChange}/>
                        </div>
                    </div>
                    
                    
                    
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                        
                        </div>
                        <div className="md:w-2/3">
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

    </div>
   
    <script  type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js" async/>
    <script  type="text/javascript" src="src/js/formfunc.js" async/>

    
    
    
    </main>
    
    </>
  )
}
