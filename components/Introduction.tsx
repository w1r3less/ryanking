import Image from 'next/image'

export default function Introduction() {
  return (
    <section className="text-center py-20">
      <Image
        src="/placeholder.svg?height=150&width=150"
        alt="Your Name"
        width={150}
        height={150}
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold mb-2">Ryan King</h1>
      <p className="text-xl text-gray-600 mb-4">Software Engineer</p>
      <p className="max-w-2xl mx-auto text-gray-700">
       I like to code...
      </p>
    </section>
  )
}