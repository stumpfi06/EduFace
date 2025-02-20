import { createRouter, createWebHistory } from "vue-router";
import FaceRecognitionView from "../views/FaceRecognitionView.vue";
import NewFaceView from "../views/NewFaceView.vue";

const routes = [
  {
    path: "/",
    name: "Attendance",
    component: FaceRecognitionView,
  },
  {
    path:"/upload",
    name:"Neues Gesicht",
    component: NewFaceView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
