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
                           <Typewriter words={[" Front-end developer.","안녕하세요 프론트엔드 개발자를 꿈꾸는 윤은비입니다."]} 
                                       loop cursor cursorStyle="|"
                                       delaySpeed={1000} typeSpeed={70} deleteSpeed={50}
                           />
                       </span>
                    </h2>
                    <p>
                    저는 여러 전산을 사용하면서 사용자로써의 궁금증이 생겨 개발자라는 직업에 관심을 갖게 되었습니다.
                    이후 학원에서 풀스택 반에서 백, 프론트 두가지를 모두 배우며 프론트엔드 개발자를 꿈꾸며 꾸준히 노력하고 있습니다.
                    </p>
                 </div>
              </div>            
          </section>
        </>
    );
};

export default Hero;