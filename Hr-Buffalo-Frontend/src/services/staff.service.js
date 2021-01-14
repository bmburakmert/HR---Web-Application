import http from "../http-common";

class StaffDataService {
  getAll() {
    return http.get("/users");
  }

  getOne(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/users", data);
  }
  
  updateOneBasic(id, data) {
    return http.put(`/basic/${id}`, data);
  }

  updateOneUser(id, data) {
    return http.put(`/users/${id}`, data);
  }
  
  updateOneUserPosition(id, data) {
    return http.put(`/users/position/${id}`, data);
  }

  terminateUser(id, data) {
    return http.delete(`/users/${id}`, data);
  }

  getAllVacantPositions() {
    return http.get(`/positions/vacant`);
  }

  getAllPositionTypes() {
    return http.get(`/positions/types`);
  }

  getAllLocations() {
    return http.get(`/locations`);
  }

}

export default new StaffDataService();