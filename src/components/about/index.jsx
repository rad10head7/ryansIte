import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ryanwhalen.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="ryan's photo" />
              <SubTitle> Ryan with his son Halen</SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Ryan </Title>
              <Text> I'm a father, brother, son and friend who was last seen in <b className="text-primary lined-link">Abilene, Texas</b>. </Text>
              <Text> If anyone has ANY information regarding my whereabouts, PLEASE message my family on the contact link below! I've been missing for over a month and it’s not like me to just completely disappear without talking to my mother or other close friends and family members. I am a father and have two young kids that rely on me. Please help my family and the police find me. </Text>
              <Text> Thank You for your help!</Text>
              <ResumeButton href="mailto:vllalewis96@gmail.com"> Contact my Family </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
