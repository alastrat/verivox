import express from 'express'
const router = express.Router();
import helpers from '../helpers/helpers'

const products : any[] = [
   {
    name: 'basic electricity tariff',
    basePerMonth: 5, // euros
    basePerHour: 22, // cents/KWh,
    helper: helpers.calculateProductA
  },
  {
    name: 'Packaged tariff',
    baseLimit: 4000, // KWh/year
    baseLimitCost: 800, // euros
    basePerHour: 30, // cents/KWh
    helper: helpers.calculateProductB
  }
]

/* GET /products */
// TODO verify number input
router.get('/', (req, res, next) => {
  const consumption :number = Number(req.query.consumption)
  if(!isNaN(consumption) && consumption > 0) {
    const result = products.map((product :any) :any => {
      return product.helper(product, consumption)
    })
    // sort by value
    result.sort((a, b) => {
      return a.annualCosts - b.annualCosts;
    });
    res.json(result)
  } else {
    res.json('query param consumption must be a number bigger than 0!')
  }
})

export default router
