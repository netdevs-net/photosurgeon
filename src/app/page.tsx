import Link from "next/link";

const mockURLs = [
  'https://utfs.io/f/8mt5wmrfm7rSMJmHaNEdIFT9Ebes8qCzOAgRmN7XrvDYlkGS',
  'https://utfs.io/f/8mt5wmrfm7rSMopj7ZEdIFT9Ebes8qCzOAgRmN7XrvDYlkGS',
  'https://utfs.io/f/8mt5wmrfm7rS7U6CVEsDegLGTdpBbSJhuyKqjxfIwHCZrct0',
  'https://utfs.io/f/8mt5wmrfm7rSLCsRGzKo46fNyhIiwH8T3PdJWxButvD9FbZG',
  'https://utfs.io/f/8mt5wmrfm7rSNAhCJZQORpoSmgG58CZ9bx43snr26LvWfEe7'
]

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}))



export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">Gallery</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
         This is a Gallery App using RSC for performance
        </div>
      </div>
      <div className="flex flex-wrap">
        {mockImages.map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div> 
        ))}
      </div>s
    </main>
  );
}
