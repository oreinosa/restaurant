"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var CategorySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});
exports.Category = mongoose_1.model("Category", CategorySchema, "categories");
//# sourceMappingURL=category.model.js.map