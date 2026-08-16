import re

path = r'c:\Users\karth\Downloads\projects\p\src\app\projects\[slug]\page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the Action CTAs block in ProjectHero
old_cta_block = """        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-all"
            >
              <Globe size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-background text-foreground hover:bg-secondary font-bold text-sm px-6 py-3 rounded-xl transition-all"
            >
              <GithubIcon size={16} />
              <span>GitHub Repository</span>
            </a>
          )}
        </div>"""

new_cta_block = """        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          {project.slug !== 'sales-dashboard' && project.slug !== 'zomato-analysis' && project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-all"
            >
              <Globe size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {(project.githubUrl || project.slug === 'sales-dashboard' || project.slug === 'zomato-analysis') && (
            <a
              href={project.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-background text-foreground hover:bg-secondary font-bold text-sm px-6 py-3 rounded-xl transition-all"
            >
              <GithubIcon size={16} />
              <span>GitHub Repository</span>
            </a>
          )}
        </div>"""

content = content.replace(old_cta_block, new_cta_block)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Patched ProjectHero CTAs")
