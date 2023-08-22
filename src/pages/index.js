
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
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID1;
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
    form.email !== '' &&
    form.fullname !== '' &&
    form.education !== '' &&
    form.blood !== '' &&
    form.dob !== '' &&
    form.address !== '' &&
    form.area !== '' &&
    form.googleloc !== '' &&
    form.pincode !== '' &&
    form.aadhar !== '' &&
    form.mobile !== '' && 
    form.house !== ''&&
    //wife
    form.wfullname !== '' &&
    form.weducation !== '' &&
    form.wblood !== '' &&
    form.wdob !== '' &&
    form.waadhar !== '' &&
    form.wmobile !== '' &&
    form.wprofession !== '' ||
    //children 
    form.cfullname !== '' ||
    form.cgender !== '' ||
    form.ceducation !== '' ||
    form.cblood !== '' ||
    form.cdob !== '' ||
    form.caadhar !== '' ||
    form.cmobile !== '' ||
    form.cprofession !== '' ||
    //child 2
    form.c2fullname !== '' ||
    form.c2gender !== '' ||
    form.c2education !== '' ||
    form.c2blood !== '' ||
    form.c2dob !== '' ||
    form.c2aadhar !== '' ||
    form.c2mobile !== '' ||
    form.c2profession !== ''
    

    
  ) {
    // Data add for append
    const newRow = {
        //family head
      Email: form.email,
      FullName: form.fullname,
      Education: form.education,
      Bloodgroup: form.blood,
      DateofBirth: form.dob,
      Address: form.address,
      Area : form.area,
      GoogleLocation: form.googleloc,
      Pincode: form.pincode,
      Aadharcard: form.aadhar,
      Mobilenumber: form.mobile,
      House: form.house,
    // wife details

    WifeFullName:form.wfullname,
    WifeEducation:form.weducation,
    WifeBloodgroup:form.wblood,
    WifeDateofBirth:form.wdob,
    WifeAadharcard:form.waadhar,
    WifeMobilenumber:form.wmobile,
    WifeProfession:form.wprofession,
    //children
    ChildFullName:form.cfullname,
    ChildGender:form.cgender,
    ChildEducation:form.ceducation,
    ChildBloodgroup:form.cblood,
    ChildDateofBirth:form.cdob,
    ChildAadharcard:form.caadhar,
    ChildMobilenumber:form.cmobile,
    ChildProfession:form.cprofession,

    //child 2
    Child2FullName:form.c2fullname,
    Child2Gender:form.c2gender,
    Child2Education:form.c2education,
    Child2Bloodgroup:form.c2blood,
    Child2DateofBirth:form.c2dob,
    Child2Aadharcard:form.c2aadhar,
    Child2Mobilenumber:form.c2mobile,
    Child2Profession:form.c2profession,
    };

    appendSpreadsheet(newRow);
    // Perform your form submission logic here
    setSuccessMessage('Form submitted successfully!');
    setErrorMessage('');
  }
  else{
    setErrorMessage('Check the mandatory fields.');
    setSuccessMessage('');
  }
};
  const [form, setForm] = useState({
    email: '',
    fullname: '',
    education: '',
    blood: '',
    dob: '',
    address: '',
    area:'',
    googleloc:'',
    pincode: '',
    aadhar: '',
    mobile: '',
    house : '',
    //wife details
    wfullname:'',
    weducation:'',
    wblood:'',
    wdob:'',
    waadhar:'',
    wmobile:'',
    wprofession:'',
    //children
    cfullname:'',
    cgender:'',
    ceducation:'',
    cblood:'',
    cdob:'',
    caadhar:'',
    cmobile:'',
    cprofession:'',
    //child 2
    c2fullname:'',
    c2gender:'',
    c2education:'',
    c2blood:'',
    c2dob:'',
    c2aadhar:'',
    c2mobile:'',
    c2profession:''
  });

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
				Family details
			</h1>

            {/* <!--divider--> */}
            <hr className="bg-gray-300 my-3"/>

            {/* <!--Title--> */}
            <h2 id='section1' className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Family Head / कुटुंब प्रमुख</h2>

            {/* <!--Card--> */}
            <div className= "p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white" >
                <form  onSubmit={submitForm}   >
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Email Id
                                <span className={style.requiredStar}>*</span>
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input  block w-full focus:bg-white" id="my-textfield" type="text" name ="email"   placeholder='email' onChange={handleChange}  />
                            <p className="py-2 text-sm text-gray-600"></p>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Full Name
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="fullname"  placeholder='fullname' onChange={handleChange}/>
                            {/* <p className="py-2 text-sm text-gray-600">add notes about populating the field</p> */}
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Education
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="education"  placeholder='education' onChange={handleChange}/>
                            <p className="py-2 text-sm text-gray-600">Ex: BTech in AI and Data science</p>
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
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="blood"  placeholder='blood-group' onChange={handleChange}/>
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
                            {/* <textarea className="form-textarea block w-full focus:bg-white" id="my-textarea" value="" rows="8"></textarea> */}

                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name ="dob"  placeholder='date-of-birth' onChange={handleChange}/>

                            <p className="py-2 text-sm text-gray-600">Ex: dd/mm/yyyy</p>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Address
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea className="form-textarea block w-full focus:bg-white" id="my-textarea"  rows="3" name ="address"  placeholder='address' onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Area Name
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="area"  placeholder='area-name' onChange={handleChange}/>
                        <p className="py-2 text-sm text-gray-600">Ex: Pimprigaon, Akurdi, Chinchwad</p>

                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Google location Link
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="googleloc"  placeholder='google-location' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Pincode
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="pincode"  placeholder='pincode' onChange={handleChange}/>

                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Aadhar Card Number
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="aadhar"  placeholder='aadhar' onChange={handleChange}/>
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
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="mobile"  placeholder='mobile' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                House (Self or Rented)
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="house"  placeholder='self or rent' onChange={handleChange}/>

                        </div>
                    </div>

                    
                </form>

            </div>
            {/* <!--/Card--> */}

            {/* <!--divider--> */}
            <hr className="bg-gray-300 my-3"/>
            {/* <!--Title--> */}
            <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Wife details</h2>
            <p className="py-2 text-sm text-gray-600" style={{color:"red"}}>Note : If Not applicable type  NA</p>
            {/* <!--Card--> */}
            <div id='section2' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

            <form  onSubmit={submitForm}>
                
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Full Name
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="wfullname"  placeholder='fullname' onChange={handleChange}/>
                            {/* <p className="py-2 text-sm text-gray-600">add notes about populating the field</p> */}
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Education
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="weducation"  placeholder='education' onChange={handleChange}/>
                            <p className="py-2 text-sm text-gray-600">Ex: BTech in AI and Data science</p>
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
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="wblood"  placeholder='blood-group' onChange={handleChange}/>
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
                            {/* <textarea className="form-textarea block w-full focus:bg-white" id="my-textarea" value="" rows="8"></textarea> */}

                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name ="wdob"  placeholder='date-of-birth' onChange={handleChange}/>

                            <p className="py-2 text-sm text-gray-600">Ex: dd/mm/yyyy</p>
                        </div>
                    </div>
                    
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Aadhar Card Number
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="waadhar"  placeholder='aadhar' onChange={handleChange}/>
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
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="wmobile"  placeholder='mobile' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                Profession
                                <span className={style.requiredStar}>*</span>

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="wprofession"  placeholder='profession' onChange={handleChange}/>
                        </div>
                    </div>

                    
                </form>
            </div>
            {/* <!--/Card--> */}

            {/* <!--divider--> */}
            <hr className="bg-gray-300 my-3"/>
            {/* <!--Title--> */}
            <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Children</h2>
            <p className="py-2 text-sm text-gray-600" style={{color:"red"}}>Note : If Not applicable leave empty</p>


            {/* <!--Card--> */}
            
             <div   className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
             
             <form  onSubmit={submitForm} >
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Full Name

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="cfullname"  placeholder='child-full-name' onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="md:flex mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-radio">
                                Gender

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="cgender"  placeholder='gender' onChange={handleChange}/>
                            <p className="py-2 text-sm text-gray-600">Ex: Male,Female,Prefer not to say</p>
                        </div>
                    </div>
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Education

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="ceducation"  placeholder='education' onChange={handleChange}/>
                            <p className="py-2 text-sm text-gray-600">Ex: BTech in AI and Data science</p>
                        </div>
                    </div>

                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                Blood group
                                

                            </label>
                        </div>
                            <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="cblood"  placeholder='blood-group' onChange={handleChange}/>
                            <p className="py-2 text-sm text-gray-600">Ex: O+ , AB-</p>
                        </div>

                    </div>

                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Date of Birth
                                

                            </label>
                        </div>
                        <div className="md:w-2/3">

                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name ="cdob"  placeholder='date-of-birth' onChange={handleChange}/>

                            <p className="py-2 text-sm text-gray-600">Ex: dd/mm/yyyy</p>
                        </div>
                    </div>
                    
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Aadhar Card Number
                                

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="caadhar"  placeholder='aadhar' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                Mobile Number
                               

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="cmobile"  placeholder='mobile' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                Profession
                                

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="cprofession"  placeholder='profession' onChange={handleChange}/>
                        </div>
                    </div>
                    
                    
                    
                </form>

            </div> 


            {/* child 2 */}
            <hr className="bg-gray-300 my-3"/>
            {/* <!--Title--> */}
            <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Children 2</h2>
            <p className="py-2 text-sm text-gray-600" style={{color:"red"}}>Note : If Not applicable leave empty</p>


            {/* <!--Card--> */}
            
             <div   className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
             
             <form  onSubmit={submitForm} >
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Full Name

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="c2fullname"  placeholder='child-full-name' onChange={handleChange}/>
                        </div>
                    </div>
                    <div class="md:flex mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-radio">
                                Gender

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="c2gender"  placeholder='gender' onChange={handleChange}/>
                            <p className="py-2 text-sm text-gray-600">Ex: Male,Female,Prefer not to say</p>
                        </div>
                    </div>
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Education

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="c2education"  placeholder='education' onChange={handleChange}/>
                            <p className="py-2 text-sm text-gray-600">Ex: BTech in AI and Data science</p>
                        </div>
                    </div>

                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">
                                Blood group
                                

                            </label>
                        </div>
                            <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="c2blood"  placeholder='blood-group' onChange={handleChange}/>
                            <p className="py-2 text-sm text-gray-600">Ex: O+ , AB-</p>
                        </div>

                    </div>

                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Date of Birth
                                

                            </label>
                        </div>
                        <div className="md:w-2/3">

                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name ="c2dob"  placeholder='date-of-birth' onChange={handleChange}/>

                            <p className="py-2 text-sm text-gray-600">Ex: dd/mm/yyyy</p>
                        </div>
                    </div>
                    
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">
                                Aadhar Card Number
                                

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="c2aadhar"  placeholder='aadhar' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                Mobile Number
                               

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="c2mobile"  placeholder='mobile' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                Profession
                                

                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text"  name ="c2profession"  placeholder='profession' onChange={handleChange}/>
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
            {/* <!--/Card--> */}

            {/* <!--divider-->/ */}
            {/* <hr className="bg-gray-300 my-3"/>
            {/* <!--Title--> */}
            {/* <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Section 4</h2> */}

            {/* <!--Card--> */}
            {/* <div id='section4' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                <form>

                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-radio">
                                Radio Buttons
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <div className="mt-2">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio text-indigo-600" name="radioOption" value="A"/>
                                    <span className="ml-2">Radio A</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" className="form-radio" name="radioOption" value="B"/>
                                    <span className="ml-2">Radio B</span>
                                </label>
                            </div>
                            <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
                        </div>
                    </div>

                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-checkbox">
                                Checkboxes
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox text-indigo-600" checked/>
                                    <span className="ml-2">Option 1</span>
                                </label>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox text-green-500" checked/>
                                    <span className="ml-2">Option 2</span>
                                </label>
                            </div>
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="form-checkbox text-pink-600" checked/>
                                    <span className="ml-2">Option 3</span>
                                </label>
                            </div>
                            <p className="py-2 text-sm text-gray-600">add notes about populating the field</p>
                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                Save
                            </button>
                        </div>
                    </div>
                </form>

            </div> */}
            {/* <!--/Card--> */}

            {/* <!--divider--> */}
            {/* <hr className="bg-gray-300 my-3"/> */}
            {/* <!--Title--> */}
            {/* <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Section 5</h2> */}

            {/* <!--Card--> */}
            {/* <div id='section5' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                <blockquote className="border-l-4 border-yellow-600 italic my-4 pl-8 md:pl-12">Final confirmation disclaimer message etc</blockquote>

                <div className="pt-8">

                    <button className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4" type="button">
                        Save
                    </button>

                    <button className="shadow bg-yellow-100 hover:bg-yellow-200 focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded mr-4" type="button">
                        Additional Action
                    </button>

                    <button className="shadow bg-yellow-100 hover:bg-yellow-200 focus:shadow-outline focus:outline-none text-gray-700 font-bold py-2 px-4 rounded" type="button">
                        Additional Action
                    </button>

                </div>

            </div>  */}
            {/* <!--/Card--> */}

        </div>

    </div>
   
    <script  type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js" async/>
    <script  type="text/javascript" src="src/js/formfunc.js" async/>

    
    
    
    </main>
    
    </>
  )
}
