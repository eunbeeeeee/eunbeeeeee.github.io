import React from 'react';
import "./hero.css";
import { Typewriter } from 'react-simple-typewriter';
// import { DiAndroid, DiJava, DiReact } from "react-icons/di";
// import { RiFacebookCircleLine, RiTwitterLine, RiKakaoTalkLine } from "react-icons/ri";
const Hero = () => {
    return (
        <>
          <section className="hero" id="hero">
              <div className="container top">
                 <div className="left top">
                    <h3>welcome to my portfolio</h3>
                    <h1>
                        Hi, I'm <span>EunBee</span>
                    </h1>
                    <h2>
                       <span>
                           <Typewriter words={[" Front-end developer&Web publisher.","안녕하세요, 디자인과 코드의 조화로 새로운 웹 경험을 만들어내는 것을 희망하는 윤은비입니다."]} 
                                       loop cursor cursorStyle="|"
                                       delaySpeed={1000} typeSpeed={70} deleteSpeed={50}
                           />
                       </span>
                    </h2>
                    <p>
                    다양한 전산 시스템을 사용하며 나만의 궁금증을 탐구하던 중, 사용자로서의 관점에서 소프트웨어 개발에 흥미를 느껴,
                     프론트엔드 개발자 & 웹퍼블리셔로의 꿈을 키우게 되었습니다. 학원에서는 풀스택 개발의 넓은 범위에서 백엔드와 프론트엔드를 모두 깊이 배웠으며, 꾸준한 노력으로 프론트엔드 개발 & 웹퍼블리셔에 대한 열정을 키워나가고 있습니다
                    </p>
                 </div>
              </div>            
          </section>
        </>
    );
};

export default Hero;