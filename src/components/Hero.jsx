import React from "react";
import { motion } from "motion/react";
import Music from "./Music";
import { Carousel } from "@material-tailwind/react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
const images = [
    {
        src: "https://s.isanook.com/hi/0/ud/278/1390845/unnamed.jpg?ip/crop/w1200h700/q80/webp",
        alt: "Image 1",
    },
    {
        src: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/296112904_415012603994184_5190953373198953223_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHm5Smf9YTr1hbnrYeBsRzJN80Pb7g1KWo3zQ9vuDUpamGHJL-Q5_mOsH_Dhqew9KifPgLOtT6DLEEwHpCoC0Sm&_nc_ohc=p2J6f9gjBD8Q7kNvwH6XvRP&_nc_oc=AdnpqGfWJkloY2fTmPIuJUwNzvrlT-3ABVpEwVp-I6MJGuQLhGnknoCArv6PMATGMoc&_nc_zt=23&_nc_ht=scontent.fbkk5-6.fna&_nc_gid=VmBrDZD1dT0iER2Xag13iA&oh=00_AfmMGDNG-ibGoVZmLwgRskOUCrEggb63_slmhtSsi2fmrA&oe=69399167",
        alt: "Image 2",
    },
    {
        src: "https://i.pinimg.com/236x/87/1a/d9/871ad952db3f41efafb0de47bd03c942.jpg",
        alt: "Image 3",
    },
    {
        src: "https://i.pinimg.com/236x/79/ce/e8/79cee8b85d447f63937b7a82c9328127.jpg",
        alt: "Image 4",
    },
    {
        src: "https://i.pinimg.com/236x/79/ce/e8/79cee8b85d447f63937b7a82c9328127.jpg",
        alt: "Image 5",
    },
];

function Hero() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <div className="text-center p-2">
                <div className="text-center bg-white rounded-xl shadow-xl mt-5 mx-3 lg:mx-20">
                    <div className="rounded-full bg-pink-100 inline-flex items-center justify-center w-28 h-28 mt-5">
                        <p className="text-5xl">🎂</p>
                    </div>
                    <div className="p-10">
                        <h1 className="text-5xl md:text-5xl font-semibold text-blue-400">
                            Happy Birthday
                        </h1>
                        <button
                            variant="gradient"
                            onClick={handleOpen}
                            className="text-3xl md:text-4xl font-semibold text-pink-200 hover:underline hover:text-pink-400 duration-300 cursor-pointer"
                        >

                            ชื่อ🎉
                        </button>
                    </div>
                    <Music />
                    <motion.div
                        animate={{
                            y: [0, -12, 0],
                            opacity: [1, 0.5, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    >
                        <span style={{ fontSize: "50px" }}>📸</span> {/* Emoji */}
                    </motion.div>
                    <div className="flex items-center justify-center w-full p-10 h-[400px] md:h-[700px]">
                        <Carousel className="rounded-xl w-full max-w-4xl">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-full w-full object-cover"
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                backdropProps={{
                    className: "fixed inset-0 z-50 backdrop-blur-md bg-black/30",
                }}
            >  <DialogHeader className="sriracha-regular text-lg text-blue-500">
                    สุขสันต์วันเกิดน้าไออ้วนนน
                </DialogHeader>
                <DialogBody className="sriracha-regular text-xl text-gray-700">
                    ไม่มีอะไรมาก จุ๊บๆ 🎉🎉
                </DialogBody>
                <DialogFooter>
                    <Button variant="gradient" color="pink" onClick={handleOpen}>
                        <span className="font-medium">Ok</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default Hero;
