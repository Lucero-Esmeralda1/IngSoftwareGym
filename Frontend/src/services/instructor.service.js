import api from "./api";

export const getMisClases = () => {
  return api.get("/api/clases/mis-clases");
};
