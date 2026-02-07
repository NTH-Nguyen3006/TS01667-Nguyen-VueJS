<template>
  <div id="app">
    <header>
      <h1>FPT Polytechnic - Lab 8</h1>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
nav {
  margin-bottom: 20px;
}

nav a {
  margin-right: 10px;
  color: blue;
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
  color: red;
}
</style>