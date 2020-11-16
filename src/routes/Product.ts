import { Router } from 'express';
const { get, getById, create, updateById, deleteById } = require('../controllers/Product');

const router = Router();
/**
 * GET route {/api/product}
 */
router.get('/', get);

/**
 * GET by ID route {/api/product/:_id}
 */
router.get('/:_id', getById);

/**
 * POST route {/api/product}
 */
router.post('/', create);

/**
 * PUT route {/api/product/:_id}
 */
router.put('/:_id', updateById);

/**
 * DELETE route {/api/product/:_id}
 */
router.delete('/:_id', deleteById);

export default router;
