"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Send,
  Eye,
  Rocket,
  MessageCircle,
  CheckCircle,
  Clock,
  FileText,
  Settings,
  Globe,
  CreditCard,
  HelpCircle,
  Users,
} from "lucide-react"
import React from "react"
import Link from "next/link"

export default function CaraKerjaPage() {
  // Add custom 3D animation styles
  React.useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
@keyframes float-up {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-float-up {
  animation: float-up 3s ease-in-out infinite;
}

.animation-delay-1 {
  animation-delay: 0.5s;
}

.animation-delay-2 {
  animation-delay: 1s;
}

.animation-delay-3 {
  animation-delay: 1.5s;
}

.animation-delay-4 {
  animation-delay: 2s;
}

.animation-delay-5 {
  animation-delay: 2.5s;
}

/* Timeline styles */
.timeline-container {
  position: relative;
}

.timeline-container::before {
  content: '';
  position: absolute;
  width: 4px;
  background-color: #1e40af;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -2px;
  z-index: 0;
}

@media (max-width: 768px) {
  .timeline-container::before {
    left: 31px;
  }
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
              <Link href="/fitur" className="text-sm font-medium text-gray-300 hover:text-white">
                Fitur
              </Link>
              <Link href="/cara-kerja" className="text-sm font-medium text-blue-400">
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
          {/* Centered Top Back Link */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
              Proses Pembuatan Website
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Cara Kerja
              <span className="block text-blue-400">Pembuatan Website SiteKu</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Proses yang sederhana dan transparan untuk mendapatkan website profesional untuk bisnis Anda
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proses Sederhana, Hasil Maksimal</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hanya 3 langkah utama untuk mendapatkan website profesional untuk bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="animate-float-up">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="h-10 w-10 text-white" />
                </div>
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl shadow-gray-900/40">
                  <h3 className="text-xl font-semibold mb-3">1. Kirim Info Bisnis</h3>
                  <p className="text-gray-400">
                    Ceritakan tentang bisnis Anda, target pasar, dan preferensi desain melalui form sederhana atau chat
                    WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-float-up animation-delay-2">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl shadow-gray-900/40">
                  <h3 className="text-xl font-semibold mb-3">2. Dapatkan Contoh Gratis</h3>
                  <p className="text-gray-400">
                    Tim kami akan membuat mockup website Anda dalam 2-3 hari kerja, gratis tanpa komitmen.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-float-up animation-delay-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-10 w-10 text-white" />
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
      </section>

      {/* Detailed Process Timeline */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proses Detail</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Berikut adalah tahapan lengkap dari awal hingga website Anda online
            </p>
          </div>

          <div className="max-w-4xl mx-auto timeline-container">
            {/* Step 1 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pl-8 relative">
                  <Card className="bg-gray-800 border-gray-700 shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Konsultasi Awal</h3>
                      </div>
                      <p className="text-gray-300">
                        Diskusi awal melalui WhatsApp atau form online untuk memahami kebutuhan bisnis Anda, target
                        pasar, dan preferensi desain.
                      </p>
                      <div className="mt-4 flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Durasi: 15-30 menit</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-1/2 md:pl-8 relative">
                  <div className="hidden md:block w-10 h-10 absolute -left-5 top-1/2 transform -translate-y-1/2 bg-blue-600 rounded-full border-4 border-gray-900 z-10"></div>
                  <div className="md:hidden w-10 h-10 absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full border-4 border-gray-900 z-10"></div>
                  <div className="pl-12 md:pl-0">
                    <h4 className="text-lg font-semibold mb-2">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Pemahaman tentang proses pembuatan website</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Rekomendasi jenis website yang sesuai untuk bisnis Anda</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Estimasi biaya dan waktu pengerjaan</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:order-2">
                  <Card className="bg-gray-800 border-gray-700 shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                          <Eye className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Pembuatan Contoh</h3>
                      </div>
                      <p className="text-gray-300">
                        Tim desainer kami akan membuat mockup halaman utama website Anda berdasarkan informasi yang
                        diberikan.
                      </p>
                      <div className="mt-4 flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Durasi: 2-3 hari kerja</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-1/2 md:pl-8 relative md:order-1">
                  <div className="hidden md:block w-10 h-10 absolute -right-5 top-1/2 transform -translate-y-1/2 bg-green-600 rounded-full border-4 border-gray-900 z-10"></div>
                  <div className="md:hidden w-10 h-10 absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 rounded-full border-4 border-gray-900 z-10"></div>
                  <div className="pl-12 md:pl-0">
                    <h4 className="text-lg font-semibold mb-2">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Mockup halaman utama website</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Desain yang sesuai dengan brand bisnis Anda</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Kesempatan untuk memberikan feedback</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pl-8 relative">
                  <Card className="bg-gray-800 border-gray-700 shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                          <Settings className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Revisi & Persetujuan</h3>
                      </div>
                      <p className="text-gray-300">
                        Anda dapat memberikan feedback dan permintaan revisi untuk memastikan desain sesuai dengan
                        harapan.
                      </p>
                      <div className="mt-4 flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Durasi: 1-2 hari kerja</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-1/2 md:pl-8 relative">
                  <div className="hidden md:block w-10 h-10 absolute -left-5 top-1/2 transform -translate-y-1/2 bg-purple-600 rounded-full border-4 border-gray-900 z-10"></div>
                  <div className="md:hidden w-10 h-10 absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full border-4 border-gray-900 z-10"></div>
                  <div className="pl-12 md:pl-0">
                    <h4 className="text-lg font-semibold mb-2">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Kesempatan untuk revisi desain (maksimal 2x)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Penjelasan detail tentang fitur-fitur website</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Proposal lengkap dengan rincian biaya</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative mb-16">
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0 md:order-2">
                  <Card className="bg-gray-800 border-gray-700 shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                          <CreditCard className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Pembayaran & Pengembangan</h3>
                      </div>
                      <p className="text-gray-300">
                        Setelah Anda setuju dengan desain, proses pembayaran dan pengembangan website lengkap dimulai.
                      </p>
                      <div className="mt-4 flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Durasi: 5-7 hari kerja</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-1/2 md:pl-8 relative md:order-1">
                  <div className="hidden md:block w-10 h-10 absolute -right-5 top-1/2 transform -translate-y-1/2 bg-orange-600 rounded-full border-4 border-gray-900 z-10"></div>
                  <div className="md:hidden w-10 h-10 absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 rounded-full border-4 border-gray-900 z-10"></div>
                  <div className="pl-12 md:pl-0">
                    <h4 className="text-lg font-semibold mb-2">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Pengembangan website lengkap dengan semua halaman</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Integrasi fitur-fitur yang dipilih</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Update progres pengerjaan secara berkala</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pl-8 relative">
                  <Card className="bg-gray-800 border-gray-700 shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                          <Globe className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Peluncuran & Support</h3>
                      </div>
                      <p className="text-gray-300">
                        Website diluncurkan dan tim kami memberikan panduan serta dukungan untuk memastikan semua
                        berjalan lancar.
                      </p>
                      <div className="mt-4 flex items-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Durasi: 1 hari + support berkelanjutan</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:w-1/2 md:pl-8 relative">
                  <div className="hidden md:block w-10 h-10 absolute -left-5 top-1/2 transform -translate-y-1/2 bg-blue-600 rounded-full border-4 border-gray-900 z-10"></div>
                  <div className="md:hidden w-10 h-10 absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full border-4 border-gray-900 z-10"></div>
                  <div className="pl-12 md:pl-0">
                    <h4 className="text-lg font-semibold mb-2">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Website yang siap digunakan dan online</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Panduan penggunaan dan pengelolaan website</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Support teknis 24/7 via WhatsApp</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQ</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Jawaban untuk pertanyaan yang sering ditanyakan tentang proses pembuatan website
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <HelpCircle className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">
                        Berapa lama waktu yang dibutuhkan untuk membuat website?
                      </h3>
                      <p className="text-gray-300">
                        Secara keseluruhan, proses dari konsultasi awal hingga website online membutuhkan waktu sekitar
                        7-14 hari kerja, tergantung kompleksitas website dan kecepatan feedback dari Anda.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <HelpCircle className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">
                        Apakah saya benar-benar mendapatkan contoh website gratis?
                      </h3>
                      <p className="text-gray-300">
                        Ya, kami memberikan mockup halaman utama website secara gratis tanpa kewajiban untuk
                        melanjutkan. Anda hanya membayar jika puas dengan contoh dan ingin melanjutkan pengembangan
                        website lengkap.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <HelpCircle className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">Bagaimana sistem pembayarannya?</h3>
                      <p className="text-gray-300">
                        Kami menerapkan sistem pembayaran 50% di awal sebagai down payment setelah Anda menyetujui
                        desain, dan 50% sisanya dibayarkan setelah website selesai dan siap diluncurkan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <HelpCircle className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">Apakah ada biaya maintenance bulanan?</h3>
                      <p className="text-gray-300">
                        Ya, kami menawarkan paket maintenance bulanan yang mencakup hosting, domain, keamanan, backup,
                        dan update konten. Biaya maintenance tergantung pada ukuran dan kompleksitas website Anda.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <HelpCircle className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">
                        Apakah saya bisa mengupdate konten website sendiri?
                      </h3>
                      <p className="text-gray-300">
                        Ya, kami akan memberikan akses ke sistem manajemen konten yang user-friendly sehingga Anda dapat
                        mengupdate konten seperti teks, gambar, dan produk dengan mudah. Kami juga menyediakan panduan
                        penggunaan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siap Memulai Perjalanan Digital Anda?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Dapatkan contoh website gratis dan lihat bagaimana SiteKu dapat membantu bisnis Anda tumbuh secara online
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Konsultasi Gratis via WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/60 text-blue-600 hover:bg-white/20 hover:border-white hover:text-white px-8 py-3 text-lg font-medium"
            >
              <Users className="mr-2 h-5 w-5" />
              Lihat Portofolio Kami
            </Button>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            Tanpa kewajiban • Contoh gratis • Proses transparan • Support 24/7
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
          href="https://wa.me/6281234567890?text=Halo%20SiteKu,%20saya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20proses%20pembuatan%20website"
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
