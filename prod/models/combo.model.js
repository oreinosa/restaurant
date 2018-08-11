"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var combo_item_model_1 = require("./combo-item.model");
var ComboSchema = new mongoose_1.Schema({
    items: [combo_item_model_1.ComboItem.schema],
    price: {
        type: Number,
        required: true,
    }
});
exports.Combo = mongoose_1.model("Combo", ComboSchema, "combos");
//# sourceMappingURL=combo.model.js.map