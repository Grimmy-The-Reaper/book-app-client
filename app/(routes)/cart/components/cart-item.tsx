// "use client";

// import Box from "@/components/box";
// import { Button } from "@/components/ui/button";
// import useCart from "@/hooks/use-carts";
// import { Books } from "@/types-db";
// import { Trash } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// interface CartitemProps {
//   item: Books;
// }

// const CartItem = ({ item }: CartitemProps) => {
//   const [qty, setQty] = useState(item.qty ?? 1);

//   const cart = useCart();

//   const handleQuantity = (num: number) => {
//     setQty(num);
//     cart.updateItemQuantity(item.id, num);
//   };

//   return (
//     <Box className="flex items-center gap-4 border border-gray-200 p-3 rounded-lg">
//       <div className="aspect-square w-24 min-w-24 h-24 min-h-24 rounded-md bg-gray-100 flex items-center justify-center relative overflow-hidden">
//         <Image
//           alt={item.name}
//           fill
//           className="w-full h-full object-contain"
//           src={item.images[0].url}
//         />
//       </div>

//       <div>
//         <h2 className="w-full min-w-44 whitespace-nowrap truncate font-semibold text-2xl text-neutral-700">
//           {item.name}
//         </h2>
//         <div className="w-full flex items-center justify-start gap-2 flex-wrap  mt-4 ">

//           {item.author && (
//             <div className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
//               {item.author}
//             </div>
//           )}

//           {item.genre && (
//             <div className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
//               {item.genre}
//             </div>
//           )}
//         </div>
//       </div>

//       <Box className="flex items-center justify-center h-full">
//         <div className="flex items-center gap-2">
//           {[1, 2, 3, 4, 5].map((number) => (
//             <div
//               key={number}
//               className={`w-8 h-8 cursor-pointer rounded-full flex items-center justify-center border border-hero ${
//                 qty === number
//                   ? "bg-hero shadow-md text-white"
//                   : "bg-transparent shadow-none"
//               }`}
//               onClick={() => handleQuantity(number)}
//             >
//               {number}
//             </div>
//           ))}
//         </div>
//       </Box>

//       <Box className="flex items-center justify-center h-full">
//         <h2>${item.price * item.qty}</h2>
//       </Box>

//       <div onClick={() => cart.removeItem(item.id)} className="w-auto m-auto">
//         <Trash className="w-4 h-4 cursor-pointer text-muted-foreground hover:text-red-500" />
//       </div>
//     </Box>
//   );
// };

// export default CartItem;

// "use client";

// import Box from "@/components/box";
// import { Button } from "@/components/ui/button";
// import useCart from "@/hooks/use-carts";
// import { Books } from "@/types-db";
// import { Trash } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// interface CartitemProps {
//   item: Books;
// }

// const CartItem = ({ item }: CartitemProps) => {
//   const [qty, setQty] = useState(item.qty ?? 1);

//   const cart = useCart();

//   const handleQuantity = (num: number) => {
//     setQty(num);
//     cart.updateItemQuantity(item.id, num);
//   };

//   const incrementQty = () => {
//     setQty((prevQty) => {
//       const newQty = prevQty + 1;
//       cart.updateItemQuantity(item.id, newQty);
//       return newQty;
//     });
//   };

//   const decrementQty = () => {
//     setQty((prevQty) => {
//       const newQty = prevQty > 1 ? prevQty - 1 : 1;
//       cart.updateItemQuantity(item.id, newQty);
//       return newQty;
//     });
//   };

//   return (
//     <Box className="flex items-center gap-4 border border-gray-200 p-3 rounded-lg">
//       <div className="aspect-square w-24 min-w-24 h-24 min-h-24 rounded-md bg-gray-100 flex items-center justify-center relative overflow-hidden">
//         <Image
//           alt={item.name}
//           fill
//           className="w-full h-full object-contain"
//           src={item.images[0].url}
//         />
//       </div>

//       <div>
//         <h2 className="w-full min-w-44 whitespace-nowrap truncate font-semibold text-2xl text-neutral-700">
//           {item.name}
//         </h2>
//         <div className="w-full flex items-center justify-start gap-2 flex-wrap  mt-4 ">

//           {item.author && (
//             <div className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
//               {item.author}
//             </div>
//           )}

//           {item.genre && (
//             <div className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
//               {item.genre}
//             </div>
//           )}
//         </div>
//       </div>

//       <Box className="flex items-center justify-center h-full">
//         <div className="flex items-center gap-2">
//           {/* Quantity Buttons */}
//           {[1, 2, 3, 4, 5].map((number) => (
//             <div
//               key={number}
//               className={`w-8 h-8 cursor-pointer rounded-full flex items-center justify-center border border-hero ${
//                 qty === number
//                   ? "bg-[#84b74e] shadow-md text-white"
//                   : "bg-transparent shadow-none"
//               }`}
//               onClick={() => handleQuantity(number)}
//             >
//               {number}
//             </div>
//           ))}
//         </div>
//       </Box>

//       <Box className="flex items-center justify-center h-full gap-2">
//         {/* Increment/Decrement Buttons */}
//         <Button
//           onClick={decrementQty}
//           className="px-4 py-2 text-sm border rounded-md bg-[#84b74e] shadow-md text-white"
//         >
//           -
//         </Button>
//         <input
//           type="number"
//           value={qty}
//           onChange={(e) => handleQuantity(Number(e.target.value))}
//           className="w-16 h-8 border border-gray-300 rounded-md px-2 text-center"
//           min="1"
//         />
//         <Button
//           onClick={incrementQty}
//           className="px-4 py-2 text-sm border rounded-md bg-[#84b74e] shadow-md text-white"
//         >
//           +
//         </Button>
//       </Box>

//       <Box className="flex items-center justify-center h-full">
//         <h2>${item.price * item.qty}</h2>
//       </Box>

//       <div onClick={() => cart.removeItem(item.id)} className="w-auto m-auto">
//         <Trash className="w-4 h-4 cursor-pointer text-muted-foreground hover:text-red-500" />
//       </div>
//     </Box>
//   );
// };

// export default CartItem;



// "use client";

// import Box from "@/components/box";
// import { Button } from "@/components/ui/button";
// import useCart from "@/hooks/use-carts";
// import { Books } from "@/types-db";
// import { Trash } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

// interface CartitemProps {
//   item: Books;
// }

// const CartItem = ({ item }: CartitemProps) => {
//   const [qty, setQty] = useState(item.qty ?? 1);

//   const cart = useCart();

//   const handleQuantity = (num: number) => {
//     setQty(num);
//     cart.updateItemQuantity(item.id, num);
//   };

//   const incrementQty = () => {
//     setQty((prevQty) => {
//       const newQty = prevQty + 1;
//       cart.updateItemQuantity(item.id, newQty);
//       return newQty;
//     });
//   };

//   const decrementQty = () => {
//     setQty((prevQty) => {
//       const newQty = prevQty > 1 ? prevQty - 1 : 1;
//       cart.updateItemQuantity(item.id, newQty);
//       return newQty;
//     });
//   };

//   return (
//     <Box className="flex items-center gap-6 border border-gray-200 p-4 rounded-lg">
//       {/* Image Section */}
//       <div className="aspect-square w-24 h-24 rounded-md bg-gray-100 flex items-center justify-center relative overflow-hidden">
//         <Image
//           alt={item.name}
//           fill
//           className="w-full h-full object-contain"
//           src={item.images[0].url}
//         />
//       </div>

//       {/* Product Information */}
//       <div className="flex-1">
//         <h2 className="truncate font-semibold text-2xl text-neutral-700">{item.name}</h2>
//         <div className="flex items-center gap-2 mt-2">
//           {item.author && (
//             <span className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
//               {item.author}
//             </span>
//           )}
//           {item.genre && (
//             <span className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
//               {item.genre}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* Quantity & Price Section */}
//       <Box className="flex flex-col items-center gap-2">
//         {/* Quantity Controls */}
//         <div className="flex items-center gap-2">
//           <Button
//             onClick={decrementQty}
//             className="px-3 py-2 text-sm bg-[#84b74e] text-white rounded-md"
//           >
//             -
//           </Button>
//           <input
//             type="number"
//             value={qty}
//             onChange={(e) => handleQuantity(Number(e.target.value))}
//             className="w-12 h-8 border rounded-md text-center"
//             min="1"
//           />
//           <Button
//             onClick={incrementQty}
//             className="px-3 py-2 text-sm bg-[#84b74e] text-white rounded-md"
//           >
//             +
//           </Button>
//         </div>

//         {/* Price */}
//         <h2 className="text-lg font-semibold">${(item.price * qty).toFixed(2)}</h2>
//       </Box>

//       {/* Delete Icon */}
//       <Box className="flex items-center">
//         <div
//           onClick={() => cart.removeItem(item.id)}
//           className="cursor-pointer text-muted-foreground hover:text-red-500"
//         >
//           <Trash className="w-5 h-5" />
//         </div>
//       </Box>
//     </Box>
//   );
// };

// export default CartItem;


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
        <div className="flex items-center gap-2 mt-2">
          {item.author && (
            <span className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {item.author}
            </span>
          )}
          {item.genre && (
            <span className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[11px] font-semibold capitalize">
              {item.genre}
            </span>
          )}
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
