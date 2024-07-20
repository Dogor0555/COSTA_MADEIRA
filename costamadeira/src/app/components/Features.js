import Image from "next/image";
import A5 from "../../img/RENDERS/P-1.jpg";
import "./Features.css";

export default function Features() {
  return (
    <div className="py-5" style={{ backgroundColor: '#2A1A0A' }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: '#F2E8C9' }}>Our Features</h2>
        <div className="row">
          {['Wide Range of Properties', 'Trusted Agents', 'Easy Financing'].map((title, index) => (
            <div className="col-md-4" key={index}>
              <div className="card-wrapper">
                <div className="card feature-card mb-4">
                  <div className="card-front">
                    <div className="card-body d-flex flex-column align-items-center">
                      <div className="img-wrapper">
                       <Image src={A5} alt="Feature Image" layout="fill" objectFit="contain" className="mb-3" />
                      </div>
                      <h5 className="card-title" style={{ color: '#F2E8C9' }}>{title}</h5>
                      <p className="card-text" style={{ color: '#F2E8C9' }}>We offer {title.toLowerCase()}.</p>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="card-body d-flex flex-column align-items-center">
                      <h5 className="card-title" style={{ color: '#F2E8C9' }}>More about {title}</h5>
                      <p className="card-text" style={{ color: '#F2E8C9' }}>Additional information about {title.toLowerCase()}.</p>
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
