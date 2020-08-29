import React from 'react';
import MainNav from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import ProfilePic from '../assets/Images/profile.jpeg';
import './about.css';
import {Row, Col, Container} from "react-bootstrap";
import '../../src/App.css'

const About = () => (
    <div>
        <MainNav/> 
        <Container>
        <Row>
        <Col>
         <div className="col-md-8">
        <img className="profilePic" src= {ProfilePic}atl="profilepic" />
    </div>
        </Col>
        <Col>
    <div className="col-md-10 caption">
        <h5 className="bio">
                The Short
                <br/> <br/>
                Diem Ly is a software developer with a focus on front-end and back-end development.
                She works closely with her dog Theodore, who specializes in walks, siestas, and pets.
                <br/> <br/>
                The Long
                <br/> <br/>
                I was born in the jungles of Go Cong, Vietnam. The daughter of two
                hard-working immigrants turned entrepreneurs. We moved to Corpus Christi, Texas
                in 2000 where I felt carpet for the first time and lived off of chips
                because have you seen elementary school lunches? I grew up at my parent's nail
                shop where I learned hard-work, baby-sitting, and over 100 names of
                commonly used nail polishes. We saw snow for the first time and in that same
                year, we met my baby brother. I, of course, continued to grow, with many
                unsignificant things that happened in between. Many years later, I attened St. Mary's
                University in San Antonio, Texas. I intended on the covetted Pre-med degree or at least
                some doctor-y,instead I swapped major to Chemistry and graduated with a
                B.S. in Chemistry, minors in Math and Biology. That's what happens when you
                realize that fullfilment comes from more than another decade of school. However, the unforeseen
                happened and I continued to learn for almost a decade from then.
                <br/> <br/>
                With more insignicant events in between, after working for the oil field and
                then transitioning to sales operation for a small team in Dayton, Ohio. After maxing out
                my sales quota for four consecutive years, I decided to embark on a new journey.
                I got accepted into Stanford's Coding in Place Program during the COVID-19 pandemic
                and felt invigorated for the first time in a long time. For that, I am grateful.
                I enrolled in UT's Full Stack Web Developing Program and learned that sometimes
                when life gives you lemons, you realize you love lemonade. And that's the tea, well,
                I guess lemonade.
        </h5>
    </div>
    </Col>
    </Row>
    </Container>
    <Footer/>
    </div>
);

export default About;