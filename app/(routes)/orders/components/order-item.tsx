"use client";

import Box from "@/components/box";
import { cn } from "@/lib/utils";
import { Orders } from "@/types-db";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Assuming there's a Button component
import { rateBook, getRatingBook } from "@/actions/rate-book";
import toast from "react-hot-toast";

interface OrderItemProps {
  order: Orders;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});
  const [hoveredStars, setHoveredStars] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchRatings = async () => {
      const initialRatings: { [key: string]: number } = {};
      for (const item of order.orderItems) {
        try {
          const response = await getRatingBook({
            bookId: item.id,
            userId: order.userId,
          });
          if (response?.rating) {
            initialRatings[item.id] = response.rating;
          }
        } catch (error) {
          console.error('Error fetching rating:', error);
        }
      }
      setRatings(initialRatings);
    };

    fetchRatings();
  }, [order.orderItems, order.userId]);

  const handleRateBook = async (bookId: string, rating: number) => {
    try {
      const response = await rateBook({
        bookId,
        rating,
        userId: order.userId,
      });

      if (response?.error) {
        toast.error(response?.error);
        return;
      }

      setRatings((prevRatings) => ({
        ...prevRatings,
        [bookId]: rating,
      }));

      toast.success('Rating submitted successfully');
    } catch (error) {
      console.error('Error submitting rating:', error);
      toast.error('Error submitting rating');
    }
  };

  const handleMouseEnter = (bookId: string, star: number) => {
    setHoveredStars((prevHovered) => ({
      ...prevHovered,
      [bookId]: star,
    }));
  };

  const handleMouseLeave = (bookId: string) => {
    setHoveredStars((prevHovered) => ({
      ...prevHovered,
      [bookId]: 0,
    }));
  };



  return (
    <Box>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 px-4 py-2 rounded-md border border-gray-100">
        <div className="flex items-center gap-2">
          {order.orderItems.map((item) => (
            <div
              key={item.id}
              className="aspect-square w-16 min-w-16 h-16 min-h-16 rounded-md relative overflow-hidden bg-gray-100"
            >
              <Image
                src={item.images[0].url}
                alt={item.name}
                fill
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <p className="text-lg font-semibold text-muted-foreground">
          {order.orderItems.map((item) => item.name).join(", ")}
        </p>

        <p
          className={cn(
            "text-base font-semibold",
            (order.order_status === "Delivering" && "text-yellow-500") ||
              (order.order_status === "Processing" && "text-orange-500") ||
              (order.order_status === "Delivered" && "text-emerald-500") ||
              (order.order_status === "Canceled" && "text-red-500")
          )}
        >
          {order.order_status}
        </p>

        <div className="flex items-center gap-2">
          <p
            className={cn(
              "text-base font-semibold",
              order.isPaid ? "text-emerald-500" : "text-red-500"
            )}
          >
            {order.isPaid ? "Paid" : "Not Paid"}
          </p>
          {order.isPaid && (
            <div className="flex items-center text-xs ml-4">
              {order.orderItems.map((item) => (
                <div key={item.id} className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button
                      key={star}
                      onClick={() => handleRateBook(item.id, star)}
                      onMouseEnter={() => handleMouseEnter(item.id, star)}
                      onMouseLeave={() => handleMouseLeave(item.id)}
                      className={cn(
                        "text-xs",
                        (hoveredStars[item.id] >= star || ratings[item.id] >= star)
                          ? "text-yellow-500"
                          : "text-gray-400"
                      )}
                    >
                      ★
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Box>
  );
};

export default OrderItem;
