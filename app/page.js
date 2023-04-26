// import Image from "next/image";

import Image from "next/image";
import PersonalLogo from "/public/logo.png";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-full relative">
      <div className="fixed top-0 left-0 shadow-md w-full h-20 bg-white flex items-center justify-center">
        <Link
          href={"https://www.kourosh-h.ir/"}
          target="_blank"
          className="flex items-center justify-center space-x-2 "
        >
          <Image src={PersonalLogo} width={58} height={58} alt="personal" />
          <h1 className="text-2xl font-semibold">Kourosh H</h1>
        </Link>
      </div>
      <div className="w-full min-h-screen bg-neutral-200 flex items-center justify-center px-4">
        <div className="w-full max-w-[500px] h-full bg-white rounded shadow-lg p-5">
          <div className="text-center font-bold">
            <h1 className="text-2xl">You are not Loged in</h1>
            <p className="font-normal text-sm text-neutral-400 my-2">
              Please login by this option
            </p>
          </div>
          <div className="flex flex-col space-y-2 my-6">
            <button className="w-full p-3 py-4 bg-blue-500 rounded flex items-center relative hover:bg-blue-600 hover:shadow duration-150">
              <div className="absolute top-1/2 left-10 transform  -translate-y-1/2">
                <div className="w-8 h-8 relative">
                  <Image
                    src={"https://authjs.dev/img/providers/facebook-dark.svg"}
                    alt="https://authjs.dev/img/providers/facebook-dark.svg"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="w-full text-center text-white font-semibold">
                Sign in with Facebook
              </span>
            </button>
            <button className="w-full p-3 py-4 bg-white border-2 rounded flex items-center relative hover:bg-neutral-50 hover:shadow duration-150">
              <div className="absolute top-1/2 left-10 transform  -translate-y-1/2">
                <div className="w-8 h-8 relative">
                  <Image
                    src={"https://authjs.dev/img/providers/google.svg"}
                    alt="https://authjs.dev/img/providers/google.svg"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="w-full text-center text-neutral-800 font-semibold">
                Sign in with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
