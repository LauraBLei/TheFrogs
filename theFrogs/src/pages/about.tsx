export const AboutPage = () => {
  return (
    <div className="flex justify-center">
      <div className="text-xl text-brand-black max-w-[1100px] flex flex-col gap-5 font-bold">
        <h1 className="text-center border-b-2 border-brand-black text-2xl">
          About Us
        </h1>
        <p>Welcome to The Frogs</p>
        <p>
          This website was created by Laura Lei, under the developer name Lei
          Dev. Please note, this is not a real eCommerce site but rather a
          school project developed for educational purposes.
        </p>
        <p>
          The project was built using modern web development tools, including
          TSX, Tailwind CSS, and Node.js. It showcases front-end development
          skills and aims to provide a realistic simulation of an online
          shopping experience.
        </p>
        <p>
          Thank you for visiting, and we hope you enjoy exploring The Frogs!
        </p>
        <div className="flex items-center justify-center">
          <img
            className="max-w-[200px] w-full"
            src="/theFrogsLogo.png"
            alt=""
          />
        </div>
        <div className="flex gap-5">
          <p>See more of Lei Dev</p>
          <a
            href="https://leidev.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here!
          </a>
        </div>
      </div>
    </div>
  );
};
