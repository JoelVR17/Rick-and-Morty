import CurrentYear from "@/utils/CurrentYear";
import Link from "next/link";
import React, { ReactNode } from "react";
import { EffectTwo, EffectOne } from "./Effects/Effects";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-slate-900 mt-20 py-10  dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-around">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="flex flex-col gap-2 mb-10 w-full">
                <div className="flex flex-col mx-5 gap-5 mt-2 md:flex-row md:mx-0">
                  <Link
                    href={`https://dev-profile-joel.vercel.app/`}
                    className="font-bold border-b-2 border-slate-900 hover:border-[#114A4A] transition ease-in-out duration-500"
                  >
                    Portfolio
                  </Link>
                  <Link
                    href={`https://github.com/JoelVR17`}
                    className="font-bold border-b-2 border-slate-900 hover:border-[#114A4A] transition ease-in-out duration-500"
                  >
                    Github
                  </Link>

                  <Link
                    href={`https://t.me/joelvr20`}
                    className="font-bold border-b-2 border-slate-900 hover:border-[#114A4A] transition ease-in-out duration-500"
                  >
                    Telegram
                  </Link>
                  <Link
                    href={`https://x.com/joel20vargas`}
                    className="font-bold border-b-2 border-slate-900 hover:border-[#114A4A] transition ease-in-out duration-500"
                  >
                    Twitter
                  </Link>
                  <Link
                    href={`https://www.linkedin.com/in/joelvr/`}
                    className="font-bold border-b-2 border-slate-900 hover:border-[#114A4A] transition ease-in-out duration-500"
                  >
                    LinkdIn
                  </Link>
                </div>
                <p className="flex items-center text-sm font-medium text-dark dark:text-white mt-3 mx-5 md:mx-0">
                  <span className="mr-3 text-primary">
                    <svg
                      width="20"
                      height="20"
                      version="1.1"
                      id="_x32_"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path
                          className="st0"
                          fill="#FFFFFF"
                          d="M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345
		c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345
		C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203
		c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958
		c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064
		c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571
		c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637
		L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136
		C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435
		C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959
		l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959
		C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8
		V385.92z"
                        />
                      </g>
                    </svg>
                  </span>
                  <span>mjvarrod2003@gmail.com</span>
                </p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12 flex items-end">
              <div className="mb-10 w-full">
                <p className="text-end font-bold text-body-color dark:text-dark-6">
                  &copy; {CurrentYear()} - Joel Vargas
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

type LinkGroupProps = {
  children: ReactNode;
  header: ReactNode;
};
const LinkGroup = ({ children, header }: LinkGroupProps) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
          <ul className="space-y-3">{children}</ul>
        </div>
      </div>
    </>
  );
};

type NavLinkProps = {
  link: string;
  label: string;
};
const NavLink = ({ link, label }: NavLinkProps) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
