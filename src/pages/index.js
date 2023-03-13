import Head from "next/head";
import Image from "next/image";
import Logo from '../../public/logo.png'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>OneNumber</title>
        <meta name="description" content="Connect the world with OneNumber" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/logo.png"} />
      </Head>

      <main class="relative">
        <div class="text-white relative">
          {/* Header Section */}
          <Header />

          {/* Hero */}
          <section className="text-gray-900 relative">
            <div className="pt-14 px-6 sm:px-12 md:px-16 max-w-7xl mx-auto">
              <h2 className="text-5xl text-center font-bold font-nova">
                Connect the world with one number.
              </h2>
              <p className="text-center mt-10 max-w-3xl mx-auto text-lg font-nova">
                Monitor your ring time and record calls with one number dial.
                Because if it's not bringing in money, there's no need to
                'shalaye'
              </p>
              <div className="text-center mt-10">
                <a
                  href
                  className="inline-block w-[200px] md:w-[300px] text-white bg-orange-600 hover:bg-opacity-90 px-2 py-[0.62rem] font-bold text-[1.2222rem] rounded shadow-md shadow-orange-600/25"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section
            className="bg-blue-600 mt-20 font-nova scroll-mt-10"
            id="why"
          >
            <div className="max-w-7xl mx-auto px-6 py-20">
              <p className="text-center text-[1.67rem] max-w-3xl mx-auto font-medium p-5">
                You’re a small business owner, not an office manager. One Number
                helps you focus on your business, so you can do what you’re good
                at..
              </p>
              <div className="grid grid-cols-1 gap-6 px-16 sm:px-8 md:px-6 justify-center items-center md:grid-cols-3 mt-6">
                <div className="text-center bg-gray-300 text-gray-800 py-6 px-2 rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-white">
                  <h3 className="text-xl font-medium">Five Steps Ahead.</h3>
                  <p>
                    Monitor your ring time and record calls with one number
                    dial. Because if it's not bringing in money, there's no need
                    to 'shalaye'.
                  </p>
                </div>
                <div className="text-center bg-gray-300 text-gray-800 py-6 px-2 rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-white">
                  <h3 className="text-xl font-medium">One Number Dial.</h3>
                  <p>
                    Never miss business calls. Monitor your ring back time.
                    Record your calls Get these and more with One Number dial.
                  </p>
                </div>
                <div className="text-center bg-gray-300 text-gray-800 py-6 px-2 rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-white">
                  <h3 className="text-xl font-medium">
                    Never let any call go unhandled.
                  </h3>
                  <p>
                    Get one number that connects to five other numbers. Because
                    calls mean business and business means money.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/*<!-- Steps --> */}
          <section class="mt-5 font-nova">
            <div class="max-w-7xl mx-auto px-6 py-3">
              <h2 class="text-4xl font-bold text-black text-center mb-7">
                Get started with One Number in 4 easy steps
              </h2>
              <div class="grid grid-cols-1 gap-6 px-16 sm:px-8 md:px-6 justify-center items-center md:grid-cols-4 mt-6">
                <div class="h-full flex flex-col items-center justify-center space-y-3 bg-gray-300 text-gray-800 py-6 px-2 rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-white">
                  <h3 class="text-3xl font-bold">1</h3>
                  <h4 class="text-xl">Select a Number</h4>
                  <p class="text-center">
                    We have{" "}
                    <a href="" class="text-blue-400 hover:text-blue-600">
                      Toll Free
                    </a>
                    ,{" "}
                    <a href="" class="text-blue-400 hover:text-blue-600">
                      Vanity
                    </a>
                    , and{" "}
                    <a href="" class="text-blue-400 hover:text-blue-600">
                      Local numbers
                    </a>
                    . Or,{" "}
                    <a href="" class="text-blue-400 hover:text-blue-600">
                      port your current
                    </a>{" "}
                    virtual number!
                  </p>
                </div>
                <div class="h-full flex flex-col items-center justify-center space-y-3 bg-gray-300 text-gray-800 py-6 px-2 rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-white">
                  <h3 class="text-3xl font-bold">2</h3>
                  <h4 class="text-xl">Choose your Plan</h4>
                  <p class="text-center">
                    Start a free trial, or select a monthly or annual plan to
                    get going right away.
                  </p>
                </div>
                <div class="h-full flex flex-col items-center justify-center space-y-3 bg-gray-300 text-gray-800 py-6 px-2 rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-white">
                  <h3 class="text-3xl font-bold">3</h3>
                  <h4 class="text-xl">Download the App</h4>
                  <p class="text-center">
                    Available for desktop, iOS, and Android.
                  </p>
                </div>
                <div class="h-full flex flex-col items-center justify-center space-y-3 bg-gray-300 text-gray-800 py-6 px-2 rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-white">
                  <h3 class="text-3xl font-bold">4</h3>
                  <h4 class="text-xl">Call and Text</h4>
                  <p class="text-center">
                    Link your existing mobile number to start calling and
                    texting right away.
                  </p>
                </div>
              </div>
              <div class="text-center mt-16">
                <a
                  href=""
                  class="inline-block w-[200px] md:w-[300px] text-white bg-orange-600 hover:bg-opacity-90 px-2 py-[0.62rem] font-bold text-[1.2222rem] rounded shadow-md"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  );
}
