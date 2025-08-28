export default function About() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-6 md:px-20 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left - Image */}
        <div className="flex justify-center">
          <div className="w-72 h-96 rounded-3xl overflow-hidden border-4 border-pink-600 shadow-lg">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="space-y-10">
          {/* Sobre mim */}
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Sobre mim</h2>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">pt-BR</strong><br />
              Me chamo <span className="font-bold">Rafael Costa</span>. Tenho 4 anos de experiência
              profissional como <span className="font-bold">Designer Gráfico</span>. Aprendi a usar o
              After Effects em 2016, e desde então, tenho me aproximado cada vez mais na área do
              <span className="font-bold"> audiovisual</span>. Hoje tenho domínio em diversas ferramentas, e
              <span className="font-bold"> já realizei projetos para inúmeros criadores de conteúdo</span>.
            </p>
            <p className="text-gray-300">
              <strong className="text-white">en-US</strong><br />
              My name is <span className="font-bold">Rafael Costa</span>. I have 4 years of professional
              experience as a <span className="font-bold">Graphic Designer</span>. I learned to use After
              Effects in 2016, and since then, I have been increasingly moving closer to the
              <span className="font-bold"> audiovisual</span> field. Currently, I am proficient in various
              tools and <span className="font-bold">have already completed projects for numerous content creators</span>.
            </p>
          </div>

          {/* Experiências */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Experiências</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-white">Estágio Designer Gráfico (2021-2023)</p>
                <p className="italic">Shizen Max.</p>
                <ul className="list-disc ml-5">
                  <li>Manutenção Visual do E-commerce</li>
                  <li>Artes para as Redes Sociais</li>
                  <li>Motion Graphics dos produtos</li>
                  <li>Edição de vídeos corporativos</li>
                </ul>
              </div>
             
            </div>
          </div>

          {/* Habilidades */}
         

          {/* Softwares */}
          <div>
            <h2 className="text-3xl font-extrabold mb-6">Softwares</h2>
            <div className="flex gap-6 text-5xl">
              <span className="bg-white text-black px-4 py-2 rounded-md font-bold">Pr</span>
              <span className="bg-white text-black px-4 py-2 rounded-md font-bold">Ae</span>
              <span className="bg-white text-black px-4 py-2 rounded-md font-bold">Ps</span>
              <span className="bg-white text-black px-4 py-2 rounded-md font-bold">Ai</span>
              <span className="bg-white text-black px-4 py-2 rounded-md font-bold">Bl</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
