import Button from "../ui/button";

export default function LinkContainer() {
    return (
        <div className="flex flex-col gap-[109px]">
            <div className="flex flex-col gap-[9px]">
                <h1 className="font-bold text-5xl leading-[64px] tracking- text-white">Seus projetos e redes <br /> sociais em um unico link</h1>
                <h2 className="font-normal text-xl leading-7 tracking-normal text-content-body">Crie sua própria página de projetos e compartilhe eles com o mundo. <br />
                    Acompanhe o engajamento com Analytics de cliques</h2>
            </div>
            <div className="flex items-center gap-1">
                <span className="text-xl leading-7 tracking-normal">projectinbio.com/</span>
                <input type="text" placeholder="Seu link" className="w-full h-12 rounded-xl bg-background-secondary p-3" />
                <Button>Criar agora</Button>
            </div>
        </div>
    )
}