import { useEffect } from 'react'

const SEOHead = () => {
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Hugo Clery",
      "jobTitle": "Développeur Full Stack",
      "description": "Développeur Full Stack spécialisé en React, TypeScript et Node.js",
      "url": "https://portfolio.cleryhugo.fr",
      "sameAs": [
        "https://github.com/hugoclery",
        "https://linkedin.com/in/hugoclery"
      ],
      "knowsAbout": [
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "HTML",
        "CSS",
        "SASS",
        "Redux",
        "GitHub",
        "Figma",
        "PostgreSQL",
        "Spring",
        "Kubernetes"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "OpenClassrooms"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Développeur Web",
        "credentialCategory": "Certification",
        "educationalLevel": "Professional"
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(jsonLd)
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}

export default SEOHead
