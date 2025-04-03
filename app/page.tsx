import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Heart, Share } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Camera className="h-6 w-6" />
            <span>PhotoGallery</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Gallery
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button size="sm" className="hidden md:flex">
            Subscribe
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Beautiful Moments Captured
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A collection of stunning photographs from around the world. Each image tells a unique story.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl">
                <Image
                  src="/image3.png"
                  alt="Mountain landscape with a lake in the foreground"
                  width={800}
                  height={600}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Mountain Serenity
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Share className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-500">
                    A breathtaking view of the mountains reflecting in a crystal clear lake at sunrise.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl">
                <Image
                  src="/images/ocean.jpg"
                  alt="Ocean waves crashing on a beach at sunset"
                  width={800}
                  height={600}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Sunset Waves
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Share className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-500">
                    Golden hour at the beach with waves gently washing ashore as the sun sets on the horizon.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl">
                <Image
                  src="/images/forest.jpg"
                  alt="Dense forest with sunlight streaming through the trees"
                  width={800}
                  height={600}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Forest Light
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Share className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-500">
                    Sunbeams filtering through ancient trees in a misty forest, creating a magical atmosphere.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl">
                <Image
                  src="/images/city.jpg"
                  alt="Urban cityscape at night with lights reflecting in water"
                  width={800}
                  height={600}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      City Reflections
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Share className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-500">
                    A vibrant cityscape at night with colorful lights reflecting in the calm waters of the harbor.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl">
                <Image
                  src="/images/desert.jpg"
                  alt="Desert landscape with sand dunes at sunset"
                  width={800}
                  height={600}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Desert Gold
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Share className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-500">
                    Endless sand dunes of the desert bathed in golden light as the sun sets on the horizon.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl">
                <Image
                  src="/images/snow.jpg"
                  alt="Snowy mountain peak with alpenglow"
                  width={800}
                  height={600}
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Alpine Glow
                    </h3>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Share className="h-4 w-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-500">
                    A majestic snow-capped mountain peak illuminated by the pink and orange hues of alpenglow.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button className="gap-2">
                View More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Camera className="h-6 w-6" />
                <span>PhotoGallery</span>
              </div>
              <p className="text-sm text-gray-500">
                Showcasing beautiful photography from around the world. Our curated collection features stunning
                landscapes, urban scenes, and natural wonders.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Landscapes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Urban
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Nature
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-gray-900">
                    Wildlife
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Subscribe</h3>
              <p className="text-sm text-gray-500 mb-4">
                Join our newsletter to receive updates on new photos and featured collections.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} PhotoGallery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

