import { Request, Response, Router, NextFunction } from "express";
import passport from "../config/passport";
import * as fileUpload from "express-fileupload";
import * as path from "path";
import * as fs from "fs";
import * as uuid from "uuid";

export function removeFile(filePath: string): string {
  const checkPath = path.join(__dirname, "../static/", filePath);
  const flag = fs.existsSync(checkPath);
  if (!flag) {
    return "File not found";
  } else {
    fs.unlinkSync(checkPath);
    return "File deleted";
  }
}

class UploadRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public uploadFile(req: Request, res: Response, next: NextFunction): void {
    const { route } = req.body;
    const file = req.files.uploadedFile as fileUpload.UploadedFile; // get only file sent

    if (!file) {
      res.status(400).send("No files were uploaded");
    } else {
      // get static folder + route sent from user + file name
      const savePath = path.join(__dirname, "../static/", route, "/");
      // console.log(file);
      // CHECK IF FOLDER EXISTS
      const flag = fs.existsSync(savePath);
      // IF IT DOESN'T IT'LL BE CREATED
      if (!flag) {
        console.log("creating folder ", route);
        fs.mkdirSync(savePath);
      }

      const id = uuid.v1();
      const typeIndex = file.mimetype.indexOf("/") + 1;
      const fileType = file.mimetype.substr(typeIndex);
      const fileName = `${id}.${fileType}`;
      const filePath = `${route}/${fileName}`;
      // console.log(filePath);
      // FILE IS SAVED
      file.mv(savePath + fileName, (err: any) => {
        if (err) return res.status(500).send(err);
        res.status(200).json({ data: filePath });
      });
    }
  }

  public updateFile(req: Request, res: Response, next: NextFunction): void {
    const { filePath } = req.body;
    const file = req.files.uploadedFile as fileUpload.UploadedFile; // get only file sent
    if (!filePath) {
      res.status(400).send("Missing parameters");
    } else if (!file) {
      res.status(400).send("No files were uploaded");
    } else {
      // get static folder + route sent from user + file name
      const savePath = path.join(__dirname, "../static/", filePath);
      // console.log(file);
      // CHECK IF FOLDER EXISTS
      const flag = fs.existsSync(savePath);
      // IF IT DOESN'T IT'LL BE CREATED

      file.mv(savePath, (err: any) => {
        if (err) res.status(500).send(err);
        res.status(204).end();
      });

    }
  }

  public deleteFile(req: Request, res: Response, next: NextFunction): void {
    const { filePath } = req.params;
    const checkPath = path.join(__dirname, "../static/", filePath);
    const flag = fs.existsSync(checkPath);
    if (!flag) {
      res.status(400).send("File not found");
    } else {
      fs.unlink(checkPath, (err: any) => {
        if (err) res.status(500).send(err);
        res.status(204).json();
      });
    }
  }

  // set up our routes
  public routes() {
    const requireLogin = passport.authenticate("auth", { session: false });
    this.router.post("/", requireLogin, this.uploadFile);
    this.router.put("/", requireLogin, this.updateFile);
    this.router.delete("/", requireLogin, this.deleteFile);
  }
}

const uploadRoutes = new UploadRouter();
uploadRoutes.routes();

export default uploadRoutes.router;
