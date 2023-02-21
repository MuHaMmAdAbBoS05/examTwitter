import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

export const Login = (providers) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Web site created by Muhamadabboshuja"
        />
        <link
          rel="shortcut icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"
          type="image/x-icon"
        />
        <title>Sign In / Twitter</title>
      </Head>
    <div className=" bg-[#1c9bf0] w-full h-[100vh] flex flex-col items-center space-y-20 pt-48">
        <Image
          src="https://rb.gy/ogau5a"
           alt="/" 
          width={150}
          height={150}
          objectFit="contain"
        />


        <div>
          {Object.values(providers).map((provider) => (
            <div key={provider.name} >
              <button
                onClick={() => signIn(provider.google.id, { callbackUrl: "/" })}
                class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#fff] rounded-full shadow-md group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-[#1c9bf0] duration-300 -translate-x-full bg-[#fff] group-hover:translate-x-0 ease">
                  <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  Sign in with {provider.google.name}
                </span>
                <span class="relative invisible">
                  Sign in with {provider.google.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
