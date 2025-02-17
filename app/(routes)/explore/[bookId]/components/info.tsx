// "use client";

// import { Button } from "@/components/ui/button";
// import useCart from "@/hooks/use-carts";
// import { cn } from "@/lib/utils";
// import { Books } from "@/types-db";
// import {
//   CircleUserRound,
//   CookingPot,
//   Notebook,
//   ShoppingCart,
//   Soup,
//   SquareActivity,
//   Utensils,
// } from "lucide-react";
// import { useState } from "react";

// interface InfoProps {
//   book: Books;
// }

// const Info = ({ book }: InfoProps) => {
//   const [qty, setQty] = useState(1);

//   const cart = useCart();

//   const handleQty = (num: number) => {
//     setQty(num);
//     cart.updateItemQuantity(book.id, num);
//   };

//   const addToCart = (data: Books) => {
//     cart.addItem({ ...data, qty: qty });
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-neutral-800">{book.name}</h1>
//       <div className="mt-3 flex items-end justify-between">
//         <p className="text-base text-left text-neutral-600">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
//           consequatur aut dolorum, exercitationem dicta totam ipsa inventore
//           odio ducimus, odit ipsam natus eveniet commodi consectetur harum in
//           deserunt sed dolorem!
//         </p>
//       </div>
//       <div className="w-full flex items-center justify-start gap-2 flex-wrap px-2 mt-8">

//         {book.author && (
//           <div className="rounded-md bg-blue-500/10 px-3 py-2 text-base font-semibold capitalize flex items-center gap-2">
//             <CircleUserRound className="w-5 h-5" />
//             {book.author}
//           </div>
//         )}

//         {book.genre && (
//           <div className="rounded-md bg-yellow-500/10 px-3 py-2 text-base font-semibold capitalize flex items-center gap-2">
//             <Notebook className="w-5 h-5" />
//             {book.genre}
//           </div>
//         )}
//       </div>

//       <div className="w-full grid grid-cols-4 my-12">
//         <div className="col-span-1 space-y-8">
//           <p className="text-lg font-semibold text-neutral-700">Price</p>
//           <p className="text-lg font-semibold text-neutral-700">Qty</p>
//         </div>
//         <div className="col-span-3 space-y-8">
//           <p className="text-xl font-bold text-black">${book.price}</p>
//           <div className="flex items-center gap-2">
//             {[1, 2, 3, 4, 5].map((num) => (
//               <div
//               key={num}
//               className={cn(
//                 "w-8 h-8 cursor-pointer rounded-full flex items-center justify-center border border-hero transition-all duration-200",
//                 qty === num
//                   ? "bg-[#84b74e] text-white shadow-md scale-110" // Selected state
//                   : "bg-transparent text-black shadow-none",
//                 "hover:scale-110 hover:bg-[#84b74e] hover:text-white" // Hover state
//               )}
//               onClick={() => handleQty(num)}
//             >
//                 {num}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Button
//         onClick={() => addToCart(book)}
//         className="w-full py-6 text-xl font-semibold hover:bg-hero hover:text-white flex items-center justify-center gap-3"
//       >
//         Add to cart <ShoppingCart className="w-4 h-4" />
//       </Button>
//     </div>
//   );
// };

// export default Info;

"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-carts";
import { cn } from "@/lib/utils";
import { Books } from "@/types-db";
import {
  CircleUserRound,
  Notebook,
  ShoppingCart,
} from "lucide-react";
import { getGenreColor } from "@/lib/genreColors";
import { useState } from "react";

interface InfoProps {
  book: Books;
}

const Info = ({ book }: InfoProps) => {
  const [qty, setQty] = useState(1);
  const cart = useCart();

  const handleQty = (num: number) => {
    setQty(num);
    cart.updateItemQuantity(book.id, num);
  };

  const handleCustomQty = (value: string) => {
    const customQty = parseInt(value, 10);
    if (customQty > 0) {
      setQty(customQty);
      cart.updateItemQuantity(book.id, customQty);
    }
  };

  const addToCart = (data: Books) => {
    cart.addItem({ ...data, qty: qty });
  };

  return (
    <div>
      {/* Book Title */}
      <h1 className="text-3xl font-bold text-neutral-800">{book.name}</h1>

      {/* Description */}
      <div className="mt-3 flex items-end justify-between">
        <p className="text-base text-left text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat,
          consequatur aut dolorum, exercitationem dicta totam ipsa inventore
          odio ducimus, odit ipsam natus eveniet commodi consectetur harum in
          deserunt sed dolorem!
        </p>
      </div>

      {/* Author & Genre */}
      <div className="w-full flex items-center justify-start gap-2 flex-wrap px-2 mt-8">
        {/* Author */}
        {book.author && (
          <div className="rounded-md bg-blue-500/10 px-3 py-2 text-base font-semibold capitalize flex items-center gap-2">
            <CircleUserRound className="w-5 h-5" />
            {book.author}
          </div>
        )}

        {/* Genres */}
        {Array.isArray(book.genre)
          ? book.genre.map((singleGenre, index) => {
              const genreColor = getGenreColor(singleGenre); // Get color for the genre
              return (
                <div
                  key={index}
                  style={{ backgroundColor: `${genreColor}1A` }} // Lighter background
                  className="rounded-md px-3 py-2 text-base font-semibold capitalize flex items-center gap-2"
                >
                  <Notebook
                    className="w-5 h-5"
                    style={{ color: genreColor }} // Darker icon color
                  />
                  {singleGenre}
                </div>
              );
            })
          : book.genre && (
              <div
                style={{
                  backgroundColor: `${getGenreColor(book.genre)}1A`,
                }}
                className="rounded-md px-3 py-2 text-base font-semibold capitalize flex items-center gap-2"
              >
                <Notebook
                  className="w-5 h-5"
                  style={{ color: getGenreColor(book.genre) }}
                />
                {book.genre}
              </div>
            )}
      </div>


      {/* Price and Quantity */}
      <div className="w-full grid grid-cols-4 my-12">
        <div className="col-span-1 space-y-8">
          <p className="text-lg font-semibold text-neutral-700">Price</p>
          <p className="text-lg font-semibold text-neutral-700">Qty</p>
        </div>
        <div className="col-span-3 space-y-8">
          {/* Price */}
          <p className="text-xl font-bold text-black">${book.price}</p>

          {/* Quantity Options */}
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className={cn(
                  "w-8 h-8 cursor-pointer rounded-full flex items-center justify-center border border-hero transition-all duration-200",
                  qty === num
                    ? "bg-[#84b74e] text-white shadow-md scale-110" // Selected state
                    : "bg-transparent text-black shadow-none",
                  "hover:scale-110 hover:bg-[#84b74e] hover:text-white" // Hover state
                )}
                onClick={() => handleQty(num)}
              >
                {num}
              </div>
            ))}

            {/* Custom Quantity Input */}
            <input
              type="number"
              min="1"
              value={qty > 0 ? qty : ""}
              onChange={(e) => handleCustomQty(e.target.value)}
              className="w-16 h-8 border border-gray-300 rounded-md px-2 text-center text-black focus:outline-none focus:ring-2 focus:ring-hero"
              placeholder="Qty"
            />

          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        onClick={() => addToCart(book)}
        className="w-full py-6 text-xl font-semibold hover:bg-hero hover:text-white flex items-center justify-center gap-3"
      >
        Add to cart <ShoppingCart className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Info;
