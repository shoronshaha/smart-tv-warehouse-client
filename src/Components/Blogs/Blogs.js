import React from 'react';

const Blogs = () => {
    return (

        <div>
            <h1 className='text-5xl text-center text-orange-500 font-bold'>BLOGS</h1>
            <div className='justify-items-center mt-10 grid sm:grid-cols-1 md:grid-cols-2'>

                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>What other services does firebase provide other than authentication?</h1>
                    <p className='text-center text-[16px]'>Authentication is not the only service that is provided by firebase. It is also a good place host a web, gaming or mobile applications. It is very useful when we need google analytics and predictions</p>
                </div>
                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <p className='text-center text-[16px]' >Firebase manages all the data on real-time in the database. So anyone can use firebase who wants to develop mobile apps such as live streaming, chat messaging, etc. Besides it provides the facility of hosting.</p>
                    <p className='text-center text-[16px] py-2' >There are several competitors and alternatives to firebase realtime database. Some of them are: Oracle Database, DataStax Enterprise, Redis Enterprise Cloud, Cloudera Enterprise Data Hub, Db2, MarkLogic, Couchbase Server, Neo4j.</p>
                </div>
                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>Difference between authorization and authentication?</h1>
                    <p className='text-center text-[16px]s'>Authentication verifies who the user is.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.Authentication is the first step of a good identity and access management process.</p>
                    <p className='text-center text-[16px] py-2'>Authorization determines what resources a user can access.Authorization works through settings that are implemented and maintained by the organization.Authorization always takes place after authentication.Authorization isn’t visible to or changeable by the user.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;