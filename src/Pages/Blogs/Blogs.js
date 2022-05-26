import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10 mx-20'>
            <div>
                <h1 className="text-3xl">1. How will you improve the performance of a React Application?</h1>
                <p>Ans: It's depends on our code. some time structured code help use to boots performance our react web sites. there are some tips. Keeping component state local where necessary, Memoizing React components to prevent unnecessary re-renders, Code-splitting in React using dynamic import. Lazy loading images in React</p>
            </div>
            <div className='my-5'>
                <h1 className="text-3xl">2. What are the different ways to manage a state in a React application?</h1>
                <p>Ans: There are four main types of state you need to properly manage state in our React Applications. Local State, Global State, Server State, URL State. Local state is data we manage in one or another component. Global state is data we manage across multiple components. Data that comes from an external server that must be integrated with our UI state. Data that exists on our URLs, including the pathname and query parameters.</p>
            </div>
            <div>
                <h1 className="text-3xl">3. How does prototypical inheritance work?</h1>
                <p>Ans: the Prototypical inheritace is a method by which an object can inherite the properties and methods of another object. when we read a property form object, and it's missing, javascript authomatically takes it from the prototype in programming this is called prototypical inheritance</p>
            </div>
            <div className='my-5'>
                <h1 className="text-3xl">4. Why you do not set the state directly in React.?</h1>
                <p>Ans: When i direactly set the state it does not change state immedialtely. instead it bad for any web application. when we direactly set state its nor best for react performance. when we use hook and data set in setSate its help us to change immediately when some changes in vertual dom in react.</p>
            </div>
            <div>
                <h1 className="text-3xl">5. What is a unit test? Why should write unit tests?</h1>
                <p>Ans: Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code.</p>
            </div>
        </div>
    );
};

export default Blogs;