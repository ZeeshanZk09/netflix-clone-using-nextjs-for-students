
export default function Home() {
  return (
    <>
    <main className="bg-img h-screen bg-center bg-no-repeat bg-cover max-h-[644px] relative">
      <div className="h-[644px] w-full opacity-[0.60] absolute top-0 bg-black">
      </div>
      <div className="font-martel-sans h-[calc(100%-100px)] flex items-center justify-center flex-col text-white relative gap-[23px] px-[30px]">
      <span className="font-poppins font-bold text-[48px] text-center">
        Enjoy big movies, hit series and more from ₹ 149.
      </span>
      <span className="font-normal text-[24px] text-center">
        Join today. Cancel anytime.
      </span>
      <span className="text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </span>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Email Address"
          className="px-4 py-2 rounded"
        />
        <button className="btn btn-red px-6 py-2 rounded text-white bg-red-600 hover:bg-red-700">
          Get Started &gt;
        </button>
      </div>
    </div>
    </main>
          </>
  );
}
