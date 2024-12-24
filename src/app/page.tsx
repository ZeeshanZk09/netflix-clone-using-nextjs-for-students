export default function Home() {
  return (
    <>
      <main className="bg-img h-screen bg-center  bg-no-repeat bg-cover max-h-[644px] relative">
        <div className="h-[644px] w-full opacity-[0.69] absolute top-0 bg-black"></div>
        <div className="font-martel-sans h-[calc(100%-1px)] flex items-center justify-center flex-col text-white relative gap-6 px-0 py-8">
          <span className="font-poppins font-bold text-5xl text-center">
            Enjoy big movies, hit series and more from ₹ 149.
          </span>
          <span className="font-normal text-base text-center">
            Join today. Cancel anytime.
          </span>
          <span className="text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-[rgb(23,23,23)] border border-[#F6EEEE80] px-4 py-2 rounded outline-none"
            />
            <button
              type="button"
              className="btn-red-sm btn btn-red px-6 py-2 rounded text-white "
            >
              Get Started &gt;
            </button>
          </div>
        </div>
      </main>
      
    </>
  );
}
