import React from 'react';
import { ArrowDownTrayIcon} from '@heroicons/react/24/solid';
import html2pdf from 'html2pdf.js';


const Blog = () => {

    const downloadAsPdf = () =>{
        const element = document.getElementById('blog');
        const options = {
          margin: 0.5,
          filename: 'blog.pdf',
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };
        html2pdf().set(options).from(element).save();
      };
    return (
        <div className='py-10 container '>
            <div>
              <button className='flex items-center text-xl font-semibold bg-amber-500 py-2 px-4 rounded-md' onClick={downloadAsPdf}>Download PDF<ArrowDownTrayIcon className='h-4 w-4 ml-3'/></button>
            </div>
        
            <div className='items-center'>
                <div>
            <p className='text-center my-5 font-blog-qst-font-family font-extrabold text-2xl text-red-700'>Question & Answer</p>
            </div>
             
            </div>
            <div id='blog' >
        
        <div>
            <p>
                <span className="font-blog-q st-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 1</span>
                <br /> 
                <span className='qus font-blog-qus-font-family font-extrabold text-xl'>Tell us the differences between uncontrolled and controlled components? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer:</span>
                <br />
                 Uncontrolled components are managed by the DOM, while
                 controlled components are managed by React. Controlled components
                 provide more control and can handle input validation and state
                 changes.
                 </p>
            <p>The choice between the two depends on our specific needs and requirements.</p>
        </div>
        <br />
        
        <div>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 2 </span>
                <br /> 
                <span className='qus font-blog-qus-font-family font-extrabold text-xl'>How to validate React props using PropTypes? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer:</span>
                <br />
                React PropTypes is a tool that help us check if the data (props) we are passing into a component is the correct type and format. It's like a spell-checker that prevents us from making mistakes. By using PropTypes, we can catch errors and bugs early in the development process, which can save us time and effort in the long run.
            </p>
        </div>
        <br />
    
        <div>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 3</span>
                <br /> 
                <span className='qus font-blog-qus-font-family font-extrabold text-xl'>Tell us the difference between nodejs and express js? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer:</span>
                <br />
                Node.js is a JavaScript runtime environment that enables
              developers to run JavaScript on the server-side, while Express.js
              is a web application framework built on top of Node.js, providing
              additional features for building web applications.
            </p>
                
        </div>
        <br />

        <div>
            <p>
                <span className="font-blog-qst-font-family mb-5 text-blog-qst-color text-2xl font-extrabold ">Question : 4</span>
                <br /> 
                <span className='font-blog-qus-font-family font-extrabold text-xl'>What is a custom hook, and why will you create a custom hook? </span>
            </p>
            <p>
                <span className="text-blog-ans-color font-extrabold text-xl font-blog-qst-font-family mb-5">Answer: </span>
                <br />
                A custom hook is a function in React that allows us to reuse stateful logic between components, making it easier to create reusable and composable code. It's a way to extract and reuse common code that manages stateful logic and side effects, by leveraging existing React hooks.Its very important that we use in time of need. 

                
            </p>
        </div>
            </div>

    </div>
    );
};

export default Blog;

