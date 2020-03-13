import express from 'express'
const router = express.Router();

/* GET /health */
router.get('/', (req, res, next) => {
  res.json('ok')
});

export default router
