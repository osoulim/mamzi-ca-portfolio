<template>
  <div>
    <h1>Other stuff</h1>

    <div style="margin-bottom: 30px;">
      Here are some of the things I've made.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import projects from "@/data/ProjectsData.ts";

export default Vue.extend({
  name: "Projects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects,
    };
  },
});
</script>
