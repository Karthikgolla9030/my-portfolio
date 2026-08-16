import re

path = r'c:\Users\karth\Downloads\projects\p\src\app\projects\[slug]\page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define ProjectHero Component
project_hero_code = """
function ProjectHero({ project }: { project: any }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16 border-b border-border pb-16">
      {/* Left: Project Info */}
      <div className="space-y-8">
        <div className="space-y-4">
          {project.subtitle && (
            <span className="inline-block text-[10px] font-semibold text-primary uppercase tracking-widest bg-primary/5 px-3 py-1.5 rounded-full border border-primary/20">
              Featured Project
            </span>
          )}
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-xl text-foreground font-medium">
              {project.subtitle}
            </p>
          )}
          <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed max-w-2xl">
            {project.longDescription}
          </p>
        </div>

        {/* Action CTAs */}
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
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-border">
          <div className="space-y-1.5">
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Duration</span>
            <span className="text-sm font-bold text-foreground">{project.stats?.duration || 'Ongoing'}</span>
          </div>
          <div className="space-y-1.5">
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">My Role</span>
            <span className="text-sm font-bold text-foreground">{project.stats?.role || 'Developer'}</span>
          </div>
          <div className="space-y-1.5">
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Tech Stack</span>
            <span className="text-sm font-bold text-foreground truncate block" title={project.stats?.techStack}>{project.stats?.techStack}</span>
          </div>
          <div className="space-y-1.5">
            <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Status</span>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary mt-0.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              {project.stats?.status || 'Completed'}
            </span>
          </div>
        </div>
      </div>

      {/* Right: Laptop Mockup */}
      <div className="w-full relative mx-auto max-w-[600px] lg:max-w-none perspective-[1200px] mt-8 lg:mt-0">
        {/* MacBook Frame */}
        <div className="relative mx-auto bg-black rounded-t-[1.5rem] rounded-b-xl border-[6px] border-black shadow-2xl overflow-hidden aspect-[16/10] w-[95%]">
          {/* Screen Inner Bezel */}
          <div className="absolute inset-0 bg-[#0a0a0a] rounded-lg overflow-hidden border border-[#2a2a2a]">
            {/* Top Nav/Camera dot */}
            <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-20">
              <div className="w-16 h-3 bg-black rounded-b-md flex justify-center items-center">
                <div className="w-1 h-1 rounded-full bg-[#111111] border border-[#222]" />
              </div>
            </div>
            {/* Project Image */}
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-95 hover:opacity-100 transition-opacity" />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600 font-mono text-sm gap-2">
                <Globe size={24} className="opacity-20" />
                <span>Interface mockup pending</span>
              </div>
            )}
          </div>
        </div>
        {/* Keyboard / Base */}
        <div className="relative h-4 md:h-6 w-full bg-gradient-to-b from-[#e0e0e0] to-[#b0b0b0] rounded-b-[1.5rem] rounded-t-sm mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex justify-center border-t border-white/40">
          <div className="w-24 md:w-32 h-1 bg-[#909090] rounded-b-md absolute top-0" />
        </div>
      </div>
    </div>
  );
}

"""

# Insert ProjectHero just before ZomatoCaseStudy
if "function ProjectHero" not in content:
    content = content.replace("function ZomatoCaseStudy", project_hero_code + "function ZomatoCaseStudy")

# Replace Zomato hero
content = re.sub(
    r'\{/\*\s*HERO SECTION\s*\*/\}.*?(?=\{/\*\s*Split documentation portal layout\s*\*/\})',
    '<ProjectHero project={project} />\n\n        ',
    content,
    flags=re.DOTALL
)

# Replace SalesDashboardCaseStudy hero
content = re.sub(
    r'\{/\*\s*HERO SECTION\s*\*/\}.*?(?=\{/\*\s*Split documentation portal layout\s*\*/\})',
    '<ProjectHero project={project} />\n\n        ',
    content,
    flags=re.DOTALL
)

# Replace LinkoraCaseStudy hero
content = re.sub(
    r'\{/\*\s*HERO SECTION\s*\*/\}.*?(?=\{/\*\s*Split documentation portal layout\s*\*/\})',
    '<ProjectHero project={project} />\n\n        ',
    content,
    flags=re.DOTALL
)

# Replace default ProjectCaseStudyPage hero
content = re.sub(
    r'\{/\*\s*Two-Column Hero block\s*\*/\}.*?(?=\{/\*\s*Split documentation portal layout\s*\*/\})',
    '<ProjectHero project={project} />\n\n        ',
    content,
    flags=re.DOTALL
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx with standardized ProjectHero!")
