import {MotionConfig} from "motion/react";
import React from "react";import{createRoot}from"react-dom/client";import App from"./App";import"./figma.css";import"./styles.css";import"./mobile.css";import"./layout.css";import"./responsive.css";import"./motion/motion.css";import"./motion/scroll-scenes.css";createRoot(document.getElementById("root")!).render(<React.StrictMode><MotionConfig reducedMotion="user"><App/></MotionConfig></React.StrictMode>);
import "./review.css";

import "./mobile-motion.css";
