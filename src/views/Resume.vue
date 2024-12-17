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
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
<!--        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>-->
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/Mamzi-real.jpg" alt="Photo of John" />
    </div>

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
        <h3>Lethal</h3>
        <SkillRate name="Handguns" :rate="5" />
        <SkillRate name="Rifles" :rate="5" />
        <SkillRate name="Shotguns" :rate="5" />
        <SkillRate name="Machineguns" :rate="5" />
        <SkillRate name="Missile launchers" :rate="5" />
        <SkillRate name="Knives" :rate="5" />
        <SkillRate name="Hand to hand combat" :rate="5" />
      </div>

      <div class="skill-set">
        <h3>Non-lethal</h3>
        <SkillRate name="Sneaking" :rate="1" />
        <SkillRate name="Negotiation" :rate="1" />
        <SkillRate name="Seduction" :rate="1" />
        <SkillRate name="Sense of humor" :rate="2" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Kindergarten - 1985</h3>
      <h4>Kindergarten degree</h4>
      <div>Specialty in bullying and fighting (58 wins, 58 K-O, 0 losses)</div>

      <h2>Languages</h2>

      <h3>American</h3>
      <div>Basic knowledge but I know lots of one-liners</div>

      <h3>That's it</h3>
      <div>Who needs another language when you speak American?</div>


      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Violence</h3>
        <div>I find it really soothing to just shoot at bad guys</div>

        <h3>I 🧡 Sports</h3>
        <div>I used to be thin but then I ingested 10 kilos of steroids and proteins a day while doing 1000 push-ups.</div>

        <h3>I 💛 Politics</h3>
        <div>I hope I can have a career here someday but I might have temper issues.</div>

        <h3>I 💚 Flowers</h3>
        <div>Especially the big ones, with the trunk and leaves.</div>

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
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>