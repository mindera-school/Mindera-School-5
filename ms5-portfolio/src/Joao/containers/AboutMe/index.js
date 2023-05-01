import React from "react";
import { Container, Content, Image } from "./styles";
import profileImage from "../../images/profileImage.jpeg";

function AboutMe() {
  const calculateAge = (myBirthday) => {
    const birthDate = new Date(myBirthday);
    const currentDate = new Date();
    const years = currentDate.getFullYear() - birthDate.getFullYear();
    const months = currentDate.getMonth() - birthDate.getMonth();
    const days = currentDate.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      return years - 1;
    } else {
      return years;
    }
  };

  const myAge = calculateAge("2003-07-01");

  return (
    <Container id="about-me">
      <Image src={profileImage} alt="João Rocha" />
      <Content>
        <h1>
          Hello! I'm <span>João Rocha</span>
        </h1>
        <p>
          I'm a <span>back-end web developer</span> from Portugal with a strong
          passion for <span>technology</span> and <span>gaming</span>. At the
          age of {myAge}, I've been captivated by the power of technology to
          transform lives and solve complex problems since I began studying
          programming at 15. This passion led me to pursue a career in web
          development.
        </p>
        <p>
          With a solid foundation in <span>Java</span> and extensive experience
          working with back-end technologies like{" "}
          <span>Spring Boot, JPA, and PostgreSQL</span>, I can build robust and
          scalable solutions for a wide range of applications. While my primary
          focus is on back-end development, I have a basic understanding of
          front-end technologies such as <span>React and CSS</span>, which
          enables me to contribute to full-stack projects when necessary.
        </p>
        <p>
          As a lifelong learner, I'm committed to staying up-to-date with the
          latest industry trends and best practices. I'm always eager to take on
          new challenges and seize opportunities to grow both personally and
          professionally as a skilled web developer.
        </p>
        <p>
          I thrive in collaborative environments and look forward to working on
          innovative projects alongside other talented professionals. If you're
          seeking a dedicated and passionate back-end developer with some
          front-end knowledge to join your team or contribute to your next
          project, please don't hesitate to reach out. I'm excited to connect
          and explore how my skills and enthusiasm can benefit your
          organization!
        </p>
      </Content>
    </Container>
  );
}

export default AboutMe;
