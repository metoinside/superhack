

export default function Hero() {
    return (
  
      <div className="hero min-h-screen bg-opacity-60"  style={{backgroundImage: 'url(https://img.freepik.com/free-vector/dark-green-abstract-background_1100-129.jpg?w=900&t=st=1689979415~exp=1689980015~hmac=4d3d2c5641ba1cf11d0ec811276d6635ed0204bdd4e7d41d4820c37799767730)'}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="text-5xl font-bold">Shop with crypto refund whereever you want!</h1>
            <p className="py-6">No need to share your identity details with others. Decentralized approach to taxfree shopping. </p>
            <div className="nav">
            <a href="#card" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Learn more!</a>
            </div>
            
          
          </div>
        </div>
      </div>
      
    )
  }