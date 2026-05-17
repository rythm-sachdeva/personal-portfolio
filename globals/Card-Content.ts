export interface CardContent{
    id:string,
    imageUrl: string,
    content : string,
    primaryTitle: string,
    secondaryTitle:string,
    tags: string[]
    cardTitle: string
    date:string,
    readTime:string
}


export const cardContent: CardContent[] = [
{
    id:'OSIGGY2026',
    imageUrl: '/IGGY.png',
    content: "\n\nContributing to open-source software always brings a unique set of challenges, but my recent work on **Apache Iggy** (Incubating)—a hyper-efficient, Rust-based persistent message streaming platform—took me on an unforgettable ride.\n\nMy mission was clear but daunting: optimize the Java SDK's async client by implementing multiple simultaneous connections. The catch? I had to use **Netty’s `FixedChannelPool`**, and I was completely new to the Netty framework. What followed was a steep learning curve, a lot of trial and error, and ultimately, a massive win for the SDK's performance.\n\n### The Roller Coaster of Learning Netty\n\nIf you've ever transitioned from traditional blocking I/O to an asynchronous, event-driven model, you know the whiplash I experienced. Netty doesn't just ask you to write code differently; it forces you to *think* differently.\n\nI had to learn Netty from scratch. Concepts like `EventLoopGroup`, `ChannelPipeline`, `ChannelHandlers`, and `Promises` felt like a foreign language at first. I spent days wrapping my head around the non-blocking paradigm, realizing that a single blocked thread in an event loop could bring the whole application to a grinding halt. It was a roller coaster of frustration and \"aha!\" moments, but as the pieces started to click together, I saw why Netty is the gold standard for high-performance Java networking.\n\n### Taming the Beast: Implementing `FixedChannelPool`\n\nTo handle multiple simultaneous connections efficiently, creating a new TCP connection for every request was out of the question—the overhead would ruin Iggy’s ultra-low latency guarantees. We needed an async connection pool.\n\nI implemented Netty’s `FixedChannelPool`. This component is brilliant because it enforces a strict maximum number of concurrent connections while seamlessly queueing up excess requests. Here is how it transformed the SDK:\n\n* **Resource Management:** We could cap the number of active connections, preventing the client from exhausting system resources under heavy workloads.\n* **Asynchronous Acquisition:** Requesting a channel from the pool returns a `Future<Channel>`. Once a channel is ready, the operation proceeds without blocking the calling thread.\n* **Reusability:** After a request finishes, the channel is released back into the pool for the next operation, drastically cutting down TCP handshake latency.\n\n### The Devil is in the Edge Cases\n\nGetting the happy path to work was only half the battle. The real test of the async client was how it handled edge cases. Networking is inherently unreliable, and building a resilient client meant anticipating the worst.\n\nI spent a significant chunk of time writing tests and handling scenarios like:\n\n* **Connection Drops & Timeouts:** What happens if the server suddenly goes offline or a connection hangs? I had to ensure the `AcquireTimeoutAction` was configured properly so pending requests would fail gracefully instead of hanging indefinitely.\n* **Resource Leaks:** In Netty, if you don't release a channel back to the pool, you leak connections. Ensuring that channels were returned to the pool (even when exceptions were thrown during I/O) was critical.\n* **Proper Shutdown:** Implementing `AutoCloseable` logic to gracefully shut down the thread pools and close all active channels without leaving dangling resources behind.\n\n### Looking Back\n\nSubmitting that Pull Request and seeing it merged was incredibly satisfying. Tackling Netty from scratch was intimidating, but it forced me to level up my understanding of asynchronous network programming. The Apache Iggy Java SDK is now significantly faster, more robust, and ready to handle high-throughput streaming workloads.\n\nIf there's one takeaway from this experience, it's this: don't shy away from complex frameworks. The roller coaster ride is always worth it once you reach the top.",
    primaryTitle:"From Scratch to Scale: My Journey Implementing Async Connection Pooling in Apache Iggy",
    secondaryTitle:"Apache Iggy",
    tags:["Java","Rust","Networking"],
    cardTitle:"Open Source Contribution",
    date:new Date("January 17, 2026").toDateString(),
    readTime:"10 minutes"
},
{
  id: "MYREDIS2026",
  imageUrl: "/redis-rust.avif",
  content: "\n\nAs a fresher in the software world, I’ve always harbored a deep curiosity about what goes on under the hood. While building web apps and consuming APIs is a great starting point, I wanted to understand and build the low-level systems that actually power the modern web.\n\n### Demystifying Redis and Networking\n\nMy curiosity led me straight to Redis. It’s an omnipresent tool in the industry, but I wanted to know: how does it actually work? I took a deep dive into its architecture, exploring the underlying networking fundamentals, memory management, and how it handles thousands of concurrent connections with such blazing speed. Understanding the raw TCP sockets and request handling was a massive eye-opener.\n\n### Enter Rust: Speed Meets Efficiency\n\nOnce I had a grasp on the theory, a thought crossed my mind: what if I took these concepts and combined them with the speed and efficiency of the Rust programming language? Rust's zero-cost abstractions and fearless concurrency seemed like the perfect match for building a high-performance, in-memory datastore. I decided to take it on as a challenge.\n\n### Building \"My-Redis\": The MVP\n\nAnd so, the development of My-Redis began in Rust. Starting from an empty project, the first major hurdle was establishing the networking layer. From there, I moved on to the core logic: implementing the parsing engine for Redis queries to handle the serialization protocol. Decoding the raw byte streams into actionable commands required meticulous attention to detail. After a lot of trial, error, and battling the borrow checker, I finally built a working MVP capable of handling connections and processing queries.\n\n### The Road Ahead\n\nBuilding the MVP was just the beginning. Now that the core engine is running, I'm looking beyond just mirroring standard functionality. I am currently surveying the landscape of common enterprise problems to see how My-Redis can be tailored to solve specific, high-impact challenges in distributed systems. This journey from high-level curiosity to low-level execution has been incredibly rewarding, and I am excited for the next phase of development.",
  primaryTitle: "Under the Hood: Building a Custom Redis Clone from Scratch in Rust",
  secondaryTitle: "My-Redis",
  tags: [
    "Rust",
    "Redis",
    "Networking",
    "Low-Level Design"
  ],
  cardTitle: "Personal Project",
  date:"Sat Apr 04 2026",
  readTime: "8 minutes"
},
{
  id: "RHYTHMS2026",
  imageUrl: "/Rhythms2.png",
  content: `\n\nAs a live performer singing in small, intimate cafes, I absolutely love interacting with the crowd. But there was always one recurring logistical challenge: managing song requests. People would shout out tracks, write them on napkins, or try to catch my attention between sets. I needed a way to crowdsource the setlist smoothly without breaking the flow of the gig.\n\n### The Birth of Rhythms\n\nThat's how **Rhythms** was born. I wanted to build a platform where I could create a dedicated 'room' for my gig and share a simple link with the audience. Instead of chaotic requests, attendees can join the room, view the available music, and upvote the songs they want to hear. The magic happens automatically: the most upvoted song gets queued up to be played or sung next. It completely democratizes the vibe of the room and keeps the audience deeply engaged.\n\n### Supercharging Setlists with AI\n\nTo make setting up these rooms even faster before a gig, I integrated an AI-powered playlist generation feature. Instead of manually curating and adding 50 tracks, I can just type a prompt like *\"Create a playlist of 90s acoustic Bollywood songs\"* and instantly populate the room's library for the crowd to start voting on.\n\n### The Tech Stack\n\nI needed a robust, fast, and scalable stack to handle real-time interactions and provide a seamless user experience. I built Rhythms using:\n* **Framework:** Next.js for a snappy, responsive frontend and integrated API routes.\n* **Database & ORM:** PostgreSQL managed with Prisma ORM for reliable, type-safe data handling.\n* **Deployment:** Hosted on Vercel for continuous integration and zero-friction deployments.\n\nYou can check out the live platform here: [Rhythms app](https://rhythms-one.vercel.app)\n\n### What's Next: Monetization and Mixing\n\nThe immediate next step is introducing a \"pay-to-play\" or premium request feature. This will allow the audience to attach a small tip to their song request to bump it up the queue, creating a direct monetization stream for independent performers. Down the line, I'm also planning to implement real-time mixing capabilities, making the platform just as powerful for DJs spinning tracks as it is for acoustic singers.`,
  primaryTitle: "Crowdsourcing the Vibe: Building Rhythms for Interactive Live Performances",
  secondaryTitle: "Rhythms",
  tags: [
    "Next.js",
    "PostgreSQL",
    "Prisma",
    "Vercel",
    "AI"
  ],
  cardTitle: "Product Development",
  date: "Sat Apr 04 2026",
  readTime: "6 minutes"
},
{
  id: "AUTOD2026",
  imageUrl: "/zap.avif",
  content: "\n\nEvery business eventually hits the same wall: too many tools, too many manual handoffs, and not enough time. I built autoD because I wanted to understand — and solve — what it actually takes to wire up reliable automation at scale.\n\n### The Problem Worth Solving\n\nZapier and its alternatives are powerful, but they're black boxes. For businesses with non-trivial workflows, that opacity becomes a liability. I wanted to build something transparent, self-hostable, and architecturally honest — a platform where every step of a workflow is traceable and every failure is recoverable.\n\n### A Microservices Architecture That Earns Its Complexity\n\nAutoD is built as a decoupled system with three distinct services — Hooks, Processor, and Worker — each with a single responsibility. They don't talk to each other directly. Instead, they communicate asynchronously through Kafka, which means no single service becoming a bottleneck and no cascading failures when one part of the system is under load.\n\n### Guaranteed Delivery with the Transactional Outbox Pattern\n\nThe hardest part of any event-driven system isn't the happy path — it's what happens when things go wrong mid-flight. To solve this, I implemented the Transactional Outbox Pattern, which ties every database write and every Kafka event emission into a single atomic operation against PostgreSQL. The result is at-least-once delivery with no data loss, even during crashes or network interruptions. For businesses, this means workflows either complete fully or can be safely retried — never silently dropped.\n\n### The User-Facing Platform\n\nOn the frontend, autoD gives teams a straightforward interface built with Next.js to define, manage, and monitor their automation workflows. Webhooks serve as the entry point, and the Node.js/TypeScript backend handles the orchestration logic from there. Complex multi-step workflows are a first-class citizen — not an afterthought.\n\n### What's Next\n\nThe core platform is running. The next phase is focused on making it production-ready for real business environments: better observability, retry dashboards, and integrations with the tools teams already use. The goal was never to rebuild Zapier — it was to build something businesses can actually own.",
  primaryTitle: "autoD: Building a Production-Grade Workflow Automation Platform from the Ground Up",
  secondaryTitle: "A Zapier-like microservices platform with guaranteed event delivery",
  tags: [
    "Kafka",
    "Microservices",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "System Design"
  ],
  cardTitle: "Personal Project",
  date: "Sun May 17 2026",
  readTime: "6 minutes"
},
{
  id: "PINKPETAL2026",
  imageUrl: "/pinkpetal.png",
  content: "\n\nNot every business needs a SaaS platform or a viral product. Some just need a door — a way for people nearby to find them, trust them, and walk in. Pink Petal Play School in New Delhi is one of those businesses, and building their online presence was one of the most grounded projects I've worked on.\n\n### The Problem with Local Visibility\n\nSmall schools, local clinics, neighborhood stores — they do real work in real communities, but most of them are invisible online. No website, no contact page, nothing. Word of mouth only stretches so far. The idea behind this project was simple: what would it look like to genuinely onboard a local business onto the internet, not with a generic template, but with something that actually reflects who they are?\n\n### Pink Petal Play School\n\nFounded in 2016 by Mrs. Neetu Sachdeva, Pink Petal has served over 850 families in DDA Flats, New Delhi. The school was born out of a personal conviction — that children learn best when they're genuinely heard. That story deserved more than a Google Maps pin.\n\n### What I Built\n\nThe frontend is live at [Pink Petal Web](https://pink-petal-frontend.vercel.app), built with Next.js and Tailwind CSS, with Framer Motion handling the animations throughout. The goal was to make the site feel warm and intentional — not corporate. Key sections include the school's founding journey told as a timeline, a photo gallery of real school moments, a tour scheduling form for parents, and all the contact and location details a local family would need.\n\n### The Bigger Picture\n\nThis is part of a broader initiative I'm working on: helping local businesses establish an online presence so they get the visibility they've earned. Pink Petal is the first. The idea is to take what works here and scale the approach — clean, fast, human-first websites for businesses that have never had one.\n\n### Currently Underway\n\nThe site is live and improving. More businesses are in the pipeline.",
  primaryTitle: "Pink Petal Play School: Giving a Local Business Its First Real Online Presence",
  secondaryTitle: "A frontend initiative to onboard local businesses onto the web",
  tags: [
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Local Business",
    "Frontend"
  ],
  cardTitle: "Client Project",
  date: "Sun May 17 2026",
  readTime: "4 minutes"
}



]



