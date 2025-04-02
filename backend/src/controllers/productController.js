// backend/src/controllers/productController.js

const Product = require('../models/productModel');

// Fetch all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

// Add a new product
exports.addProduct = async (req, res) => {
    const { name, price, description, imageUrl } = req.body;
    try {
        const newProduct = await Product.create({ name, price, description, imageUrl });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
};

// Update an existing product
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, imageUrl } = req.body;
    try {
        const [updated] = await Product.update({ name, price, description, imageUrl }, {
            where: { id }
        });
        if (updated) {
            const updatedProduct = await Product.findOne({ where: { id } });
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Product.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};