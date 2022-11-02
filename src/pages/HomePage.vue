<template>
  <div class="pageWrapper">
    <img class="bg-home" src="~@/assets/bg-home.jpg" alt="backgr" />
    <div class="home-content">
      <h1 class="home-title"></h1>
      <!-- <nav>
        <ul>
          <li><button class="home-nav-playbtn">JOUER</button></li>
        </ul>
      </nav> -->
      <div id="flash-container">
        <div>
          <p>GHOST HUNTER EXTRA !<span>best game</span></p>
        </div>
        <div>
          <p>le jeux le plus<span>EFFRAYANT</span></p>
        </div>
        <div>
          <p><span>fait par des</span> EXPERT </p>
        </div>
        <div>
          <p>We See<span>you</span></p>
        </div>
        <div>
          <p>Moody<span>atmosphere</span></p>
        </div>
        <div>
          <p><span>Stay</span> Awake </p>
        </div>
        <div>
          <p>Creepy<span>style</span></p>
        </div>
        <div>
          <p><span>Look</span>Behind You</p>
        </div>
      </div>
      <img src="~@/assets/ghost.png" alt="ghost" />
      <div class="play-btn-container">
        <a href="/play"><button class="play-btn">JOUER</button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.play-btn-container {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.play-btn {
  padding: 15px 20px;
  font-family: 'Nosifer', cursive;
  transition: transform 0.5s ease-in;
}

.play-btn:hover {
  transform: scale(1.5);
  transition: transform ease-in-out 0.5s;
}

.pageWrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.bg-home {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.home-content {
  /*background-color: #42b983;*/
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 150px;
  padding: 50px 15px;
}

.home-title {
  text-align: center;
  margin-bottom: 50px;
  width: 100%;
}

@media (min-width: 320px) {
  .home-content {
    width: 60%;
  }
}

.home-nav-playbtn {
  font-size: 50px;
}

#flash-container {
  font-size: 4em;
  margin: 0 auto;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 200px;
  font-family: 'Nosifer', cursive;
}

#flash-container span {
  display: block;
  font-size: .4em;
  opacity: .8;
}

#flash-container div {
  position: absolute;
  margin: 2vh 0;
  opacity: 0;
  animation: switch 32s linear infinite;
}

#flash-container div:nth-child(2) {
  animation-delay: 4s
}

#flash-container div:nth-child(3) {
  animation-delay: 8s
}

#flash-container div:nth-child(4) {
  animation-delay: 12s
}

#flash-container div:nth-child(5) {
  animation-delay: 16s
}

#flash-container div:nth-child(6) {
  animation-delay: 20s
}

#flash-container div:nth-child(7) {
  animation-delay: 24s
}

#flash-container div:nth-child(8) {
  animation-delay: 28s
}

@keyframes switch {
  0% {
    opacity: 0;
    filter: blur(3px);
    transform: scale(.95);
    text-shadow: 40px 42px 2px rgba(0, 0, 0, .2)
  }

  3% {
    opacity: .7;
    filter: blur(2px);
    transform: scale(1);
    text-shadow: 40px 42px 2px rgba(0, 0, 0, .1)
  }

  6% {
    opacity: .7;
    filter: blur(2px);
    transform: scale(1);
    color: red;
    text-shadow: 40px 42px 2px rgba(0, 0, 0, .1)
  }

  10% {
    opacity: .7;
    filter: blur(3px);
    transform: scale(1.1);
    color: #000;
    text-shadow: 40px 42px 2px rgba(0, 0, 0, .1)
  }

  10.1% {
    opacity: .8;
    filter: blur(2px);
    transform: scale(2);
    color: red;
    text-shadow: -40px -142px 2px rgba(0, 0, 0, .1)
  }

  10.2% {
    opacity: .8;
    filter: blur(2px);
    transform: scale(2);
    color: red;
    text-shadow: 40px 42px 2px rgba(0, 0, 0, 0, .1)
  }

  11.1% {
    opacity: .8;
    filter: blur(2px);
    transform: scale(2);
    color: #111;
    ;
    text-shadow: 40px 42px 2px rgba(0, 0, 0, .1)
  }

  11.2% {
    opacity: .7;
    filter: blur(2px);
    transform: scale(2);
    color: red;
    text-shadow: 90px 52px 2px rgba(0, 0, 0, .1)
  }

  12% {
    opacity: .7;
    filter: blur(5px);
    transform: scale(1.1);
    color: black;
    text-shadow: 90px 52px 2px rgba(0, 0, 0, 0)
  }

  12.1% {
    opacity: .7;
    filter: blur(5px);
    transform: scale(1.1);
    color: #000;
    text-shadow: -90px -52px 2px rgba(0, 0, 0, 0)
  }

  13% {
    opacity: 0;
    filter: blur(3px);
    transform: scale(1);
    color: #000;
    text-shadow: 40px 42px 2px
  }

  12.1% {
    opacity: .7;
    filter: blur(5px);
    transform: scale(1.1);
    color: #000;
    text-shadow: -90px -52px 2px rgba(0, 0, 0, 0)
  }

  80% {
    opacity: 0
  }

  100% {
    opacity: 0
  }
}

@keyframes flicker {
  0% {
    background: #fff;
    opacity: 0
  }

  10% {
    background: #fff;
    opacity: 0
  }

  10.1% {
    background: #fff;
    opacity: 1
  }

  10.2% {
    background: #fff;
    opacity: 0
  }

  23% {
    background: #fff;
    opacity: 0
  }

  23.1% {
    background: #fff;
    opacity: 1
  }

  23.2% {
    background: #fff;
    opacity: 0
  }

  35% {
    background: #fff;
    opacity: 0
  }

  35.1% {
    background: #fff;
    opacity: 1
  }

  35.2% {
    background: #fff;
    opacity: 0
  }

  48% {
    background: #fff;
    opacity: 0
  }

  48.1% {
    background: #fff;
    opacity: 1
  }

  48.2% {
    background: #fff;
    opacity: 0
  }

  60% {
    background: #fff;
    opacity: 0
  }

  60.1% {
    background: #fff;
    opacity: 1
  }

  60.2% {
    background: #fff;
    opacity: 0
  }

  72% {
    background: #fff;
    opacity: 0
  }

  72.1% {
    background: #fff;
    opacity: 1
  }

  72.2% {
    background: #fff;
    opacity: 0
  }

  85% {
    background: #fff;
    opacity: 0
  }

  85.1% {
    background: #fff;
    opacity: 1
  }

  85.2% {
    background: #fff;
    opacity: 0
  }

  99% {
    background: #fff;
    opacity: 0
  }

  99.1% {
    background: #fff;
    opacity: 1
  }

  99.2% {
    background: #fff;
    opacity: 0
  }

  100% {
    background: #fff;
    opacity: 0
  }
}
</style>
