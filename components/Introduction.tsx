import { color } from 'd3-color'
import Image from 'next/image'

export default function Introduction() {
  return (
    <section
      className="text-center py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/lain.gif')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative">
        <Image
          src="/snooper.jpeg?height=150&width=150"
          alt="Your Name"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2 text-white">Ryan King</h1>
        <p className="text-xl text-gray-300 mb-4">Software Engineer</p>
        <p className="max-w-2xl mx-auto text-gray-200">
          yo idk why people are seeing this page, if someone knows please contact me below and leave ur contact details. i didnt rug you idek how im just a humble little coder guy
        </p>
      </div>
    </section>
  )
}
