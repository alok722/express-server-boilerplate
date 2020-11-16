import { IProduct } from '../../models/index';
import { DB } from '../index';

export interface IProductDao {
	read: () => Promise<IProduct[]>;
	getOne: (_id: string) => Promise<IProduct | null>;
	add: (product: IProduct) => Promise<IProduct>;
	update: (_id: string, product: IProduct) => Promise<IProduct>;
	delete: (_id: string) => Promise<void>;
}

export class ProductDao implements IProductDao {


	/**
	 * Making DB call to get one product
	 * @param {string} _id - Id of product.
	 * @return {Promise<IProduct | null>} data[0]
	 */
	public async getOne(_id: string): Promise<IProduct | null> {
		try {
			const data = await DB.Models.Product.find({ _id }).exec();
			if (data) {
				return data[0];
			}
			throw new Error('Product not found!');
		} catch (err) {
			throw err;
		}
	}


	/**
	 * Making DB call to get all products
	 * @return {Promise<IProduct[] | null>} data
	 */
	public async read(): Promise<IProduct[]> {
		try {
			const data = await DB.Models.Product.find({}).exec();
			return data;
		} catch (err) {
			throw err;
		}
	}


	/**
	 * Making DB call to add product
	 * @param {IProduct} product product to add
	 * @return {Promise<IProduct>} newProduct
	 */
	public async add(product: IProduct): Promise<IProduct> {
		try {
			const newProduct = await new DB.Models.Product(product).save();
			return newProduct;
		} catch (err) {
			throw err;
		}
	}


	/**
	 * Making DB call to update data
	 * @param {string} _id - Id of product.
	 * @param {IProduct} product product to update
	 * @return {Promise<IProduct>} data
	 */
	public async update(_id: string, product: IProduct): Promise<IProduct> {
		try {
			await DB.Models.Product.findOneAndUpdate({ _id }, product).exec();
			return product;
		} catch (err) {
			throw err;
		}
	}


	/**
	 * Making DB call to delete data
	 * @param {string} _id - Id of product.
	 * @return {Promise<void>}
	 */
	public async delete(_id: string): Promise<void> {
		try {
			await DB.Models.Product.findByIdAndDelete({ _id }).exec();
		} catch (err) {
			throw err;
		}
	}
}
