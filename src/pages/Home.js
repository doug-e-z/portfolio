import { Col, Container, Row, Image } from "react-bootstrap/";
import sheridan from "../static/images/kali2.jpeg";
import "../static/css/home.css";

const Home = () => {
  return (
    <div>
      <Container>
        <Row className="home-row border-dark border-top rounded-top">
          <h4 className="header-title">About Me</h4>
          <Col>
            <div>
              <Image
                src={sheridan}
                className="sheridan"
                alt="Sheridan College"
              ></Image>
              <p>
                I attended Algonquin College in Ottawa, Ontario when I was
                younger and took a program called Game Development. That is
                where I got to learn about multi-media and design principles as
                well as lower-level programming languages for computer graphics.
                During that time, I didn't know what I wanted to do in life,
                however, I did grow found of problem solving. Realizing that
                software can help fill that void. I decided to embark on a
                mission to learn more.
              </p>
            </div>

            <div>
              <p>
                It wasn't until a few years later that I packed my stuff and
                move to Oakville, Ontario to pursue a degree in Computer Science
                at Sheridan College. The program focused on Programming
                Principles, Networks, Scripting and Web Languages, Interactive
                Application Development including Android and IOS, Database
                Modeling, Operating Systems and Security, Data Structures and
                Algorithms, Software Design, 3D Graphics Principles, Artificial
                Intelligence, Machine Learning Techniques, Cloud Computing and
                Virtualization, Lots of Math, and finally Software Engineering
                which remains as my favorite course.
              </p>
            </div>

            <div>
              <p>
                Sheridan College as allowed me to become a well-rounded person
                and I am very grateful. Having been recruited directly after
                graduation. I was able to learn a lot about various areas in
                Network, Security, and Software Development. I had the chance to
                wear many hats and participate in various projects. I became a
                much stronger researcher, system administrator, and scripter for
                system automation.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="home-row border-dark border-top rounded-top">
          <h4 className="header-title">About The Website</h4>
          <Col>
            <div>
              <p>
                Having been recruited directly after school, I did not have a
                chance to put myself out there. The goal is to be able to
                provide context of my capabilities as a Software Developer. This
                site will host mainly personal projects as I cannot disclose or
                share the work performed under my contractual obligation.
              </p>
            </div>
            <div>
              <p>
                This site is built using React.js framework, and is currently
                being hosted by Netlify.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
