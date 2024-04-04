import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AgentDetails from "@/views/AgentDetails.vue";
import AgentView from "@/views/AgentView.vue";
import BlogSingle from "@/views/BlogSingle.vue";
import BlogView from "@/views/BlogView.vue";
import ChangeLog from "@/views/ChangeLog.vue";
import ContactUs from "@/views/ContactUs.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import LicensesView from "@/views/licensesView.vue";
import AboutView from "@/views/AboutView.vue";
import PasswordView from "@/views/PasswordView.vue";
import PropertyView from "@/views/PropertyView.vue";
import PropertySingl from "@/views/PropertySingl.vue";
import ServicesView from "@/views/ServicesView.vue";

const routes = [
  {
    path: "/",
    name: "home-view",
    component: HomeView,
  },
  {
    path: "/about-view",
    name: "about-view",
    component: AboutView,
  },
  {
    path: "/agent-details",
    name: "agent-details",
    component: AgentDetails,
  },
  {
    path: "/agent-view",
    name: "agent-view",
    component: AgentView,
  },
  {
    path: "/blog_single",
    name: "blog_single",
    component: BlogSingle,
  },
  {
    path: "/blog-view",
    name: "blog-view",
    component: BlogView,
  },
  {
    path: "/change-log",
    name: "change-log",
    component: ChangeLog,
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: ContactUs,
  },
  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage,
  },
  {
    path: "/licen-view",
    name: "licen-view",
    component: LicensesView,
  },
  {
    path: "/pass-view",
    name: "pass-view",
    component: PasswordView,
  },
  {
    path: "/property-single",
    name: "property-single",
    component: PropertySingl,
  },
  {
    path: "/property-view",
    name: "property-view",
    component: PropertyView,
  },
  {
    path: "/services_view",
    name: "services_view",
    component: ServicesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
