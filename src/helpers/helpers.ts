import ProductResult from '../interfaces/productResult'
import calculateProduct from '../interfaces/calculateProduct'
// receives consumption value and calculates price in euros, for a year of service consumption
let calculateProductA :calculateProduct
calculateProductA = (product, consumption) : ProductResult => {
  return {tariffName: product.name, annualCosts: (product.basePerMonth * 12) + ((product.basePerHour * consumption) / 100)}
}
let calculateProductB :calculateProduct
calculateProductB = (product, consumption) : ProductResult => {
  return {tariffName: product.name, annualCosts: consumption > product.baseLimit ? ((consumption - product.baseLimit) * product.basePerHour)/100 + product.baseLimitCost : product.baseLimitCost}
}

export default { calculateProductA, calculateProductB}