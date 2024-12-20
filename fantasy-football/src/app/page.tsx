import Image from "next/image";
import DropDown from "./components/DropDown";
import Table from "./components/Table";

export default function Home() {
  const items = ["Option 1", "Option 2", "Option 3", "Option 4"];
  return (
    <div className="bg-black bg-opacity-90 text-white text-opacity-90 container mx-auto md:w-full">
      <header className="p-6 flex gap-4 flex-start items-center bg-black h-24">
        <Image
          className="w-[48px] h-[41px]"
          src="/banner_logo.svg"
          alt="icon"
          width={40}
          height={40}
        />
        <h1 className="text-xl font-semibold text-gray-300">
          Fantasy Football
        </h1>
      </header>
      {/* Body */}
      <div className="flex justify-center bg-[#1F1F1F] flex-col">
        <div className="py-12 px-36 flex-row">
          <div className="p-8 bg-white bg-opacity-10 flex flex-wrap justify-center items-center gap-8 rounded-lg">
            <DropDown items={items} />
            <DropDown items={items} />
            <DropDown items={items} />
          </div>
        </div>
        <div className="flex lg:flex-row lg:justify-start lg:items-stretch md:flex-col md:justify-center md:items-center 
                          sm:flex-col sm:justify-start sm:items-center flex-col justify-start items-center gap-x-10 h-full w-full px-10 pb-5">
          <div className="flex lg:flex-1 md:overflow-hidden sm:overflow-scroll">
            <Table />
          </div>
          <div className="flex flex-col h-full rounded-lg overflow-hidden bg-black w-[400px]">
            <Image src="/avatar.png" alt="icon" width={400} height={256} />
            <div className="bg-[#2F2F2F] text-center text-white text-opacity-80 py-4">
              <p className="text-4xl">Tom Brady</p>
              <p className="text-[128px] leading-[172px]">51</p>
              <p className="">Points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
