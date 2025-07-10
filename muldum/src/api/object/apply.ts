import axiosInstance from "../../lib/axiosInatance";

export default async function ApplyObject(team_id,Objectname,count,price,link,source,reason) {
    try {
      const res = await axiosInstance.post(`/std/items/${team_id}/temp`,{
        "product_name":Objectname,
        "quantity":count,
        "price":price,
        "product_link":link,
        "item_source":source,
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
