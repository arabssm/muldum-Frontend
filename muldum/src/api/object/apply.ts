import axiosInstance from "../../lib/axiosInatance";


export default async function Apply(name1,number,price,link,source,reason,team_id) {
    try {
      const res = await axiosInstance.post(`/std/items/${team_id}/temp`,{
        "productName":name1,
        "quantity":number,
        "price":price,
        "productLink":link,
        "itemSource":source,
        "reason":reason
      });
  
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  export async function getApply(team_id) {
    try {
      const res = await axiosInstance.get(`/std/items/${team_id}/temp`);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  export async function getallApply(team_id) {
    try {
      const res = await axiosInstance.get(`/std/items/${team_id}`);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  export async function getApplyall(team_id) {
    try {
      const res = await axiosInstance.get(`/std/items/${team_id}`);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  export async function getMoney(team_id) {
    try {
      const res = await axiosInstance.get(`/std/items/money/${team_id}`);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
export async function finalapply(teamid) {
    try {
      const res = await axiosInstance.patch(`/std/items/${teamid}`);
      if (res.status !== 200) {
        return res.status;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  export async function tchitem(teamid) {
    try {
      const res = await axiosInstance.get(`/tch/items/${teamid}`);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  export async function submititem(items) {
    try {
      const res = await axiosInstance.post(`/tch/items/submit`,{
        "itemIds":items
      });
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  export async function nosubmititem(items) {
    console.log(items);
    try {
      const res = await axiosInstance.post(`/tch/items/reject`,items);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }