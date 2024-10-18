'use client'

import React, { useEffect, Suspense } from 'react'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Loading from './Loading'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeInUp)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const skillCards = document.querySelectorAll(`.${styles.skillCard}`)
    const projectCards = document.querySelectorAll(`.${styles.projectCard}`)

    skillCards.forEach((card) => observer.observe(card))
    projectCards.forEach((card) => observer.observe(card))
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <Header></Header>
        <section className={styles.banner}>
          <h1>Welcome to My Portfolio</h1>
          <p>Explore my work and skills below!</p>
        </section>

        {/* 소개 섹션 */}
        <section id="about-me" className={styles.about}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutVideo}>
              <video controls loop muted autoPlay className={styles.video}>
                <source src="/introduce.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className={styles.aboutText}>
              <h2>About Me</h2>
              <p>중부대학교 정보보호학과 강희수 입니다.</p>
              <p>
                웹보안프로그래밍 수업을 통해 웹프로그래밍 실력을 쌓고 있습니다.
              </p>
              <p>공부를 통해 좋은 웹개발자가 되기위해 노력중입니다.</p>
            </div>
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/persipica"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <img
                  src="/github-icon.png"
                  alt="GitHub"
                  className={styles.githubIcon}
                />{' '}
              </a>
              <a
                href="https://vercel.com/vivats-projects"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
              >
                <img
                  src="/vercel-icon.png"
                  alt="Vercel"
                  className={styles.vercelIcon}
                />{' '}
              </a>
            </div>
          </div>
        </section>

        <div className={styles.arrowContainer}>
          <a href="#skills" className={styles.arrowDown}>
            ↓
          </a>
        </div>

        {/* 스킬 섹션 */}
        <section id="skills" className={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.skillGrid}>
            <div className={styles.skillCard}>
              <h3>HTML5 / CSS3</h3>
              <p>웹 표준을 지키고, 반응형 웹 디자인을 할 수 있습니다.</p>
            </div>
            <div className={styles.skillCard}>
              <h3>JavaScript / TypeScript</h3>
              <p>스크립트를 활용한 간단한 기능을 만들 수 있습니다.</p>
            </div>
            <div className={styles.skillCard}>
              <h3>React</h3>
              <p>React를 활용한 홈페이지를 제작할 수 있습니다.</p>
            </div>
            <div className={styles.skillCard}>
              <h3>Next.js</h3>
              <p>Next.js를 활용한 홈페이지를 제작할 수 있습니다.</p>
            </div>
          </div>
        </section>

        {/* 프로젝트 섹션 */}
        <section id="projects" className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <img
                src="../project1.png"
                alt="Project 1"
                className={styles.projectImage}
              />
              <h3>Project 1</h3>
              <p>수업시간에 진행했던 HCJDEMO 프로젝트 입니다.</p>
              <a
                href="https://github.com/persipica/HCJDEMO2024-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                프로젝트 보러가기
              </a>
            </div>
            <div className={styles.projectCard}>
              <img
                src="/project2.png"
                alt="Project 2"
                className={styles.projectImage}
              />
              <h3>Project 2</h3>
              <p>clerk-api를 활용한 실습 사이트입니다.</p>
              <a
                href="https://github.com/persipica/clerk-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                프로젝트 보러가기
              </a>
            </div>
            <div className={styles.projectCard}>
              <img
                src="/project3.png"
                alt="Project 3"
                className={styles.projectImage}
              />
              <h3>Project 3</h3>
              <p>Next.js로 만든 중간발표용 포트폴리오 사이트입니다.</p>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                프로젝트 보러가기
              </a>
            </div>
            <div className={styles.projectCard}>
              <img
                src="../project4.png"
                alt="Project 4"
                className={styles.projectImage}
              />
              <h3>Project 4</h3>
              <p>처음 제작했던 포트폴리오 사이트 입니다.</p>
              <a
                href="https://github.com/persipica/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                프로젝트 보러가기
              </a>
            </div>
            <div className={styles.projectCard}>
              <img
                src="/project5.png"
                alt="Project 5"
                className={styles.projectImage}
              />
              <h3>Project 5</h3>
              <p>간단한 여행정보 홈페이지입니다.</p>
              <a
                href="https://github.com/persipica/webprogram-main"
                target="_blank"
                rel="noopener noreferrer"
              >
                프로젝트 보러가기
              </a>
            </div>
            <div className={styles.projectCard}>
              <img
                src="/project6.png"
                alt="Project 6"
                className={styles.projectImage}
              />
              <h3>Project 6</h3>
              <p>1학기때 만들었던 팀프로젝트입니다.</p>
              <a
                href="https://github.com/persipica/Teamfinalproject"
                target="_blank"
                rel="noopener noreferrer"
              >
                프로젝트 보러가기
              </a>
            </div>
          </div>
        </section>

        {/* Contact Me 섹션 */}
        <section id="contact" className={styles.contactMe}>
          <h2>Contact Me</h2>

          <div className={styles.contactInfo}>
            <p>
              <i className="fas fa-phone"></i> TEL : 010-8597-7633
            </p>
            <p>
              <i className="fas fa-envelope"></i> Email : likekhs0107@naver.com
            </p>
          </div>

          <form className={styles.contactForm}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="이메일을 입력하세요"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="메시지를 입력하세요"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>

        <footer className={styles.footer}>
          <p>© KHS Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </Suspense>
  )
}
