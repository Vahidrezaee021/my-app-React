import "./Service.css";
import ServiceItem from "./ServiceItem";

function Service() {
  let services = [
    {
      id: 1,
      serviceIcon: "bi bi-briefcase",
      serviceTitle: "WEB DESIGN",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      id: 2,
      serviceIcon: "bi bi-card-checklist",
      serviceTitle: "WEB DEVELOPMENT",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      id: 3,
      serviceIcon: "bi bi-bar-chart",
      serviceTitle: "PHOTOGRAPHY",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      id: 4,
      serviceIcon: "bi bi-binoculars",
      serviceTitle: "RESPONSIVE DESIGN",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      id: 5,
      serviceIcon: "bi bi-brightness-high",
      serviceTitle: "GRAPHIC DESIGN",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
    {
      id: 6,
      serviceIcon: "bi bi-calendar4-week",
      serviceTitle: "MARKETING SERVICES",
      serviceInfo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.",
    },
  ];
  return (
    <section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">
        {
          services.map(service => <ServiceItem key={service.id} {...service} />)
        }
        </div>
      </div>
    </section>
  );
}

export default Service;
