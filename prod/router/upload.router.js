"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var passport_1 = require("../config/passport");
var path = require("path");
var fs = require("fs");
var uuid = require("uuid");
function removeFile(filePath) {
    var checkPath = path.join(__dirname, "../static/", filePath);
    var flag = fs.existsSync(checkPath);
    if (!flag) {
        return "File not found";
    }
    else {
        fs.unlinkSync(checkPath);
        return "File deleted";
    }
}
exports.removeFile = removeFile;
var UploadRouter = (function () {
    function UploadRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    UploadRouter.prototype.uploadFile = function (req, res, next) {
        var route = req.body.route;
        var file = req.files.uploadedFile;
        if (!file) {
            res.status(400).send("No files were uploaded");
        }
        else {
            var savePath = path.join(__dirname, "../static/", route, "/");
            var flag = fs.existsSync(savePath);
            if (!flag) {
                console.log("creating folder ", route);
                fs.mkdirSync(savePath);
            }
            var id = uuid.v1();
            var typeIndex = file.mimetype.indexOf("/") + 1;
            var fileType = file.mimetype.substr(typeIndex);
            var fileName = id + "." + fileType;
            var filePath_1 = route + "/" + fileName;
            file.mv(savePath + fileName, function (err) {
                if (err)
                    return res.status(500).send(err);
                res.status(200).json({ data: filePath_1 });
            });
        }
    };
    UploadRouter.prototype.updateFile = function (req, res, next) {
        var filePath = req.body.filePath;
        var file = req.files.uploadedFile;
        if (!filePath) {
            res.status(400).send("Missing parameters");
        }
        else if (!file) {
            res.status(400).send("No files were uploaded");
        }
        else {
            var savePath = path.join(__dirname, "../static/", filePath);
            var flag = fs.existsSync(savePath);
            if (!flag) {
                res.status(400).send("File not found");
            }
            else {
                file.mv(savePath, function (err) {
                    if (err)
                        res.status(500).send(err);
                    res.status(204).json();
                });
            }
        }
    };
    UploadRouter.prototype.deleteFile = function (req, res, next) {
        var filePath = req.params.filePath;
        var checkPath = path.join(__dirname, "../static/", filePath);
        var flag = fs.existsSync(checkPath);
        if (!flag) {
            res.status(400).send("File not found");
        }
        else {
            fs.unlink(checkPath, function (err) {
                if (err)
                    res.status(500).send(err);
                res.status(204).json();
            });
        }
    };
    UploadRouter.prototype.routes = function () {
        var requireLogin = passport_1.default.authenticate("auth", { session: false });
        this.router.post("/", requireLogin, this.uploadFile);
        this.router.put("/", requireLogin, this.updateFile);
        this.router.delete("/", requireLogin, this.deleteFile);
    };
    return UploadRouter;
}());
var uploadRoutes = new UploadRouter();
uploadRoutes.routes();
exports.default = uploadRoutes.router;
//# sourceMappingURL=upload.router.js.map