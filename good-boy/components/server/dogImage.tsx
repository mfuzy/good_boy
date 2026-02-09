import Image from "next/image";

export default function DogImage() {
  return (
    <Image
      src="/Dog1.png"
      alt="Pes"
      width={600}
      height={980}
      priority
      style={{
        height: "100%",
        width: "auto",
      }}
    />
  );
}
