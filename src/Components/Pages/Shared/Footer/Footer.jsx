import React from 'react';

const Footer = () => {
    return (
        <div className='mr-0 me-5 text-white'>
            <footer className="footer p-5 justify-around bg-black text-base-content">

  <div className='text-white font-bold'>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <p className="font-semibold text-base text-gray-500 dark:text-gray-300">
             © 2023  Chef's Universe
     </p>
    
  </div> 
  <div className='text-white font-bold'>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> 
  {/* <div className='text-white font-bold'>
    <span className="footer-title text-2xl">Newsletter</span> 
    <div className="form-control w-75">
      <label className="label">
        <span className="label-text text-white text-xl">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div> */}
  <div>
  <p className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 font-medium mt-4 w-[320px] md:w-[391px]">
              Send us Email
            </p>
            <form className="mt-4 flex items-center space-x-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                type="email"
                placeholder="Email"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </form>
            </div>
</footer>
        </div>
    );
};

export default Footer;