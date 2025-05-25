import Login from "@/components/Login";
import Search from "@/components/Search";
import About from "@/components/Sections/About";
import Achievement from "@/components/Sections/Achievement";
import Hero from "@/components/Sections/Hero";
import Solution from "@/components/Sections/Solution";

export default function Home() {
  return (
    <div>
      <Hero />
      <Solution />
      <About />
      <Achievement />
      <Login />
    </div>
  )
}
