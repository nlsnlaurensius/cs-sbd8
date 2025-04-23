import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Gambar from "./assets/Gambar.svg";
import Navbar from "./Components/Navbar";
import LogoMeta from "./assets/LogoMeta.svg";
import status from "./assets/status.png";
import post from "./assets/post.png";
import group from "./assets/group.png";

function App() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Connect with friends and the world around you on Facebook.", "Share photos and videos, send messages and get updates.", "Find events and local businesses near you."],
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
    };

    if (typedRef.current) {
      const typed = new Typed(typedRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className={`w-full text-gray-900 bg-gray-100 dark:text-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black overflow-hidden relative`}>
      <Navbar />

      <section id="home" className="min-h-screen container mx-auto px-4 py-16 relative z-10 flex flex-col md:flex-row items-center justify-center gap-x-10">
        <div className="w-full flex justify-center mb-8 md:mb-0 md:order-last relative md:flex-1">
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="absolute w-24 h-24 md:w-48 md:h-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 top-4 left-4 md:top-10 md:left-10"></div>
            <div className="absolute w-24 h-24 md:w-48 md:h-48 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 bottom-4 right-4 md:bottom-10 md:right-10"></div>
            <div className="absolute w-24 h-24 md:w-48 md:h-48 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-60 bottom-8 left-8 md:bottom-20 md:left-20"></div>
          </div>
          <img src={Gambar} alt="Gambar Ilustrasi Facebook" className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg relative z-10" />
        </div>

        <div className="w-full flex flex-col items-center md:items-start justify-center text-center md:text-left md:flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
            Connect with friends <br className="hidden md:block" /> and the world around you.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 italic min-h-[2.5em]">
            <span ref={typedRef}></span>
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start w-full sm:w-auto gap-4">
            <a href="#signup-section" className="px-10 py-3 bg-gradient-to-r from-blue-900 via-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Get Started Now
            </a>
          </div>
          <div className="flex flex-row items-center font-medium mt-8 md:mt-0 md:absolute md:bottom-4 md:right-4">
            <p className="opacity-50">Supported by</p>
            <img src={LogoMeta} alt="Logo Meta" className=" w-16 h-16 md:w-24 md:h-24" />
          </div>
        </div>
      </section>

      <section id="whats-happening" className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">See What's Happening Right Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-gray-300 italic">Beautiful moments, Today!</p>
              <img src={post} alt="Gambar" className="w-full h-auto object-cover rounded mt-4" />
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-gray-300">Join a Group That Shares Your Hobby!</p>
              <img src={group} alt="Grup" className="w-full h-auto object-cover rounded mt-4" />
            </div>
            <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-gray-300 italic">Status Update...</p>
              <img src={status} alt="Status" className="w-full h-auto object-cover rounded mt-4" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Explore Facebook’s Top Features</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
              <p className="text-gray-700 dark:text-gray-300">Reconnect with friends and family. Join groups based on your interests.</p>
              <div className="h-16 w-16 bg-blue-500 rounded-full mt-4"></div>
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Share</h3>
              <p className="text-gray-700 dark:text-gray-300">Share your moments through photos, videos, and status updates. Post your daily Stories.</p>
              <div className="h-16 w-16 bg-green-500 rounded-full mt-4"></div>
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Discover</h3>
              <p className="text-gray-700 dark:text-gray-300">Explore local events, discover items on Marketplace, and enjoy engaging videos.</p>
              <div className="h-16 w-16 bg-red-500 rounded-full mt-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-800 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Join the Global Community</h2>
          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              1.5 M+ <br />
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Active Users</span>
            </div>
            <div className="text-4xl font-bold text-green-600 dark:text-green-400">
              500 K+ <br />
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Groups & Communities</span>
            </div>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
              100 M+ <br />
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">Moments Shared Daily</span>
            </div>
          </div>
          <p className="mt-12 text-lg text-gray-700 dark:text-gray-300 italic max-w-2xl mx-auto">"Facebook keeps me connected with the people I care about no matter where they are!"</p>
        </div>
      </section>

      <section id="signup-section" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">Create a New Account</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <input type="text" placeholder="First Name" className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Last Name" className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Phone Number or Email" className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <input type="password" placeholder="Password" className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date of Birth</label>
                <input type="date" className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Gender</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" value="wanita" className="form-radio text-blue-600 dark:text-blue-400" />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Female</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" value="pria" className="form-radio text-blue-600 dark:text-blue-400" />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" value="lainnya" className="form-radio text-blue-600 dark:text-blue-400" />
                    <span className="ml-2 text-gray-700 dark:text-gray-300">Other</span>
                  </label>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">By clicking Sign Up, you agree to our Terms, Data Policy, and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
              <button type="submit" className="w-full py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg transition duration-300 hover:bg-green-600">
                Register
              </button>
            </form>
            <div className="text-center mt-6">
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                Already have an account? Log In
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-800 py-8 px-4 text-gray-700 dark:text-gray-300 text-sm">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Help Center
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Ad Services
            </a>
            <a href="#" className="hover:underline">
              Careers
            </a>
            <a href="#" className="hover:underline">
              Cookie
            </a>
          </div>
          <p>&copy; 2025 Meta</p>
        </div>
      </footer>
    </div>
  );
}

export default App;