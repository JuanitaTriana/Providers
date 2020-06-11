export default interface ProductService {
    branchOfficeCompan: {
      nic: number
      [key: string]: any
    }
    id: number
    name: string
    unitMeasure: string
    value: number
    product?: {
      presentation: string
      quantity: number
      [key: string]: any
    }
    service?: {
      duration: string
      plan: string
      [key: string]: any
    }
  }
