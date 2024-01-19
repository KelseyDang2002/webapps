import { Schema, model, models } from "mongoose";

const ProductSchema  = new Schema(definition: {
    name: String,
    description: String,
    price: Number,
    category: String,
    picture: String,
});

const Product = models?.Product || model(name: 'Products', ProductSchema);

export default Product();