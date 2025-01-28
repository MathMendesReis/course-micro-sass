import Image from "next/image";
import Button from "../ui/button";
import { Facebook, Github, Instagram, Linkedin, Plus, Twitter } from "lucide-react";




export default function UserCard() {

    return (

        <section className="w-[328px] h-[607px]  mr-20 p-5 flex flex-col gap-[21px] bg-black rounded-[32px] z-10 border border-white">
            <div className="flex items-center justify-center">
                <Image
                    alt=""
                    width={199.15}
                    height={200}
                    src="/elipse.svg"
                />
            </div>
            <div className="flex flex-col items-start gap-2">
                <h1 className="font-bold text-2xl text-white leading-[125%]">Andre dev</h1>
                <p className="font-medium text-base leading-[125%] text-content-body opacity-40">Eu crio produtos para a internet</p>
            </div>
            <span className="border border-[#1E1E1E]" />
            <div className="flex flex-col gap-2">
                <span>links</span>
                <div className="flex gap-3 items-center">
                    <Button variant="secondary">
                        <Linkedin />
                    </Button>
                    <Button variant="secondary">
                        <Instagram />
                    </Button>
                    <Button variant="secondary">
                        <Facebook />
                    </Button>
                    <Button variant="secondary">
                        <Github />
                    </Button>
                    <Button variant="secondary">
                        <Plus />
                    </Button>
                </div>
            </div>
            <div className="grid">
                <Button>Confira meu template SaaS</Button>
            </div>
        </section>


    )
}
