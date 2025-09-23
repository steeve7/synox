import About from "@/components/Sections/About";
import Achievement from "@/components/Sections/Achievement";
import Hero from "@/components/Sections/Hero";
import Money from "@/components/Sections/Money";
import Solution from "@/components/Sections/Solution";
import Testimonial from "@/components/Sections/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <Solution />
      <About />
      <Achievement />
      <Money />
    </div>
  )
}
