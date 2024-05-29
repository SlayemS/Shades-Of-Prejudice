import OpenAI from "openai";
import Image from "next/image";

type DallEImageProps = {
  prompt: string;
};

export default async function DallEImage(props: DallEImageProps) {
  // Create an instance of the OpenAI API client with your API key in .env file
  const openai = new OpenAI({
    apiKey: "",
  });

  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: props.prompt,
    n: 1,
    size: "1024x1024",
    style: "vivid",
  });

  return (
    // TODO: Add a loading spinner while the image is being generated and make a nice looking card for the image
    <div className="justify-center items-center flex flex-col">
      <Image
        src={response.data[0].url ?? "/next.svg"}
        width={1000}
        height={1000}
        alt={response.data[0].revised_prompt ?? "error generating image"}
      />
    </div>
  );
}
