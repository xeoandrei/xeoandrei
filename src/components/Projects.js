import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Inventory Manager",
      description: "Manage the inventory's products as administrator/staff",
      imgUrl: projImg1,
    },
    {
      title: "Point of Sale",
      description: "Have a systematic customer-business order transactions as customers",
      imgUrl: projImg2,
    },
    {
      title: "Content Management",
      description: "Capability to perform CRUD in admin page and affect the front-end",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <p>The following web projects displayed are my  
                  outputs from college and in the professional work.
                  </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">DapperDrops</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Obaya Studio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Personal Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <ProjectCard
                          title="Services Directory"
                          description="View the salon services offered, along with the taken time slots"
                          imgUrl={projImg6}
                        />
                        <ProjectCard
                          title="Appointment System"
                          description="Possesses an appointment scheduling setup connecting the admin and customers"
                          imgUrl={projImg4}
                        />
                        <ProjectCard
                          title="Account Management"
                          description="Management of content to keep the system up to date and efficient"
                          imgUrl={projImg5}
                        />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cumque quam, quod neque provident velit, rem explicabo 
                        excepturi id illo molestiae blanditiis, eligendi dicta 
                        officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
