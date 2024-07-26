import Image from "next/image";
import A1 from "../../img/RENDERS/P-1.jpg";
import A2 from "../../img/RENDERS/P-3.jpg";
import A3 from "../../img/RENDERS/P-3.jpg";
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
    <>
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

      {/* Sección de Beneficios Destacados */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ color: '#F2E8C9' }}>Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="benefit-item text-center">
              <h4 style={{ color: '#F2E8C9' }}>Expert Team</h4>
              <p style={{ color: '#F2E8C9' }}>Our team of experts is dedicated to helping you find the perfect property.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="benefit-item text-center">
              <h4 style={{ color: '#F2E8C9' }}>Customer Satisfaction</h4>
              <p style={{ color: '#F2E8C9' }}>We prioritize our clients' needs and strive to exceed expectations.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="benefit-item text-center">
              <h4 style={{ color: '#F2E8C9' }}>Quality Service</h4>
              <p style={{ color: '#F2E8C9' }}>Experience top-notch service with our dedicated team and resources.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Preguntas Frecuentes */}
      <div className="container py-5">
        <h2 className="text-center mb-4" style={{ color: '#F2E8C9' }}>Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What types of properties do you offer?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                We offer a wide range of properties, including apartments, houses, and luxury estates.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How can I contact your agents?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                You can contact our agents through our website, phone, or by visiting our office.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                What financing options are available?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                We provide various financing options including mortgages and flexible payment plans.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
