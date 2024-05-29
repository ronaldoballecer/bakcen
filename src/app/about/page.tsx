import Image from "next/image";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          About Us
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none mt-8-lg">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/ballecerdigital.svg"
              alt="Ballecer Digital Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/bakcen.svg"
          alt="Next.js Logo"
          width={400}
          height={400}
          priority
        />
      </div>

      <div className="paragraph-container mx-auto text-left text-lg space-y-6 mt-8">
        <p>Welcome to Bakakeng Central MRF-TSD Facility, your premier destination for e-waste recycling in Baguio City. Located in the heart of Bakakeng Central, along Crystal Cave Road, we are dedicated to leading the charge in sustainable electronic waste management.</p>
        <p>At Bakakeng Central MRF-TSD Facility, we understand the critical importance of responsibly disposing of electronic devices to protect our environment and promote a healthier future for generations to come. With our state-of-the-art facilities and commitment to best practices, we offer a convenient and reliable solution for individuals and businesses seeking to recycle their e-waste responsibly.</p>
        <p>Our team is driven by a passion for environmental stewardship and a desire to make a positive impact on our community. We work closely with Barangay Bakakeng Central LGU, DENR-EMB CAR, EcoWaste, UNIDO, and the City Government of Baguio to ensure that our operations adhere to the highest standards of sustainability and compliance.</p>
        <p>When you choose Bakakeng Central MRF-TSD Facility, you can trust that your e-waste is being handled with the utmost care and expertise. Whether you’re recycling old computers, smartphones, or other electronic devices, we provide a hassle-free experience, ensuring that your e-waste is properly processed and recycled in accordance with industry regulations.</p>
        <p>Join us in our mission to create a cleaner, greener future for Baguio City and beyond. Together, let’s make a difference, one device at a time.</p>
      </div>

      <div className="mt-32 grid text-center lg:mt-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Back to Home{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Go back to the main page.
          </p>
        </a>
      </div>
    </main>
  );
}
