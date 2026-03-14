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
    date:new Date("December 17, 1995").toDateString(),
    readTime:"10 minutes"
}



]



