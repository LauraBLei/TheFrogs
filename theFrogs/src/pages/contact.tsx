import { ChevronDown } from "lucide-react";

export const ContactPage = () => {
  return (
    <div className="w-full flex flex-col items-center h-screen">
      <div className="mt-10 max-w-[1200px] w-full flex flex-col gap-8">
        <h1 className="text-center text-3xl border-b-2 py-4 border-brand-black font-bold text-brand-black">
          Contact
        </h1>
        <details className="bg-brand-black text-brand-white text-xl font-bold group">
          <summary className="list-none px-4 py-2 shadow-2xl flex justify-between cursor-pointer">
            Call us{" "}
            <ChevronDown className="transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div
            className="bg-brand-white text-brand-black overflow-hidden transition-all duration-700 ease-in-out
                  opacity-0 scale-y-0 origin-top group-open:opacity-100 group-open:scale-y-100"
          >
            +123 456 789
          </div>
        </details>

        <details className=" text-brand-white text-xl font-bold group">
          <summary className="bg-brand-black list-none px-4 py-2 shadow-2xl flex justify-between cursor-pointer">
            Email Support{" "}
            <ChevronDown className="transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <div
            className="bg-brand-white text-brand-black overflow-hidden transition-all duration-700 ease-in-out
                  opacity-0 scale-y-0 origin-top group-open:opacity-100 group-open:scale-y-100"
          >
            <form action="" className="flex flex-col p-4 w-full gap-4">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  className="border-2 p-2 w-full border-brand-black"
                  type="text"
                  placeholder="Insert your name here..."
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="border-2 p-2 w-full border-brand-black"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="Subject">Subject</label>
                <input
                  id="subject"
                  className="border-2 p-2 w-full border-brand-black"
                  type="text"
                />
              </div>
              <div>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  className="h-[200px] border-2 p-2 w-full border-brand-black"
                ></textarea>
              </div>
              <button className="text-3xl" type="submit">
                Send
              </button>
            </form>
          </div>
        </details>
      </div>
    </div>
  );
};
