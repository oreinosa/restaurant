"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var product_model_1 = require("./product.model");
product_model_1.Product.schema.path('price').required(false);
product_model_1.Product.schema.path('category').required(false);
product_model_1.Product.schema.path('imageURL').required(false);
var ComboItemSchema = new mongoose_1.Schema({
    product: product_model_1.Product.schema,
    amount: {
        type: Number,
        required: true
    }
});
exports.ComboItem = mongoose_1.model("ComboItem", ComboItemSchema);
//# sourceMappingURL=combo-item.model.js.map