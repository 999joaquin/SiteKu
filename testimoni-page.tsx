"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Star,
  MessageCircle,
  Quote,
  Users,
  TrendingUp,
  Heart,
  CheckCircle,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react"
import React from "react"
import Link from "next/link"

export default function TestimoniPage() {
  // Add custom animation styles
  React.useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-gentle {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animate-float-gentle {
  animation: float-gentle 4s ease-in-out infinite;
}

.animation-delay-1 {
  animation-delay: 0.2s;
}

.animation-delay-2 {
  animation-delay: 0.4s;
}

.animation-delay-3 {
  animation-delay: 0.6s;
}

.animation-delay-4 {
  animation-delay: 0.8s;
}

.animation-delay-5 {
  animation-delay: 1s;
}

.animation-delay-6 {
  animation-delay: 1.2s;
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

  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const testimonials = [
    {
      name: "Sari Dewi",
      business: "Katering Sari Rasa",
      location: "Jakarta",
      category: "Kuliner",
      rating: 5,
      date: "November 2024",
      image: "S",
      gradient: "from-pink-500 to-purple-500",
      testimonial:
        "Website dari SiteKu benar-benar membantu bisnis katering saya. Sekarang lebih banyak pelanggan yang pesan online! Dalam 2 bulan pertama, pesanan online meningkat 300%. Tim SiteKu sangat responsif dan memahami kebutuhan bisnis kuliner.",
      results: ["Pesanan online +300%", "Jangkauan pelanggan lebih luas", "Proses pemesanan lebih mudah"],
    },
    {
      name: "Budi Santoso",
      business: "Toko Elektronik BS",
      location: "Surabaya",
      category: "Retail",
      rating: 5,
      date: "Oktober 2024",
      image: "B",
      gradient: "from-blue-500 to-cyan-500",
      testimonial:
        "Prosesnya cepat dan hasilnya memuaskan. Tim SiteKu sangat memahami kebutuhan UMKM seperti kami. Website kami sekarang terlihat profesional dan mudah digunakan pelanggan. Penjualan online sudah mulai berkontribusi signifikan.",
      results: ["Website profesional", "Penjualan online meningkat", "Kepercayaan pelanggan bertambah"],
    },
    {
      name: "Rina Maharani",
      business: "Butik Rina Collection",
      location: "Bandung",
      category: "Fashion",
      rating: 5,
      date: "September 2024",
      image: "R",
      gradient: "from-rose-500 to-pink-500",
      testimonial:
        "Sebagai pemilik butik, saya butuh website yang bisa showcase produk fashion dengan menarik. SiteKu berhasil membuat website yang elegan dan mudah digunakan. Sekarang pelanggan bisa lihat koleksi terbaru dan pesan langsung via WhatsApp.",
      results: ["Showcase produk menarik", "Integrasi WhatsApp lancar", "Brand image meningkat"],
    },
    {
      name: "Ahmad Fauzi",
      business: "Bengkel Motor AF",
      location: "Medan",
      category: "Otomotif",
      rating: 5,
      date: "Agustus 2024",
      image: "A",
      gradient: "from-orange-500 to-red-500",
      testimonial:
        "Awalnya ragu karena bengkel motor butuh website apa. Ternyata setelah punya website, banyak pelanggan yang cari info service dan booking online. SiteKu bikin website yang simple tapi informatif. Sekarang bengkel saya lebih dikenal di area Medan.",
      results: ["Booking service online", "Jangkauan area lebih luas", "Kredibilitas bisnis meningkat"],
    },
    {
      name: "Lisa Permata",
      business: "Salon Kecantikan Lisa",
      location: "Yogyakarta",
      category: "Kecantikan",
      rating: 5,
      date: "Juli 2024",
      image: "L",
      gradient: "from-purple-500 to-indigo-500",
      testimonial:
        "Website salon saya sekarang bisa untuk booking treatment online dan showcase hasil kerja tim. Pelanggan jadi lebih mudah lihat price list dan jadwal tersedia. Tim SiteKu juga bantu setup sistem booking yang terintegrasi dengan WhatsApp.",
      results: ["Booking treatment online", "Price list transparan", "Sistem terintegrasi WhatsApp"],
    },
    {
      name: "Dedi Kurniawan",
      business: "Tukang Bangunan DK",
      location: "Bekasi",
      category: "Konstruksi",
      rating: 5,
      date: "Juni 2024",
      image: "D",
      gradient: "from-green-500 to-teal-500",
      testimonial:
        "Sebagai tukang bangunan, saya butuh cara untuk showcase project-project yang sudah dikerjakan. Website dari SiteKu membantu saya tampilkan portofolio dengan rapi. Sekarang banyak klien yang kontak langsung setelah lihat hasil kerja di website.",
      results: ["Portofolio tersusun rapi", "Klien baru bertambah", "Kredibilitas profesional"],
    },
  ]

  const moreSuccessStories = [
    {
      business: "Warung Makan Sederhana",
      category: "Kuliner",
      type: "Pesanan Delivery",
      amount: "Rp 850.000",
      description: "Pesanan nasi gudeg untuk acara keluarga",
      status: "Selesai",
      gradient: "from-yellow-500 to-orange-500",
      details: ["25 porsi nasi gudeg", "Delivery tepat waktu", "Pelanggan repeat order"],
    },
    {
      business: "Toko Baju Anak",
      category: "Fashion",
      type: "Penjualan Online",
      amount: "Rp 1.200.000",
      description: "Paket baju anak untuk reseller",
      status: "Lunas",
      gradient: "from-pink-500 to-rose-500",
      details: ["20 set baju anak", "Kualitas premium", "Margin reseller 40%"],
    },
    {
      business: "Service AC Profesional",
      category: "Jasa",
      type: "Booking Service",
      amount: "Rp 450.000",
      description: "Service AC split 2 unit rumah",
      status: "Terjadwal",
      gradient: "from-cyan-500 to-blue-500",
      details: ["Service rutin bulanan", "Teknisi berpengalaman", "Garansi 1 bulan"],
    },
    {
      business: "Toko Kue Artisan",
      category: "Kuliner",
      type: "Custom Order",
      amount: "Rp 2.500.000",
      description: "Kue wedding 3 tier custom design",
      status: "Proses",
      gradient: "from-purple-500 to-pink-500",
      details: ["Design eksklusif", "Rasa premium", "Delivery hari H"],
    },
    {
      business: "Laundry Express",
      category: "Jasa",
      type: "Paket Bulanan",
      amount: "Rp 300.000",
      description: "Paket laundry kiloan bulanan",
      status: "Aktif",
      gradient: "from-green-500 to-teal-500",
      details: ["Pickup & delivery", "Express 24 jam", "Member VIP"],
    },
    {
      business: "Toko Sepatu Lokal",
      category: "Fashion",
      type: "Pre-Order",
      amount: "Rp 1.800.000",
      description: "Sepatu kulit handmade custom",
      status: "Produksi",
      gradient: "from-amber-500 to-orange-500",
      details: ["Bahan kulit asli", "Handmade quality", "Size custom"],
    },
    {
      business: "Kursus Bahasa Inggris",
      category: "Edukasi",
      type: "Pendaftaran",
      amount: "Rp 1.500.000",
      description: "Paket kursus conversation 3 bulan",
      status: "Aktif",
      gradient: "from-indigo-500 to-purple-500",
      details: ["Native speaker", "Small class", "Sertifikat resmi"],
    },
    {
      business: "Bengkel Las Profesional",
      category: "Jasa",
      type: "Project Besar",
      amount: "Rp 15.000.000",
      description: "Pembuatan pagar dan kanopi rumah",
      status: "Kontrak",
      gradient: "from-gray-600 to-gray-800",
      details: ["Material berkualitas", "Garansi 2 tahun", "Tim berpengalaman"],
    },
    {
      business: "Florist Wedding",
      category: "Dekorasi",
      type: "Wedding Package",
      amount: "Rp 8.500.000",
      description: "Dekorasi bunga pernikahan lengkap",
      status: "Booking",
      gradient: "from-rose-500 to-pink-500",
      details: ["Fresh flowers", "Setup venue", "Bridal bouquet"],
    },
  ]

  const stats = [
    { number: "150+", label: "Klien Puas", icon: Users },
    { number: "98%", label: "Tingkat Kepuasan", icon: Heart },
    { number: "200%", label: "Rata-rata Peningkatan Bisnis", icon: TrendingUp },
    { number: "24/7", label: "Support Tersedia", icon: MessageCircle },
  ]

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
              <Link href="/testimoni" className="text-sm font-medium text-blue-400">
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
                Testimoni Klien SiteKu
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Kata Mereka
                <span className="block text-blue-400">Tentang SiteKu</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Dengarkan cerita sukses dari berbagai UMKM yang telah mempercayakan website mereka kepada SiteKu
            </p>
            </div>
        </div>
        </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className={`animate-fade-in-up animation-delay-${index + 1}`}>
                <Card className="bg-gray-800 border-gray-700 text-center p-6 hover:bg-gray-750 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cerita Sukses Klien Kami</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Dari berbagai industri, mereka semua merasakan dampak positif setelah memiliki website profesional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`animate-fade-in-up animation-delay-${(index % 3) + 1}`}>
                <Card className="bg-gray-800 border-gray-700 h-full hover:bg-gray-750 transition-all duration-300 group">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}
                        >
                          <span className="text-white font-semibold text-lg">{testimonial.image}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-lg">{testimonial.name}</h3>
                          <p className="text-blue-400 text-sm">{testimonial.business}</p>
                          <div className="flex items-center text-xs text-gray-400 mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{testimonial.location}</span>
                            <span className="mx-2">•</span>
                            <Briefcase className="h-3 w-3 mr-1" />
                            <span>{testimonial.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{testimonial.date}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-gray-400">({testimonial.rating}.0)</span>
                    </div>

                    {/* Quote */}
                    <div className="relative mb-6">
                      <Quote className="h-8 w-8 text-blue-400/30 absolute -top-2 -left-2" />
                      <p className="text-gray-300 leading-relaxed pl-6">{testimonial.testimonial}</p>
                    </div>

                    {/* Results */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-blue-400 mb-3">Hasil yang Dicapai:</h4>
                      {testimonial.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Screenshots Section */}
      <section className="py-16 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimoni</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Screenshot nyata dari transaksi dan layanan yang berhasil melalui website yang kami buat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Screenshot 1 - Online Order */}
            <div className={`animate-fade-in-up animation-delay-1`}>
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-750 transition-all duration-300 group">
                <div className="aspect-[4/3] bg-gray-700 relative flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Screenshot pesanan online Katering Sari Rasa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Katering Sari Rasa</h3>
                  <p className="text-gray-300 text-sm">
                    Pesanan catering untuk acara kantor sebesar Rp 1.25 juta melalui website. Proses pemesanan dan
                    pembayaran lancar.
                  </p>
                  <div className="flex items-center mt-3 text-xs text-gray-400">
                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    <span>Transaksi berhasil dalam 24 jam</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Screenshot 2 - Service Booking */}
            <div className={`animate-fade-in-up animation-delay-2`}>
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-750 transition-all duration-300 group">
                <div className="aspect-[4/3] bg-gray-700 relative flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Screenshot booking service Bengkel Motor AF"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Bengkel Motor AF</h3>
                  <p className="text-gray-300 text-sm">
                    Sistem booking online memudahkan pelanggan untuk jadwalkan service motor. Antrian lebih teratur dan
                    efisien.
                  </p>
                  <div className="flex items-center mt-3 text-xs text-gray-400">
                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    <span>Booking rate meningkat 150%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Screenshot 3 - Product Inquiry */}
            <div className={`animate-fade-in-up animation-delay-3`}>
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-750 transition-all duration-300 group">
                <div className="aspect-[4/3] bg-gray-700 relative flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Screenshot inquiry produk Butik Rina Collection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Butik Rina Collection</h3>
                  <p className="text-gray-300 text-sm">
                    Inquiry produk fashion melalui website dengan detail lengkap. Konversi dari inquiry ke penjualan
                    sangat tinggi.
                  </p>
                  <div className="flex items-center mt-3 text-xs text-gray-400">
                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    <span>Konversi inquiry 80%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Screenshot 4 - Treatment Booking */}
            <div className={`animate-fade-in-up animation-delay-1`}>
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-750 transition-all duration-300 group">
                <div className="aspect-[4/3] bg-gray-700 relative flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Screenshot booking treatment Salon Kecantikan Lisa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Salon Kecantikan Lisa</h3>
                  <p className="text-gray-300 text-sm">
                    Booking treatment kecantikan dengan sistem pembayaran DP. Jadwal salon lebih terorganisir dan
                    efisien.
                  </p>
                  <div className="flex items-center mt-3 text-xs text-gray-400">
                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    <span>Tingkat kedatangan 95%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Screenshot 5 - Project Inquiry */}
            <div className={`animate-fade-in-up animation-delay-2`}>
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-750 transition-all duration-300 group">
                <div className="aspect-[4/3] bg-gray-700 relative flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Screenshot project inquiry Tukang Bangunan DK"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Tukang Bangunan DK</h3>
                  <p className="text-gray-300 text-sm">
                    Inquiry project renovasi rumah dengan budget besar. Website membantu showcase portofolio dan
                    kredibilitas.
                  </p>
                  <div className="flex items-center mt-3 text-xs text-gray-400">
                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    <span>Project value 10x lipat</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Screenshot 6 - Electronics Sale */}
            <div className={`animate-fade-in-up animation-delay-3`}>
              <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-750 transition-all duration-300 group">
                <div className="aspect-[4/3] bg-gray-700 relative flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Screenshot penjualan online Toko Elektronik BS"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Toko Elektronik BS</h3>
                  <p className="text-gray-300 text-sm">
                    Penjualan elektronik dengan nilai tinggi melalui website. Kepercayaan pelanggan meningkat dengan
                    tampilan profesional.
                  </p>
                  <div className="flex items-center mt-3 text-xs text-gray-400">
                    <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                    <span>Penjualan online +250%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
            variant="outline"
            className="border-blue-400 text-black hover:bg-blue-900/30 hover:text-white"
            onClick={() => setIsModalOpen(true)}
            >
            Lihat Lebih Banyak Testimoni
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bergabunglah dengan Klien Puas Kami</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Saatnya bisnis Anda merasakan transformasi digital yang sama. Mulai dengan konsultasi gratis!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Konsultasi Gratis Sekarang
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/60 text-blue-600 hover:bg-white/20 hover:border-white hover:text-white px-8 py-3 text-lg font-medium"
            >
              <Users className="mr-2 h-5 w-5" />
              Lihat Portofolio Lengkap
            </Button>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            Konsultasi gratis • Contoh website tanpa biaya • Proses transparan • Garansi kepuasan
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
          href="https://wa.me/6281234567890?text=Halo%20SiteKu,%20saya%20tertarik%20untuk%20konsultasi%20setelah%20membaca%20testimoni%20klien"
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

      {/* Success Stories Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg border border-gray-700 w-full max-w-6xl max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div>
                <h3 className="text-2xl font-bold text-white">Testimoni</h3>
                <p className="text-gray-400 mt-1">Transaksi dan layanan nyata dari berbagai klien SiteKu</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {moreSuccessStories.map((story, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 overflow-hidden"
                  >
                    <div className="aspect-[4/3] bg-gray-700 relative">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt={`Screenshot ${story.business} - ${story.type}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${story.gradient}`}></div>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            story.status === "Selesai" || story.status === "Lunas" || story.status === "Aktif"
                              ? "bg-green-100 text-green-800"
                              : story.status === "Kontrak" || story.status === "Booking"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {story.status}
                        </span>
                      </div>

                      <h4 className="font-semibold text-white mb-1">{story.business}</h4>
                      <p className="text-blue-400 text-sm mb-2">
                        {story.category} • {story.type}
                      </p>

                      <div className="bg-gray-700 rounded p-3 mb-3">
                        <p className="text-gray-300 text-sm mb-2">{story.description}</p>
                        <div className="text-lg font-bold text-green-400">{story.amount}</div>
                      </div>

                      <div className="space-y-1">
                        {story.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm mb-4">Dan masih banyak lagi kesuksesan klien lainnya...</p>
                <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => setIsModalOpen(false)}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Konsultasi untuk Bisnis Saya
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}