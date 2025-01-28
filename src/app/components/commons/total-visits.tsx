export default function TotalVistis({
totalVisits
}:{
    totalVisits:number
}){
  
    return (
        <div className="flex items-center gap-5 px-8 py-3 rounded-xl bg-background-secondary">
            <span className="text-white font-bold text-base leading-6">Total de visitas</span>
            <span className="text-accent-green text-[32px] font-bold leading-10">{totalVisits}</span>
        </div>
    )
}