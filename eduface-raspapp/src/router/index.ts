import { createRouter, createWebHistory } from "vue-router";
import FaceRecognitionView from "../views/FaceRecognitionView.vue";
import NewFaceView from "../views/NewFaceView.vue";
import ScanningFaceView from "../views/ScanningFaceView.vue";
import NFCView from "../views/NFCView.vue";

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
  {
    path: "/scanning-face",
    name:"Scanning Face",
    component: ScanningFaceView,
  },
  {
    path:"/nfc",
    name:"NFC",
    component: NFCView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
