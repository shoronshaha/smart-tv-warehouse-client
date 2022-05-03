import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;


    if (loading) {
        return <Loading></Loading>
    }


    if (error) {
        errorElement = <p className='text-red-600'>Error: {error?.message} </p>

    }


    if (user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='flex justify-center my-4 '>
                <div style={{ height: "2px" }} className='bg-blue-700 w-[100px] mt-3'></div>
                <p className='px-2'>or</p>
                <div style={{ height: "2px" }} className='bg-blue-700 w-[100px] mt-3'></div>
            </div>
            {errorElement}
            <div>
                <button value="button" onClick={() => signInWithGoogle()} className="px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-700 my-4 w-full" > Google Sign In</button>
                <button value="button" className="px-4 py-2 rounded-full bg-indigo-400 text-white hover:bg-indigo-700 my-4 w-full" > Github Sign In</button>
                <button value="button" className="px-4 py-2 rounded-full bg-blue-400 text-white hover:bg-blue-700 my-4 w-full "> Facebook Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;