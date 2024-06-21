import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa6";
import { IoIosSearch, IoMdStar } from "react-icons/io";


const creativity = [{ "id":"item1","name": "Canva", "imge": require('./images/image-1.png'), "rtn": "4.4", "title": "Multimedia design", "cnt": "Canva is an all-in-one visual communication platform that empowers the world to design. It’s a simple way to create beautiful presentations, infographics, videos, t-shirts, websites, social media posts, and more. Canva is for everyone with an idea to share, whether you’re a student, executive, or entrepreneur." },
{ "id":"item2","name": "ibis Paint", "imge": require('./images/image-2.png'), "rtn": "4.1", "title": "Mutimedia design", "cnt": "ibis Paint is a popular and versatile drawing app downloaded more than 370 million times in total as a series which provides over 15000 brushes, over 21000 materials, over 2100 fonts, 84 filters, 46 screentones, 27 blending modes, recording drawing processes, stroke stabilization feature, various ruler features such as radial line rulers or symmetry rulers, and clipping mask features. " },
{ "id":"item3","name": "Sketchbook Pro", "imge": require('./images/image-3.png'), "rtn": "4.4", "title": "Multimedia design", "cnt": "From quick sketches to fully finished artwork, Sketchbook goes where your creativity takes you.Sketchbook is an award-winning sketching, painting, and drawing app for anyone who loves to draw. Artists and illustrators love Sketchbook for its professional-grade feature set and highly customizable tools. Everyone loves Sketchbook for its elegant interface and natural drawing experience, free of distractions so you can focus on capturing and expressing your idea with Tablet users - this version of Sketchbook Pro is optimized for Windows desktop use with pen peripherals. It is not an upgrade to the previous Autodesk SketchBook, which was optimized for tablet use." },
{ "id":"item4","name": "paint.net", "imge": require("./images/image-4.png"), "rtn": "4.7", "title": "Photo & video", "cnt": "Paint.NET® is image and photo editing software for PCs that run Windows. It features an intuitive and innovative user interface with support for layers, unlimited undo, special effects, and a wide variety of useful and powerful tools. An active online community provides friendly help, tutorials, and plugins.It started development as an undergraduate college senior design project mentored by Microsoft, and is now maintained and developed by Rick Brewster. Originally intended as a free replacement for the Microsoft Paint software that comes with Windows, it has grown into a powerful yet simple image and photo editor tool. It has been compared to other digital photo editing software packages such as Adobe® Photoshop®, Corel® Paint Shop Pro®, Microsoft Photo Editor, and The GIMP.If you buy Paint.NET in the Windows Store, you'll be supporting its development directly (normally we ask for a donation). You will get the convenience of fast, easy installation onto all of your Windows devices along with fully automatic, behind-the-scenes updates with all the newest features, improvements, and fixes." },
{ "id":"item5","name": "Affinity Designer 2", "imge": require('./images/image-5.png'), "rtn": "4.5", "title": "Multimedia design", "cnt": "Available to purchase in-app for a one-off cost – no subscription.The next generation of the award-winning vector graphics software, Affinity Designer 2 is setting the new industry standard in the world of design. Packed with tons of new features and hundreds of enhancements to optimize your workflow, you can now create high-quality concept art, illustrations, architectural renders, logos, icons, mock-ups, and other designs more seamlessly than ever before.REFINED &amp; REDESIGNED UI• Fully redeveloped UI, tool, and button icons • All new Layers Panel• See recent raster brushes by layer• View recent documents as thumbnail previews or list• Pin documents" },
{ "id":"item6","name": "Concepts", "imge": require('./images/image-6.png'), "rtn": "4.5", "title": "Productivity", "cnt": "Concepts is a flexible space to think, plan and create. Sketch your ideas on the infinite canvas, write notes and doodles with tilt + pressure, draw storyboards, product sketches and design plans, then share with friends, clients and other apps. Optimized for touchscreen and pen-enabled devices, including the latest Intel and ARM64-based systems" },
{ "id":"item7","name": "ArtRage Vitae", "imge": require('./images/image-7.png'), "rtn": "4.4", "title": "Multimedia design", "cnt": "ArtRage Vitae is the newest edition of the amazingly realistic natural painting ArtRage workspace.ArtRage Vitae is a digital artist’s studio with a full range of familiar tools that look and work like the real things. It’s a canvas for thick, expressive oils and delicate watercolors, a sketchpad with a full set of pencils, and a sheet of paper with a stack of wax crayons all in one. And now we've added collaboration with a shared ArtRage canvas and chatting with your ArtRage friends.  And, you know, a tonne of other fantastic tools" },
{"id":"item8", "name": "Adobe Photoshop", "imge": require('./images/image-8.png'), "rtn": "3.9", "title": "Photo & Video", "cnt": "Photoshop is an image creation, graphic design and photo editing software developed by Adobe." },
{ "id":"item9","name": "Adobe Express", "imge": require('./images/image-9.png'), "rtn": "4.1", "title": "Mutimedia design", "cnt": "Design flyers, TikToks, resumes, and Reels with the new, all-in-one Adobe Express. Here’s what else you can do:  •	Generate extraordinary text effects and images instantly from just a description with generative AI, powered by Adobe Firefly •	Combine video clips, artwork, animations, and music to make videos with drag-and-drop ease •	Complete projects faster with thousands of professionally designed templates, Adobe Stock photos, videos, music, and more •	Complete one-click tasks like Convert to GIF" },
{ "id":"item10","name": "Wondershare Filmora", "imge": require('./images/image-10.png'), "rtn": "4.2", "title": "Photo & Video", "cnt": "Empower your imagination with Filmora AI Video Editor, a smart video editor with powerful tools" },
{ "id":"item11","name": "Blender", "imge": require('./images/image-11.png'), "rtn": "4.5", "title": "Multimedia design", "cnt": "Blender is the Free and Open Source 3D creation suite. It supports the entirety of the 3D pipeline—modeling, sculpting, rigging, 3D and 2D animation, simulation, rendering, compositing, motion tracking and video editing. Support Blender development on https://fund.blender.org" },
{ "id":"item12","name": "Adobe Lightroom", "imge": require('./images/image-12.png'), "rtn": "3.6", "title": "Photo & video", "cnt": "* Paid subscription after 7-day free trial.*  Lightroom offers the creative power of Adobe Photoshop built specifically for photo enthusiasts.  Lightroom is the complete photo service for editing, organizing, and sharing photos on any device - mobile, desktop, and web.  Plus, further your photo journey with in-app learning  and inspiration from photo pros with step-by-step tutorials on how to make your images awesome." },
{"id":"item13","name": "GIMP", "imge": require('./images/image-13.png'), "rtn": "4.4", "title": "Multimedia design", "cnt": "GIMP is a free software cross-platform image editor.Whether you are a graphic designer, photographer, illustrator, or scientist, GIMP provides you with sophisticated tools to get your job done" },
{ "id":"item14","name": "Audacity", "imge": require('./images/image-14.png'), "rtn": "4.2", "title": "Multimedia design", "cnt": " The world's most popular audio editing and recording app." },
{ "id":"item15","name": "OBS Studio", "imge": require('./images/image-15.png'), "rtn": "4.5", "title": "Multimedia design", "cnt": "Free and open source software for video recording and live streaming" },
{ "id":"item16","name": "Picsart Photo Editor", "imge": require('./images/image-16.png'), "rtn": "3.6", "title": "Photo & Video", "cnt": "Get Picsart and join a global community of over 150 million creators. With the Picsart Photo Editor, you can bring your unique creative vision to life. Access ready-to-use, professional-level templates, grid collages, popular photo filters, and effects to create outstanding content. Turn text to images with free AI Image Generator,  generate stickers from scratch with the AI sticker generator, quickly change or remove backgrounds, remove unwanted objects in photos" },
{ "id":"item17","name": "Adobe Fresco", "imge": require('./images/image-17.png'), "rtn": "3.3", "title": "Multimedia design", "cnt": " Adobe Fresco brings together the world’s largest collection of vector and raster brushes, plus revolutionary new live brushes, to deliver a completely natural painting and drawing experience. " },
{ "id":"item18","name": "Zen: Coloring book for", "imge": require('./images/image-18.jpeg'), "rtn": "4.1", "title": "Entertainment", "cnt": "There’s no need to go to the store and buy art supplies anymore! Leave your everyday worries behind and enter a world of pure relaxation. This digital coloring book offers an immersive experience that allows you to create beautiful art while enjoying calming music. Choose from tons of gorgeous designs, blending and texture options, and custom colors: The possibilities are nearly endless! After you’re done, you can even save, print, or share your final masterpiece on social media. Relax, unwind, and color your stress away with Zen: Coloring Book for Adults!" },
{ "id":"item19","name": "Corel Painter Essentials", "imge": require('./images/image-19.png'), "rtn": "3.2", "title": "Multimedia design", "cnt": "Try Painter® Essentials™,  the fun and uncomplicated painting software for beginners" },
{ "id":"item20","name": "Paint 3D", "imge": require('./images/image-20.png'), "rtn": "4.2", "title": "Entertainment", "cnt": "Whether you’re an artist or just want to try out some doodles–Paint 3D makes it easy to unleash your creativity and bring your ideas to life. Classic Paint has been reimagined, with an updated look and feel and a ton of new brushes and tools. And now, create in every dimension. Make 2D masterpieces or 3D models that you can play with from all angles." },
{ "id":"item21","name": "Coloring Book: Drawing For", "imge": require('./images/image-21.png'), "rtn": "3.9", "title": "Entertainment", "cnt": "Wonderful coloring book - antistress at your disposal.Feel like an artist. Choose tools and colors. Complete freedom of action. - Hundreds of awesome images.- Color stunning mandalas, animals, nature, dishes, unicorns, dragons and more.- Use filling tool to quickly fill polygons and pencil or brush to add colors to create your own color combinations.- Perfect for coloring and drawing with Microsoft Surface Pen.- We took care of convenience: you won’t go beyond the bounds of the polygon you are coloring.- Comprehensive palette of colors that we are constantly improving.- Share your drawings with friends in social network. Save your pictures in high quality to print your masterpiece. Relax, experiment with colors and you will find that this is a great way to de" },
{ "id":"item22","name": "n-Track Studio", "imge": require('./images/image-22.png'), "rtn": "4.1", "title": "Music", "cnt": "Unleash your musical potential with n-Track Studio 10: download &amp; record, sample, and mix release-ready music &amp; beats with our playable instruments, FX, tools and ultra-high quality recording." },
{ "id":"item23",'name': "Music Maker Jam", "imge": require('./images/image-23.png'), "rtn": "3.6", "title": "Music", "cnt": "With the new free music app MUSIC MAKER JAM for Windows you can make your own amazing tracks - it's fun and fast! Simply start the app, choose three free music styles and start combining sounds to make your own songs.Choose from a wide range of professionally produced loops and arrange them any way you want on up to eight tracks. Change the tempo, adjust the pitch and mix your songs using cool realtime effects. Ready for a remix? Just shake your tablet to reorder the tracks and create a unique version of your song. It's a great way to find some inspiration for your next jam session!MUSIC MAKER JAM offers intuitive control making music production even more fun and easy than you ever imagined. All of the sounds are perfectly synchronized to keep you on the beat every step of the way.T" },
{ "id":"item24","name": "Spirality", "imge": require('./images/image-24.jpeg'), "rtn": "4.5", "title": "Entertainment", "cnt": "Draw beautiful mandalas and spirals with one stroke of your pen or mouse - then, fill them in, just like your favorite coloring book. Spirality is pure, creative fun. No skill required! Create beautiful doodles to relieve stress. Share your artwork as high-resolution images or animations. Spirality gives you full control over your creation - change mirrors, symmetries, colors, transparency, and more. You can even go back in time to tweak a stroke that isn't quite right.Spirality is like a Spirograph, a coloring book, and a kaleidoscope combined. Unleash your inner artist and try it today." },
{ "id":"item25","name": "Bamboo Paper", "imge": require('./images/image-25.png'), "rtn": "4.5", "title": "Productivity", "cnt": "Turn your Windows device into a paper notebook and capture your ideas everywhere, anytime. Taking notes, sketching, and drawing is as straightforward and simple as using real pen and paper. CREATE YOUR OWN COLORS Set any color and create a custom color palette with 36 color swatches. Express your creativity with all possible colors. ANNOTATE WITH PHOTOS Enrich your notes or journal with photos. Add images or photos to your page and sketch or write on top. " },
{ "id":"item26","name": "Affinity Publisher 2", "imge": require('./images/image-26.png'), "rtn": "4.9", "title": "Multimedia design", "cnt": "Available to purchase in-app for a one-off cost – no subscription.Affinity Publisher 2 is the next generation of the award-winning page layout and design software from Serif. Whether you’re creating a book, magazine, marketing materials, social media template or something else, it has everything you need to make beautiful layouts ready for publication. And with the ground-breaking ability to fully integrate with other Affinity apps, it’s completely revolutionizing the way creatives work." },
{ "id":"item27","name": "Camo Studio", "imge": require('./images/image-27.png'), "rtn": "4.5", "title": "Photo & Video", "cnt": "Camo uses the incredible cameras you already own to produce pro-quality video, whether you’re meeting, streaming, or recording. Its intuitive interface is right at home on your PC, and is compatible with all the apps you already use.With over 10 million users helped over the last decade, Reincubate is one of the UK’s most-loved software companies.— EASY TO USE / PLUG AND PLAY / Wi-Fi —No extra hardware needed, just plug your phone, webcam, or connected camera to your computer. With your phone choose between connecting wirelessly, for the most flexible experience, or opt for a trusty USB connection. With Wi-Fi connectivity, get set up for a call in seconds – no more looking around for a spare cable or a free port." },
{ "id":"item28","name": "Shapr3D", "imge": require('./images/image-28.png'), "rtn": "4.0", "title": "Productivity", "cnt": "From design to manufacturing. Teams collaborate with more impact. Instinctive design meets multidevice capability and full interoperability for the ultimate 3D design workflow.All platformsPick your device and your input tool leveraging the first CAD tool envisioned for multidevice. Hybrid workflow meets cross-functional team processes with automatic sync across devices. Work from any device or offline: design and collaborate at your best, everywhere." },
{ "id":"item29","name": "Corel PaintShop Pro", "imge": require('./images/image-29.png'), "rtn": "2.7", "title": "Photo & Video", "cnt": "Sign-up for a subscription and get your FIRST MONTH FREE! Try PaintShop Pro, the professional, affordable, all-in-one photo editor. Get all the color and brightness you’ve been missing! Edit photos like a pro and create impressive graphic designs. WHY EDIT WITH PAINTSHOP PRO? Powerful photo editing - Crop, resize, restore, repair " },
{ "id":"item30","name": "Adobe Photoshop Elements", "imge": require('./images/image-30.png'), "rtn": "4.0", "title": "Photo & video", "cnt": "Create photos you’ll love to share. Adobe Sensei AI* and automated options make editing easy, and you can learn creative techniques as you go with 62 step-by-step Guided Edits. Present your best pics in beautiful Photo Reel, collage, slideshow, and Quote Graphic templates. Effortlessly organize everything. And do more on the go using web and mobile companion apps (English-only beta)." },
{ "id":"item31","name": "Descript", "imge": require('./images/image-31.png'), "rtn": "3.9", "title": "Multimedia design", "cnt": "Edit audio and video as easily as editing text." }
]

function Creativity() {
    return (
        <div className='data-container'>
            <div>
                <Row>
                    <Col>
                        <div className='heading'>
                            <p className='text-light mb-0 fw-bold' style={{ fontSize: "20px" }}>Creativity Apps <FaAngleRight style={{ color: "#60cdff" }}></FaAngleRight></p>
                        </div>
                    </Col>
                </Row>
                <div className='py-3 mb-4 creativity'>
                    <OwlCarousel className='owl-theme' autoplay autoplayTimeout={2500}
                        loop
                        margin={10}
                        id='creativity'
                        nav
                        dots={false}
                        responsive={{
                            0: {
                                items: 1
                            },
                            768: {
                                items: 2
                            },
                            1200: {
                                items: 3
                            }
                        }}
                    >
                        {
                            creativity.map((item) => {
                                return (
                                    <div className='item d-flex p-2 rounded' style={{ backgroundColor: '#2C2C31' }}>
                                        <div className='py-5 px-3 rounded-start item_back' id={item.id}>
                                            <div className='rounded' style={{ width: "85px", height: "85px" }} >
                                                <img src={item.imge} height={"100%"} width={"100%"} className='rounded' />
                                            </div>
                                        </div>
                                        <div className='content p-3 ps-4' style={{ backgroundColor: '#2C2C31' }}>
                                            <p className='m-0 nm' style={{ fontWeight: "600", color: "#CACAD0" }}>{item.name}</p>
                                            <div className='d-flex align-items-center'>
                                                <div style={{ color: "#6C6C74" }} className='d-flex justify-content-between align-items-center'><span>{item.rtn}</span><IoMdStar /></div>
                                                <div><span className='ps-2' style={{color:'#CACAD0'}}>
                                            |  {item.title}
                                                </span></div>
                                            </div>
                                            <div className='dec mt-2'>
                                                <p className='m-0'>
                                                    {item.cnt}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default Creativity
