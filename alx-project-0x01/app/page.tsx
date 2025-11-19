import  Header from "@/components/layout/Header";
import "./globals.css"

const Home: React.FC = ()=>{
  return (
    <div className="flex flex-col h-screen">
      <Header/>
        <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">
              Welcome to My Application
            </h1>
            <p className="mt-4 text-xl text-white">
              We are glad you are here. Explore and enjoy your experience.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">Get started</button>
          </div>
        </main>
      
    </div>
  )
}

export default Home;