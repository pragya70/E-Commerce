import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";

const AdminProductTile = ({
  product,
  setFromData,
  setCurrentEditedId,
  setOpenCreateProductDialog,
  handleDelete,
}) => {
  return (
    <Card className="w-full max-w-sm  mx-auto ">
      <div className="relative">
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-[300px] object-cover rounded-t-lg"
        />
      </div>
      <CardContent>
        <h2 className="text-xl font-bold mb-2 mt-2">{product?.title}</h2>
        <div className="flex justify-between items-center mb-2">
          <span
            className={`${
              product.salePrice > 0 ? "line-through " : ""
            }text-lg font-bold text-primary`}
          >
            ${product.price}
          </span>
          {product.salePrice > 0 ? (
            <span className="text-lg font-bold">${product.salePrice}</span>
          ) : null}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button
          onClick={() => {
            setOpenCreateProductDialog(true);
            setCurrentEditedId(product?._id);
            setFromData(product);
          }}
        >
          Edit
        </Button>
        <Button onClick={() => handleDelete(product?._id)}>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default AdminProductTile;
