import { Router } from 'express';
import ProductRouter from './Product';

/**
 * Init router and path
 */
const router = Router();

/**
 * Adding product sub-routes
 */
router.use('/product', ProductRouter);

/**
 * Export the base-router
 */
export default router;
