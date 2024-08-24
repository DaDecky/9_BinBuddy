import Image from "next/image";

const Article = () => {
  return (
    <div>
      <h1>Article Page</h1>
      <Image
        src="/rubbish.jpg" // Correct path (remove "public")
        alt="rubbish"
        width={500} // Specify the width of the image
        height={300} // Specify the height of the image
      />
    </div>
  );
};

export default Article;
