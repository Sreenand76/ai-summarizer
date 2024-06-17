

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col '>
      <nav className='flex justify-between items-center w-full mt-6 mb-20'>
        <img src="./src/assets/Chess_Adt26.svg" alt="" className='h-10 object-contain'/>
        <button type='button' onClick={()=>window.open('https://github.com/sreenand76')} className="black_btn">Github</button>
      </nav>
      <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden' /><span className='orange_gradient'>OpenAi GPT-4</span></h1>
      <h2 className='desc'>Fed up reading large articles in website's,here's an open-source article summarizer that transforms lengthy articles into clear and concise summaries</h2>
    </header>
  )
}

export default Hero
