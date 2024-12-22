const skills = ['HTML', 'CSS', 'Typescript', 'React', 'Next.js', 'Node.js', 'Kotlin', 'Git']

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/coderguy.gif')",
      }}
    >
      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content on top of the GIF */}
      <div className="relative z-10 text-white">
        <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white text-black px-4 py-2 rounded-full shadow-md transition-colors duration-300 hover:bg-gray-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
