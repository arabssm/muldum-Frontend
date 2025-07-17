import axiosInstance from "../../lib/axiosInatance";


export default async function spendEmail(email:String) {
    try {
      const res = await axiosInstance.post('/ara/emails',{
        "email":email
      });
      if (res.status !== 201) {
        return res.status
      }
      return res.data;
    } catch (err) {
      console.error('실패:', err);
      return err;
    }
  }
  export async function spendCode(email: string, code: string): Promise<boolean> {
    try {
      const res = await axiosInstance.post('/ara/emails/check', {
        email,
        code
      });
      return res.status === 200;
    } catch (err) {
      console.error('실패:', err);
      return false; 
    }
  }export async function login(email: string, password: string): Promise<boolean> {
    try {
      const res = await axiosInstance.post('/ara/auth/login', {
        email,
        password
      });
      return res.status === 200;
    } catch (err) {
      console.error('실패:', err);
      return false;
    }
  }
  