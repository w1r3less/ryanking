const skills = ['HTML', 'CSS', 'Typescript', 'React', 'Next.js', 'Node.js', 'Kotlin', 'Git']

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white px-4 py-2 rounded-full shadow-md transition-colors duration-300 hover:bg-gray-200">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
