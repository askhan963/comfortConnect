import React from "react";
import Header from "./Header";
import Button from "./Button";
import ImageComponent from "./ImageComponent";

function Hero() {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto px-6 py-12 lg:py-24 gap-12 lg:gap-24">
      <div className="max-w-[600px]">
        <Header
          title="Get an Emotional Support Letter Consultation You Can Trust."
          description="Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet at quam."
        />
        <Button text="Get started" />
      </div>
      <div className="w-full lg:max-w-[500px]">
      <ImageComponent />

      </div>
    </main>
  );
}

export default Hero;
