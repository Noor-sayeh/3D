import { create } from "zustand";

import { MeshStandardMaterial } from "three";
import { randInt } from "three/src/math/MathUtils.js";
import axios from "axios";

const apiUrl = "http://192.168.1.114:5000";

 const useConfiguratorStore = create((set) => ({
  categories: [],
  currentCategory: null,
  assets: [],
  fetchCategories: async() =>{},
}));