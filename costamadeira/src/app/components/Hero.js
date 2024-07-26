import Image from "next/image";
import A5 from "../../img/RENDERS/P-1.jpg";
import DescriptionImage from "../../img/RENDERS/A-4.jpg";
import A6 from "../../img/RENDERS/P-3.jpg";
import A7 from "../../img/RENDERS/p-4.jpg";
import A8 from "../../img/RENDERS/p-4.jpg";
import A9 from "../../img/RENDERS/A-6.jpg";
import "./Hero.css"; // Asegúrate de que el CSS esté correctamente importado

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

      <div className="container py-5">
        <h2 className="mb-4">Gallery</h2>
        <div id="carouselExampleIndicators" className="carousel slide carousel-sm" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image 
                src={A5} 
                alt="Costa Madeira Image 1"
                layout="responsive"
                width={800}
                height={400}
                quality={100}
                objectFit="cover"
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3">
                <h5>Luxurious Living</h5>
                <p>Experience unparalleled comfort and style in our premium properties.</p>
              </div>
            </div>
            <div className="carousel-item">
              <Image 
                src={DescriptionImage} 
                alt="Costa Madeira Image 2"
                layout="responsive"
                width={800}
                height={400}
                quality={100}
                objectFit="cover"
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3">
                <h5>Modern Design</h5>
                <p>Discover the contemporary elegance of our latest designs.</p>
                <h6>Designed for Comfort</h6>
              </div>
            </div>
            <div className="carousel-item">
              <Image 
                src={A6} 
                alt="Costa Madeira Image 3"
                layout="responsive"
                width={800}
                height={400}
                quality={100}
                objectFit="cover"
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3">
                <h5>Stunning Views</h5>
                <p>Enjoy breathtaking views from every corner of our residences.</p>
              </div>
            </div>
            <div className="carousel-item">
              <Image 
                src={A7} 
                alt="Costa Madeira Image 4"
                layout="responsive"
                width={800}
                height={400}
                quality={100}
                objectFit="cover"
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3">
                <h5>Prime Location</h5>
                <p>Experience the best of city living with our strategically located properties.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="mb-4">Discover Our Community</h2>
        <p className="lead mb-4 text-justify">
          At Costa Madeira, we offer more than just beautiful homes. Our community provides a vibrant, engaging environment where you can connect with like-minded individuals and enjoy a high-quality lifestyle.
        </p>
        <div className="row mb-5">
          <div className="col-md-6">
            <Image 
              src={A8} 
              alt="Community Event"
              layout="responsive"
              width={400}
              height={200}
              quality={100}
              objectFit="cover"
            />
            <h4 className="mt-3">Events & Activities</h4>
            <p className="text-justify">Our community regularly hosts events and activities designed to bring people together and foster a sense of belonging. From social gatherings to recreational activities, there's always something happening at Costa Madeira.</p>
          </div>
          <div className="col-md-6">
            <Image 
              src={A9} 
              alt="Community Amenities"
              layout="responsive"
              width={400}
              height={200}
              quality={100}
              objectFit="cover"
            />
            <h4 className="mt-3">Exclusive Amenities</h4>
            <p>Enjoy a range of exclusive amenities, including a state-of-the-art fitness center, luxurious swimming pool, and beautifully landscaped gardens. Our facilities are designed to enhance your living experience and provide a touch of luxury in every aspect of life.</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="mb-4">Pricing Plans</h2>
        <p className="lead mb-4">Choose the plan that suits your needs and start living the luxury lifestyle you deserve.</p>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm pricing-card">
              <div className="card-header bg-light">
                <h4 className="my-0 fw-normal">Basic Plan</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$500<span className="text-muted">/month</span></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>1 Bedroom</li>
                  <li>1 Bathroom</li>
                  <li>Basic Amenities</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Sign up</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm pricing-card">
              <div className="card-header bg-light">
                <h4 className="my-0 fw-normal">Standard Plan</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$750<span className="text-muted">/month</span></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>2 Bedrooms</li>
                  <li>2 Bathrooms</li>
                  <li>Standard Amenities</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Sign up</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm pricing-card">
              <div className="card-header bg-light">
                <h4 className="my-0 fw-normal">Premium Plan</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$1000<span className="text-muted">/month</span></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>3 Bedrooms</li>
                  <li>3 Bathrooms</li>
                  <li>Premium Amenities</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
