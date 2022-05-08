import React from 'react';

const Blogs = () => {
    return (

        <div>
            <h1 className='text-5xl text-center mt-3 text-orange-500 font-bold'>BLOGS</h1>
            <div className='justify-items-center mt-10 grid sm:grid-cols-1 md:grid-cols-2'>

                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>Difference between javascript and nodejs?</h1>
                    <p className='text-center text-[16px]'> <span>NodeJS: </span>
                        NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                    <p className='text-center text-[16px] mt-3'>
                        <span>JavaScript: </span>
                        Javascript is a Scripting language.It is mostly abbreviated as JS.It can be said that Javascript is the updated version of the ECMA script.Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                    </p>
                </div>
                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>What is the purpose of jwt and how does it work?</h1>
                    <p className='text-center text-[16px]' >JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.Each JWT contains encoded JSON objects, including a set of claims.JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                    <p className='text-center text-[16px] py-2' >JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                </div>
                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>Differences between sql and nosql databases?</h1>
                    <p className='text-center text-[16px]' >SQL or the Structured Query Language is the most common and popular programming language for the relational database management system. It is a language designed to extract, store, insert, delete, update and manage data for structured data and strategic analysis.

                        SQL is widely used by top tech companies like Facebook, Whatsapp, etc for data processing solutions. It is used for different types of RDBMS including Oracle, MySQL, SQLServer, etc. </p>
                    <p className='text-center text-[16px] py-2' >NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.

                        It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.

                        Companies like Twitter and Google, with a tremendous amount of data set like the user data of the social platforms, prefer to use NoSQL over any other RDBMS. </p>
                </div>
                <div className='rounded-lg shadow-lg bg-gray-100 max-w-sm p-5 h-h-[550px] w-[350px] hover:bg-blue-50 mx-2 mb-5'>
                    <h1 className='text-center font-bold text-[20px] p-3 mt-[10]'>When should you use nodejs and when should you use mongodb?</h1>
                    <p className='text-center text-[16px]s'>
                        Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                        <br />
                        <br />
                        MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.
                        MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...</p>

                </div>
            </div>

        </div>
    );
};

export default Blogs;