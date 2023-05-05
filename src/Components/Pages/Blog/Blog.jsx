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
              <button className='flex items-center text-xl font-semibold bg-emerald-600 py-2 px-4 rounded-md' onClick={downloadAsPdf}>Download PDF<ArrowDownTrayIcon className='h-4 w-4 ml-3'/></button>
            </div>
        
            <div className='items-center'>
                <div>
            <p className='text-center my-5 font-blog-qst-font-family font-extrabold text-2xl text-red-700'>Question & Answer</p>
            </div>
             
            </div>
            <div id='blog' >
        
    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='border p-3 md:p-5 rounded-lg bg-pink-100'>
            <p className='font-medium'>Differences between uncontrolled and controlled components?</p>
            <p className='mt-3'><span className=''>Answer:</span>Uncontrolled components are managed by the DOM, while controlled components are managed by React. In uncontrolled component while user interacts then its internal state updated directly. But controlled component controlled by calling function and using props.</p>
          </div>
          <div className='border p-3 md:p-5 rounded-lg bg-pink-100'>
            <p className='font-medium'>How to validate React props using PropTypes?</p>
            <p className='mt-3'><span className=''>Answer:</span>PropTypes is a package. Which usually validate react component's props. Developer can use it by installing via npm or yearn. If a component pass invalid type of props then PropTypes will throw and error and also console an alert.</p>
          </div>
          <div className='border p-3 md:p-5 rounded-lg bg-pink-100'>
            <p className='font-medium'>Differences between nodejs and express js.</p>
            <p className=''><span className=''>Answer:  </span> Node.js is a JavaScript runtime environment that enables developers to run JavaScript on the server-side, while   Express.js is a web application framework built on top of Node.js, providing
            additional features for building web applications.</p>
          </div>
          <div className='border p-3 md:p-5 rounded-lg bg-pink-100'>
            <p className='font-medium'>What is a custom hook, and why will you create a custom hook?</p>
            <p className=''><span className=''>Answer:</span>Custom hooks are reusable functions in React that allow developers to extract and share logic between components. Developers create custom hooks to reduce code duplication and
            improve code readability and maintainability.</p>
          </div>
        </div>
      </div>

    </div>
    );
};

export default Blog;