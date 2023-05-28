import { axios } from "../api/axios";
class AdminServices {
  getFalse() {
    return axios.get("/signup/getfalse");
  }
  getTrue() {
    return axios.get("/signup/gettrue");
  }
  setApprove(id) {
    axios.put(`/signup/approve/${id}`);
  }
  reject(id) {
    axios.delete(`/signup/reject/${id}`);
  }
  addCanditate(canditate) {
    return axios.post("/canditate/addcanditate", canditate);
  }

  getAllCandidates() {
    return axios.get("/canditate/all");
  }

  signUpVoter(voter) {
    console.log(voter);
    return axios.post("/signup/savedata", voter);
  }

}

export default new AdminServices();
