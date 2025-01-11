"use client";

import Box from "@/components/box";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-carts";
import { Books } from "@/types-db";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CartitemProps {
  item: Books;
}

const CartItem = ({ item }: CartitemProps) => {
  console.log(item,"--,cart item")
  const [qty, setQty] = useState(item.qty ?? 1);

  const cart = useCart();

  const handleQuantity = (num: number) => {
    setQty(num);
    cart.updateItemQuantity(item.id, num);
  };

  const incrementQty = () => {
    setQty((prevQty) => {
      const newQty = prevQty + 1;
      cart.updateItemQuantity(item.id, newQty);
      return newQty;
    });
  };

  const decrementQty = () => {
    setQty((prevQty) => {
      const newQty = prevQty > 1 ? prevQty - 1 : 1;
      cart.updateItemQuantity(item.id, newQty);
      return newQty;
    });
  };

  return (
    <Box className="flex items-center gap-6 border border-gray-200 p-4 rounded-lg">
      {/* Product Image */}
      <div className="aspect-square w-24 h-24 rounded-md bg-gray-100 flex items-center justify-center relative overflow-hidden">
        <Image
          alt={item.name}
          fill
          className="w-full h-full object-contain"
          src={item.images[0].url}
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="truncate font-semibold text-2xl text-neutral-700">{item.name}</h2>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          {item.author && item.author.map((author, index) => (
            <span key={index} className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {author}
            </span>
          ))}
          {item.genre && item.genre.map((genre, index) => (
            <span key={index} className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {genre}
            </span>
          ))}
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-4">
        <Button
          onClick={decrementQty}
          className="w-8 h-8 text-lg flex items-center justify-center bg-[#84b74e] text-white rounded-md hover:bg-[#6c9b3f]"
        >
          -
        </Button>
        <input
          type="number"
          value={qty}
          onChange={(e) => handleQuantity(Number(e.target.value))}
          className="w-12 h-8 border border-gray-300 rounded-md text-center"
          min="1"
        />
        <Button
          onClick={incrementQty}
          className="w-8 h-8 text-lg flex items-center justify-center bg-[#84b74e] text-white rounded-md hover:bg-[#6c9b3f]"
        >
          +
        </Button>
      </div>

      {/* Price */}
      <div className="flex items-center justify-center min-w-[80px]">
        <h2 className="text-lg font-semibold">${(item.price * qty).toFixed(2)}</h2>
      </div>

      {/* Delete Icon */}
      <div
        onClick={() => cart.removeItem(item.id)}
        className="flex items-center justify-center cursor-pointer text-muted-foreground hover:text-red-500"
      >
        <Trash className="w-5 h-5" />
      </div>
    </Box>
  );
};

export default CartItem;
