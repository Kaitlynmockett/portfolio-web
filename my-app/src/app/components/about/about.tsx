import Image from 'next/image';

const About = () => {
    return (
        <section id="about min-h-screen">
            <div className="grid grid-cols-2 gap-4">
                <div className="bio-section">
                    <h1 className="text-2xl font-bold">A little about me...</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis eaque facere repellat quo esse labore eum explicabo beatae animi rerum vel aspernatur dicta eligendi, hic suscipit id laborum commodi!</p>
                </div>
                <div className="skills-section">
                    <h2 className="text-2xl font-bold">Skills</h2>
                    <div className="grid grid-cols-4 grid-rows-2">
                        <div className="">
                            <Image src="/node.png" alt="Node.js" width="150" height="100"/>
                            <h3>Node.js</h3>
                        </div>
                        <div className="">
                            <Image src="/react.png" alt="REACT JS" width="100" height="50"/>
                            <h3>REACT</h3>
                        </div>
                        <div className="">
                            <Image src="/next.png" alt="Next.js" width="100" height="50"/>
                            <h3>Next.js</h3>
                        </div>
                        <div className="">
                            <Image src="/php.png" alt="PHP" width="100" height="50"/>
                            <h3>PHP</h3>
                        </div>
                        <div className="">
                            <Image src="/wp.png" alt="WordPress" width="150" height="50"/>
                            <h3>WordPress</h3>
                        </div>
                        <div className="">
                            <Image src="/python.png" alt="Python" width="80" height="50"/>
                            <h3>Python</h3>
                        </div>
                        <div className="">
                            <Image src="/java.png" alt="Java" width="150" height="50"/>
                            <h3>Java</h3>
                        </div>
                        <div className="">
                            <Image src="/CSS3.png" alt="CSS3" width="70" height="50"/>
                            <h3>CSS</h3>
                        </div>
                        <div className="">
                            <Image src="/html5.png" alt="HTML5" width="100" height="100"/>
                            <h3>HTML</h3>
                        </div>
                        <div className="">
                            <Image src="/power-platform.png" alt="Power Platform" width="100" height="100"/>
                            <h3>Power Platform</h3>
                        </div>
                    </div>
                </div>
                
                
                <div className="projects-quick-links grid grid-cols-4 col-span-2 gap-4">
                    <div className="flex-auto">
                        <Image src="" alt="" width="400" height="400" />
                        <h3>Project 1.</h3>
                    </div>
                    <div className="flex-auto">
                        <Image src="" alt="" width="400" height="400" />
                        <h3>Project 2.</h3>
                    </div>
                    <div className="flex-auto">
                        <Image src="" alt="" width="400" height="400" />
                        <h3>Project 3.</h3>
                    </div>
                    <div className="flex-auto">
                        <Image src="" alt="" width="400" height="400" />
                        <h3>Project 4.</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

