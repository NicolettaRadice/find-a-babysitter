<template>
    <div>
        <button v-if="!link" :class="mode">
            <slot></slot>
        </button>
        <router-link v-else :to="to" :class="mode">
            <slot></slot>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #146da8;
  border: 1px solid #146da8;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #146da8;
  border-color: #146da8;
}

.flat {
  background-color: transparent;
  color: #146da8;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #146da8;
  color: #146da8;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #1a99ee;
  color: white;
}
</style>