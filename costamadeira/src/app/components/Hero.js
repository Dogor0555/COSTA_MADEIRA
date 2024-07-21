import Image from "next/image";
import A5 from "../../img/RENDERS/P-1.jpg";
import DescriptionImage from "../../img/RENDERS/P-2.jpg"; // Agrega la imagen adicional aquí

export default function Hero() {
  return (
    <>
      <div className="position-relative vh-100 d-flex align-items-center justify-content-center overflow-hidden">
        <Image 
          src={A5} 
          alt="Costa Madeira Residence"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <div className="position-relative text-center text-white z-1">
          <h1 className="display-4 fw-bold mb-3">Find Your Dream Home</h1>
          <p className="lead mb-4">Explore the best properties in the city</p>
          <button className="btn btn-light btn-lg">Get Started</button>
        </div>
        <div className="position-absolute bottom-0 end-0 p-3 text-white-50 fs-4">
          1920 x 1080
        </div>
      </div>
      
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">About Costa Madeira</h2>
            <p>
              Costa Madeira is a premier real estate development offering luxury homes in a beautiful, serene environment. Our properties are designed with modern amenities and exquisite architecture to provide you with the ultimate living experience. Whether you are looking for a place to call home or an investment opportunity, Costa Madeira has something to offer.
            </p>
            <p>
              Located in a prime area, our residences offer stunning views, easy access to essential services, and a community that fosters a high-quality lifestyle. Explore our listings and find your dream home today!
            </p>
          </div>
          <div className="col-md-6">
            <Image 
              src={DescriptionImage} 
              alt="Costa Madeira Description Image"
              layout="responsive"
              width={600}
              height={400}
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
