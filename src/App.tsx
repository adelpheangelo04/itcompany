import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './assets/App.css';
import './assets/calculator.css';

// Interface pour les données structurées
interface Service {
  title: string;
  description: string;
  icon: string;
  id?: string;
}

interface CaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  result: string;
  id?: string;
}

interface Technologies {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

interface ProjectCalculatorState {
  projectType: string;
  complexity: 'simple' | 'medium' | 'complex' | 'enterprise';
  selectedTechnologies: string[];
  timeline: string;
  estimatedBudget: number;
  estimatedDuration: number;
}

interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    scale?: number;
    rotateX?: number;
    rotateY?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    scale?: number;
    rotateX?: number;
    rotateY?: number;
    transition?: {
      duration: number;
      ease?: number[];
      type?: string;
      stiffness?: number;
      damping?: number;
    };
  };
}

const ITCompanyWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // États pour le calculateur de projet
  const [projectType, setProjectType] = useState<string>('');
  const [complexity, setComplexity] = useState<ProjectCalculatorState['complexity']>('medium');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>('3months');
  const [estimatedBudget, setEstimatedBudget] = useState<number>(0);
  const [estimatedDuration, setEstimatedDuration] = useState<number>(0);

  // Effet de scroll pour la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effet pour le thème sombre/clair
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // Fonction de calcul du projet
  const calculateProject = () => {
    let basePrice = 5000; // Prix de base
    let baseDuration = 4; // Durée de base en semaines

    // Ajustement selon le type de projet
    const projectMultipliers: Record<string, number> = {
      'web': 1.0,
      'mobile': 1.3,
      'ecommerce': 1.8,
      'enterprise': 2.5,
      'startup': 0.8
    };

    // Ajustement selon la complexité
    const complexityMultipliers: Record<string, number> = {
      'simple': 0.7,
      'medium': 1.0,
      'complex': 1.6,
      'enterprise': 2.2
    };

    // Calcul du prix
    let price = basePrice;
    if (projectType && projectMultipliers[projectType]) {
      price *= projectMultipliers[projectType];
    }
    if (complexityMultipliers[complexity]) {
      price *= complexityMultipliers[complexity];
    }

    // Bonus pour les technologies sélectionnées
    price += selectedTechnologies.length * 1000;

    // Ajustement durée
    let duration = baseDuration;
    if (projectType && projectMultipliers[projectType]) {
      duration *= projectMultipliers[projectType];
    }
    if (complexityMultipliers[complexity]) {
      duration *= complexityMultipliers[complexity];
    }

    setEstimatedBudget(Math.round(price));
    setEstimatedDuration(Math.round(duration));
  };

  // Effet pour recalculer quand les paramètres changent
  useEffect(() => {
    calculateProject();
  }, [projectType, complexity, selectedTechnologies]);

  // Données des services
  const services: Service[] = [
    {
      title: "Développement Web & Mobile",
      description: "Applications sur mesure, sites performants et expériences utilisateur optimisées pour web et mobile. Du prototype au déploiement.",
      icon: "Web"
    },
    {
      title: "Cybersécurité",
      description: "Audit de sécurité, protection des données, conformité et accompagnement pour sécuriser vos infrastructures numériques.",
      icon: "Security"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Migration cloud, architecture scalable et gestion d'infrastructure pour garantir performance et disponibilité.",
      icon: "Cloud"
    },
    {
      title: "Conseil IT & Transformation Digitale",
      description: "Accompagnement stratégique, audit technique et feuille de route pour digitaliser vos processus métier.",
      icon: "Strategy"
    }
  ];

  // Technologies
  const technologies: Technologies = {
    languages: ["JavaScript", "TypeScript", "Python", "PHP", "Java"],
    frameworks: ["React", "Vue.js", "FastAPI", "Laravel", "Node.js"],
    tools: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes"]
  };

  // Études de cas
  const caseStudies: CaseStudy[] = [
    {
      title: "Plateforme E-commerce Multi-vendeurs",
      client: "Secteur Retail",
      challenge: "Besoin d'une marketplace locale permettant à 200+ vendeurs de gérer leurs stocks et commandes en temps réel.",
      solution: "Développement d'une plateforme web/mobile avec système de paiement intégré, tableau de bord vendeur et application livreur.",
      result: "15 000+ transactions mensuelles, 98% de satisfaction utilisateur, temps de traitement réduit de 60%."
    },
    {
      title: "Sécurisation Infrastructure Bancaire",
      client: "Institution Financière",
      challenge: "Mise en conformité avec les standards internationaux de sécurité et protection contre les menaces cyber.",
      solution: "Audit complet, déploiement de pare-feu nouvelle génération, formation des équipes et mise en place d'un SOC.",
      result: "Zéro incident de sécurité en 18 mois, certification ISO 27001 obtenue, réduction de 75% des vulnérabilités."
    }
  ];

  return (
    <div className="website-container">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <span className="logo-text">It Company</span>
            <span className="logo-accent">.</span>
          </div>
          
          <div className="nav-actions">
            <button 
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
            
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#expertise" onClick={() => setIsMenuOpen(false)}>Expertise</a></li>
            <li><a href="#clients" onClick={() => setIsMenuOpen(false)}>Clients</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {["Solutions numériques", "fiables et innovantes"].map((line, index) => (
                <div key={index}>
                  {line.split(" ").map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.3 + (index * 0.1) + (wordIndex * 0.05),
                        ease: "easeOut"
                      }}
                      style={{ display: "inline-block", marginRight: "0.25em" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                  {index === 0 && <br />}
                  {index === 1 && <span className="title-accent"> {line}</span>}
                </div>
              ))}
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Entreprise camerounaise spécialisée en développement logiciel, cybersécurité et transformation digitale. 
              Nous accompagnons les organisations vers l'excellence technologique.
            </motion.p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(45, 95, 63, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Discuter de votre projet
                <ChevronRight size={20} />
              </motion.a>
              <motion.a 
                href="#services" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, borderColor: "var(--color-primary)" }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir nos services
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {["Web", "Cloud", "Secure"].map((text, index) => (
              <motion.div
                key={text}
                className={`visual-card card-${index + 1}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (index * 0.2),
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Nos Services</span>
            <h2 className="section-title">Une expertise technique complète</h2>
          </div>
          
          <motion.div 
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index} 
                className="service-card"
                custom={index}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 60, 
                    scale: 0.85,
                    rotateX: -15,
                    rotateY: 15
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    rotateX: 0,
                    rotateY: 0,
                    transition: { 
                      duration: 0.8, 
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 100,
                      damping: 20
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  rotateX: 5,
                  rotateY: -5,
                  z: 50,
                  boxShadow: "0 25px 50px rgba(45, 95, 63, 0.25), 0 0 0 1px rgba(45, 95, 63, 0.1)",
                  transition: { 
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.2 }
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <motion.div 
                  className="service-icon"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.15,
                    transition: { 
                      duration: 0.8,
                      ease: "easeInOut",
                      type: "spring"
                    }
                  }}
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {service.icon}
                </motion.div>
                <motion.h3 
                  className="service-title"
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="service-description"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {service.description}
                </motion.p>
                <motion.div 
                  className="service-cta"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <ChevronRight size={16} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="expertise" className="technologies">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Technologies & Outils</span>
            <h2 className="section-title">Stack technique moderne</h2>
          </div>
          
          <div className="tech-grid">
            <div className="tech-category">
              <h3 className="tech-category-title">Langages</h3>
              <div className="tech-tags">
                {technologies.languages.map((lang, i) => (
                  <span key={i} className="tech-tag">{lang}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-category">
              <h3 className="tech-category-title">Frameworks</h3>
              <div className="tech-tags">
                {technologies.frameworks.map((fw, i) => (
                  <span key={i} className="tech-tag">{fw}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-category">
              <h3 className="tech-category-title">DevOps & Cloud</h3>
              <div className="tech-tags">
                {technologies.tools.map((tool, i) => (
                  <span key={i} className="tech-tag">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Clients Section */}
      <section id="clients" className="clients">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Ils nous font confiance</span>
            <h2 className="section-title">Partenaires & Clients</h2>
          </div>
          
          <div className="clients-logos">
            <div className="client-logo">LoremCorp</div>
            <div className="client-logo">IpsumTech</div>
            <div className="client-logo">DolorInc</div>
            <div className="client-logo">SitAmet</div>
            <div className="client-logo">Consectetur</div>
            <div className="client-logo">Adipiscing</div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Études de Cas</span>
            <h2 className="section-title">Projets réalisés</h2>
          </div>
          
          <div className="cases-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-card">
                <h3 className="case-title">{study.title}</h3>
                <span className="case-client">{study.client}</span>
                
                <div className="case-section">
                  <h4 className="case-label">Défi</h4>
                  <p className="case-text">{study.challenge}</p>
                </div>
                
                <div className="case-section">
                  <h4 className="case-label">Solution</h4>
                  <p className="case-text">{study.solution}</p>
                </div>
                
                <div className="case-section">
                  <h4 className="case-label">Résultat</h4>
                  <p className="case-text case-result">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-title">Parlons de votre projet</h2>
              <p className="contact-subtitle">
                Que vous ayez besoin de développement, de conseil ou de sécurisation, 
                notre équipe est à votre écoute.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={20} />
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:contact@itcompany.cm">contact@itcompany.cm</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <Phone size={20} />
                  <div>
                    <strong>Téléphone</strong>
                    <a href="tel:+237690000000">+237 690 000 000</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <MapPin size={20} />
                  <div>
                    <strong>Adresse</strong>
                    <span>Bastos, Yaoundé, Cameroun</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="https://linkedin.com/company/itcompany" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/itcompany" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://facebook.com/itcompany" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Nom complet" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email professionnel" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Téléphone" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Parlez-nous de votre projet..." rows={4} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-text">It Company</span>
                <span className="logo-accent">.</span>
              </div>
              <p className="footer-tagline">
                Solutions numériques fiables et innovantes au Cameroun
              </p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Développement</a></li>
                  <li><a href="#services">Cybersécurité</a></li>
                  <li><a href="#services">Cloud</a></li>
                  <li><a href="#services">Conseil IT</a></li>
                </ul>
              </div>
              
              <div className="footer-column">
                <h4>Entreprise</h4>
                <ul>
                  <li><a href="#clients">Clients</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#mentions">Mentions légales</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 It Company. Tous droits réservés.</p>
            <p className="footer-legal">
              <a href="#mentions">Mentions légales</a> • <a href="#privacy">Politique de confidentialité</a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default ITCompanyWebsite;
