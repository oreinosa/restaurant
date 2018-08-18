import { Request, Response, Router } from "express";
import passport from "../config/passport";
import { Product, IProduct } from "../models/product.model";
import { removeFile } from '../router/upload.router';

class ProductRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public all(req: Request, res: Response): void {
    Product.find({})
      .then((data: IProduct[]) => {
        // if users are found
        return res.status(200).json({ data });
      })
      .catch((error: any) => {
        res.status(500).send(error);
        return error;
      });
  }

  public allByCategory(req: Request, res: Response): void {
    const { categoryName } = req.params;
    if (categoryName) {
      Product.find({ "category.name": categoryName })
        .then((data: IProduct[]) => {
          // if users are found
          // console.log(data);
          return res.status(200).json({ data });
        })
        .catch((error: any) => {
          res.status(500).send(error);
          return error;
        });
    } else {
      res.status(400).send("Missing fields");
    }
  }

  public one(req: Request, res: Response): void {
    const { _id } = req.params;
    Product.findById(_id)
      .then((data: IProduct) => {
        // if user is found
        if (data) {
          res.status(200).json({ data });
        } else {
          res.status(404).send("Product not found");
        }
      })
      .catch((error: any) => {
        res.status(500).send(error);
      });
  }

  public create(req: Request, res: Response): void {
    const { name, price, cost, imageURL, category } = req.body;
    if (
      name &&
      price &&
      cost &&
      imageURL &&
      (category && category.name && category._id)
    ) {
      const product = new Product(req.body);

      Product.create(product)
        .then((product: IProduct) => {
          // product was added successfully
          const data = product;
          res.status(201).json({ data });
        })
        .catch((error: any) => {
          res.status(400).send(error);
        });
    } else {
      res.status(400).send("Missing fields");
    }
  }

  public update(req: Request, res: Response): void {
    const { _id } = req.params;
    Product.findByIdAndUpdate(_id, { $set: req.body }, { new: true })
      .then((data: IProduct) => {
        if (data) {
          res.status(200).json({ data });
        } else {
          res.status(404).send("Product not found");
        }
      })
      .catch((error: any) => {
        res.status(400).send(error);
      });
  }

  public delete(req: Request, res: Response): void {
    const { _id } = req.params;

    Product.findByIdAndRemove(_id)
      .then((product: IProduct) => {
        console.log(removeFile(product.imageURL));
        res.status(204).end();
      })
      .catch((error: any) => {
        res.status(500).send(error);
      });
  }

  // set up our routes
  public routes() {
    const requireAdmin = passport.authenticate("admin", { session: false });

    this.router.get('/categoria/:categoryName', this.allByCategory)

    this.router
      .route("/")
      .get(this.all)
      .all(requireAdmin)
      .post(this.create);


    this.router
      .route("/:_id")
      .get(this.one)
      .all(requireAdmin)
      .put(this.update)
      .delete(this.delete);
  }
}

const productRoutes = new ProductRouter();
productRoutes.routes();

export default productRoutes.router;
