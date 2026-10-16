import Grocery from "../../assets/grocery.png";
import Button from "../Button/Button";
import { useEffect,useRef } from "react";
import gsap from "gsap";
function Hero() {
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);

useEffect(() => {
  const tl = gsap.timeline();

  tl.fromTo(
    badgeRef.current,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
  )
    .fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      "-=0.2"
    )
    .fromTo(
      paraRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      "-=0.2"
    )
    .fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    );
}, []);

  return (
    <section>
      <div className="min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-35">
        {/* Hero Content */}
        <div className="flex-1">
            <span className="bg-orange-100 text-orange-500 text-lg rounded-full px-5 py-2" ref={badgeRef}>Export Best Quality...</span>
            <h1 className="md:text-7xl/18 text-5xl/14 font-bold mt-4" ref={headingRef}>Tasty Organic <span className="text-orange-500">Fruits</span> & <span className="text-orange-500">Veggies</span><br/> In Your City</h1>
            <p className="text-zinc-600 md:text-lg text-md max-w-[530px] mt-5 mb-10" ref={paraRef}>Bred for a high content of beneficial substances.Our products are all fresh and healthy.</p>
            <div ref={buttonRef}>
              <Button content="Shop Now"/>
            </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <img src={Grocery} alt="Hero Image" className="hero-image w-full h-auto" ref={imageRef}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
