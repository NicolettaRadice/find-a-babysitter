<template>
    <header>
        <nav>
            <h1>
                <router-link to="/">Find a babysitter</router-link>
            </h1>
            <ul>
                <li>
                    <router-link to="/list">Babysitters list</router-link>
                </li>
                <li>
                    <router-link to="/requests">Requests</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style>

header {
  width: 100%;
  height: 5rem;
  background-color: #146da8;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #e7a0db;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  font-weight: 600;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #e7a0db;
}

h1 {
  margin: 0;
}

h1 a {
  color: #e7a0db;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

</style>

