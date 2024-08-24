
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library'
import Head from 'next/head';
import style from '@/styles/style.module.css'

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


import { BeatLoader, BounceLoader } from "react-spinners";

import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const router = useRouter();
    const { verified, decodedemail } = router.query;
    const [emailstatus, setemailStatus] = useState(false);
    const [verimsg,setverimsg] = useState('');
    const [email, setEmail] = useState('');
    

    useEffect(() => {
        //spinner refresh 
        setTimeout(() => setrefresh(false), 3000);
        
    }, [])
    useEffect(() => {
        if (verified=="true") {
            setemailStatus(true);
            setEmail(decodedemail);
            setForm({fullname:localStorage.getItem('fullname')});
            setverimsg("Your email has been successfully verified!");
        }
        else if(verified=="false"){
            setemailStatus(false);
            setEmail(decodedemail);
            setForm({fullname:localStorage.getItem('fullname')});
            setverimsg("Your email has not been verified yet.");
        }
        console.log("forms : ",verified);
    }, [verified]);
    
    // Config variables
    const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
    const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID1;
    const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
    const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;
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
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, jwtFromEnv);

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
            email !== '' &&
            emailstatus !== false &&
            // setMailerror === '' &&
            form.fullname !== '' &&
            form.education !== '' &&
            form.blood !== '' &&
            formState.dob !== null &&
            form.address !== '' &&
            form.googleloc !== '' &&

            formmob.mobile !== '' &&
            form.fprofession !== '' &&
            // setmobErrors.mobile === '' && 
            form.house !== '' &&

            form.ref1 !== '' &&

            formmob.con1 !== '' ||



            //wife
            form.wfullname !== '' ||
            form.weducation !== '' ||
            form.wblood !== '' ||
            formState.wdob !== null ||
            formmob.wmobile !== '' ||
            // setmobErrors.wmobile === '' && 
            form.wprofession !== '' ||
            //father
            form.fathername !== '' ||
            form.fatherblood !== '' ||
            formState.fatherdob !== null ||
            form.fatherprofession !== '' ||
            formmob.fathermobile !== '' ||
            //mother
            form.mothername !== '' ||
            form.motherblood !== '' ||
            formState.motherdob !== null ||
            form.motherprofession !== '' ||
            formmob.mothermobile !== '' ||
            //children 
            form.cfullname !== '' ||
            form.cgender !== '' ||
            form.ceducation !== '' ||
            form.cblood !== '' ||
            formState.cdob !== null ||
            form.cmarry !== '' ||
            formmob.cmobile !== '' ||
            form.cprofession !== '' ||
            //child 2
            form.c2fullname !== '' ||
            form.c2gender !== '' ||
            form.c2education !== '' ||
            form.c2blood !== '' ||
            formState.c2dob !== null ||
            form.c2marry !== '' ||
            formmob.c2mobile !== '' ||
            form.c2profession !== ''

        ) {
            // Data add for append
            const newRow = {
                //family head
                Email: email,
                FullName: form.fullname,
                Education: form.education,
                Bloodgroup: form.blood,
                DateofBirth: formState.dob,
                Address: form.address,
                GoogleLocation: form.googleloc,

                Mobilenumber: formmob.mobile,
                Profession: form.fprofession,
                House: form.house,

                AlreadyInvolvedOrganization: form.organ,
                AlreadyInvolvedOtherOrganization: form.organother,
                Interest: form.iorgan,
                OtherInterest: form.iotherorgan,
                Reference_Name1: form.ref1,
                Contact_1: formmob.con1,

                // wife details

                WifeFullName: form.wfullname,
                WifeEducation: form.weducation,
                WifeBloodgroup: form.wblood,
                WifeDateofBirth: formState.wdob,
                WifeMobilenumber: formmob.wmobile,
                WifeProfession: form.wprofession,
                WifeAlreadyInvolvedOrganization: form.worgan,
                WifeAlreadyInvolvedOtherOrganization: form.worganother,
                WifeInterest: form.wiorgan,
                WifeOtherInterest: form.wiotherorgan,
                //children
                ChildFullName: form.cfullname,
                ChildGender: form.cgender,
                ChildEducation: form.ceducation,
                ChildBloodgroup: form.cblood,
                ChildDateofBirth: formState.cdob,
                ChildGetmarry: form.cmarry,
                ChildMobilenumber: formmob.cmobile,
                ChildProfession: form.cprofession,
                CAlreadyInvolvedOrganization: form.corgan,
                CAlreadyInvolvedOtherOrganization: form.corganother,
                CInterest: form.ciorgan,
                COtherInterest: form.ciotherorgan,

                //child 2
                Child2FullName: form.c2fullname,
                Child2Gender: form.c2gender,
                Child2Education: form.c2education,
                Child2Bloodgroup: form.c2blood,
                Child2DateofBirth: formState.c2dob,
                Child2Getmarry: form.c2marry,
                Child2Mobilenumber: formmob.c2mobile,
                Child2Profession: form.c2profession,
                C2AlreadyInvolvedOrganization: form.c2organ,
                C2AlreadyInvolvedOtherOrganization: form.c2organother,
                C2Interest: form.c2iorgan,
                C2OtherInterest: form.c2iotherorgan,

                //child3
                Child3FullName: form.c3fullname,
                Child3Gender: form.c3gender,
                Child3Education: form.c3education,
                Child3Bloodgroup: form.c3blood,
                Child3DateofBirth: formState.c2dob,
                Child3Getmarry: form.c3marry,
                Child3Mobilenumber: formmob.c3mobile,
                Child3Profession: form.c3profession,
                C3AlreadyInvolvedOrganization: form.c3organ,
                C3AlreadyInvolvedOtherOrganization: form.c3organother,
                C3Interest: form.c3iorgan,
                C3OtherInterest: form.c3iotherorgan,

                //Father
                FatherName: form.fathername,
                FatherBloodgroup: form.fatherblood,
                FatherDateofBirth: formState.fatherdob,
                FatherProfession: form.fatherprofession,
                FatherMobilenumber: formmob.fathermobile,
                FAlreadyInvolvedOrganization: form.forgan,
                FAlreadyInvolvedOtherOrganization: form.forganother,
                FInterest: form.fiorgan,
                FOtherInterest: form.fiotherorgan,
                //Mother
                MotherName: form.mothername,
                MotherBloodgroup: form.motherblood,
                MotherDateofBirth: formState.motherdob,
                MotherProfession: form.motherprofession,
                MotherMobilenumber: formmob.mothermobile,
                MAlreadyInvolvedOrganization: form.morgan,
                MAlreadyInvolvedOtherOrganization: form.morganother,
                MInterest: form.miorgan,
                MOtherInterest: form.miotherorgan,

                Widowdetails: form.widow,
                DisabledDetails: form.disab,

                MoreFamilyMembers: form.more
            };

            appendSpreadsheet(newRow);

            //Mongo connection

            //send post request with data
            const res = await fetch("api/route", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newRow }),
            });
            setTimeout(() => {
                setSuccessMessage('Form submitted successfully!'); // Hide the loader
                setloading(false);
            }, 5000);
            
            //Send data to hello api for email response sending
            const emailresponse = await fetch("api/hello",{
                method:"POST",
                headers:{
                    "Content-type": "application/json",
                },
                body:JSON.stringify({Name:form.fullname,Email: email,Mobilenumber: formmob.mobile}),
            });

            
            // Perform your form submission logic here

            setErrorMessage('');
            setForm(initialvalues);
            setFormState({
                dob: null,
                wdob: null,
                cdob: null,
                c2dob: null,
                fatherdob: null,
                motherdob: null
            });
            setformmob({
                mobile: '',
                con1: '',

                wmobile: '',
                cmobile: '',
                c2mobile: '',
                fathermobile: '',
                mothermobile: ''
            });







            // setnext(true);
        }
        else {
            setTimeout(() => {
                setErrorMessage('Check the mandatory fields.'); // Hide the loader
                setloading(false);
            }, 5000);

            setSuccessMessage('');

        }
    };
    const initialvalues = {

        fullname: '',
        education: '',
        blood: '',

        address: '',
        googleloc: '',

        fprofession: '',
        house: '',
        organ: '',
        organother: '',
        iorgan: '',
        iotherorgan: '',
        ref1: '',


        //wife details
        wfullname: '',
        weducation: '',
        wblood: '',


        wprofession: '',
        worgan: '',
        worganother: '',
        wiorgan: '',
        wiotherorgan: '',

        //children
        cfullname: '',
        cgender: '',
        ceducation: '',
        cblood: '',
        cmarry: '',

        cprofession: '',
        corgan: '',
        corganother: '',
        ciorgan: '',
        ciotherorgan: '',
        //child 2
        c2fullname: '',
        c2gender: '',
        c2education: '',
        c2blood: '',
        c2marry: '',

        c2profession: '',
        c2organ: '',
        c2organother: '',
        c2iorgan: '',
        c2iotherorgan: '',
        //child 3
        //children
        c3fullname: '',
        c3gender: '',
        c3education: '',
        c3blood: '',
        c3marry: '',

        c3profession: '',
        c3organ: '',
        c3organother: '',
        c3iorgan: '',
        c3iotherorgan: '',
        //father 
        fathername: '',
        fatherblood: '',

        fatherprofession: '',
        forgan: '',
        forganother: '',
        fiorgan: '',
        fiotherorgan: '',
        //mother
        mothername: '',
        motherblood: '',

        motherprofession: '',
        morgan: '',
        morganother: '',
        miorgan: '',
        miotherorgan: '',

        widow: '',
        disab: '',
        more: '',

    };
    const initialtoggle = {
        wife: true,
        child1: true,
        child2: false,
        child3: false,

        father: true,
        mother: true,
        other_details: true
    }
    const [form, setForm] = useState(initialvalues);

    //statemanagement for enable and disable of forms for wife , children, father ,mother,other details
    const [toggle, settoggle] = useState(initialtoggle);
    const handletogglechange = (e) => {
        const { name, checked } = e.target;
        settoggle({
            ...toggle,
            [name]: checked,
        });

    };

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [loading, setloading] = useState(false);
    const [refresh, setrefresh] = useState(true);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        });
    };
    const [formState, setFormState] = useState({
        dob: null,
        wdob: null,
        cdob: null,
        c2dob: null,
        c3dob: null,
        fatherdob: null,
        motherdob: null// Initialize with null or a default date
    });

    const handleDateChange = (date, field) => {
        setFormState({
            ...formState,
            [field]: date,
        });
    };


    //email
    
    const [mailerror, setMailerror] = useState('');

    const handleEmailChange = async (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setMailerror(validateEmail(newEmail));
    };
    const handleSendEmailverification = async () =>{
        alert("Email Verification Sent to your mail ID. Kindly Check ~~!");
        const emailresponse = await fetch("api/emailtoken",{
            method:"POST",
            headers:{
                "Content-type": "application/json",
            },
            body:JSON.stringify({Name:form.fullname,Email: email}),
        });
         localStorage.setItem('fullname',form.fullname);
    }



    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Invalid email format' : '';
    };


    //mobile
    const [formmob, setformmob] = useState({
        mobile: '',
        con1: '',

        wmobile: '',
        cmobile: '',
        c2mobile: '',
        c3mobile: '',
        fathermobile: '',
        mothermobile: ''

    })
    const [moberrors, setmobErrors] = useState({
        mobile: '',
        con1: '',
        con2: '',
        wmobile: '',
        cmobile: '',
        c2mobile: '',
        c3mobile: '',
        fathermobile: '',
        mothermobile: ''
    });
    const handleMobchange = (e, field) => {
        const newValue = e.target.value;
        const updatedFormMob = {
            ...formmob,
            [field]: newValue,
        };

        setformmob(updatedFormMob);

        setmobErrors({
            ...moberrors,
            [field]: validateMobile(newValue) ? 'Invalid mobile format' : '',
        });

    }
    const validateMobile = (value) => {
        const mobileRegex = /^\d{10}$/;
        return !mobileRegex.test(value);
    };


    return (<>

        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>KASAR FAMILY</title>

        </Head>
        {refresh ? (<div className='justify-center' style={{
            display: 'flex',
            paddingTop: '14rem',
            paddingBottom: '14rem'
        }}>
            <BounceLoader color={'#F79F3A'} loading={refresh} size={45} />
        </div>
        ) :
            <main
                className={`flex min-h-screen flex-col items-center justify-between  p-0 md:p-24 ${inter.className}`}
            >



                <div className={`container justify-center w-full flex flex-wrap mx-auto px-2 ${style.familydetailstop}`}>

                    <div className="w-full lg:w-4/5 p-4 lg:px-8">

                        {/* <!--Title--> */}
                        <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
                            Family Details
                        </h1>

                        {/* <!--divider--> */}
                        <hr className="bg-gray-300 my-3" />

                        {/* <!--Title--> */}
                        <h2 id='section1' className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Family Head / कुटुंब प्रमुख</h2>

                        {/* <!--Card--> */}
                        <div className="p-8 mt-6 lg:mt-0 leading-normal rounded shadow bg-white" >
                            <form onSubmit={submitForm}   >

                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                            Full Name 
                                            <span className={style.requiredStar}>*</span>
                                            <br></br>
                                            <label className='text-sm font-normal'>पूर्ण नाव </label>

                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="fullname" value={form.fullname} placeholder='fullname' onChange={handleChange} />
                                        {/* <p className="py-2 text-sm text-gray-600">add notes about populating the field</p> */}
                                    </div>
                                </div>
                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                            Email Id
                                            <span className={style.requiredStar}>*</span>
                                            <br></br>
                                            <label className='text-sm font-normal'>ईमेल आयडी </label>
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <div className='flex gap-2'>
                                        <input className="form-input  block w-full focus:bg-white" id="my-textfield" type="email" value={email} name="email" placeholder='email' onChange={handleEmailChange} />

                                        {emailstatus
                                            ? null
                                            :   <>
                                                    <svg fill="#038c13" width="50px" height="50px" viewBox="-4.8 -4.8 41.60 41.60" xmlns="http://www.w3.org/2000/svg" stroke="#038c13" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g data-name="Layer 42" id="Layer_42"> <path d="M29.63,15.23l-11-9A1,1,0,0,0,17,7v5.86L3.13,11a1,1,0,0,0-.79.24A1,1,0,0,0,2,12v8a1,1,0,0,0,.34.75,1,1,0,0,0,.79.24L17,19.14V25a1,1,0,0,0,.57.9A.94.94,0,0,0,18,26a1,1,0,0,0,.63-.23l11-9a1,1,0,0,0,0-1.54ZM19,22.89V18a1,1,0,0,0-.34-.75A1,1,0,0,0,18,17h-.13L4,18.86V13.14L17.87,15a1,1,0,0,0,.79-.24A1,1,0,0,0,19,14V9.11L27.42,16Z"></path> </g> </g></svg>
                                                    <button className='p-2 text-xs rounded-md bg-yellow-700 text-white hover:bg-yellow-500' onClick={handleSendEmailverification}>Click to Verify</button>
                                                </>
                                        }
                                        
                                        </div>
                                        {emailstatus 
                                            ? <div style={{ color: 'green' }}>{verimsg}</div>
                                            : <div style={{ color: 'red' }}>{verimsg}</div>
                                        }
                                        {/* <p className="py-2 text-sm text-gray-600"></p> */}
                                        {mailerror && <div style={{ color: 'red' }}>{mailerror}</div>}

                                    </div>
                                </div>
                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                            Education 
                                            <span className={style.requiredStar}>*</span>
                                            <br></br>
                                            <label className='text-sm font-normal'>शिक्षण </label>

                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="education" placeholder='education' onChange={handleChange} />
                                        <p className="py-2 text-sm text-gray-600">Ex: BTech in AI and Data science</p>
                                    </div>
                                </div>

                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                            Blood group 
                                            <span className={style.requiredStar}>*</span>
                                            <br></br>
                                            <label className='text-sm font-normal'>रक्त गट </label>

                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        {/* blood group component  */}
                                        <select value={form.blood} onChange={handleChange} name='blood' placeholder='Select..'>
                                            <option value="Select">Select..</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="No idea">No idea</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                            Date of Birth
                                            <span className={style.requiredStar}>*</span>
                                            <br></br>
                                            <label className='text-sm font-normal'>जन्मतारीख </label>

                                        </label>
                                    </div>
                                    <div className="md:w-2/3">


                                        <DatePicker className='form-input block w-full focus:bg-white' selected={formState.dob}
                                            onChange={(date) => handleDateChange(date, 'dob')}
                                            placeholderText="Select Date of Birth"
                                            name="dob"
                                            dateFormat="dd-MM-yyyy"
                                            showYearDropdown
                                            scrollableYearDropdown
                                            yearDropdownItemNumber={100}
                                            maxDate={new Date()}
                                            minDate={new Date('1900-01-01')}
                                        />
                                    </div>
                                </div>
                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                            Address
                                            <span className={style.requiredStar}>*</span>
                                            <br></br>
                                            <label className='text-sm font-normal'>पत्ता </label>

                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <textarea className="form-textarea block w-full focus:bg-white" id="my-textarea" rows="3" name="address" placeholder='address' onChange={handleChange}></textarea>
                                        <p className="py-2 text-sm text-gray-600">Ex: area,near by/behind, society name ,colony name,house name / flat number, pincode.</p>

                                    </div>
                                </div>

                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                            Google location Link
                                            <span className={style.requiredStar}>*</span>
                                            <br></br>
                                            <label className='text-sm font-normal'>Google लोकेशन लिंक</label>

                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="googleloc" placeholder='google-location' onChange={handleChange} />
                                    </div>
                                </div>


                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                            Mobile 
                                            <span className={style.requiredStar}>*</span>
                                            <br></br>
                                            <label className='text-sm font-normal'>मोबाईल </label>

                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="form-input block w-full focus:bg-white" id="my-textfield" type="tel" name="mobile" placeholder='mobile' onChange={(e) => handleMobchange(e, 'mobile')} />
                                        {moberrors.mobile && <div style={{ color: 'red' }}>{moberrors.mobile}</div>}
                                    </div>
                                </div>
                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                            Job / Business  
                                            <span className={style.requiredStar}>*</span>
                                            <br></br>
                                            <label className='text-sm font-normal'>नोकरी/व्यवसाय </label>
                                            <span className={style.requiredStar}>*</span>
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="fprofession" placeholder='profession' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                            House (Own or Rent)
                                            <span className={style.requiredStar}>*</span>
                                            <br></br>
                                            <label className='text-sm font-normal'>घर (स्वतःचे किंवा भाड्याने) </label>
                                            <span className={style.requiredStar}>*</span>
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="house" placeholder='own or rent' onChange={handleChange} />

                                    </div>
                                </div>
                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                        Actively working with this organization
                                        <br></br>
                                        <label className='text-sm font-normal'>या संघटनेसोबत सक्रिय कार्यरत आहे</label>

                                        </label>
                                    </div>
                                    <div className="md:w-2/3">

                                        <select style={{ width: "100%" }} value={form.organ} onChange={handleChange} name='organ' placeholder='Select..' >
                                            <option value="Select">Select..</option>
                                            <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                            <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                            <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                            <option value="ISKCON">ISKCON</option>
                                            <option value="Bajrang Dal">बजरंग दल</option>
                                            <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                            <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                            <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                            <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                            <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                            <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                            <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                            <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                            <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                            <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                            <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                            <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                            <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                            <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                            <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>

                                            <option value="None">None</option>
                                        </select>
                                        <p className="py-2 text-sm text-gray-600">If Other : </p>
                                        <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="organother" placeholder='Other' onChange={handleChange} />

                                    </div>

                                </div>

                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                        Willing to work with this organization
                                        <br></br>
                                        <label className='text-sm font-normal'>या संघटनेसोबत काम करण्यास इच्छुक आहे</label>
                                          

                                        </label>
                                    </div>
                                    <div className="md:w-2/3">

                                        <select style={{ width: "100%" }} value={form.iorgan} onChange={handleChange} name='iorgan' placeholder='Select..'>
                                            <option value="Select">Select..</option>
                                            <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                            <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                            <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                            <option value="ISKCON">ISKCON</option>
                                            <option value="Bajrang Dal">बजरंग दल</option>
                                            <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                            <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                            <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                            <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                            <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                            <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                            <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                            <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                            <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                            <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                            <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                            <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                            <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                            <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                            <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                            <option value="None">None</option>
                                        </select>
                                        <p className="py-2 text-sm text-gray-600">If Other : </p>
                                        <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="iotherorgan" placeholder='Other' onChange={handleChange} />

                                    </div>

                                </div>
                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                            Reference Name 1
                                            <span className={style.requiredStar}>*</span>
                                            <br />
                                            <label className='text-sm font-normal'>संदर्भ नाव</label>


                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="ref1" placeholder='full-name' onChange={handleChange} />

                                    </div>
                                </div>
                                <div className="md:flex mb-6">
                                    <div className="md:w-1/3">
                                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                            Contact number 1
                                            <span className={style.requiredStar}>*</span>
                                            <br />
                                            <label className='text-sm font-normal'>संपर्क क्रमांक</label>
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input className="form-input block w-full focus:bg-white" id="my-textfield" type="tel" name="con1" placeholder='contact-number' onChange={(e) => handleMobchange(e, 'con1')} />
                                        {moberrors.con1 && <div style={{ color: 'red' }}>{moberrors.con1}</div>}

                                    </div>
                                </div>
                            </form>

                        </div>
                        {/* <!--/Card--> */}

                        {/* <!--divider--> */}
                        <hr className="bg-gray-300 my-3" />

                        {/* <!--Title--> */}

                        <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Wife details --</h2>
                        <p className="py-2 text-sm" style={{ color: "red" }}>Note : If Not applicable leave empty</p>
                        
                        <label className='text-sm font-normal' style={{ color: "red" }}>
                        टीप: लागू नसल्यास रिकामे सोडा</label>

                            <div>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" name="wife" class="sr-only peer" onChange={handletogglechange} checked = {toggle.wife}/>
                                    <div class="relative w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                                </label>
                            </div>
                        


                        {/* <p className="py-2 text-sm text-gray-600" style={{color:"red"}}></p> */}

                        {/* <!--Card--> */}
                        {toggle.wife && (
                            <div id='section2' className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                                <form onSubmit={submitForm}>


                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                                Full Name / पूर्ण नाव


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="wfullname" placeholder='fullname' onChange={handleChange} />
                                            {/* <p className="py-2 text-sm text-gray-600">add notes about populating the field</p> */}
                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                                Education / शिक्षण


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="weducation" placeholder='education' onChange={handleChange} />
                                            <p className="py-2 text-sm text-gray-600">Ex: BTech in AI and Data science</p>
                                        </div>
                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                Blood group / रक्त गट


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <select value={form.wblood} onChange={handleChange} name='wblood' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="No idea">No idea</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Date of Birth / जन्मतारीख


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">


                                            <DatePicker className='form-input block w-full focus:bg-white' selected={formState.wdob}
                                                onChange={(date) => handleDateChange(date, 'wdob')}
                                                placeholderText="Select Date of Birth"
                                                name="wdob"
                                                dateFormat="dd-MM-yyyy"

                                                showYearDropdown
                                                scrollableYearDropdown
                                                yearDropdownItemNumber={100}
                                                maxDate={new Date()}
                                                minDate={new Date('1900-01-01')} />
                                        </div>
                                    </div>



                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Mobile Number / मोबाईल नंबर


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="tel" name="wmobile" placeholder='mobile' onChange={(e) => handleMobchange(e, 'wmobile')} />
                                            {moberrors.wmobile && <div style={{ color: 'red' }}>{moberrors.wmobile}</div>}

                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Profession / व्यवसाय


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="wprofession" placeholder='profession' onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                या संघटनेसोबत सक्रिय कार्यरत आहे

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <select style={{ width: "100%" }} value={form.worgan} onChange={handleChange} name='worgan' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                                <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                                <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                                <option value="ISKCON">ISKCON</option>
                                                <option value="Bajrang Dal">बजरंग दल</option>
                                                <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                                <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                                <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                                <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                                <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                                <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                                <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                                <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                                <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                                <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                                <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                                <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                                <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                                <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                                <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                                <option value="None">None</option>
                                            </select>
                                            <p className="py-2 text-sm text-gray-600">If Other : </p>
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="worganother" placeholder='Other' onChange={handleChange} />

                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                या संघटनेसोबत काम करण्यास इच्छुक आहे

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <select style={{ width: "100%" }} value={form.wiorgan} onChange={handleChange} name='wiorgan' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                                <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                                <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                                <option value="ISKCON">ISKCON</option>
                                                <option value="Bajrang Dal">बजरंग दल</option>
                                                <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                                <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                                <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                                <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                                <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                                <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                                <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                                <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                                <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                                <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                                <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                                <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                                <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                                <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                                <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                                <option value="None">None</option>
                                            </select>
                                            <p className="py-2 text-sm text-gray-600">If Other : </p>
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="wiotherorgan" placeholder='Other' onChange={handleChange} />

                                        </div>

                                    </div>


                                </form>
                            </div>
                        )}
                        {/* <!--/Card--> */}

                        {/* <!--divider--> */}
                        <hr className="bg-gray-300 my-3" />
                        {/* <!--Title--> */}
                        <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Child</h2>
                        <p className="py-2 text-sm text-gray-600" style={{ color: "red" }}>Note : If Not applicable leave empty</p>
                        <div>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="child1" class="sr-only peer" onChange={handletogglechange} checked = {toggle.child1}/>
                                <div class="relative w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                            </label>
                        </div>

                        {/* <!--Card--> */}
                        {toggle.child1 && (
                            <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                                <form onSubmit={submitForm} >

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                                Full Name / पूर्ण नाव
                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="cfullname" placeholder='child-full-name' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-radio">
                                                Gender / लिंग

                                            </label>
                                        </div>

                                        <div className="md:w-2/3">
                                            <select value={form.cgender} onChange={handleChange} name='cgender' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="prefer not to say">Prefer Not to say</option>

                                            </select>
                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                                Education / शिक्षण

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="ceducation" placeholder='education' onChange={handleChange} />
                                            <p className="py-2 text-sm text-gray-600">Ex: BTech in AI and Data science</p>
                                        </div>
                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                Blood group / रक्त गट


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <select value={form.cblood} onChange={handleChange} name='cblood' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="No idea">No idea</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Date of Birth / जन्मतारीख

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">


                                            <DatePicker className='form-input block w-full focus:bg-white' selected={formState.cdob}
                                                onChange={(date) => handleDateChange(date, 'cdob')}
                                                placeholderText="Select Date of Birth"
                                                name="cdob"
                                                dateFormat="dd-MM-yyyy"
                                                showYearDropdown
                                                scrollableYearDropdown
                                                yearDropdownItemNumber={100}
                                                maxDate={new Date()}
                                                minDate={new Date('1900-01-01')} />
                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-radio">
                                                लग्नासाठी स्थळ बघणे ?

                                            </label>
                                        </div>

                                        <div className="md:w-2/3">
                                            <select value={form.cmarry} onChange={handleChange} name='cmarry' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="male">Yes</option>
                                                <option value="female">No</option>

                                            </select>
                                        </div>

                                    </div>


                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Mobile Number / मोबाईल नंबर


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="tel" name="cmobile" placeholder='mobile' onChange={(e) => handleMobchange(e, 'cmobile')} />
                                            {moberrors.cmobile && <div style={{ color: 'red' }}>{moberrors.cmobile}</div>}

                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Profession / व्यवसाय


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="cprofession" placeholder='profession' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                या संघटनेसोबत सक्रिय कार्यरत आहे

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <select style={{ width: "100%" }} value={form.corgan} onChange={handleChange} name='corgan' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                                <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                                <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                                <option value="ISKCON">ISKCON</option>
                                                <option value="Bajrang Dal">बजरंग दल</option>
                                                <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                                <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                                <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                                <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                                <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                                <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                                <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                                <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                                <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                                <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                                <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                                <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                                <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                                <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                                <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                                <option value="None">None</option>
                                            </select>
                                            <p className="py-2 text-sm text-gray-600">If Other : </p>
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="corganother" placeholder='Other' onChange={handleChange} />

                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                या संघटनेसोबत काम करण्यास इच्छुक आहे

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <select style={{ width: "100%" }} value={form.ciorgan} onChange={handleChange} name='ciorgan' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                                <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                                <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                                <option value="ISKCON">ISKCON</option>
                                                <option value="Bajrang Dal">बजरंग दल</option>
                                                <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                                <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                                <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                                <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                                <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                                <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                                <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                                <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                                <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                                <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                                <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                                <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                                <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                                <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                                <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                                <option value="None">None</option>
                                            </select>
                                            <p className="py-2 text-sm text-gray-600">If Other : </p>
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="ciotherorgan" placeholder='Other' onChange={handleChange} />

                                        </div>

                                    </div>


                                </form>

                            </div>
                        )}

                        {/* child 2 */}
                        <hr className="bg-gray-300 my-3" />
                        {/* <!--Title--> */}
                        <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Child 2</h2>
                        <p className="py-2 text-sm text-gray-600" style={{ color: "red" }}>Note : If Not applicable leave empty</p>
                        <div>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="child2" class="sr-only peer" onChange={handletogglechange} checked = {toggle.child2}/>
                                <div class="relative w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                            </label>
                        </div>

                        {/* <!--Card--> */}
                        {toggle.child2 && (
                            <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                                <form onSubmit={submitForm} >

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                                Full Name / पूर्ण नाव

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="c2fullname" placeholder='child-full-name' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-radio">
                                                Gender / लिंग

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <select value={form.c2gender} onChange={handleChange} name='c2gender' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="prefer not to say">Prefer Not to say</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                                Education / शिक्षण

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="c2education" placeholder='education' onChange={handleChange} />
                                            <p className="py-2 text-sm text-gray-600">Ex: BTech in AI and Data science</p>
                                        </div>
                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                Blood group / रक्त गट


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <select value={form.c2blood} onChange={handleChange} name='c2blood' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="No idea">No idea</option>
                                            </select>                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Date of Birth / जन्मतारीख

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">


                                            <DatePicker className='form-input block w-full focus:bg-white' selected={formState.c2dob}
                                                onChange={(date) => handleDateChange(date, 'c2dob')}
                                                placeholderText="Select Date of Birth"
                                                name="c2dob"
                                                dateFormat="dd-MM-yyyy"
                                                showYearDropdown
                                                scrollableYearDropdown
                                                yearDropdownItemNumber={100}
                                                maxDate={new Date()}
                                                minDate={new Date('1900-01-01')} />
                                        </div>
                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-radio">
                                                लग्नासाठी स्थळ बघणे ?

                                            </label>
                                        </div>

                                        <div className="md:w-2/3">
                                            <select value={form.c2marry} onChange={handleChange} name='c2marry' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="male">Yes</option>
                                                <option value="female">No</option>

                                            </select>
                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Mobile Number / मोबाईल नंबर


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="tel" name="c2mobile" placeholder='mobile' onChange={(e) => handleMobchange(e, 'c2mobile')} />
                                            {moberrors.c2mobile && <div style={{ color: 'red' }}>{moberrors.c2mobile}</div>}

                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Profession / व्यवसाय


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="c2profession" placeholder='profession' onChange={handleChange} />
                                        </div>
                                    </div>


                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                या संघटनेसोबत सक्रिय कार्यरत आहे

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <select style={{ width: "100%" }} value={form.c2organ} onChange={handleChange} name='c2organ' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                                <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                                <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                                <option value="ISKCON">ISKCON</option>
                                                <option value="Bajrang Dal">बजरंग दल</option>
                                                <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                                <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                                <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                                <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                                <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                                <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                                <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                                <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                                <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                                <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                                <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                                <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                                <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                                <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                                <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                                <option value="None">None</option>
                                            </select>
                                            <p className="py-2 text-sm text-gray-600">If Other : </p>
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="c2organother" placeholder='Other' onChange={handleChange} />

                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                या संघटनेसोबत काम करण्यास इच्छुक आहे

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <select style={{ width: "100%" }} value={form.c2iorgan} onChange={handleChange} name='c2iorgan' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                                <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                                <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                                <option value="ISKCON">ISKCON</option>
                                                <option value="Bajrang Dal">बजरंग दल</option>
                                                <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                                <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                                <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                                <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                                <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                                <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                                <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                                <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                                <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                                <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                                <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                                <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                                <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                                <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                                <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                                <option value="None">None</option>
                                            </select>
                                            <p className="py-2 text-sm text-gray-600">If Other : </p>
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="c2iotherorgan" placeholder='Other' onChange={handleChange} />

                                        </div>

                                    </div>
                                </form>

                            </div>
                        )}

                        {/* child 2 */}
                        <hr className="bg-gray-300 my-3" />
                        {/* <!--Title--> */}
                        <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Child 3</h2>
                        <p className="py-2 text-sm text-gray-600" style={{ color: "red" }}>Note : If Not applicable leave empty</p>
                        <div>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="child3" class="sr-only peer" onChange={handletogglechange} checked = {toggle.child3}/>
                                <div class="relative w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                            </label>
                        </div>
                        {/* <!--Card--> */}
                        {toggle.child3 && (
                            <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                                <form onSubmit={submitForm} >

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                                Full Name / पूर्ण नाव

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="c3fullname" placeholder='child-full-name' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-radio">
                                                Gender / लिंग

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <select value={form.c3gender} onChange={handleChange} name='c3gender' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="prefer not to say">Prefer Not to say</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                                Education / शिक्षण

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="c3education" placeholder='education' onChange={handleChange} />
                                            <p className="py-2 text-sm text-gray-600">Ex: BTech in AI and Data science</p>
                                        </div>
                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                Blood group / रक्त गट


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <select value={form.c3blood} onChange={handleChange} name='c3blood' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="No idea">No idea</option>
                                            </select>                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Date of Birth / जन्मतारीख

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">


                                            <DatePicker className='form-input block w-full focus:bg-white' selected={formState.c3dob}
                                                onChange={(date) => handleDateChange(date, 'c3dob')}
                                                placeholderText="Select Date of Birth"
                                                name="c3dob"
                                                dateFormat="dd-MM-yyyy"
                                                showYearDropdown
                                                scrollableYearDropdown
                                                yearDropdownItemNumber={100}
                                                maxDate={new Date()}
                                                minDate={new Date('1900-01-01')} />
                                        </div>
                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-radio">
                                                लग्नासाठी स्थळ बघणे ?

                                            </label>
                                        </div>

                                        <div className="md:w-2/3">
                                            <select value={form.c3marry} onChange={handleChange} name='c3marry' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="male">Yes</option>
                                                <option value="female">No</option>

                                            </select>
                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Mobile Number / मोबाईल नंबर


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="tel" name="c3mobile" placeholder='mobile' onChange={(e) => handleMobchange(e, 'c3mobile')} />
                                            {moberrors.c3mobile && <div style={{ color: 'red' }}>{moberrors.c3mobile}</div>}

                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Profession / व्यवसाय


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="c3profession" placeholder='profession' onChange={handleChange} />
                                        </div>
                                    </div>


                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                या संघटनेसोबत सक्रिय कार्यरत आहे

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <select style={{ width: "100%" }} value={form.c3organ} onChange={handleChange} name='c3organ' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                                <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                                <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                                <option value="ISKCON">ISKCON</option>
                                                <option value="Bajrang Dal">बजरंग दल</option>
                                                <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                                <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                                <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                                <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                                <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                                <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                                <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                                <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                                <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                                <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                                <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                                <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                                <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                                <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                                <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                                <option value="None">None</option>
                                            </select>
                                            <p className="py-2 text-sm text-gray-600">If Other : </p>
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="c3organother" placeholder='Other' onChange={handleChange} />

                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                या संघटनेसोबत काम करण्यास इच्छुक आहे

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <select style={{ width: "100%" }} value={form.c3iorgan} onChange={handleChange} name='c3iorgan' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                                <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                                <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                                <option value="ISKCON">ISKCON</option>
                                                <option value="Bajrang Dal">बजरंग दल</option>
                                                <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                                <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                                <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                                <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                                <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                                <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                                <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                                <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                                <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                                <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                                <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                                <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                                <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                                <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                                <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                                <option value="None">None</option>
                                            </select>
                                            <p className="py-2 text-sm text-gray-600">If Other : </p>
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="c3iotherorgan" placeholder='Other' onChange={handleChange} />

                                        </div>

                                    </div>
                                </form>

                            </div>
                        )}
                    </div>

                </div>




                <div className='container justify-center w-full flex flex-wrap mx-auto px-2 pt-4 '>

                    <div className="w-full lg:w-4/5 p-4 lg:px-8">

                        {/* <!--Title--> */}
                        <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
                            Parent details
                        </h1>


                        {/* <!--/Card--> */}

                        {/* <!--divider--> */}
                        <hr className="bg-gray-300 my-3" />
                        {/* <!--Title--> */}
                        <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Father Details</h2>
                        <p className="py-2 text-sm text-gray-600" style={{ color: "red" }}>Note : If Not applicable leave empty</p>

                        <div>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" name="father" class="sr-only peer" onChange={handletogglechange} checked = {toggle.father} />
                                <div class="relative w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                            </label>
                        </div>

                        {/* <!--Card--> */}
                        {toggle.father && (
                            <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                                <form onSubmit={submitForm} >


                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-radio">
                                                Father Name / वडिलांचे नाव

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="fathername" placeholder='father-name' onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                Blood group / रक्त गट


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <select value={form.fatherblood} onChange={handleChange} name='fatherblood' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="No idea">No idea</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Date of Birth / जन्मतारीख

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <DatePicker className='form-input block w-full focus:bg-white' selected={formState.fatherdob}
                                                onChange={(date) => handleDateChange(date, 'fatherdob')}
                                                placeholderText="Select Date of Birth"
                                                name="fatherdob"
                                                dateFormat="dd-MM-yyyy"
                                                showYearDropdown
                                                scrollableYearDropdown
                                                yearDropdownItemNumber={100}
                                                maxDate={new Date()}
                                                minDate={new Date('1900-01-01')}
                                            />
                                        </div>
                                    </div>


                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Profession / व्यवसाय

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="fatherprofession" placeholder='work' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Mobile Number / मोबाईल नंबर


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="tel" name="fathermobile" placeholder='mobile' onChange={(e) => handleMobchange(e, 'fathermobile')} />
                                            {moberrors.fathermobile && <div style={{ color: 'red' }}>{moberrors.fathermobile}</div>}

                                        </div>
                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                या संघटनेसोबत सक्रिय कार्यरत आहे

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <select style={{ width: "100%" }} value={form.forgan} onChange={handleChange} name='forgan' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                                <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                                <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                                <option value="ISKCON">ISKCON</option>
                                                <option value="Bajrang Dal">बजरंग दल</option>
                                                <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                                <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                                <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                                <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                                <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                                <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                                <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                                <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                                <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                                <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                                <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                                <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                                <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                                <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                                <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                                <option value="None">None</option>
                                            </select>
                                            <p className="py-2 text-sm text-gray-600">If Other : </p>
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="forganother" placeholder='Other' onChange={handleChange} />

                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                या संघटनेसोबत काम करण्यास इच्छुक आहे

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <select style={{ width: "100%" }} value={form.fiorgan} onChange={handleChange} name='fiorgan' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                                <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                                <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                                <option value="ISKCON">ISKCON</option>
                                                <option value="Bajrang Dal">बजरंग दल</option>
                                                <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                                <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                                <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                                <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                                <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                                <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                                <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                                <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                                <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                                <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                                <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                                <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                                <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                                <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                                <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                                <option value="None">None</option>
                                            </select>
                                            <p className="py-2 text-sm text-gray-600">If Other : </p>
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="fiotherorgan" placeholder='Other' onChange={handleChange} />

                                        </div>

                                    </div>



                                </form>

                            </div>
                        )}

                        {/* child 2 */}
                        <hr className="bg-gray-300 my-3" />
                        {/* <!--Title--> */}
                        <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Mother Details</h2>
                        <p className="py-2 text-sm text-gray-600" style={{ color: "red" }}>Note : If Not applicable leave empty</p>

                        <div>
                            <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" name="mother" class="sr-only peer" onChange={handletogglechange} checked = {toggle.mother} />
                            <div class="relative w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                            </label>
                        </div>

                        {/* <!--Card--> */}
                        {toggle.mother && (
                            <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                                <form onSubmit={submitForm} >

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                                Mother Name / आईचे नाव

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="mothername" placeholder='full-name' onChange={handleChange} />
                                        </div>
                                    </div>




                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                Blood group / रक्त गट

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <select value={form.motherblood} onChange={handleChange} name='motherblood' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                                <option value="No idea">No idea</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Date of Birth / जन्मतारीख

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <DatePicker className='form-input block w-full focus:bg-white' selected={formState.motherdob}
                                                onChange={(date) => handleDateChange(date, 'motherdob')}
                                                placeholderText="Select Date of Birth"
                                                name="motherdob"
                                                dateFormat="dd-MM-yyyy"
                                                showYearDropdown
                                                scrollableYearDropdown
                                                yearDropdownItemNumber={100}
                                                maxDate={new Date()}
                                                minDate={new Date('1900-01-01')}
                                            />
                                        </div>
                                    </div>


                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Profession / व्यवसाय


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="motherprofession" placeholder='work' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                Mobile Number / मोबाईल नंबर


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="tel" name="mothermobile" placeholder='mobile' onChange={(e) => handleMobchange(e, 'mothermobile')} />
                                            {moberrors.mothermobile && <div style={{ color: 'red' }}>{moberrors.mothermobile}</div>}

                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                या संघटनेसोबत सक्रिय कार्यरत आहे

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <select style={{ width: "100%" }} value={form.morgan} onChange={handleChange} name='morgan' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                                <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                                <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                                <option value="ISKCON">ISKCON</option>
                                                <option value="Bajrang Dal">बजरंग दल</option>
                                                <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                                <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                                <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                                <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                                <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                                <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                                <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                                <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                                <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                                <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                                <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                                <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                                <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                                <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                                <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                                <option value="None">None</option>
                                            </select>
                                            <p className="py-2 text-sm text-gray-600">If Other : </p>
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="morganother" placeholder='Other' onChange={handleChange} />

                                        </div>

                                    </div>

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-select">
                                                या संघटनेसोबत काम करण्यास इच्छुक आहे

                                            </label>
                                        </div>
                                        <div className="md:w-2/3">

                                            <select style={{ width: "100%" }} value={form.miorgan} onChange={handleChange} name='miorgan' placeholder='Select..'>
                                                <option value="Select">Select..</option>
                                                <option value="RSS (Rashtriya Swayamsevak Sangh)">RSS (राष्ट्रीय स्वयंसेवक संघ)</option>
                                                <option value="VHP (Vishva Hindu Parishad)">VHP (विश्व हिंदू परिषद)</option>
                                                <option value="Hindu Mahasabha">हिंदू महासभा</option>
                                                <option value="ISKCON">ISKCON</option>
                                                <option value="Bajrang Dal">बजरंग दल</option>
                                                <option value="Ramakrishna Mission">रामकृष्ण मिशन</option>
                                                <option value="Arya Samaj">Arya Samaj(आर्य समाज)</option>
                                                <option value="Akhil Bhartiya Akhara Parishad">अखिल भारतीय आखाडा परिषद</option>
                                                <option value="Baal Sanskar kendra Mandir">बाल संस्कार केंद्र मंदिरातून.</option>
                                                <option value="Mandir Aarti Sankya Vadhavne">मंदिराचे दररोजच्या आरतीचे भाविक संख्या वाढविणे.</option>
                                                <option value="Mandir Sevak Sankhya vadhavne">मंदिराच्या सेवक ची संख्या वाढविणे.</option>
                                                <option value="Mandir Funding Collection"> मंदिराच्या फंडिंग जमा करण्यावर काम करणे. </option>
                                                <option value="Mandir Hindu Book Library">मंदिरात हिंदू धर्मग्रंथाची पुस्तकालय.</option>
                                                <option value="Ek gaon ek gowshala">एक गाव एक गोशाळा.</option>
                                                <option value="Religion Convertion Virodh">धर्मांतरण विरोध</option>
                                                <option value="Love Jihad Virodh">लव जिहाद विरोध</option>
                                                <option value="Ghar ghar Durga">घर घर दुर्गा शस्त्र प्रशिक्षण.</option>
                                                <option value="Ghar ghar Bajrangi">घर घर बजरंगी शस्त्र प्रशिक्षण.</option>
                                                <option value="Shashtra Classes">शास्त्राचे पठण आणि क्लास.</option>
                                                <option value="Meditation Classes">मेडिटेशन ध्यान साधना वर प्रभुत्व.</option>


                                                <option value="None">None</option>
                                            </select>
                                            <p className="py-2 text-sm text-gray-600">If Other : </p>
                                            <input className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="miotherorgan" placeholder='Other' onChange={handleChange} />

                                        </div>

                                    </div>

                                </form>

                            </div>
                        )}

                        {/* other details */}
                        <hr className="bg-gray-300 my-3" />
                        {/* <!--Title--> */}
                        <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Other Details</h2>
                        <p className="py-2 text-sm text-gray-600" style={{ color: "red" }}>Note : If Not applicable leave empty</p>


                        {/* <!--Card--> */}
                        
                            <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                                <form onSubmit={submitForm} >

                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                विधवा व्यक्तीची माहिती
                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <p className="py-2 text-sm text-gray-600">Details : Name,Mobile number ,Blood group</p>
                                            <textarea className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="widow" placeholder='विधवा व्यक्तीची माहिती' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                अपंग व्यक्तींची माहिती


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <p className="py-2 text-sm text-gray-600">Details : Name,Mobile number ,Blood group</p>
                                            <textarea className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="disab" placeholder='अपंग व्यक्तींची माहिती' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:w-1/3">
                                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                                                इतर व्यक्तीची माहिती


                                            </label>
                                        </div>
                                        <div className="md:w-2/3">
                                            <p className="py-2 text-sm text-gray-600">Details : Name, Mobile number ,Blood group</p>
                                            <textarea className="form-input block w-full focus:bg-white" id="my-textfield" type="text" name="more" placeholder='इतर व्यक्तीची माहिती' onChange={handleChange} />
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

                </div>


                <script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js" async />
                <script type="text/javascript" src="src/js/formfunc.js" async />




            </main>
        }

    </>
    )
}
