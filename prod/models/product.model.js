"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var category_model_1 = require("./category.model");
category_model_1.Category.schema.path('description').required(false);
category_model_1.Category.schema.path('imageURL').required(false);
var ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    category: {
        type: category_model_1.Category.schema,
        required: true
    }
});
exports.Product = mongoose_1.model("Product", ProductSchema, "products");
//# sourceMappingURL=product.model.js.map