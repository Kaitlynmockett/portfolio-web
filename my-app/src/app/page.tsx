import Image from "next/image";
import Link from "next/link";
import About from "./components/about/about";

export default function App() {
  return (
    <main>
      <div className="flex flex-row">
        <div className="left-col flex flex-col">
          <div className="">
            <h2 className="text-4xl font-bold">Hello!</h2>
            <br />
            <h1 className="text-6xl font-bold">I'm<span className="text-blue-400"> Kaitlyn Mockett.</span><br/> A passionate software and digital solutions engineer.</h1>
          </div>
          <div className="max-w-full">
            <button className="btn btn-primary text-2xl capitalize bg-blue-400 h-20 w-xs rounded">
            <Link href="/projects">Discover my work</Link>
            </button>
          </div>
        </div>
        <div className="right-col">
          <div className="">
            <Image src="/profile.jpg" alt="profile"
            width="400"
            height="400"
            className="" />
          </div>
        </div>
      </div>
      <About />
    </main>
  );
}
