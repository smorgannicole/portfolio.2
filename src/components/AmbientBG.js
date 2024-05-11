import React from "react"
import NavBar from "./NavBar"

const AmbientBG = ({ hero }) => {
  return (
    <div class="bg-blue-100 min-h-screen flex bg-opacity-40 justify-center">
      <div class="relative w-full max-w-lg">
        <div class="absolute -top-30 -right-40 w-333 h-333 bg-blue-50 rounded-full mix-blend-multiply blur-xl opacity-30 filter"></div>
        <div class="absolute bottom-20 right-60 w-111 h-111 bg-blue-50 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob2 animation-delay-2000"></div>
        <div class="absolute bottom-20 right-45 w-111 h-111 bg-pink-550 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob2 animation-delay-2000"></div>
        <div class="absolute -top-40 -left-40 w-333 h-333 bg-pink-650 rounded-full mix-blend-multiply opacity-30 filter blur-2xl animate-blob"></div>
        <div class="absolute top-7 -left-80 w-111 h-111 bg-purple-550 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob animation-delay-1000"></div>
        <div class="absolute -top-40 left-40 w-333 h-333 bg-pink-550 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob animation-delay-4000"></div>
        <div class="absolute -top-40 -right-4 w-333 h-333 bg-purple-550 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob2 animation-delay-1000"></div>
        <div class="absolute top-72 -right-40 w-111 h-111 bg-pink-650 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob animation-delay-3000"></div>
        <div class="absolute bottom-40 left-20 w-333 h-333 bg-pink-550 rounded-full mix-blend-multiply opacity-30 filter blur-xl animate-blob2 animation-delay-4000"></div>
      </div>
      <NavBar />
      {hero}
    </div>
  )
}

export default AmbientBG
