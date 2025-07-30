import React from "react";
import Html from "./html";
import Bootstrap from "./bootstrap";
import Css from "./css";
import Tailwind from "./tailwind";
import Sass from "./sass";
import Vue from "./vue";
import Express from "./express";
import Javascript from "./javascript";
import Nodejs from "./nodejs";
import Reacticon from "./react";
import Framer from "./framer";
import Gitlab from "./gitlab";
import Nextjs from "./nextjs";
import Git from "./git";
import Bitbucket from "./bitbucket";
import Figma from "./figma";
import Flutter from "./flutter";
import Typescript from "./typescript";

const memo = (Comp) => React.memo(Comp);

export const Icons = {
  Html: memo(Html),
  Bootstrap: memo(Bootstrap),
  Css: memo(Css),
  Tailwind: memo(Tailwind),
  Sass: memo(Sass),
  Vue: memo(Vue),
  Express: memo(Express),
  Javascript: memo(Javascript),
  Nodejs: memo(Nodejs),
  Reacticon: memo(Reacticon),
  Framer: memo(Framer),
  Gitlab: memo(Gitlab),
  Nextjs: memo(Nextjs),
  Git: memo(Git),
  Bitbucket: memo(Bitbucket),
  Figma: memo(Figma),
  Flutter: memo(Flutter),
  Typescript: memo(Typescript),
}
