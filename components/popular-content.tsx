"use client";

import { Books } from "@/types-db";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, HeartCrack, ShoppingCart } from "lucide-react";
import { useState } from "react";
import useCart from "@/hooks/use-carts";

interface PopularContentProps {
  data: Books;
}

export const PopularContent = ({ data }: PopularContentProps) => {
  const [isLiked, setisLiked] = useState(false);
  console.log(data,"data")

  const cart = useCart();

  const addToCart = (data: Books) => {
    cart.addItem({ ...data, qty: 1 });
  };

  const IsLikedIcon = isLiked ? Heart : HeartCrack;


  return (
    <Card
      className="w-full max-h-[340px] rounded-md bg-white shadow-lg border-none flex flex-col items-center 
      justify-center relative py-6 pt-24 md:pt-28"
    >
      <div
        className="absolute -top-[4%] md:-top-[20%] overflow-hidden w-24 md:w-40 h-24 md:h-40 
        rounded-full bg-hero flex items-center justify-center p-1 md:p-2"
      >
        <div className="w-full h-full rounded-full bg-white relative">
          <Image
            src={data.images[0].url}
            className="w-full h-full object-contain"
            fill
            alt={data.name}
          />
        </div>
      </div>

      <Link href={`/explore/${data.id}`} className="w-full px-2 text-center">
        <CardTitle className="text-neutral-700 truncate w-full">
          {data.name}
        </CardTitle>
      </Link>

      <div className="w-full flex items-center justify-center gap-2 flex-wrap px-1 mt-4">
        {/* Author */}
        {Array.isArray(data.author) ? (
          data.author.map((author, index) => (
            <div
              key={index}
              className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize"
            >
              {author}
            </div>
          ))
        ) : (
          data.author && (
            <div className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize">
              {data.author}
            </div>
          )
        )}

        {/* Genres */}
        {Array.isArray(data.genre) ? (
          data.genre.map((genre, index) => (
            <div
              key={index}
              className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize"
            >
              {genre}
            </div>
          ))
        ) : (
          <div className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize">
            {data.genre}
          </div>
        )}
      </div>

      <CardDescription className="text-center px-2 my-2">
        {data.information || "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid architecto Aliquid architecto"}
      </CardDescription>

      <div className="w-full flex items-center px-2 mt-4 gap-3">
        <Button
          variant="outline"
          className="rounded-full font-bold text-lg text-muted-foreground"
        >
          ${data.price}
        </Button>
        <Link href={`/explore/${data.id}`} className="w-full">
          <Button className="w-full rounded-full">Buy Now</Button>
        </Link>
      </div>

      {/* Add to Cart */}
      <Button
        onClick={() => addToCart(data)}
        className="absolute top-0 right-0 rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none p-2 px-3"
      >
        <ShoppingCart className="w-4 h-4" />
      </Button>

      {/* Add to Wishlist */}
      <Button
        className="absolute left-0 top-0 hover:bg-transparent"
        variant={"ghost"}
      >
        <IsLikedIcon
          className={`w-5 h-5 ${isLiked ? "text-red-500" : "text-black"}`}
        />
      </Button>
    </Card>
  );
};
