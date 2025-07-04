import React, { useEffect, useState } from "react";
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.jpeg";
import banner3 from "../../assets/banner3.webp";
import { Button } from "@/components/ui/button";
import {
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredProducts } from "@/store/shop/product-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";

const brandsWithIcon = [
  { id: "nike", label: "Nike", icon: Shirt },
  { id: "adidas", label: "Adidas", icon: WashingMachine },
  { id: "puma", label: "Puma", icon: ShoppingBasket },
  { id: "levi", label: "Levi's", icon: Airplay },
  { id: "zara", label: "Zara", icon: Images },
  { id: "h&m", label: "H&M", icon: Heater },
];

const categoriesWithIcon = [
  { id: "men", label: "Men", icon: ShirtIcon },
  { id: "women", label: "Women", icon: CloudLightning },
  { id: "kids", label: "Kids", icon: BabyIcon },
  { id: "accessories", label: "Accessories", icon: WatchIcon },
  { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];

const ShoppingHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { productList } = useSelector((state) => state.shopProducts);

  const slides = [banner1, banner2, banner3];

  const dispatch = useDispatch();

  const navigate = useNavigate();
  function handleNavigateToListingPage(getCurrentItem, section) {
    console.log(getCurrentItem);
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate("/shop/listing");
  }
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            src={slide}
            key={index}
            className={`${
              index === currentSlide ? "opacity-100" : "opacity-0"
            } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
          />
        ))}
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
          onClick={() => {
            setCurrentSlide(
              (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
            );
          }}
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
          onClick={() =>
            setCurrentSlide((nextSlide) => (nextSlide + 1) % slides.length)
          }
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <section className="p-12 bg-gray-50">
        <div className="container max-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop By category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((CategoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(CategoryItem, "category")
                }
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <CategoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{CategoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="p-12 bg-gray-50">
        <div className="container max-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop By brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItems) => (
              <Card
                onClick={() => handleNavigateToListingPage(brandItems, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItems.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItems.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="p-12">
        <div className="container max-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile product={productItem} />
                ))
              : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingHome;
