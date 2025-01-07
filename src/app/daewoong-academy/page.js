export default function DaewoongAcademy() {
    return (
      <div>
        {/* Project Summary */}
        <div className="flex flex-col md:flex-row bg-[#F4F4F3] px-10 md:px-20 py-32 w-full border-b border-b-black">
            <h1 className="font-merriweather text-6xl md:text-7xl lg:text-8xl leading-[1.1em] tracking-[-0.05em] pb-10 font-extralight w-full md:w-1/2 pr-4">Daewoong Academy</h1>
            <div className="flex flex-col w-full md:w-1/2 font-dm-sans">
                <p className="text-lg">Daewoong Academy is a nonprofit organization dedicated to making quality education accessible to all through innovative digital test-taking and analytics platforms. Focused on empowering students, Daewoong Academy offers comprehensive resources for SAT and AP Computer Science preparation, including multiple-choice and free-response questions designed to deepen understanding. Students can take full-length SAT exams and receive detailed analytics that highlight their strengths and pinpoint areas for improvement, helping them achieve their academic goals.</p>
                <div className="grid grid-cols-2 py-10 gap-8">
                    <div className="flex flex-col">
                        <h6 className="font-bold">Technology</h6>
                        <p>Next.js, AWS, MongoDB</p>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="font-bold">Year</h6>
                        <p>2023</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Videos Section - Owner */}
        <div className="flex flex-col bg-[#FFC700] justify-center items-center  gap-10 px-10 md:px-20 py-32 w-full border-b border-b-black">
            <div className="bg-white w-full md:w-3/4 rounded-[25px] p-10 md:p-[75px] flex flex-col text-center justify-center items-center">
                <video  
                    className="w-full h-auto rounded-lg shadow-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/DaewoongVideo1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="flex flex-col w-2/3 pt-8">
                    <p className="font-dm-sans text-lg font-bold">Main Screen and Student Home Panel</p>
                    <p className="font-dm-sans text-base">Users can sign in as student or a teacher. When logged in, students are able to access content to study, take test, and view test analytics</p>
                    </div>
            </div>
        </div>

        {/* Videos Section - Manager */}
        <div className="flex flex-col bg-[#FFFFFF] text-[#F4F4F3] justify-center items-center gap-10 px-10 md:px-20 py-32 w-full border-b border-b-black">
            <div className="bg-[#383838] w-full md:w-3/4 rounded-[25px] p-10 md:p-[75px] flex flex-col text-center justify-center items-center">
                <video 
                    className="w-full h-auto rounded-lg shadow-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/DaewoongVideo2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="flex flex-col w-full md:w-2/3 pt-8">
                    <p className="font-dm-sans text-lg font-bold">Student Test-Taking Panel</p>
                    <p className="font-dm-sans text-base">The test-taking interface allows students to track time remaining in the section with a timer, mark questions for review to revisit later, and use a question navigation panel at the bottom for quick access to any question. The panel also highlights which questions have been marked for review, ensuring seamless navigation during the test.</p>
                </div>
            </div>
            <div className="bg-[#383838] w-full md:w-3/4 rounded-[25px] p-10 md:p-[75px] flex flex-col text-center justify-center items-center">
                <video 
                    className="w-full h-auto rounded-lg shadow-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/DaewoongVideo3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="flex flex-col w-full md:w-2/3 pt-8">
                    <p className="font-dm-sans text-lg font-bold">Student Test Archive and Analytics Panel</p>
                    <p className="font-dm-sans text-base">After completing a test, students can access detailed test reports through the "Test Archive" section on their homepage. The test reports provide comprehensive analytics, including scores, percentages, and visual graphs, to show performance insights. These reports highlight correct and incorrect answers and identify specific topics where the student excels or struggles, helping them focus on areas for improvement.</p>
                </div>
            </div>
        </div>
      </div>
    );
}