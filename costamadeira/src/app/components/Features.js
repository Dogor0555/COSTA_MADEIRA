import Image from "next/image";
import A1 from "../../img/RENDERS/P-1.jpg";
import A2 from "../../img/RENDERS/P-3.jpg";
import A3 from "../../img/RENDERS/P-4.jpg";
import "./Features.css"; // Importa el CSS personalizado

const featuresData = [
  {
    title: 'Wide Range of Properties',
    image: A1,
    description: 'We offer a wide range of properties.',
    moreInfo: 'Additional information about our wide range of properties.'
  },
  {
    title: 'Trusted Agents',
    image: A2,
    description: 'We have trusted agents to help you.',
    moreInfo: 'Additional information about our trusted agents.'
  },
  {
    title: 'Easy Financing',
    image: A3,
    description: 'We provide easy financing options.',
    moreInfo: 'Additional information about our easy financing options.'
  }
];

export default function Features() {
  return (
    <div className="py-5" style={{ backgroundColor: '#2A1A0A' }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: '#F2E8C9' }}>Our Features</h2>
        <div className="row">
          {featuresData.map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div className="card-wrapper">
                <div className="card feature-card mb-4">
                  <div className="card-front">
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="img-wrapper mb-3">
                        <Image src={feature.image} alt={`Feature Image ${index + 1}`} layout="fill" objectFit="contain" />
                      </div>
                      <h5 className="card-title" style={{ color: '#F2E8C9' }}>{feature.title}</h5>
                      <p className="card-text" style={{ color: '#F2E8C9' }}>{feature.description}</p>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="card-body d-flex flex-column align-items-center">
                      <h5 className="card-title" style={{ color: '#F2E8C9' }}>More about {feature.title}</h5>
                      <p className="card-text" style={{ color: '#F2E8C9' }}>{feature.moreInfo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
