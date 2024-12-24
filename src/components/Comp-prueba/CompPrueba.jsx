import Image from "next/image"


const CompPrueba = () => {
  return (
    <div className="w-full h-full bg-blue-300">
        <h2 className="text-[6rem] font-bold">ESTO ES UN COMPONENTE </h2>
        
          <video autoPlay loop muted>
            <source src="https://res.cloudinary.com/discruduz/video/upload/v1735053436/Mingyu_Maluma_Greta_Lee_and_More_Celebrate_the_Paris_Store_Opening_Calvin_Klein_1_fjqwt5.mp4" />
          </video>
        
        {/* <Image src="https://iili.io/2nN1ufe.jpg" width={500} height={500} alt="fto"/> */}
    </div>
  )
}

export default CompPrueba