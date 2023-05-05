import React from "react";
import {
  ContactContainer,
  ContactTitle,
  ContactList,
  ContactLink,
} from "./styles";
import {
  FaEnvelope,
  FaDiscord,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact me with</ContactTitle>
      <ContactList>
        <li>
          <ContactLink href="mailto:rjoaoprofissional0112@gmail.com" color="#d54e21">
            <FaEnvelope />
          </ContactLink>
        </li>
        <li>
          <ContactLink
            href="https://discordapp.com/users/383003488055197697"
            color="#7289da"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </ContactLink>
        </li>
        <li>
          <ContactLink
            href="https://twitter.com/Rocha13Dev"
            color="#1da1f2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </ContactLink>
        </li>
        <li>
          <ContactLink
            href="https://www.linkedin.com/in/joão-rocha-905864274/"
            color="#0077b5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </ContactLink>
        </li>
        <li>
          <ContactLink
            href="https://github.com/Rocha1313"
            color="#24292e"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </ContactLink>
        </li>
      </ContactList>
    </ContactContainer>
  );
}

export default Footer;
