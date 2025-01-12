import getBooks from "@/actions/get-books";
import Container from "@/components/container";
import { PopularContent } from "@/components/popular-content";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { FileHeart, Salad, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

const HomePage = async () => {
  const books = await getBooks({ isFeatured: true });
  console.log(books,"books")
  // console.log("Books data:", books);


  return (
    <>
      <Container className="px-4 md:px-12">
        <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-300">
              Looking for the perfect book?
            </p>

            <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
              Visit Nalanda! <span className="block py-4">Explore,Love,Order</span>
            </h2>

            <p className="text-base text-center md:text-left text-neutral-500 my-4">
              Nalanda is the go-to destination for all your biblio-needs. Explore our curated
              catalog and find books that you love. All in one place! 
            </p>

            <div className="my-4 flex text-center justify-center gap-6 w-full md:w-auto">
              <Link href={"/explore"}>
                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full">
                  Explore
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button
                  className="px-8 md:px-16 py-4 md:py-6 rounded-full "
                  variant="outline">
                  About us
                </Button>
              </Link>
            </div>
          </div>
          <div>
            {/* <div className="w-full relative h-[560px] flex items-center justify-center">
              <Image
                src="/img/reading2.jpg"
                alt="Hero"
                className="object-contain w-full h-full absolute"
                fill
              />
            </div> */}
            <div className="w-full relative h-[560px] flex items-center justify-center overflow-hidden rounded-xl">
              <Image
                src="/img/reading2.jpg"
                alt="Hero"
                className="object-cover w-full h-full transform translate-x-114"
                fill
              />
            </div>

          </div>
        </section>

        

        {/* popular section */}
        <section className="text-center my-8">
          <h2 className="text-6xl font-urbanist tracking-wide uppercase ">
            Current Features
          </h2>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 md:gap-12 my-4 py-12">
          {books?.slice(0, 4).map((item) => (
            <PopularContent key={item.id} data={item} />
          ))}
        </section>
        


        {/* why choose us */}
        <section className=" my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Why us ?
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            Established by a group of book enthusiasts, we offer a painstakingly curated selection of books that we know you'll love{" "}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">

          <Card className="relative shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4 bg-white overflow-hidden group">
            <div className="absolute inset-0 bg-[#84B74E] opacity-0 rounded-md group-hover:opacity-100 scale-0 group-hover:scale-150 transition-transform duration-[4000ms] ease-out pointer-events-none"></div>
            <Salad className="w-8 h-8 text-hero relative z-10 transition-transform duration-700 group-hover:rotate-12" />
            <CardTitle className="text-neutral-600 relative z-10 group-hover:text-white transition-colors duration-700">
              Food for the mind!
            </CardTitle>
            <CardDescription className="text-center relative z-10 group-hover:text-white transition-colors duration-700">
              Studies show that reading a book reduces stress by 68%
            </CardDescription>
          </Card>


            <Card className="relative shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4 bg-white overflow-hidden group">
              <div className="absolute inset-0 bg-[#84B74E] opacity-0 rounded-md group-hover:opacity-100 scale-0 group-hover:scale-150 transition-transform duration-[4000ms] ease-out pointer-events-none"></div>
              <FileHeart className="w-8 h-8 text-hero relative z-10 transition-transform duration-700 group-hover:rotate-12" />
              <CardTitle className="text-neutral-600 relative z-10 group-hover:text-white transition-colors duration-700">
                Explore our curated titles
              </CardTitle>
              <CardDescription className="text-center relative z-10 group-hover:text-white transition-colors duration-700">
                Hassle free book browsing
              </CardDescription>
            </Card>


            {/* <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <Truck className="w-8 h-8 text-hero" />
              <CardTitle className="text-neutral-600">Fast Delivery</CardTitle>
              <CardDescription className="text-center">
                "That was quick"
              </CardDescription>
            </Card> */}
            
            <Card className="relative shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4 bg-white overflow-hidden group">
              <div className="absolute inset-0 bg-[#84B74E] opacity-0 rounded-md group-hover:opacity-100 scale-0 group-hover:scale-150 transition-transform duration-[40000ms] ease-out pointer-events-none"></div>
              <Truck className="w-8 h-8 text-hero relative z-10 transition-transform duration-700 group-hover:rotate-12" />
              <CardTitle className="text-neutral-600 relative z-10 group-hover:text-white transition-colors duration-700">
                Fast Delivery
              </CardTitle>
              <CardDescription className="text-center relative z-10 group-hover:text-white transition-colors duration-700">
                "That was quick"
              </CardDescription>
            </Card>



          </div>
        </section>

        {/* image sections */} 
        <section className=" my-4 py-10 flex flex-col items-center justify-center">
          <h2 className="text-5xl md:text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Make memories, learn new things and have loads of fun!
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            Reading is different for everybody. It can stir emotions, create memories make you relive some. Enjoy every second of it. :){" "}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-2">
          <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] mt-20 bg-hero/30 overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/img/reading6.jpg"
                  alt="Chef One"
                  className="object-cover"
                  fill
                />
              </div>
            </Card>

            {/* <Card className="shadow-lg relative rounded-md border-none  flex flex-col items-center justify-end h-96 md:h-[520px] mt-20 bg-hero/30">
              <Image
                src="/img/reading3.webp"
                alt="Chef One"
                className="w-full h-full object-contain"
                fill
              />
            </Card> */}
            <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] mt-20 bg-hero/30 overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/img/reading3.webp"
                  alt="Chef One"
                  className="object-cover"
                  fill
                />
              </div>
            </Card>

            <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] mt-20 bg-hero/30 overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/img/reading5.jpg"
                  alt="Chef One"
                  className="object-cover"
                  fill
                />
              </div>
            </Card>
          </div>
        </section>
      </Container>
    </>
  );
};

export default HomePage;
