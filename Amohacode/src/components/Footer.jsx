import React from 'react';

const Footer = () => {
  return (
<footer style={{ backgroundColor: "#6334B9" }} className="text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top 3 Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Amoha Codes</h3>
            <p>Delhi Road</p>
            <p>Moradabad, 244001</p>
            <p>Phone: +91 9760564433</p>
            <p>Email: amohacodes@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/company/amoha-codes/posts/?feedView=all" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://x.com/" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M18.9 22.4L11.5 12.8L19.4 1.5H16.4L10.5 9.7L5.3 1.5H1.4L9.1 12.1L1.2 22.4H4.2L10.1 14.1L15.3 22.4H18.9ZM6.2 3.1L5 3.1L14.6 21.6H15.9L6.2 3.1Z"></path></svg>
              </a>
              <a href="https://www.instagram.com/amoha_codes_/" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Courses</a></li>
              <li><a href="#" className="hover:underline">Terms of service</a></li>
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Web Development</a></li>
              <li><a href="#" className="hover:underline">Data Structure and Algorithm</a></li>
              <li><a href="#" className="hover:underline">Competitive Programming</a></li>
              <li><a href="#" className="hover:underline">Programming Languages</a></li>
              <li><a href="#" className="hover:underline">Career Counseling</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom Line */}
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm">
          © Copyright <strong>Amoha Codes</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
