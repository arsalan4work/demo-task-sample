import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div> <p>Hello this is a demo image with Nextjs Image and and HTML img tag</p> </div>
      <div className="flex flex-col mt-10">
        <p>Next Image Tag</p>
        <Image src="/category-1.png" alt="Error" width={200} height={200}></Image>
      </div> 
      <div className="flex flex-col mt-10">
        <p>HTML Img Tag</p>
        <img src="/featured-2.png" alt="Error" width={200} height={200}></img>
      </div>
    </div>
  );
}
