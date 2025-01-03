export default function Projects() {
    return (
      <div className="px-4 md:px-20 w-full flex flex-col">
        <h1 className="font-merriweather text-6xl md:text-7xl lg:text-8xl leading-[1.1em] tracking-[-0.05em] font-extralight text-center py-20">Projects</h1>

        {/* Project 1*/}
        <div id="guesssong" className="flex justify-center items-center pb-28">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
                <img
                    src="/GuessSong.png"
                    alt="Guess Song Project"
                    className="w-full h-auto rounded-lg shadow-lg object-cover order-1 md:order-none"
                />
                <div className="flex flex-col justify-between order-2 md:order-none">
                    <div className="flex flex-col">
                        <h2 className="font-merriweather text-3xl md:text-4xl lg:text-5xl leading-[1.1em] tracking-[-0.05em] font-extralight mb-4">Guess Song</h2>
                        <p className="font-dm-sans text-base md:text-lg leading-[1.2em] tracking-[.01em] mb-8">Guess Song is a web-based game where users test their music knowledge by guessing the correct song after listening to a brief snippet. Players can choose from various music genres, making each round uniquely tailored to their preferences. The game leverages RESTful API calls to interact with Deezer playlists, dynamically generating song queries for an engaging and interactive experience.</p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <a 
                            href="https://guesssong.onrender.com/" 
                            className="w-60 text-center font-dm-sans text-base transition-all duration-100 ease-linear border border-solid border-black rounded-[300px] px-[4.2em] py-[0.8em] hover:bg-black hover:text-white"
                        >
                            Go to Website
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Project 2*/}
        <div id="finalcheck" className="flex justify-center items-center pb-28">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
                <div className="flex flex-col justify-between order-2 md:order-none">
                    <div className="flex flex-col">
                        <h2 className="font-merriweather text-3xl md:text-4xl lg:text-5xl leading-[1.1em] tracking-[-0.05em] font-extralight mb-4">Final Check</h2>
                        <p className="font-dm-sans text-base md:text-lg leading-[1.2em] tracking-[.01em] mb-8">Final Check is a full-stack application that lets users create, modify, and organize packing lists tailored to different occasions. Users can group items into categories and tasks, ensuring their lists are clear and comprehensive. The platform also allows users to revisit and update their lists as needed, making it a practical tool for staying organized before any event.</p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <a 
                            href="https://finalcheck.onrender.com/" 
                            className="w-60 text-center font-dm-sans text-base transition-all duration-100 ease-linear border border-solid border-black rounded-[300px] px-[4.2em] py-[0.8em] hover:bg-black hover:text-white"
                        >
                            Go to Website
                        </a>
                    </div>
                </div>
                <img
                    src="/FinalCheck.png"
                    alt="Final Check Project"
                    className="w-full h-auto rounded-lg shadow-lg object-cover order-1 md:order-none"
                />
            </div>
        </div>

        {/* Project 3*/}
        <div id="breakeven" className="flex justify-center items-center pb-28">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
                <img
                    src="/Breakeven.png"
                    alt="Breakeven Project"
                    className="w-full h-auto rounded-lg shadow-lg object-cover order-1 md:order-none"
                />
                <div className="flex flex-col justify-between order-2 md:order-none">
                    <div className="flex flex-col">
                        <h2 className="font-merriweather text-3xl md:text-4xl lg:text-5xl leading-[1.1em] tracking-[-0.05em] font-extralight mb-4">Breakeven</h2>
                        <p className="font-dm-sans text-base md:text-lg leading-[1.2em] tracking-[.01em] mb-8">Breakeven is a website that helps users determine if their spending offsets the annual fee of credit cards from Chase, Capital One, and American Express. Users can input spending across categories to calculate whether the card's benefits justify its cost, offering a simple tool for informed financial decisions.</p>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <a 
                            href="https://breakeven.onrender.com/" 
                            className="w-60 text-center font-dm-sans text-base transition-all duration-100 ease-linear border border-solid border-black rounded-[300px] px-[4.2em] py-[0.8em] hover:bg-black hover:text-white"
                        >
                            Go to Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }