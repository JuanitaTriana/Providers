export default interface ProductService {
    branchOfficeCompan: {
      nic: number
    },
    id: number,
    name: string,
    unitMeasure: string,
    value: number,
    product?: {
      presentation: string,
      quantity: number
    },
    service?: {
      duration: string,
      plan: string
    }
  }