const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                À propos de moi
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ma présentation
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                Passionné par le développement web depuis plusieurs années, j'ai suivi une formation 
                complète chez OpenClassrooms qui m'a permis d'acquérir une solide expertise en 
                développement front-end et back-end.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Mon parcours m'a amené à maîtriser les technologies modernes du web, de la conception 
                d'interfaces utilisateur réactives à la création d'APIs robustes. Je suis constamment 
                à la recherche de nouveaux défis et j'aime apprendre de nouvelles technologies.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Aujourd'hui, je cherche à mettre mes compétences au service d'une équipe dynamique 
                pour créer des solutions web innovantes et performantes.
              </p>

              <div className="pt-6">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Formation</h4>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <span className="font-medium text-white">Développeur Web</span> - OpenClassrooms
                  </p>
                  <p className="text-gray-400 text-sm">
                    Formation complète en développement web moderne
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20">
                <h4 className="text-xl font-semibold text-white mb-6">Mes valeurs</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                    <div>
                      <h5 className="font-medium text-purple-400">Innovation</h5>
                      <p className="text-gray-300 text-sm">Toujours à la pointe des dernières technologies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-3"></div>
                    <div>
                      <h5 className="font-medium text-pink-400">Qualité</h5>
                      <p className="text-gray-300 text-sm">Code propre, performant et maintenable</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                    <div>
                      <h5 className="font-medium text-blue-400">Collaboration</h5>
                      <p className="text-gray-300 text-sm">Travail d'équipe et communication efficace</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center space-x-4 bg-gray-900/50 px-6 py-3 rounded-full border border-gray-700">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">Disponible pour nouveaux projets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
