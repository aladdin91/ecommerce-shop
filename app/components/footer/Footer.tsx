import React from "react";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className=" bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className=" flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Shop categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Costumer service</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
            <Link href="#">Phones</Link>
          </FooterList>
          <div className=" w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              harum perspiciatis quae consequuntur voluptatem esse eum illo
              ullam, dolorum culpa ducimus dolore ex cum quisquam, aut
              cupiditate beatae eveniet accusantium.
            </p>
            <p>&copy; {new Date().getFullYear()} All rights reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2 flex-row">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>

              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
