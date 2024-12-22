import Image from 'next/image'

const projects = [
  { id: 1, title: 'icy.wtf', description: 'The site you are on rn, made with typescript', image: '/clickguy.jpeg?height=200&width=300' },
  { id: 2, title: 'letmeputyouon.com', description: 'Mood based music recommendation chatbot: coming soon', image: '/golden-retriever-music.gif?height=200&width=300' },
  { id: 3, title: 'Dignitas pricing', description: '200 year old CSGO pricing web scraper lol (please replace)', image: '/s-l1200.jpg?height=200&width=300' },
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
