import sys

path = r'c:\Users\karth\Downloads\projects\p\src\app\projects\[slug]\page.tsx'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

linkora_component = """
function LinkoraCaseStudy({ project, related }: { project: any; related: any[] }) {
  const [activeAnchor, setActiveAnchor] = React.useState("overview");
  const [lightboxImage, setLightboxImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    const anchors = ["overview", "problem", "whatibuilt", "matchmaking", "realtime", "architecture", "contribution", "challenges", "learned", "future"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const anchor of anchors) {
        const el = document.getElementById(anchor);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveAnchor(anchor);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "The Problem" },
    { id: "whatibuilt", label: "What I Built" },
    { id: "matchmaking", label: "Intelligent Matchmaking" },
    { id: "realtime", label: "Real-Time Messaging" },
    { id: "architecture", label: "Architecture" },
    { id: "contribution", label: "My Contribution" },
    { id: "challenges", label: "Challenges & Solutions" },
    { id: "learned", label: "What I Learned" },
    { id: "future", label: "Future Scope" }
  ];

  return (
    <main className="w-full bg-background min-h-screen py-16 md:py-24 relative">
      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-8 md:right-8 p-3 bg-secondary text-foreground rounded-full hover:bg-border transition-colors shadow-sm"
            onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
          >
            <X size={24} />
          </button>
          <div className="relative w-full max-w-7xl max-h-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={lightboxImage} 
              alt="Expanded view" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Navigation breadcrumbs bar */}
        <div className="flex items-center justify-between pb-8 border-b border-border mb-12">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </Link>
          <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest">
            Case Study: {project.title}
          </span>
        </div>

        {/* HERO SECTION */}
        <div className="mb-16 border-b border-border pb-16">
          <div className="space-y-6 max-w-4xl">
            <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
              REAL-TIME MATCHMAKING & CHAT
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight leading-tight">
              Linkora
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed max-w-3xl">
              A real-time matchmaking and chat application built around compatibility matching, live communication, and reliable connection handling.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-6">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-all">
                  <GithubIcon size={16} />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-12 mt-12 border-t border-border/50">
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Type</span>
              <span className="text-sm font-bold text-foreground">Real-time Web App</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Focus</span>
              <span className="text-sm font-bold text-foreground">Matchmaking + Real-time Comms</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Backend</span>
              <span className="text-sm font-bold text-foreground">Django / DRF / Channels</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Frontend</span>
              <span className="text-sm font-bold text-foreground">React</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Real-time</span>
              <span className="text-sm font-bold text-foreground">WebSockets + Redis</span>
            </div>
            <div className="space-y-1.5">
              <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest">Database</span>
              <span className="text-sm font-bold text-foreground">PostgreSQL</span>
            </div>
          </div>
        </div>

        {/* Split documentation portal layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Sticky Table of Contents */}
          <aside className="w-full lg:w-64 shrink-0 sticky top-28 hidden lg:block space-y-6">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-muted-foreground">DOCUMENTATION</h3>
            <nav className="flex flex-col gap-2 border-l border-border pl-5 text-sm font-medium">
              {toc.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={`block py-1.5 transition-colors focus:outline-none relative -left-[21px] pl-[20px] border-l-2 ${activeAnchor === item.id ? "text-primary border-primary font-bold" : "text-muted-foreground hover:text-foreground border-transparent"}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Right: Main Content */}
          <div className="flex-1 max-w-4xl space-y-24 font-sans text-muted-foreground">
            
            {/* 01 — OVERVIEW */}
            <section id="overview" className="space-y-6 scroll-mt-28 pt-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Overview</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>Linkora is a real-time web application that connects people for conversations based on their interests and matching preferences.</p>
                <p>The interesting part wasn't just building a chat screen. I wanted to understand what happens behind the scenes when users need to be matched, connected in real time, and kept in the same conversation even when their connection briefly drops.</p>
              </div>
              
              <div 
                className="w-full aspect-[16/9] bg-secondary border border-border rounded-2xl shadow-md overflow-hidden cursor-zoom-in relative group mt-8"
                onClick={() => setLightboxImage("/images/projects/linkora-main.png")}
              >
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <div className="bg-background/90 text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-sm">Click to expand</div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/projects/linkora-main.png" 
                  alt="Linkora Main UI"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%239ca3af'%3EPlaceholder: linkora-main.png%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </section>

            {/* 02 — THE PROBLEM */}
            <section id="problem" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">The Problem</h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground">
                <p>Finding someone to talk to usually means searching through profiles, sending requests, and waiting for a response. I wanted to explore a different approach — let users describe who they are looking for and let the system find a suitable person for them.</p>
                <p>The harder part came after the match. Once two users are connected, the system has to keep track of their session, deliver messages instantly, handle typing and read states, and deal with users disconnecting unexpectedly.</p>
              </div>
            </section>

            {/* 03 — WHAT I BUILT */}
            <section id="whatibuilt" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What I Built</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { num: "01", title: "Preference-based Matching", desc: "Users can specify matching preferences such as intent, gender, interests, language and country." },
                  { num: "02", title: "Instant Matching", desc: "Users enter a matchmaking queue and are connected with a compatible person." },
                  { num: "03", title: "Real-Time Chat", desc: "Messages are delivered through WebSockets rather than repeatedly polling the server." },
                  { num: "04", title: "Friend Connections", desc: "A random conversation can turn into a longer-term connection through the friendship system." },
                  { num: "05", title: "Typing & Read Status", desc: "The chat supports typing indicators and delivered/seen message states." },
                  { num: "06", title: "Connection Recovery", desc: "A temporary network interruption does not immediately destroy the conversation." }
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-background border border-border rounded-xl shadow-sm">
                    <span className="font-mono text-sm font-bold text-primary tracking-widest uppercase mb-3 block">{feature.num}</span>
                    <h3 className="font-bold text-foreground text-lg mb-2">{feature.title}</h3>
                    <p className="text-base text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 04 — INTELLIGENT MATCHMAKING */}
            <section id="matchmaking" className="space-y-8 scroll-mt-28 bg-secondary/10 p-6 md:p-10 rounded-3xl border border-border">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">The Matching Logic</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                The matching system is where most of the interesting logic happens.
              </p>
              
              <div className="my-8 overflow-hidden rounded-xl border border-border bg-background shadow-sm p-6 text-center font-mono text-sm text-foreground">
                <span className="block text-primary font-bold">USER</span>
                <span className="block text-muted-foreground my-1">↓</span>
                <span className="block">MATCHING PREFERENCES</span>
                <span className="block text-muted-foreground my-1">↓</span>
                <span className="block">QUEUE</span>
                <span className="block text-muted-foreground my-1">↓</span>
                <span className="block">FILTER COMPATIBLE USERS</span>
                <span className="block text-muted-foreground my-1">↓</span>
                <span className="block">SCORE CANDIDATES</span>
                <span className="block text-muted-foreground my-1">↓</span>
                <span className="block text-emerald-600 font-bold">SELECT MATCH</span>
                <span className="block text-muted-foreground my-1">↓</span>
                <span className="block font-bold">CREATE CHAT SESSION</span>
              </div>

              <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground">
                <p>
                  The system considers: <strong>Gender, Looking-for intent, Interests, Language, Country, and Wait time.</strong>
                </p>
                <p>
                  Candidates start with a base score. Shared interests contribute the most, while matching language and country add smaller weights. As someone waits longer, the matching criteria gradually relax so that users do not remain stuck in the queue indefinitely.
                </p>
                
                <div className="bg-background border border-border rounded-xl p-6 my-6 font-mono text-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex justify-between"><span>Base score:</span><span className="font-bold">0.5</span></div>
                  <div className="flex justify-between"><span>Interest overlap:</span><span className="font-bold text-primary">up to +0.35</span></div>
                  <div className="flex justify-between"><span>Language:</span><span className="font-bold text-primary">+0.08</span></div>
                  <div className="flex justify-between"><span>Country:</span><span className="font-bold text-primary">+0.05</span></div>
                  <div className="flex justify-between sm:col-span-2"><span>Wait-time relaxation:</span><span className="font-bold text-emerald-600">up to +0.20</span></div>
                </div>

                <p>
                  Users also cannot be repeatedly matched with the same person after the configured encounter limit (<code className="bg-foreground/5 px-2 py-1 rounded text-sm text-primary">MAX_MATCH_ENCOUNTERS = 3</code>), unless they are already friends.
                </p>

                <div className="bg-primary/5 border-l-4 border-primary p-6 mt-8 rounded-r-xl">
                  <h4 className="font-bold text-foreground mb-2">Concurrency & Locks</h4>
                  <p>
                    Because multiple users can be searching at the same time, matchmaking uses a <strong>Redis distributed lock</strong> to prevent the same user from being assigned to multiple conversations concurrently.
                  </p>
                </div>
              </div>
              
              <div 
                className="w-full aspect-video bg-background border border-border rounded-2xl shadow-sm overflow-hidden cursor-zoom-in relative group mt-8 p-4"
                onClick={() => setLightboxImage("/images/projects/linkora-match.jpg")}
              >
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <div className="bg-background/90 text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-sm">Click to expand</div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/projects/linkora-match.jpg" 
                  alt="Matchmaking Flow"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%239ca3af'%3EPlaceholder: linkora-match.jpg%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </section>

            {/* 05 — REAL-TIME MESSAGING */}
            <section id="realtime" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Real-Time, Not Just Chat</h2>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                Once a match is found, the conversation moves into a WebSocket-based chat session.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                Messages are sent through WebSockets and broadcast through Django Channels. Redis acts as the channel layer and also handles short-lived state that doesn't need to live in the database.
              </p>

              <div className="my-8 p-6 bg-secondary/20 border border-border rounded-xl text-center font-mono text-sm text-foreground flex flex-col items-center gap-2">
                <span className="font-bold">USER A</span>
                <span className="text-primary text-lg">↕</span>
                <span>WEBSOCKET</span>
                <span className="text-primary text-lg">↕</span>
                <span className="bg-background px-4 py-2 border border-border rounded-md font-bold">DJANGO CHANNELS</span>
                <span className="text-primary text-lg">↕</span>
                <span className="bg-emerald-500/10 text-emerald-700 px-4 py-2 border border-emerald-500/20 rounded-md font-bold">REDIS</span>
                <span className="text-primary text-lg">↕</span>
                <span>WEBSOCKET</span>
                <span className="text-primary text-lg">↕</span>
                <span className="font-bold">USER B</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-foreground">Typing Indicators</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Typing status is temporary, so it is stored in Redis with a short 3-second expiry instead of repeatedly writing to the database.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-foreground">Read Receipts</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Messages can move between delivered and seen states, with updates sent back through the WebSocket connection.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-foreground">Reconnect Grace Period</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This was one of the parts I found particularly useful to solve. If a user temporarily loses their connection or refreshes the page, the chat is not immediately destroyed. The system keeps the session alive for 30 seconds, giving the user time to reconnect.
                  </p>
                </div>
              </div>
              
              <div 
                className="w-full aspect-[16/9] bg-secondary border border-border rounded-2xl shadow-sm overflow-hidden cursor-zoom-in relative group mt-8"
                onClick={() => setLightboxImage("/images/projects/linkora-chat.jpg")}
              >
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <div className="bg-background/90 text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-sm">Click to expand</div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/projects/linkora-chat.jpg" 
                  alt="Chat Interface"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%239ca3af'%3EPlaceholder: linkora-chat.jpg%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </section>

            {/* 06 — ARCHITECTURE */}
            <section id="architecture" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">How the Pieces Fit Together</h2>
              
              <div 
                className="w-full aspect-[2/1] bg-background border border-border rounded-2xl shadow-sm overflow-hidden cursor-zoom-in relative group mt-8 p-4 mb-10"
                onClick={() => setLightboxImage("/images/projects/linkora-arch.jpg")}
              >
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                  <div className="bg-background/90 text-foreground text-sm font-medium px-4 py-2 rounded-full shadow-sm">Click to expand</div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/projects/linkora-arch.jpg" 
                  alt="Architecture Diagram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%239ca3af'%3EPlaceholder: linkora-arch.jpg%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">React</h3>
                    <p className="text-base text-muted-foreground">Handles the user interface and communicates with the backend through REST APIs and WebSockets.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Django / DRF</h3>
                    <p className="text-base text-muted-foreground">Handles API requests, authentication and application-level operations.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Django Channels</h3>
                    <p className="text-base text-muted-foreground">Handles the real-time WebSocket connections.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2 text-primary">Redis</h3>
                    <p className="text-base text-muted-foreground">Redis is used for more than just messaging. It handles channel-layer communication, matchmaking locks, temporary queue/session state, typing indicators, and reconnect timers.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">Database (PostgreSQL)</h3>
                    <p className="text-base text-muted-foreground">Persistent application data (Users → Match Queue → Chat Room → Messages).</p>
                  </div>
                </div>

                <div className="bg-secondary/20 p-6 rounded-2xl border border-border mt-8">
                  <h3 className="font-bold text-lg text-foreground mb-3">Service Layer</h3>
                  <p className="text-base text-foreground mb-4">Business logic is separated into services such as:</p>
                  <ul className="flex flex-wrap gap-3 font-mono text-sm mb-4">
                    <li className="bg-background px-3 py-1.5 border border-border rounded shadow-sm">MatchmakingService</li>
                    <li className="bg-background px-3 py-1.5 border border-border rounded shadow-sm">ChatService</li>
                    <li className="bg-background px-3 py-1.5 border border-border rounded shadow-sm">SessionService</li>
                    <li className="bg-background px-3 py-1.5 border border-border rounded shadow-sm">PresenceService</li>
                  </ul>
                  <p className="text-base text-muted-foreground italic border-l-2 border-primary/30 pl-3 py-1">
                    "Keeping the main business logic inside services keeps the WebSocket consumers relatively small and makes the core logic easier to reason about and test."
                  </p>
                </div>
              </div>
            </section>

            {/* 07 — MY CONTRIBUTION */}
            <section id="contribution" className="space-y-6 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">My Contribution</h2>
              <div className="p-8 bg-background border border-border rounded-3xl shadow-sm">
                <ul className="space-y-4">
                  {[
                    "Built and worked on the React frontend.",
                    "Implemented backend functionality using Django / DRF.",
                    "Worked on matchmaking logic.",
                    "Implemented real-time communication using WebSockets.",
                    "Worked with Redis for real-time state and matchmaking coordination.",
                    "Implemented friendship and chat flows.",
                    "Worked on authentication.",
                    "Integrated frontend and backend functionality.",
                    "Worked through connection and state-management issues."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span className="text-base text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 08 — CHALLENGES & SOLUTIONS */}
            <section id="challenges" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">Challenges & Solutions</h2>
              
              <div className="grid grid-cols-1 gap-8">
                
                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase mb-4 pb-2 border-b border-border/50">01 — CHALLENGE</h3>
                  <div className="space-y-6">
                    <p className="text-base text-foreground font-medium">
                      Two users can start searching at almost the same time. Without coordination, the same person could potentially be assigned to more than one match.
                    </p>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">SOLUTION</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Used a Redis distributed lock while evaluating and assigning matches so that concurrent matchmaking operations do not select the same user at the same time.
                      </p>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm font-serif italic text-foreground">"This introduced me to concurrency problems that are easy to miss when a system is tested with only one user."</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase mb-4 pb-2 border-b border-border/50">02 — CHALLENGE</h3>
                  <div className="space-y-6">
                    <p className="text-base text-foreground font-medium">
                      A WebSocket can disconnect because of a refresh, network problem, or temporary connection loss. Ending the conversation immediately would create a poor user experience.
                    </p>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">SOLUTION</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Implemented a 30-second reconnect grace period using Redis. If the user reconnects within that period, the session can continue; otherwise the conversation is closed.
                      </p>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm font-serif italic text-foreground">"I learned that real-time applications have to handle failure as part of the normal user flow."</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-background border border-border rounded-2xl shadow-sm">
                  <h3 className="font-mono text-sm font-bold text-primary tracking-widest uppercase mb-4 pb-2 border-b border-border/50">03 — CHALLENGE</h3>
                  <div className="space-y-6">
                    <p className="text-base text-foreground font-medium">
                      Typing indicators can generate frequent updates. Writing every typing event to the database would create unnecessary load for information that only matters for a few seconds.
                    </p>
                    <div>
                      <span className="block text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">SOLUTION</span>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Used Redis with a short 3-second TTL for temporary typing state instead of persisting every event.
                      </p>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm font-serif italic text-foreground">"This helped me understand the difference between information that needs to be stored permanently and state that only needs to exist temporarily."</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 09 — WHAT I LEARNED */}
            <section id="learned" className="space-y-8 scroll-mt-28">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">What Building Linkora Taught Me</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Real-time systems are mostly about managing state.",
                  "A feature that looks simple from the UI can become much more complicated when multiple users interact with it at the same time.",
                  "Redis is useful for much more than caching.",
                  "Connection failures are part of the system, not just edge cases.",
                  "Separating business logic from consumers makes real-time code easier to understand.",
                  "Building the project made me think more about what happens between two users clicking a button and actually seeing the result."
                ].map((lesson, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-secondary/30 border border-border rounded-xl shadow-sm">
                    <CheckCircle className="text-primary shrink-0 w-5 h-5 mt-0.5" />
                    <p className="text-base text-foreground font-medium">{lesson}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 10 — FUTURE SCOPE */}
            <section id="future" className="space-y-8 scroll-mt-28 pt-8 border-t border-border">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground pb-2">If I Took It Further</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "01 — Better Match Ranking", desc: "Improve the matching model with more signals and feedback from previous conversations." },
                  { title: "02 — Scaling Real-Time Infrastructure", desc: "Explore how the real-time layer would behave with a much larger concurrent user base." },
                  { title: "03 — Moderation", desc: "Add stronger reporting, moderation and abuse-prevention mechanisms." },
                  { title: "04 — Better Presence & Notifications", desc: "Improve presence tracking and notification behavior across reconnects and sessions." }
                ].map((idea, i) => (
                  <div key={i} className="p-6 border border-border rounded-xl bg-background shadow-sm">
                    <h4 className="font-mono text-sm font-bold text-foreground mb-2">{idea.title}</h4>
                    <p className="text-sm text-muted-foreground">{idea.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </main>
  );
}
"""

inject_logic = """
  // If this is the Linkora project, use its bespoke layout
  if (slug === "linkora") {
    return <LinkoraCaseStudy project={project} related={related} />;
  }
"""

start_str = "export default function ProjectCaseStudyPage"

start_idx = content.find(start_str)

if start_idx != -1:
    # Find the end of ProjectCaseStudyPage function component to insert the new component definition
    content = content[:start_idx] + linkora_component + "\n\n" + content[start_idx:]
    
    # Now inject the if condition inside the export default function
    # Find where zomato logic is
    zomato_str = "if (slug === \"zomato-analysis\") {"
    zomato_idx = content.find(zomato_str)
    
    if zomato_idx != -1:
        content = content[:zomato_idx] + inject_logic.strip() + "\n\n  " + content[zomato_idx:]
    else:
        print("Could not find Zomato logic in page.tsx")
        sys.exit(1)
else:
    print("Could not find ProjectCaseStudyPage in page.tsx")
    sys.exit(1)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated page.tsx with Linkora Case Study redesign!")
