import Image from 'next/image'

const projects = [
  { id: 1, title: 'Project 1', description: 'A brief description of Project 1', image: '/placeholder.svg?height=200&width=300' },
  { id: 2, title: 'Project 2', description: 'A brief description of Project 2', image: '/placeholder.svg?height=200&width=300' },
  { id: 3, title: 'Project 3', description: 'A brief description of Project 3', image: '/placeholder.svg?height=200&width=300' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
