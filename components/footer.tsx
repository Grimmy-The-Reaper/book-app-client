import Container from "@/components/container";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white ">
      <Container>
        <div className="w-full  bg-hero/30 grid grid-cols-2 md:grid-cols-4 px-4 md:px-12 py-8">
          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Explore</h2>
            <p className="text-neutral-500 text-sm">Home</p>
            <p className="text-neutral-500 text-sm">Why Us</p>
            <p className="text-neutral-500 text-sm">About Us</p>
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Help</h2>
            <p className="text-neutral-500 text-sm">Privacy</p>
            <p className="text-neutral-500 text-sm">Terms & Condition</p>
            <p className="text-neutral-500 text-sm">Policy</p>
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="text-neutral-500 text-sm">+977 0000-000-000</p>
            <p className="text-neutral-500 text-sm">info@Nalanda.com</p>
            <p className="text-neutral-500 text-sm">1234 Sifal, Nepal</p>
          </div>

          <div className="flex flex-col items-start justify-start gap-3">
            <h2 className="text-3xl font-semibold">Subscribe to our Newsletter</h2>
            <div className="w-full rounded-md border-2 border-emerald-500 flex items-center justify-center">
              <input
                type="text"
                placeholder="Enter your Email"
                className="h-full bg-transparent pl-4 text-sm text-neutral-500 w-full outline-none border-none"
              />
              <Button className="bg-emerald-500 rounded-tr-none rounded-br-none hover:bg-emerald-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto py-8 ">
          <p className="text-center text-xs text-black">
            &copy; 2024 Nalanda, Inc. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
