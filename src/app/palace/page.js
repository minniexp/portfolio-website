export default function Palace() {
    return (
      <div>
        {/* Project Summary */}
        <div className="flex flex-col md:flex-row bg-[#F4F4F3] px-20 py-32 w-full border-b border-b-black">
            <h1 className="font-merriweather text-6xl md:text-7xl lg:text-8xl leading-[1.1em] tracking-[-0.05em] pb-10 font-extralight w-full md:w-1/2">Palace</h1>
            <div className="flex flex-col w-full md:w-1/2 font-dm-sans">
                <p className="text-lg">Palace is an innovative platform designed to streamline the reservation process for events such as weddings, corporate gatherings, retreats, and more. Property owners can list their spaces on the platform, showcasing them to a network of approved managers who are looking to organize memorable events. Managers can browse available properties, check availability through an integrated calendar, and request reservations with ease. By facilitating seamless coordination between property owners and event managers, Palace ensures a hassle-free experience for hosting exceptional events.</p>
                <div className="grid grid-cols-2 py-10 gap-8">
                    <div className="flex flex-col">
                        <h6 className="font-bold">Technology</h6>
                        <p>Next.js, AWS, MongoDB, Node.js, Express.js</p>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="font-bold">Year</h6>
                        <p>2024</p>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Videos Section - Owner */}
        <div className="flex flex-col bg-[#FFC700] justify-center items-center gap-10 px-10 md:px-20 py-32 w-full border-b border-b-black">
            <div className="bg-white w-full md:w-3/4 rounded-[25px] p-10 md:p-[75px] flex flex-col text-center justify-center items-center">
                <video 
                    className="w-full h-auto rounded-lg shadow-lg"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/PalaceVideo1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="flex flex-col w-full md:w-2/3 pt-8">
                    <p className="font-dm-sans text-lg font-bold">Owner Property Management Panel</p>
                    <p className="font-dm-sans text-base">Owners can manage their properties by adding "block out dates," making selected dates unavailable for managers to reserve. This feature, accessible from the property details page, ensures owners have full control over their property's availability.</p>
                </div>
            </div>
            <div className="bg-white w-full md:w-3/4 rounded-[25px] p-10 md:p-[75px] flex flex-col text-center justify-center items-center">
                <video 
                    className="w-full h-auto rounded-lg shadow-lg"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/PalaceVideo2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="flex flex-col w-full md:w-2/3 pt-8">
                    <p className="font-dm-sans text-lg font-bold">Owner Reservation Management Panel</p>
                    <p className="font-dm-sans text-base">Owners can efficiently manage reservation requests through the "Account" page. By selecting a reservation card, a pop-up provides detailed options to confirm or deny requests, update payment status, and review special requests from managers, offering complete control over event details.</p>
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
                >
                    <source src="/PalaceVideo3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="flex flex-col w-full md:w-2/3 pt-8">
                    <p className="font-dm-sans text-lg font-bold">Manager Reservation Request Panel</p>
                    <p className="font-dm-sans text-base">Approved managers can browse listed properties and easily request a reservation by selecting dates, specifying guest count, event type, and adding special notes. A confirmation pop-up allows managers to review details, send a message to the owner, and submit the request. Once confirmed, managers can view and manage their reservation through the "View Reservation" option.</p>
                </div>
            </div>
            <div className="bg-[#383838] w-full md:w-3/4 rounded-[25px] p-10 md:p-[75px] flex flex-col text-center justify-center items-center">
                <video 
                    className="w-full h-auto rounded-lg shadow-lg"
                    autoPlay
                    muted
                    loop
                >
                    <source src="/PalaceVideo4.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="flex flex-col w-full md:w-2/3 pt-8">
                    <p className="font-dm-sans text-lg font-bold">Manager Reservation Modification Panel</p>
                    <p className="font-dm-sans text-base">Managers can navigate to their account page to view a grid of reservations. By selecting a specific reservation and clicking "Modify," managers can submit a message detailing their modification requests, ensuring clear communication and seamless updates to their bookings.</p>
                </div>
            </div>
        </div>
      </div>
    );
  }