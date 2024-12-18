<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Mamzi (Mohammadreza) Osouli</strong>, a software developer based on Calgary, born and raised in Iran.
      <br />I have a Master's degree in Computer Science and I've been working as a software developer for more than 5 years.
      <br />I am a backend developer with a focus on Node.js and Python. I have experience with both SQL and NoSQL databases.
      <br />I got my master's degree in Computer Science from the University of Calgary, where I learned graphics programming and machine learning.
      <br />
      <br />Right now I'm trying to use the skills I learned in school to join a gaming or animation company as a software developer.
<!--      <router-link to="/contact">contact me</router-link>.-->
      <br />
      <br />Besides programming, I like to play video games, watch movies, take photos, and take care of my plants.
      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF </a>
<!--        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>-->
        <div style="clear:both"></div>
      </div>
    </div>

    <img class="photo" src="img/Mamzi-real.jpg" alt="Photo of me" />

  <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>University of Calgary</h3>
      <h4>Sep 2021 - Dec 2024</h4>

      <div>Research assistant in Graphics and Interactive Visualization (GIV) lab.
        <br /> Working on many different graphics projects, including physical-based animations, and 3D modeling.
      </div>

      <div class="tech-stack">C++, OpenGL, Boost, Eigen, Python, TensorFlow</div>


      <h3>Widenode</h3>
      <h4>July 2022 - Present</h4>

      <div>Widenode is a platform for unified data governance, automatic  APIs, and robust scaling of databases.</div>

      <div class="tech-stack">Node.js, TypeScript, MongoDB, Vue3, Rust </div>

      <h3>Tapsi</h3>
      <h4>Feb. 2020 - July 2021</h4>

      <div>TAPSI is the fastest growing mobile transportation platform in Iran.</div>

      <div class="tech-stack">Node.js, TypeScript, MongoDB, PostgreSQL, Redis, RabbitMQ, Docker, Kubernetes</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming</h3>
        <SkillRate name="C++" :rate="5" />
        <SkillRate name="OpenGL" :rate="5" />
        <SkillRate name="Boost/ Math libraries" :rate="5" />
        <SkillRate name="Python" :rate="5" />
        <SkillRate name="Javascript/Typescript" :rate="5" />
        <SkillRate name="Postgres/MongoDB" :rate="5" />
      </div>

      <div class="skill-set">
        <h3>Soft Skills</h3>
        <SkillRate name="Team work" :rate="5" />
        <SkillRate name="Working independently" :rate="5" />
        <SkillRate name="Communication" :rate="5" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>M.Sc. of Computer Science</h3>
      <h4>University of Calgary</h4>
      <div>GPA: 3.84/4</div>

      <h3>B.Sc. of Computer Science</h3>
      <h4>University of Tehran</h4>
      <div>GPA: 3.55/4</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Full Proficiency</div>

      <h3>Farsi</h3>
      <div>Native Speaker</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Photography</h3>
        <div>I do photography as a hobby. I like to take photos of night skies and portraits.</div>

        <h3>I 🧡 Movies</h3>
        <div>I watch a lot of movies. I like to watch movies from different countries and genres.</div>

        <h3>I 💛 Video Games</h3>
        <div>I play video games in my free time. I like to play games with a good story and beautiful graphics.</div>

        <h3>I 💚 Plants</h3>
        <div> I have a lot of plants in my apartment. I like to take care of them and watch them grow.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
    width: 250px;
    border-radius: 50%;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>