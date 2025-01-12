"use client";

import { Orders } from "@/types-db";
import OrderItem from "./order-item";

interface PageContentProps {
  orders: Orders[];
}

const PageContent = ({ orders }: any) => {
  const processedOrders = processOrders(orders);
  if (processedOrders.length === 0) {
    return (
      <div className="w-full border rounded-lg border-gray-100 p-4 flex flex-col items-center justify-start gap-4 mt-4 text-xl text-neutral-700 font-semibold">
        No Orders Found
      </div>
    );
  }

  return (
    <div className="w-full  rounded-lg  p-4 flex flex-col items-center justify-start gap-4 mt-4">
      {processedOrders.map((order:any) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </div>
  );
};

const processOrders = (orders:any) => {
  const processedOrders:any = [];

  orders?.forEach((order:any) => {
      if (order?.orderItems?.length > 1) {
          order?.orderItems?.forEach((item:any) => {
              const newOrder = { ...order, orderItems: [item] };
              processedOrders.push(newOrder);
          });
      } else {
          processedOrders.push(order);
      }
  });

  return processedOrders;
};

export default PageContent;
