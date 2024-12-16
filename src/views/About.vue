<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Mamzi</strong>, a software developer based in <strong>Calgary</strong>, Alberta.
        I've been working in the industry for over 5 years now, and I've been enjoying every bit of it.
        I spend my days working on graphics and physical simulations, and my nights working on games and other fun stuff.
        In past lives, I've worked on backend systems, web applications, and even a bit of mobile development, but I've always found myself coming back to graphics and games.
        This is more or less my portfolio, where I keep track of the things I've done and the things I'm working on.
      </div>

      <div style="margin-top: 20px;">I've worked on some <router-link to="/projects">projects</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> in game or animation industry. You can reach me at <a href="mailto:mohammadreza.osouli@gmail.com">Mohammadreza.Osouli@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

      <img class="photo" src="img/mamzi.jpg" alt="Avatar of Me" />

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>