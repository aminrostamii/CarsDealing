import React from 'react';

const Footer = () => {
    return (
        <footer>
      <div className="bg-black py-4 text-gray-400">
        <div className="container px-4 mx-auto">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 my-4 w-full xl:w-1/5">
              <a href="/" className="block w-56 mb-10">
              <img src="https://resource.csnstatic.com/retail/globals/logo/v3/carsales.svg" className=" w-[80px] h-[60px] ml-10" alt="" />
              </a>
              <p className="text-justify">
              Looking to buy or sell a car? Look no further! Our platform offers a seamless experience for both buyers and sellers. Whether you're in the market for a new ride or looking to sell your current vehicle, we've got you covered.
              </p>
            </div>

            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Company</h2>
              </div>
              <ul className="leading-8">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms &amp; Conditions</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Blog</h2>
              </div>
              <ul className="leading-8">
                <li><a href="#" className="hover:text-blue-400">The Ultimate Guide to Buying a Used Car</a></li>
                <li><a href="#" className="hover:text-blue-400">How to Negotiate the Best Price for a New Car?</a></li>
                <li><a href="#" className="hover:text-blue-400">Top 10 Most Reliable Used Cars to Buy</a></li>
                <li><a href="#" className="hover:text-blue-400">Selling Your Car Privately vs. Trading It In: Pros and Cons</a></li>
                <li><a href="#" className="hover:text-blue-400">See More</a></li>
              </ul>
            </div>
            <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
              <div>
                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Us</h2>
              </div>
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.831-46.457 57.828 21.843-2.274 42.308-8.122 61.15-16.243-14.293 21.843-32.161 41.336-52.3 57.177z"></path>
                </svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M511.998 101.332c-18.84 8.339-39.082 13.957-60.256 16.491 21.686-13 38.342-33.585 46.214-58.115-20.34 12.04-42.776 20.78-66.69 25.573-19.153-20.463-46.42-33.29-76.626-33.29-57.83 0-104.934 47.104-104.934 104.934 0 8.247.975 16.243 2.599 23.982-69.065-3.299-130.197-36.68-171.046-87.546-7.152 12.234-11.233 26.491-11.233 41.572 0 28.731 14.547 54.13 36.746 68.993-13.525-.433-26.237-4.161-37.36-10.32v1.299c0 40.279 28.919 73.79 67.277 81.285-7.02 1.911-14.294 2.949-21.843 2.949-5.308 0-10.441-.519-15.47-1.495 10.442 32.685 40.696 56.504 76.671 57.829-28.262 22.68-63.674 36.685-102.984 36.685-6.924 0-13.772-.346-20.55-1.023 36.41 23.304 79.558 36.925 126.282 36.925 151.136 0 233.868-125.18 233.868-233.869 0-3.573-.087-7.136-.259-10.7 16.073-11.563 30.005-26.07 40.905-42.682z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-600 py-4 text-gray-100">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Copyright © 2024
            </div>
            <div className="px-4 w-full text-center sm:w-auto sm:text-left">
              Made with ❤️ by <a href='https://www.linkedin.com/in/rostami-amin/' className='underline'>Amin Rostami.</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;
