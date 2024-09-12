import Image from "next/image";
import Link from "next/link";
import styles from "./ArticleCard.module.css";

interface ArticleCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    href: string;
    children: React.ReactNode;
}

export const ArticleCard = ( { imageSrc, imageAlt, title, href, children }: ArticleCardProps ) => {
  return (
    <div className="grid grid-rows-10 grid-cols-1 md:grid-rows-4 md:grid-cols-3 sm:grid-rows-2 
    max-w-[300px] sm:max-w-[400px] md:max-w-[70%] 
    max-h-[450px] md:max-h-[220px] bg-white 
    mb-5 rounded-md">
        <div className="row-span-5 md:col-span-1 md:row-span-4 p-2 justify-center">
            <Link href={ href } className="w-full">
                <Image
                    className="rounded-lg  object-cover w-[400px] h-[200px]"
                    src={ imageSrc }
                    alt={ imageAlt }
                    width={300}
                    height={100}
                />
            </Link>
        </div>
        <div className="row-span-4 md:col-span-2 md:row-span-3 p-4 overflow-hidden">
            <h2 className="text-black md:text-xl text-l font-bold mb-3"> {title} </h2>
            <p className={`text-slate-600 ${styles.ellipsismultiline}`}>
                { children }
            </p>
        </div>
        <div className="row-span-1 md:col-span-2 md:col-start-2 md:row-span-1 py-2 px-4">
            <Link href={ href }>
                <p className="text-base sm:text-md underline">
                    Read more
                </p>
            </Link>

        </div>
    </div>
  )
}

