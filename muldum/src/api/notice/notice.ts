import axiosInstance from "../../lib/axiosInatance";

export default async function getNotice() {
    try {
      const res = await axiosInstance.get(`ara/notice`);
  
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

export async function getNoticeDetail(id) {
    try {
      const res = await axiosInstance.get(`ara/notice/${id}?state=GENERAL`);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }