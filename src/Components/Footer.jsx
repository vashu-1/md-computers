import React from 'react';
import { TbTruckDelivery, TbShieldCheckered } from "react-icons/tb";
import { RiCustomerServiceLine, RiSecurePaymentLine } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; 

const Footer = () => {
  
  const FooterLink = ({ href = "#", children }) => (
    <a href={href} className="text-gray-400 hover:text-gray-100 transition-colors duration-300 text-sm">
      {children}
    </a>
  );

  
  const SectionTitle = ({ children }) => (
    <h5 className="text-base font-medium text-gray-100 mb-5 uppercase tracking-wider">{children}</h5> 
  );

  return (
    
    <footer className='bg-slate-900 text-gray-400'>
        {/* Features Section */}
        <div className='container mx-auto px-4 py-12 border-b border-gray-700/50'> 
            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left'>
                {/* Feature Item 1 */}
                <li className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-4'> 
                    <TbTruckDelivery className='text-yellow-500 text-3xl mb-2 md:mb-0 flex-shrink-0' />
                    <div>
                        <p className='font-medium text-gray-200'>Free Delivery</p>
                        <p className='text-sm text-gray-500'>Across India</p>
                    </div>
                </li>
                {/* Feature Item 2 */}
                <li className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-4'>
                    <RiCustomerServiceLine className='text-yellow-500 text-3xl mb-2 md:mb-0 flex-shrink-0' />
                    <div>
                        <p className='font-medium text-gray-200'>Customer Support</p>
                        <p className='text-sm text-gray-500'>Dedicated Help Line</p>
                    </div>
                </li>
                {/* Feature Item 3 */}
                <li className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-4'>
                    <RiSecurePaymentLine className='text-yellow-500 text-3xl mb-2 md:mb-0 flex-shrink-0' />
                    <div>
                        <p className='font-medium text-gray-200'>Secure Payments</p>
                        <p className='text-sm text-gray-500'>100% Secure Transaction</p>
                    </div>
                </li>
                {/* Feature Item 4 */}
                <li className='flex flex-col md:flex-row items-center justify-center md:justify-start gap-4'>
                    <TbShieldCheckered className='text-yellow-500 text-3xl mb-2 md:mb-0 flex-shrink-0' />
                    <div>
                        <p className='font-medium text-gray-200'>Warranty Assurance</p>
                        <p className='text-sm text-gray-500'>Guaranteed Quality</p>
                    </div>
                </li>
            </ul>
        </div>

        {/* Main Footer Content - Increased padding */}
        <div className='container mx-auto px-4 py-16'> {/* Increased py */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'> {/* Increased gap */}
                {/* Column 1: About City Computers */}
                <div>
                    {/* Logo Placeholder - Replace with your actual logo */}
                    <div className="mb-4"> {/* Add margin below the logo */}
                        {/* Example using text: */}
                        {/* <h3 className="text-2xl font-bold text-white">City Computers</h3> */}

                        {/* Example using an img tag (replace src and alt): */}
                        {/* <img src="/path/to/your/logo.svg" alt="City Computers Logo" className="h-8 w-auto" /> */}

                        {/* Placeholder text: */}
                        <span className="text-xl font-semibold text-gray-100">Your Logo Here</span>
                    </div>
                    {/* Removed SectionTitle as logo often replaces it */}
                    <p className='text-sm mb-6'> {/* Increased mb */}
                        Your one-stop shop for the latest computer hardware, components, and accessories at the best prices.
                    </p>
                     <p className='text-sm text-gray-500'>
                        123 Tech Street, <br />
                        Innovation City, IN 46204
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <SectionTitle>Quick Links</SectionTitle>
                    <ul className='space-y-3'> {/* Increased spacing */}
                        <li><FooterLink href="/shop">Shop All</FooterLink></li>
                        <li><FooterLink href="/categories/processors">Processors</FooterLink></li>
                        <li><FooterLink href="/categories/graphic-cards">Graphic Cards</FooterLink></li>
                        <li><FooterLink href="/build-pc">Build Your PC</FooterLink></li>
                        <li><FooterLink href="/offers">Special Offers</FooterLink></li>
                    </ul>
                </div>

                {/* Column 3: Customer Service */}
                <div>
                    <SectionTitle>Customer Service</SectionTitle>
                    <ul className='space-y-3'> {/* Increased spacing */}
                        <li><FooterLink href="/contact">Contact Us</FooterLink></li>
                        <li><FooterLink href="/faq">FAQ</FooterLink></li>
                        <li><FooterLink href="/shipping">Shipping Info</FooterLink></li>
                        <li><FooterLink href="/returns">Return Policy</FooterLink></li>
                        <li><FooterLink href="/track-order">Track Order</FooterLink></li>
                    </ul>
                </div>

                {/* Column 4: Contact & Social */}
                <div>
                    <SectionTitle>Connect</SectionTitle>
                    <p className='text-sm mb-4'>
                        <a href="mailto:support@citycomputers.in" className="hover:text-gray-100">support@citycomputers.in</a> <br />
                        <a href="tel:+911234567890" className="hover:text-gray-100">+91 12345 67890</a>
                    </p>
                    <div className='flex space-x-4 mb-6'> {/* Added mb */}
                        {/* Subtle hover effect for social icons */}
                        <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors duration-300"><FaFacebookF size={18} /></a>
                        <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors duration-300"><FaTwitter size={18} /></a>
                        <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors duration-300"><FaInstagram size={18} /></a>
                        <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors duration-300"><FaYoutube size={18} /></a>
                    </div>
                    <div className="mt-6">
                        <p className="text-gray-200 mb-3 text-sm font-medium">Stay Updated</p> {/* Adjusted text */}
                        {/* Refined input and button */}
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-slate-800 border border-slate-700 text-gray-300 px-4 py-2 rounded-md w-full text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 placeholder-gray-500"
                        />
                        <button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-gray-900 font-semibold px-4 py-2 rounded-md mt-2 w-full text-sm transition-colors duration-300"> {/* Changed background and text color */}
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Copyright Section - Integrated background, adjusted text/spacing */}
        <div className='bg-slate-900 border-t border-gray-700/50 py-6'> {/* Matched background, added top border, adjusted padding */}
            <div className='container mx-auto px-4 text-center text-xs text-gray-500 sm:flex sm:justify-between sm:items-center'>
                <p>&copy; {new Date().getFullYear()} City Computers. All Rights Reserved.</p>
                {/* Replaced divider with spacing */}
                <div className='mt-3 sm:mt-0 space-x-4'>
                    <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                    <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
