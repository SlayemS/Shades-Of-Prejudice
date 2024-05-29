"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container mx-auto text-white overflow-hidden">
      <div className="justify-center items-center flex flex-col mx-52 mb-12">
        <h1
          className="text-7xl font-bold text-center py-4 mb-8 mt-4 text-white"
          data-aos="fade-down"
        >
          <em className="text-amber-900">Shades</em> of Prejudice
        </h1>
        <div className="flex space-x-4 mb-16">
          <Card
            text="Aliha and Tahiya are twin sisters that grew up in Montreal, Canada. Their parents immigrated from Bangladesh. Aliha had a fair complexion resembling that of an angel, often adored and constantly praised for it, while Tahiya, with her darker skin tone resembling that of manure when it’s soaked, was often overlooked. Despite their equal talents and level of intelligence, it was obvious who received preferential treatment."
            animation="fade-up"
            delay="200"
          />
          <div
            className="flex justify-center items-center my-3"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Image src="/sisters.jpg" width={6000} height={6000} alt="next" />
          </div>
        </div>

        <div className="flex space-x-4 mb-16">
          <div
            className="flex justify-center items-center my-3"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <Image src="/marriage.jpg" width={6000} height={6000} alt="next" />
          </div>
          <Card
            text="As they grew mature, the contrast in their treatment became starker. One day, their parents looked to marry Aliha. Her parents went and found the wealthiest prospects to take her hand in marriage as soon as possible. Each of the men she met were pleased with her gleaming face. Tahiya, on the other hand, was left in the shadows. Noticing how pleased her parents were with her sister, she found her self-worth unjustly diminished by the darkness that covers her."
            animation="fade-down"
            delay="300"
          />
        </div>

        <div className="flex space-x-4  mb-16">
          <Card
            text="A few years pass and Aliha was now the wife of a highly successful businessman. On the other hand, Tahiya had immersed herself in studies and became a renowned scientist with exceptional brilliance. She married later that year to the man of her dreams. Three years later, her sister secretly filed for divorce after her ex-husband was found sleeping with other gorgeous women."
            animation="fade-up"
            delay="300"
          />
          <div
            className="flex justify-center items-center my-3"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <Image src="/flip.jpg" width={4000} height={4000} alt="next" />
          </div>
        </div>

        <div className="flex space-x-4 mb-24">
          <div
            className="flex justify-center items-center my-3"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <Image src="/end.jpg" width={4000} height={4000} alt="next" />
          </div>
          <Card
            text="The parents and two daughters had a reunion where both sisters described their experiences these past few years. Upon hearing the news on each end, the parents were taken aback. They were confused as to how this had happened. They realized it was due to their unfair treatment of their daughters that this was how it turned out. They had been blinded by the shades of prejudice that they had cast upon their daughters. By favoring one over the other, the parents made Aliha's fair complexion the same reason she now pales in comparison to Tahiya's brilliance."
            animation="fade-down"
            delay="300"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
