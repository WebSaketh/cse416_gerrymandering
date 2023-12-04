import axios from "axios";

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getInitialization = () => api.get(`/initialize/`);

export const getState = (state) => api.get("/initialize/" + state);

export const getClusters = (stateName, ensembleName, distanceMeasure) =>
  api.get(
    "/cluster/getAll/" + stateName + "/" + ensembleName + "/" + distanceMeasure
  );

export const getDistrictPlanInformationForSelectedCluster = (clusterId) => {
  api.get("/dp/getDistrictPlanInfo/" + clusterId);
};

export const getDistrictPlanGeoJson = (dpId) => {
  api.get("/dp/getDistrictPlan/" + dpId);
};

const apis = {
  getInitialization,
  getState,
  getClusters,
  getDistrictPlanInformationForSelectedCluster,
};

export default apis;