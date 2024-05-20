import React from "react"

const AmbientBG = () => {
  return (
    <div className="min-h-screen flex justify-center relative pointer-events-none">
      <div
        className="absolute -top-30 right-0 bg-blue-50 rounded-full mix-blend-multiply blur-xl opacity-30 filter"
        style={{ height: "calc(80vh + 50px)", width: "calc(80vh + 50px)" }}
      ></div>
      <div
        className="absolute bottom-56 right-60 bg-blue-50 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob2 animation-delay-2000"
        style={{ height: "calc(60vh + 50px)", width: "calc(60vh + 50px)" }}
      ></div>
      <div
        className="absolute bottom-20 right-45 bg-pink-550 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob2 animation-delay-2000"
        style={{ height: "calc(40vh + 50px)", width: "calc(40vh + 50px)" }}
      ></div>
      <div
        className="absolute -top-40 -left-40 bg-pink-650 rounded-full mix-blend-multiply opacity-30 filter blur-2xl animate-blob"
        style={{ height: "calc(50vh + 50px)", width: "calc(50vh + 50px)" }}
      ></div>
      <div
        className="absolute top-7 -left-80 bg-purple-550 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob animation-delay-1000"
        style={{ height: "calc(35vh + 50px)", width: "calc(35vh + 50px)" }}
      ></div>
      <div
        className="absolute -top-40 left-40 bg-pink-550 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob animation-delay-4000"
        style={{ height: "calc(75vh + 50px)", width: "calc(75vh + 50px)" }}
      ></div>
      <div
        className="absolute -top-40 -right-4 bg-purple-550 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob2 animation-delay-1000"
        style={{ height: "calc(85vh + 50px)", width: "calc(85vh + 50px)" }}
      ></div>
      <div
        className="absolute top-72 -right-40 bg-pink-650 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob animation-delay-3000"
        style={{ height: "calc(55vh + 50px)", width: "calc(55vh + 50px)" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 bg-pink-550 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob2 animation-delay-4000"
        style={{ height: "calc(90vh + 50px)", width: "calc(90vh + 50px)" }}
      ></div>
      <div
        className="absolute -top-56 -right-111 bg-pink-550 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob2 animation-delay-4000"
        style={{ height: "calc(100vh)", width: "calc(100vh)" }}
      ></div>
    </div>
  )
}

export default AmbientBG
