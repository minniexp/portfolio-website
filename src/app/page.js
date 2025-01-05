import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white w-full">
      <main className="flex flex-col row-start-2 items-center sm:items-start">

        {/* Section 1 */}
        <div className="px-4 md:px-20 py-10 md:py-36 border-b border-b-black bg-[#F4F4F3]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Header and Paragraph Section */}
            <div className="flex flex-col text-center md:text-left space-y-4">
              {/* Header */}
              <h1 className="font-merriweather text-6xl md:text-7xl lg:text-8xl leading-[1.1em] tracking-[-0.05em] font-extralight">
                Hey, I'm Michelle.
              </h1>
              {/* Paragraph */}
              <p className="font-merriweather text-lg leading-[1.5em] tracking-[-0.05em] font-extralight py-6 w-full md:w-3/4">
                I'm a full-stack software engineer who loves to learn, and I
                believe the best way of learning is by building. As a founding
                engineer, I am eager to develop innovative, scalable solutions
                that drive impact, improve user experiences, and solve complex
                problems through technology.
              </p>
            </div>

            {/* Video Section */}
            <div className="flex justify-center items-center">
              <div className="rounded-[50px] overflow-hidden w-72 h-96 lg:w-96 bg-[#FFD647] shadow-xl">
                <video 
                  className="w-full h-full object-cover object-[center_20%]"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/main1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Contact Me Button */}
          {/* <button className="font-dm-sans text-black font-normal tracking-[.01em] leading-normal py-[0.8em] px-[4.2em] rounded-[300px] border border-solid border-black bg-[rgb(255,199,0)] hover:opacity-90 transition-opacity duration-100 w-64 self-center md:self-start">
              Contact Me
          </button> */}
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row bg-[rgb(255,255,255)] w-full border-b border-b-black min-h-[100vh]">
          {/* Image Section - Left Half */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <img
              src="/mainSection2.jpg"
              alt="Desk"
              className="object-cover w-full h-full object-bottom"
            />
          </div>

          {/* Content Section - Right Half */}
          <div className="w-full md:w-1/2 flex items-center justify-center block">
            <div className="px-20 py-12">
              <h2 className="font-merriweather text-2xl md:text-4xl lg:text-6xl leading-[1.1em] tracking-[-0.05em] font-extralight">
                Work Experiences
              </h2>
              <div className="py-4">
                <Link 
                  href="/daewoong-academy"
                  className="font-merriweather text-md py-4 underline hover:text-gray-400 cursor-pointer"
                >
                  Daewoong Academy
                </Link>
                <p className="font-dm-sans text-sm">
                  Daewoong Academy is a nonprofit organization providing free access to digital test-taking platforms and analytics to support students' academic success. Offering resources for SAT and AP Computer Science preparation, the platform provides detailed post-test analytics to help students identify strengths and areas for improvement.
                </p>
              </div>
              <div className="py-4">
                <Link 
                  href="/palace"
                  className="font-merriweather text-md py-4 underline hover:text-gray-400 cursor-pointer"
                >
                  Palace
                </Link>
                <p className="font-dm-sans text-sm">
                  Palace is a platform that connects property owners with approved managers seeking reservations for events such as weddings, corporate gatherings, and retreats. Property owners can list their available spaces, while managers can browse through the calendar and properties to request bookings. The platform streamlines the reservation process, ensuring seamless coordination between owners and managers for successful events.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col w-full border-b border-b-black justify-center items-center min-h-[100vh] pt-12">
          <h1 className="font-merriweather text-6xl md:text-7xl lg:text-8xl leading-[1.1em] tracking-[-0.05em] font-extralight">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] py-20 px-[5vw]">
            {/* Project Box */}
            <div 
              className="flex flex-col bg-[#383838] justify-center text-white w-[228px] lg:w-[333px] h-[285px] lg:h-[424px] p-[16%] rounded-[45px] transition-all duration-[1.5s] ease-in-out hover:opacity-90"
              style={{ 
                transitionDelay: '0.289157s',
                transitionTimingFunction: 'ease'
              }}
            >
              <h5 className="font-merriweather text-[1.2rem] font-[400] leading-[1.1em] tracking-[0em] mb-2">
                Guess Song
              </h5>
              <p className="font-dm-sans text-[0.9rem] font-[300] leading-[1.2em] tracking-[.01em] flex-grow">
                Web based game that users can select the correct song after listening for a brief time
              </p>
              <Link 
                href="/projects#guesssong" 
                className="font-dm-sans text-[0.9rem] underline cursor-pointer"
              >
                View Project
              </Link>
            </div>
            {/* Project Box */}
            <div 
              className="flex flex-col bg-[#383838] text-white w-[228px] lg:w-[333px] h-[285px] lg:h-[424px] p-[16%] rounded-[45px] transition-all duration-[1.5s] ease-in-out hover:opacity-90"
              style={{ 
                transitionDelay: '0.289157s',
                transitionTimingFunction: 'ease'
              }}
            >
              <h5 className="font-merriweather text-[1.2rem] font-[400] leading-[1.1em] tracking-[0em] mb-2">
                Final Check
              </h5>
              <p className="font-dm-sans text-[0.9rem] font-[300] leading-[1.2em] tracking-[.01em] flex-grow">
                Full stack application to create, modify, and share personal packing list for various occasions
              </p>
              <Link 
                href="/projects#finalcheck" 
                className="font-dm-sans text-[0.9rem] underline cursor-pointer"
              >
                View Project
              </Link>
            </div>
            {/* Project Box */}
            <div 
              className="flex flex-col bg-[#383838] text-white w-[228px] lg:w-[333px] h-[285px] lg:h-[424px] p-[16%] rounded-[45px] transition-all duration-[1.5s] ease-in-out hover:opacity-90"
              style={{ 
                transitionDelay: '0.289157s',
                transitionTimingFunction: 'ease'
              }}
            >
              <h5 className="font-merriweather text-[1.2rem] font-[400] leading-[1.1em] tracking-[0em] mb-2">
                Breakeven
              </h5>
              <p className="font-dm-sans text-[0.9rem] font-[300] leading-[1.2em] tracking-[.01em] flex-grow">
                Responsive website to calculate the breakeven point between credit card annual fee and purchase benefits from Chase, Capital One, and American Express
              </p>
              <Link 
                href="/projects#breakeven" 
                className="font-dm-sans text-[0.9rem] underline cursor-pointer"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
