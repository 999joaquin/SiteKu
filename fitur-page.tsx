"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Smartphone,
  Zap,
  Search,
  ShoppingCart,
  BarChart3,
  Shield,
  Headphones,
  Palette,
  MessageCircle,
  ArrowLeft,
  Clock,
  Rocket,
  Settings,
  Mail,
  Camera,
  Code,
  Database,
} from "lucide-react"
import React from "react"
import Link from "next/link"

export default function FiturPage() {
  // Add custom 3D animation styles
  React.useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
@keyframes sway1 {
  0%, 100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px);
  }
  25% {
    transform: perspective(1000px) rotateX(-1deg) rotateY(2deg) translateZ(5px) translateY(-2px);
  }
  50% {
    transform: perspective(1000px) rotateX(1deg) rotateY(-1deg) translateZ(8px) translateY(-3px);
  }
  75% {
    transform: perspective(1000px) rotateX(2deg) rotateY(1deg) translateZ(3px) translateY(-1px);
  }
}

@keyframes sway2 {
  0%, 100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px);
  }
  30% {
    transform: perspective(1000px) rotateX(1deg) rotateY(-2deg) translateZ(6px) translateY(-3px);
  }
  60% {
    transform: perspective(1000px) rotateX(-1deg) rotateY(1deg) translateZ(9px) translateY(-4px);
  }
  80% {
    transform: perspective(1000px) rotateX(-2deg) rotateY(-1deg) translateZ(4px) translateY(-2px);
  }
}

@keyframes sway3 {
  0%, 100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px);
  }
  20% {
    transform: perspective(1000px) rotateX(2deg) rotateY(1deg) translateZ(4px) translateY(-2px);
  }
  45% {
    transform: perspective(1000px) rotateX(-1deg) rotateY(-2deg) translateZ(7px) translateY(-3px);
  }
  70% {
    transform: perspective(1000px) rotateX(1deg) rotateY(2deg) translateZ(5px) translateY(-2px);
  }
}

.animate-sway1 {
  transform-style: preserve-3d;
  animation: sway1 5s ease-in-out infinite;
}

.animate-sway2 {
  transform-style: preserve-3d;
  animation: sway2 6s ease-in-out infinite;
}

.animate-sway3 {
  transform-style: preserve-3d;
  animation: sway3 5.5s ease-in-out infinite;
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

.animation-delay-4s {
  animation-delay: 2s;
}

.animation-delay-5s {
  animation-delay: 2.5s;
}

.animation-delay-6s {
  animation-delay: 3s;
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
              <Link href="/fitur" className="text-sm font-medium text-blue-400">
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
            {/* Centered Back Button */}
            <div>
              <Link href="/" className="inline-flex items-center justify-center text-blue-400 hover:text-blue-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </div>

            <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
              Fitur Lengkap SiteKu
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Fitur Website
              <span className="block text-blue-400">Profesional untuk UMKM</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Semua yang Anda butuhkan untuk membangun kehadiran digital yang kuat dan menarik pelanggan
            </p>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fitur Teknis</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Website yang cepat, aman, dan mudah ditemukan di Google
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto perspective-container">
            <div className="animate-sway1">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Responsive Design</h3>
                  <p className="text-gray-400 text-sm">
                    Website tampil sempurna di semua perangkat - desktop, tablet, dan smartphone
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway2 animation-delay-1s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">SEO Optimized</h3>
                  <p className="text-gray-400 text-sm">
                    Mudah ditemukan di Google dengan optimasi SEO yang tepat untuk bisnis lokal
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway3 animation-delay-2s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Loading Super Cepat</h3>
                  <p className="text-gray-400 text-sm">
                    Website memuat dalam hitungan detik, tidak membuat pengunjung menunggu lama
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway1 animation-delay-3s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Keamanan SSL</h3>
                  <p className="text-gray-400 text-sm">
                    Website dilindungi dengan sertifikat SSL untuk keamanan data pelanggan
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway2 animation-delay-4s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Backup Otomatis</h3>
                  <p className="text-gray-400 text-sm">
                    Data website di-backup secara otomatis setiap hari untuk keamanan maksimal
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway3 animation-delay-5s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Clean Code</h3>
                  <p className="text-gray-400 text-sm">
                    Kode website ditulis dengan standar industri untuk performa dan maintenance optimal
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Features */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fitur Bisnis</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tools yang membantu mengembangkan bisnis dan meningkatkan penjualan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto perspective-container">
            <div className="animate-sway2">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Katalog Produk</h3>
                  <p className="text-gray-400 text-sm">
                    Tampilkan produk/layanan dengan foto, deskripsi, dan harga yang menarik
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway3 animation-delay-1s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Form Kontak</h3>
                  <p className="text-gray-400 text-sm">
                    Pelanggan dapat menghubungi Anda langsung melalui form yang terintegrasi
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway1 animation-delay-2s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Google Analytics</h3>
                  <p className="text-gray-400 text-sm">
                    Pantau pengunjung website dan analisis performa bisnis online Anda
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway3 animation-delay-3s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">WhatsApp Integration</h3>
                  <p className="text-gray-400 text-sm">
                    Tombol WhatsApp yang memudahkan pelanggan untuk chat langsung dengan Anda
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway1 animation-delay-4s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Galeri Foto</h3>
                  <p className="text-gray-400 text-sm">
                    Showcase produk, layanan, atau portofolio dengan galeri foto yang elegan
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway2 animation-delay-5s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Google Maps</h3>
                  <p className="text-gray-400 text-sm">
                    Tampilkan lokasi bisnis dengan peta interaktif untuk memudahkan pelanggan
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan & Support</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Dukungan penuh untuk memastikan website Anda selalu optimal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto perspective-container">
            <div className="animate-sway1">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Headphones className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Support 24/7</h3>
                  <p className="text-gray-400 text-sm">Tim support siap membantu kapan saja via WhatsApp</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway2 animation-delay-1s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Maintenance Rutin</h3>
                  <p className="text-gray-400 text-sm">Update dan maintenance berkala untuk performa optimal</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway3 animation-delay-2s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Kustomisasi</h3>
                  <p className="text-gray-400 text-sm">Desain dapat disesuaikan dengan brand dan preferensi Anda</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-sway1 animation-delay-3s">
              <Card className="bg-gray-800 border-gray-700 shadow-2xl shadow-gray-900/50 transition-all duration-300 hover:bg-gray-750">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Pengerjaan Cepat</h3>
                  <p className="text-gray-400 text-sm">Website selesai dalam 3-7 hari kerja setelah brief lengkap</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Memulai Website Profesional?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Dapatkan semua fitur ini dalam satu paket lengkap. Mulai dengan contoh gratis!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Konsultasi Gratis
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/60 text-blue-600 hover:bg-white/20 hover:border-white hover:text-white px-8 py-3 text-lg font-medium"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Lihat Contoh Website
            </Button>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            Gratis konsultasi • Contoh website tanpa biaya • Garansi kepuasan
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
          href="https://wa.me/6281234567890?text=Halo%20SiteKu,%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20fitur%20website"
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
