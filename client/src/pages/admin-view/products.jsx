import ProductImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import React, { Fragment, useState } from "react";

const initialFromData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

const AdminProducts = () => {
  const [openCreateProductDialog, setOpenCreateProductDialog] = useState(false);

  const [formData, setFromData] = useState(initialFromData);

  const [imageFile, setImageFile] = useState(null);

  const [uploadImageUrl, setUploadImageUrl] = useState("");

  const [imageLoadingState, setImageLoadingState] = useState(false);

  function onSubmit() {}
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductDialog(true)}>
          Adding New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Sheet
          open={openCreateProductDialog}
          onOpenChange={() => setOpenCreateProductDialog(false)}
        >
          <SheetContent side="right" className="overflow-auto">
            <SheetHeader>
              <SheetTitle>Add New Product</SheetTitle>
            </SheetHeader>
            <div className="mt-1 px-3">
              <ProductImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                uploadImageUrl={uploadImageUrl}
                setUploadImageUrl={setUploadImageUrl}
                setImageLoadingState={setImageLoadingState}
              />
              <CommonForm
                onSubmit={onSubmit}
                formData={formData}
                setFormData={setFromData}
                formControls={addProductFormElements}
                buttonText="Add"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Fragment>
  );
};

export default AdminProducts;
