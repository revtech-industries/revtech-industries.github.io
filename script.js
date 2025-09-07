/* Modern Portfolio CSS - James Warnecke */

/* CSS Variables for consistent theming */
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #f59e0b;
    --accent-color: #10b981;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --text-light: #9ca3af;
    --bg-primary: #ffffff;
    --bg-secondary: #f9fafb;
    --bg-dark: #111827;
    --border-color: #e5e7eb;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-primary);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    transition: all 0.3s ease;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.nav-logo .logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.bar {
    width: 25px;
    height: 3px;
    background: var(--text-primary);
    margin: 3px 0;
    transition: 0.3s;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.highlight {
    background: linear-gradient(45deg, #fbbf24, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    opacity: 0.9;
}

.hero-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.8;
    line-height: 1.7;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-block;
    border: 2px solid transparent;
}

.btn-primary {
    background: white;
    color: var(--primary-color);
    box-shadow: var(--shadow-lg);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
}

.btn-secondary {
    background: transparent;
    color: white;
    border-color: white;
}

.btn-secondary:hover {
    background: white;
    color: var(--primary-color);
    transform: translateY(-2px);
}

/* Floating Cards */
.hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.floating-card {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    animation: float 6s ease-in-out infinite;
}

.floating-card:nth-child(1) {
    top: -50px;
    left: -50px;
    animation-delay: 0s;
}

.floating-card:nth-child(2) {
    top: 50px;
    right: -50px;
    animation-delay: 2s;
}

.floating-card:nth-child(3) {
    bottom: -50px;
    left: 50px;
    animation-delay: 4s;
}

.floating-card i {
    font-size: 2rem;
    color: var(--secondary-color);
}

.floating-card span {
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

/* Section Styles */
section {
    padding: 80px 0;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-subtitle {
    text-align: center;
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* About Section */
.about {
    background: var(--bg-secondary);
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
}

.about-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    text-align: center;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.skill-category {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
}

.skill-category:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.skill-category h3 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
    color: var(--primary-color);
    font-size: 1.2rem;
}

.skill-category i {
    color: var(--secondary-color);
}

.skill-category ul {
    list-style: none;
}

.skill-category li {
    padding: 0.5rem 0;
    color: var(--text-secondary);
    position: relative;
    padding-left: 20px;
}

.skill-category li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--accent-color);
    font-weight: bold;
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.project-card {
    background: white;
    padding: 2.5rem;
    border-radius: 20px;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
}

.project-icon {
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.project-icon i {
    font-size: 1.5rem;
    color: white;
}

.project-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.project-card p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag {
    background: var(--bg-secondary);
    color: var(--primary-color);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid var(--border-color);
}

/* Portfolio Section */
.portfolio {
    background: var(--bg-secondary);
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.portfolio-item {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
}

.portfolio-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
}

.portfolio-image {
    position: relative;
    overflow: hidden;
}

.portfolio-image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: all 0.3s ease;
}

.portfolio-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    color: white;
    padding: 2rem 1.5rem 1.5rem;
    transform: translateY(100%);
    transition: all 0.3s ease;
}

.portfolio-item:hover .portfolio-overlay {
    transform: translateY(0);
}

.portfolio-item:hover .portfolio-image img {
    transform: scale(1.1);
}

.portfolio-overlay h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.portfolio-overlay p {
    font-size: 0.9rem;
    opacity: 0.9;
}

/* Documents Section */
.documents-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.document-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: var(--shadow-md);
    text-decoration: none;
    color: var(--text-primary);
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.document-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    color: var(--primary-color);
}

.document-card i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.document-card h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.document-card p {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* Contact Section */
.contact {
    background: var(--bg-dark);
    color: white;
}

.contact .section-title {
    color: white;
    background: linear-gradient(45deg, #fbbf24, #f59e0b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.contact .section-subtitle {
    color: rgba(255, 255, 255, 0.8);
}

.contact-content {
    max-width: 600px;
    margin: 0 auto;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.contact-item:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
}

.contact-item i {
    font-size: 1.5rem;
    color: var(--secondary-color);
    width: 30px;
}

.contact-item h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
}

.contact-item a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-item a:hover {
    color: var(--secondary-color);
}

/* Footer */
.footer {
    background: var(--bg-dark);
    color: white;
    padding: 2rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-link {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-link:hover {
    background: var(--primary-color);
    transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: var(--shadow-lg);
        padding: 2rem 0;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-buttons {
        justify-content: center;
    }
    
    .floating-card {
        position: static;
        margin: 1rem;
        animation: none;
    }
    
    .hero-image {
        flex-direction: column;
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .portfolio-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    
    .documents-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        text-align: center;
    }
    
    .contact-item {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .btn {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
}

/* Smooth scrolling and animations */
@media (prefers-reduced-motion: no-preference) {
    html {
        scroll-behavior: smooth;
    }
    
    .project-card,
    .portfolio-item,
    .document-card,
    .skill-category {
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.6s ease forwards;
    }
    
    .project-card:nth-child(1) { animation-delay: 0.1s; }
    .project-card:nth-child(2) { animation-delay: 0.2s; }
    .project-card:nth-child(3) { animation-delay: 0.3s; }
    
    .portfolio-item:nth-child(1) { animation-delay: 0.1s; }
    .portfolio-item:nth-child(2) { animation-delay: 0.2s; }
    .portfolio-item:nth-child(3) { animation-delay: 0.3s; }
    .portfolio-item:nth-child(4) { animation-delay: 0.4s; }
    .portfolio-item:nth-child(5) { animation-delay: 0.5s; }
    .portfolio-item:nth-child(6) { animation-delay: 0.6s; }
    .portfolio-item:nth-child(7) { animation-delay: 0.7s; }
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Loading animation */
.loading {
    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
