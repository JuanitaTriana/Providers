export default  interface Subsidiary {
  name: string;
  email: string;
  direction: string;
  phone: string;
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
