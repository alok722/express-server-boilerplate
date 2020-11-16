import dotenv from 'dotenv';

/**
 * Set Env file
 */
const result = dotenv.config({
	path: './env/development.env',
});

if (result.error) {
	throw result.error;
}
