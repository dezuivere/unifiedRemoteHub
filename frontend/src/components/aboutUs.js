import React from "react";
import styled from "styled-components";
import Navbar from "./navbar"

const BlogContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 10px;
  max-width: 800px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;
`;

const BlogTitle = styled.div`
  font-size: 21px;
  padding: 20px;
  background-color: purple;
  color: white;
  font-family: "Pacifico", cursive;
`;

const BlogContent = styled.div`
  font-size: 15px;
  line-height: 1.6;
  padding: 20px;
`;

const AboutHeading = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
  font-family: "Pacifico", cursive;
`;

function About() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <BlogContainer>
        <BlogGrid>
          <BlogTitle className="purple">
            <AboutHeading>About Us</AboutHeading>
            "Nurturing Innovation: Our Journey in Crafting a Dynamic
            Workspace App"
          </BlogTitle>
          <BlogContent>
            {/* <h5>Introduction :</h5> */}
            <p>
              <br></br>
              <strong id="first-text" className="black-text">
                W
              </strong>
              e are a team of passionate and dedicated individuals who have come
              together to create something truly remarkable. Our team has worked
              tirelessly on this project, each contributing their unique skills
              and expertise.
            </p>

            <h5>
              Building the Workspace App: Seeds of Creativity and Innovation:
            </h5>
            <p>
              Our frontend developers, with their keen eye for design and user
              experience, have been instrumental in creating an intuitive and
              user-friendly interface. Their dedication and commitment to
              excellence have resulted in a frontend that is not only visually
              appealing but also easy to navigate. Their innovative ideas and
              problem-solving abilities have greatly enhanced the user
              experience of our application. On the backend, our developers have
              worked diligently to ensure the smooth operation of our
              application. Their proficiency in handling data and their knack
              for problem-solving have been instrumental in building a robust
              and efficient backend. Their deep understanding of server-side
              operations and their ability to quickly troubleshoot and resolve
              issues have greatly contributed to the stability and performance
              of our application.
            </p>

            <h5>Lessons Gained: Wisdom through Experience:</h5>
            <p>
              Together, we have successfully developed a comprehensive web
              application that addresses the needs of remote teams, a testament
              to our collective effort and dedication. This application is built
              using the MERN stack, ensuring a robust and scalable solution for
              remote teams. It's a one-stop solution for remote teams to
              collaborate, communicate, and work efficiently.
            </p>
            <h5>Closing Thoughts: A Grateful Farewell and New Beginnings:</h5>
            <p>
              As we conclude, we would like to express our heartfelt gratitude
              to the coordinators of the hackathon for providing us with this
              opportunity. This platform has not only given us the opportunity
              to showcase our skills but also to learn and grow as a team. We
              are truly grateful for this enriching experience. Thank you.
            </p>
            <ul className=" grey-text right hide-on-med-and-down">
              <h4>
                <br></br>-TEAM QuadTechy
              </h4>
            </ul>
          </BlogContent>
        </BlogGrid>
      </BlogContainer>
    </div>
  );
}

export default About;
