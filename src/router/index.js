import { createRouter, createWebHashHistory } from "vue-router";
import Detail from '../views/helpers/Detail.vue';
import List from '../views/helpers/List.vue';
import Registration from '../views/helpers/Registration.vue';
import Contact from '../views/requests/Contact.vue';
import RequestsReceived from '../views/requests/RequestReceived.vue'
import NotFound from '../views/NotFound.vue';


const routes = [
  {
    path: "/",
    redirect: "/list"
  },
  {
    path: "/list",
    name: "List",
    component: List
  },
  {
    path: "/list/:id",
    name: "Detail",
    component: Detail,
    props: true,
    children: [
      {
        path: "contact",
        name: "Contact",
        component: Contact
      }
    ]
  },
  {
    path: "/register",
    name: "Register",
    component: Registration
  },
  {
    path: "/requests",
    name: "Requests",
    component: RequestsReceived
  },
  {
    path: "/:notFound(.*)",
    component: NotFound
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
