import Image from "next/image";
import Button from "../ui/button";
import { Facebook, Github, Instagram, Linkedin, Plus, Twitter } from "lucide-react";
import UserCard from "../commons/user-card";
import LinkContainer from "../commons/link-container";
import TotalVistis from "../commons/total-visits";




export default function Hero() {

    return (
        <div>
            <header className="flex items-center justify-between py-10 px-20 ">
                <div>
                    <Image
                        src="/logo.svg"
                        width={145}
                        height={30}
                        alt="" />
                </div>

                <div>
                    <Button>Login</Button>
                </div>
            </header>
            <main >
                <div className="relative bg-[radial-gradient(circle_at_75%_48%,#4B2DBB,transparent_30%)]">
                    <div className="bg-black w-[340px] h-[129px] rounded-[20px] p-3 absolute left-[769px] top-[-35px] ">
                        <div className="flex gap-5">
                            <div>
                                <Image
                                    src='/projectImage.svg'
                                    alt=""
                                    width={96}
                                    height={105}
                                />
                            </div>
                            <div>

                                <h1 className="font-bold text-xs text-accent-green leading-6">15 CLIQUES</h1>
                                <h1 className="text-white text-base leading-6 font-bold">BugTracer</h1>
                                <p className="text-[14px] leading-6 text-content-body">Rastreador simples de bugs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black w-[340px] h-[129px] rounded-[20px] p-3 absolute left-[729px] top-[115px] ">
                        <div className="flex gap-5">
                            <div>
                                <Image
                                    src='/projectImage.svg'
                                    alt=""
                                    width={96}
                                    height={105}
                                />
                            </div>
                            <div>

                                <h1 className="font-bold text-xs text-accent-green leading-6">15 CLIQUES</h1>
                                <h1 className="text-white text-base leading-6 font-bold">BugTracer</h1>
                                <p className="text-[14px] leading-6 text-content-body">Rastreador simples de bugs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-[1011.5px] bottom-10 z-30">
                        <TotalVistis totalVisits={1200000000000000000000}/>
                    </div>
                    <div className="flex items-center justify-between px-20 min-h-[600px]">
                        <LinkContainer />
                        <UserCard />
                    </div>
                </div>


            </main>
        </div>

    )
}
