import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-300 text-base-content p-4 bg-slate-100 mt-40">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - Powered by My Afrifolio</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
