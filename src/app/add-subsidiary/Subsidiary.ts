export default  interface Subsidiary {
  name: string;
  email: string;
  direction: string;
  phone: number;
  nic: number;
  city: {
    name: string;
    departament: {
      name: string;
    }
  };
  companyId: {
    nic: number;
  };
 }
