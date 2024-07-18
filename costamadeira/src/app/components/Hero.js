import "./Hero.css";
import Image from "next/image";
import A5 from "../../img/RENDERS/P-1.jpg";

export default function Hero() {
  return (
    <div className="firtsBack text-center py-4">
      <div className="container landing">
        <h1 className="display-4 text-black">Find Your Dream Home</h1>

        <p className="lead text-black py-1">
          Along the pristine shores of El Salvador, Costa Madeira Residences
          offers a unique blend of luxury and tranquility. This exclusive beach
          community is designed with a surf and summer theme, perfect for those
          who crave the ocean breeze and the sound of crashing waves.
        </p>
        <p className="lead text-black py-1">
          All homes have been designed with aesthetic elegance, in light tones
          that blend seamlessly with the natural surroundings. The residences
          feature spacious living areas, modern amenities and private terraces
          with breathtaking ocean views. Whether you are a surf enthusiast or
          simply seeking a serene retreat, Costa Madeira Residences offers the
          ideal setting for a coastal lifestyle.
        </p>
        <p className="lead text-black py-1">
          We have four model types with a complete set of approved floor plans
          from which you can choose the one that best meets your expectations,
          if you wish to build your own design it will be submitted to our
          committee for review to ensure that it meets the harmonious
          requirements of the project.
        </p>
        <p className="lead text-black py-1">
          Experience the ultimate in beachside living at Costa Madeira, where
          every day feels like a vacation.
        </p>

        <Image src={A5} className="imgland"/>

        <a href="#" className="btn btn-primary btn-lg">
          Get Started
        </a>
      </div>
    </div>
  );
}
