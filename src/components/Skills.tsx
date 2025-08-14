import { skills } from '../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Mes Compétences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions web modernes et performantes
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto relative">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-900/30 to-pink-900/30 px-6 py-3 rounded-full border border-purple-500/20">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300 text-sm">Et bien d'autres technologies à découvrir...</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
