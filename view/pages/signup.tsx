import { Field, Form, Formik } from 'formik';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react'
import Return from '../Components/Return';

const signup:NextPage = () => {
    interface UserInfo {
        firstName: string;
        email: string;
        password: string;
        confirmPassword: string;
      }
    const user: UserInfo = { firstName: '',email:'',password:'' ,confirmPassword:'' };
    return (
        <div className=" flex flex-col items-center justify-start w-screen h-screen bg-gray-900">
          <Return/>
             <Formik
         initialValues={user}
         onSubmit={(values, actions) => {
           console.log({ values, actions });
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }}
       >
         <Form className="flex flex-col items-center justify-evenly  mt-40 text-white">
           <h1 className='mb-16' style={{"fontSize":"48px","fontWeight":"bold"}}>Sign up</h1>

            <div className="flex flex-col items-center mb-10">
           <label className="hidden" htmlFor="FullName">Full Name</label>
           <Field type="text" id="FullName" name="FullName" placeholder="FullName" required className="bg-transparent py-2 border-b-2 placeholder-gray-300 focus:outline-none focus:bg-transparent"/>
           </div>
           <div className="flex flex-col items-center mb-10">
           <label className="hidden" htmlFor="email">Email Address</label>
           <Field type="text" id="email" name="email" placeholder="email address" required className="bg-transparent py-2 border-b-2 placeholder-gray-300 focus:outline-none focus:bg-transparent"/>
           </div>
           <div className="flex flex-col items-center mb-10">
           <label className="hidden" htmlFor="password">Password</label>
           <Field type="password" id="password" name="password" placeholder="password" required className="bg-transparent py-2 border-b-2 placeholder-white focus:outline-none focus:bg-transparent"/>
           </div>   
           <div className="flex flex-col items-center mb-10">
           <label className="hidden" htmlFor="confirmPassword">confirm Password</label>
           <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="confirm Password" required className="bg-transparent py-2 border-b-2 placeholder-white focus:outline-none focus:bg-transparent"/>
           </div>           
           <button className='bg-black rounded-full py-2 px-8 mb-4' type="submit">Sign up</button>
           <Link href="/login">already have an account ? </Link>
           <div className="flex flex-col items-center mt-4">
               <span>Or Login with :</span>
               <div className='w-96 h-20 flex justify-between mt-16'>
               <span className="h-20 w-20 bg-white rounded-full text-black" ><i className="fa fa-google"></i></span>
               <span className="h-20 w-20 bg-white rounded-full text-black" ><i className="fab fa-facebook-f"></i></span>
               <span className="h-20 w-20 bg-white rounded-full text-black" ><i className="fab fa-github"></i></span>
               <span className="h-20 w-20 bg-white rounded-full text-black" ><i className="fab fa-linkedin-in"></i></span>
               </div>
           </div>
         </Form>
       </Formik>
        </div>
    )
}

export default signup
