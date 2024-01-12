import { AiFillPhone, AiOutlineDesktop, AiOutlineLaptop } from "react-icons/ai";
import { MdOutlineKeyboard, MdStorefront, MdTv, MdWatch } from "react-icons/md";
import { TbDeviceIpad } from "react-icons/tb";

export const categories = [
  {
    label: "All",
    icon: MdStorefront,
  },
  {
    label: "Phones",
    icon: AiFillPhone,
  },
  {
    label: "Laptops",
    icon: AiOutlineLaptop,
  },
  {
    label: "Desktops",
    icon: AiOutlineDesktop,
  },
  {
    label: "Watch",
    icon: MdWatch,
  },
  {
    label: "Tv",
    icon: MdTv,
  },
  {
    label: "Ipad",
    icon: TbDeviceIpad,
  },
  {
    label: "Accessories",
    icon: MdOutlineKeyboard,
  },
];
