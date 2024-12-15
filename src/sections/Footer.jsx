import React from 'react';
import { socialIcons } from '../constants';

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between item-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-5 ">
        {socialIcons.map(({ id, name, imgUrl, href }) => (
          <a
            href={href}
            key={id}
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={imgUrl} alt={name} className="w-1/2 h-1/2" />
          </a>
        ))}
        {/* <div className="social-icon">
          <img
            src="/assets/twitter.svg"
            alt="twitter"
            className="w-1/2 h-1/2"
          />
        </div>
        <div className="social-icon">
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </div>
        <div className="social-icon">
          <img
            src="/assets/linkedin.svg"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </div> */}
      </div>

      <p className="text-white-500">
        &copy; 2024 Christopher. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
