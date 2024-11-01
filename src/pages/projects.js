import React from "react";
import { AllProjectList } from "../data/ProjectData";
import {
    Card,
    CardLeft,
    CardRight,
    TechCardContainer,
    TechCard,
    BtnGroup,
} from "../components/Projects/ProjectCard/ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";
import Header from "../components/Header/Header";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
function ProjectCard() {
    return (
        <>
            <Header toggle={false} home={false} />
            <div className="ProjectWrapper" id="projects">
                <div className="Container">
                    <div className="SectionTitle">Projects</div>
                    {AllProjectList.map((list, index) => (
                        <ScrollAnimation animateIn="fadeInLeft" key={index}>
                            <Card>
                                <CardLeft>
                                    <img src={list.img} alt={list.name} />
                                </CardLeft>
                                <CardRight>
                                    <h4>{list.title}</h4>
                                    <p>{list.description}</p>
                                    <TechCardContainer>
                                        {list.tech_stack.map((tech, index) => (
                                            <TechCard key={index}>{tech}</TechCard>
                                        ))}
                                    </TechCardContainer>
                                    <BtnGroup>
                                        {list.github_url.length > 0 &&
                                            <a
                                                className="btn SecondaryBtn btn-shadow"
                                                href={list.github_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Github
                                            </a>
                                        }
                                        {list.demo_url.length > 0 &&
                                            <a
                                                className="btn PrimaryBtn btn-shadow"
                                                href={list.demo_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Demo ➜
                                            </a>
                                        }
                                    </BtnGroup>
                                </CardRight>
                            </Card>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
            <ScrollToTop />
        </>
    );
}

export default ProjectCard;
