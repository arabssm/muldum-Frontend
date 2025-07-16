import axiosInstance from "../../lib/axiosInatance";

export default async function getNoticeara() {
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
      const res = await axiosInstance.get(`ara/notice/${id}`);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }


export async function getNotice(page) {
    try {
      const res = await axiosInstance.get(`tch/notice?page=${page-1}`);
      // const res = await axiosInstance.get(`tch/notice?`);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }


  export async function DeleteNotice(id) {
    try {
      const res = await axiosInstance.delete(`/tch/notice/${id}`);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }


  export async function savefile(file: File): Promise<string> {
    try {
      const formData = new FormData();
    formData.append('files', file);
      const res = await axiosInstance.post('/ara/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (res.status !== 200) {
        throw new Error(`업로드 실패 (status: ${res.status})`);
      }
  
      return res.data;
    } catch (err) {
      console.error('실패:', err);
      throw err;
    }
  }

  export async function createnoticeteamalert(title:String,content:String,files: string[],teacher:String,teacherId:number,state:String,team_id:number): Promise<string> {
    try {
      const res = await axiosInstance.post('/tch/notice',{
        "title":title,
        "content":content,
        "attachments":files,
        "status":"TEAM",
        "teamId":team_id,
        "teacher":"최병준"
      });
      if (res.status !== 201) {
        throw new Error(`업로드 실패 (status: ${res.status})`);
      }
      return res.data;
    } catch (err) {
      console.error('실패:', err);
      throw err;
    }
  }
  export async function createnoticeallalert(title:String,content:String,files: string[],teacher:String,state:String): Promise<string> {
    try {
      const res = await axiosInstance.post('/tch/notice',{
        "title":title,
        "content":content,
        "attachments":files,
        "status":"GENERAL",
        "teacher":"최병준"
      });
      if (res.status !== 201) {
        throw new Error(`업로드 실패 (status: ${res.status})`);
      }
      return res.data;
    } catch (err) {
      console.error('실패:', err);
      throw err;
    }
  }


  export async function modifynotice(id:number,title:String,content:String,files: string[],teacher:String,teacherId:number,state:String,team_id:number): Promise<string> {
    try {
      const res = await axiosInstance.patch(`/tch/notice/${id}`,{
        "title":title,
        "content":content,
        "files":files,
        "state":"TEAM",
        "teamId":1,
        "teacher":"최병준"
      });
      if (res.status !== 200) {
        throw new Error(`업로드 실패 (status: ${res.status})`);
      }
      return res.data;
    } catch (err) {
      console.error('실패:', err);
      throw err;
    }
  }
  export async function modifynotice1(id:number,title:String,content:String,files: string[],teacher:String,state:String): Promise<string> {
    try {
      const res = await axiosInstance.patch(`/tch/notice/${id}`,{
        "title":title,
        "content":content,
        "files":files,
        "state":"GENERAL",
        "teacher":"최병준"
      });
      if (res.status !== 200) {
        throw new Error(`업로드 실패 (status: ${res.status})`);
      }
      return res.data;
    } catch (err) {
      console.error('실패:', err);
      throw err;
    }
  }
  export async function Deletefile(id) {
    try {
      const res = await axiosInstance.delete(`/ara/files/${id}`);
      if (res.status !== 200) {
        return res.status;
      }
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }