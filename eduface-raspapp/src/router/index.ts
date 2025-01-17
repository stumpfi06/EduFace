import { createRouter, createWebHistory } from "vue-router";
import FaceRecognitionView from "../views/FaceRecognitionView.vue";

const routes = [
  {
    path: "/",
    name: "Attendance",
    component: FaceRecognitionView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
