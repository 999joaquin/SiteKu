"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Smartphone, Zap, CheckCircle, Send, Eye, Rocket, Star, MessageCircle } from "lucide-react"
import React from "react"
import Link from "next/link"

export default function Component() {
  // Add custom 3D animation styles
  React.useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
@keyframes sway1 {
  0%, 100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px);
  }
  25% {
    transform: perspective(1000px) rotateX(-2deg) rotateY(3deg) translateZ(8px) translateY(-4px);
  }
  50% {
    transform: perspective(1000px) rotateX(1deg) rotateY(-2deg) translateZ(12px) translateY(-6px);
  }
  75% {
    transform: perspective(1000px) rotateX(3deg) rotateY(1deg) translateZ(6px) translateY(-2px);
  }
}

@keyframes sway2 {
  0%, 100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px);
  }
  30% {
    transform: perspective(1000px) rotateX(2deg) rotateY(-3deg) translateZ(10px) translateY(-5px);
  }
  60% {
    transform: perspective(1000px) rotateX(-1deg) rotateY(2deg) translateZ(15px) translateY(-8px);
  }
  80% {
    transform: perspective(1000px) rotateX(-3deg) rotateY(-1deg) translateZ(5px) translateY(-3px);
  }
}

@keyframes sway3 {
  0%, 100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px);
  }
  20% {
    transform: perspective(1000px) rotateX(3deg) rotateY(2deg) translateZ(7px) translateY(-3px);
  }
  45% {
    transform: perspective(1000px) rotateX(-2deg) rotateY(-3deg) translateZ(13px) translateY(-7px);
  }
  70% {
    transform: perspective(1000px) rotateX(1deg) rotateY(3deg) translateZ(9px) translateY(-4px);
  }
}

@keyframes sway4 {
  0%, 100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px);
  }
  35% {
    transform: perspective(1000px) rotateX(-3deg) rotateY(1deg) translateZ(11px) translateY(-6px);
  }
  65% {
    transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(8px) translateY(-4px);
  }
  85% {
    transform: perspective(1000px) rotateX(-1deg) rotateY(3deg) translateZ(14px) translateY(-8px);
  }
}

.animate-sway1 {
  transform-style: preserve-3d;
  animation: sway1 4s ease-in-out infinite;
}

.animate-sway2 {
  transform-style: preserve-3d;
  animation: sway2 5s ease-in-out infinite;
}

.animate-sway3 {
  transform-style: preserve-3d;
  animation: sway3 4.5s ease-in-out infinite;
}

.animate-sway4 {
  transform-style: preserve-3d;
  animation: sway4 5.5s ease-in-out infinite;
}

.animation-delay-1s {
  animation-delay: 0.5s;
}

.animation-delay-2s {
  animation-delay: 1s;
}

.animation-delay-3s {
  animation-delay: 1.5s;
}

.perspective-container {
  perspective: 1200px;
  perspective-origin: center center;
}

/* WhatsApp floating button animations */
@keyframes whatsapp-pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
}

@keyframes whatsapp-bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.whatsapp-float {
  animation: whatsapp-pulse 2s infinite, whatsapp-bounce 3s infinite;
}

.whatsapp-float:hover {
  animation: none;
  transform: scale(1.1);
}

@keyframes shine {
  0% {
    background-position: -100% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.text-shine {
  background: linear-gradient(
    to right,
    #ffffff 0%,
    #ffffff 45%,
    #64b5f6 50%,
    #ffffff 55%,
    #ffffff 100%
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s linear infinite;
}
  `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-white">
                  Site<span className="text-blue-400">Ku</span>
                </span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/fitur" className="text-sm font-medium text-gray-300 hover:text-white">
                Fitur
              </Link>
              <Link href="/cara-kerja" className="text-sm font-medium text-gray-300 hover:text-white">
                Cara Kerja
              </Link>
              <Link href="/testimoni" className="text-sm font-medium text-gray-300 hover:text-white">
                Testimoni
              </Link>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-300">
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
              Khusus UMKM Indonesia
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-shine">Solusi Website UMKM</span>
              <span className="block text-blue-400">Cepat & Mudah</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Bangun website profesional untuk bisnismu mulai dengan contoh gratis, dan lanjutkan hanya jika kamu puas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <Zap className="mr-2 h-5 w-5" />
                Coba Gratis Sekarang
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-300 hover:bg-blue-900/30 hover:text-blue-100 px-8 py-3 text-lg font-medium transition-colors duration-200"
              >
                <Eye className="mr-2 h-5 w-5 text-blue-300 group-hover:text-blue-100" />
                Lihat Contoh
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SiteKu */}
      <section className="py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kenapa Pilih SiteKu?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Kami memahami kebutuhan UMKM Indonesia dan memberikan solusi terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto perspective-container">
            <div className="animate-sway1">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Contoh Website Gratis</h3>
                  <p className="text-gray-400 text-sm">
                    Lihat dulu hasilnya sebelum memutuskan. Tidak ada biaya tersembunyi.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway2 animation-delay-1s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Desain Profesional & Mobile Friendly</h3>
                  <p className="text-gray-400 text-sm">Website yang tampil sempurna di semua perangkat dan browser.</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway3 animation-delay-2s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Biaya Sekali, Perawatan Bulanan</h3>
                  <p className="text-gray-400 text-sm">
                    Investasi yang jelas dengan perawatan terjangkau setiap bulan.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway4 animation-delay-3s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Mudah & Cepat – Tanpa Ribet</h3>
                  <p className="text-gray-400 text-sm">
                    Proses simple, komunikasi lancar, website jadi dalam hitungan hari.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Kerjanya</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hanya 3 langkah mudah untuk mendapatkan website impian Anda
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-8 w-8 text-white" />
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl shadow-gray-900/40">
                    <h3 className="text-xl font-semibold mb-3">1. Kirim Info Bisnismu</h3>
                    <p className="text-gray-400">
                      Ceritakan tentang bisnis Anda, target pasar, dan preferensi desain melalui form sederhana.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl shadow-gray-900/40">
                    <h3 className="text-xl font-semibold mb-3">2. Kami Buatkan Contoh Gratis</h3>
                    <p className="text-gray-400">
                      Tim kami akan membuat mockup website Anda dalam 2-3 hari kerja, gratis tanpa komitmen.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl shadow-gray-900/40">
                    <h3 className="text-xl font-semibold mb-3">3. Lanjutkan & Online!</h3>
                    <p className="text-gray-400">
                      Jika puas dengan contoh, lanjutkan pembayaran dan website Anda akan segera online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kata Mereka</h2>
            <p className="text-gray-400 text-lg">Testimoni dari klien yang sudah merasakan manfaatnya</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Website dari SiteKu benar-benar membantu bisnis katering saya. Sekarang lebih banyak pelanggan yang
                  pesan online!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sari Dewi</p>
                    <p className="text-gray-400 text-sm">Katering Sari Rasa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Prosesnya cepat dan hasilnya memuaskan. Tim SiteKu sangat memahami kebutuhan UMKM seperti kami."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">B</span>
                  </div>
                  <div>
                    <p className="font-semibold">Budi Santoso</p>
                    <p className="text-gray-400 text-sm">Toko Elektronik BS</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bangun Citra Digital Bisnis Anda Bersama SiteKu</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Jangan biarkan kompetitor unggul. Mulai dengan contoh gratis hari ini juga!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Hubungi Kami via WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/60 text-blue-600 hover:bg-white/20 hover:border-white hover:text-white px-8 py-3 text-lg font-medium"
            >
              Coba Gratis Sekarang
            </Button>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            Tidak ada biaya tersembunyi • Contoh gratis tanpa komitmen • Support 24/7
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 SiteKu. Solusi website terpercaya untuk UMKM Indonesia.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6285890039560?text=Halo%20SiteKu,%20saya%20tertarik%20untuk%20membuat%20website%20untuk%20bisnis%20saya"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float group"
        >
          <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 flex items-center justify-center">
            <MessageCircle className="h-6 w-6" />
          </div>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat via WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </a>
      </div>
    </div>
  )
}
