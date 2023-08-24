<template>
  <div class="container">
    <img :src="url" alt="Image" class="img" />
    <h1 class="clickable" @click="goToWikipedia">{{ position }} {{ name }}</h1>
    <button class="refresh-button" @click="fetchRandomPlayer">
      {{ buttonName }}
    </button>
  </div>
  <footer class="footer">
    <p>
      <a href="https://github.com/kgnylm" target="_blank">GitHub</a> |
      <a href="https://x.com/kgnylm" target="_blank">Twitter</a> |
      <a href="https://instagram.com/kgn.ylm" target="_blank">Instagram</a> |
      <a href="https://www.linkedin.com/in/mustafakaganyalim/" target="_blank"
        >LinkedIn</a
      >
    </p>
  </footer>
</template>

<script>
import supabase from "./supabase/supabase.js";
export default {
  data() {
    return {
      url: "",
      name: "",
      position: "",
      buttonName: "Generate",
      loaded: false,
    };
  },
  created() {
    this.fetchRandomPlayer();
    window.addEventListener("keydown", this.handleKeyPress);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  },
  methods: {
    async fetchRandomPlayer() {
      const randomId = Math.floor(Math.random() * 922) + 1;
      const { data, error } = await supabase
        .from("player")
        .select("*")
        .eq("id", randomId)
        .single();
      if (error) {
        return;
      } else {
        this.url = data.link;
        this.name = data.name;
        this.position = data.pos;
        this.buttonName = "Generate";
        this.loaded = true;
      }
    },
    goToWikipedia() {
      if (this.name) {
        const playerName = this.name.replace(" ", "_");
        window.open(`https://en.wikipedia.org/wiki/${playerName}`);
      }
    },
    handleKeyPress(e) {
      if (e.key === "Enter" || e.key === " ") {
        this.fetchRandomPlayer();
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.html,
body {
  background-color: #fef9f7;
  height: 100%;
  margin: 0;
  padding: 0;
}

.clickable {
  cursor: pointer;
}

.refresh-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #5f7ff5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.footer {
  background-color: #5f7ff5;
  color: white;
  padding: 10px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 20px;
}
</style>
