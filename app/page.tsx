"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Heart, Volume2, VolumeX, Play, Pause } from "lucide-react"

interface Memory {
  id: number
  image: string
  title: string
  date: string
  description: string
  emotion: string
  bgColor: string
}

const memories: Memory[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=240",
    title: "Primeiro Momento",
    date: "Verão de 2023",
    description:
      "Aquele momento do mês que não pode ser esquecido.",
    emotion: "Borboletas no estômago",
    bgColor: "from-pink-100 via-rose-50 to-orange-100",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=240",
    title: "Segundo Momento",
    date: "Outono de 2023",
    description:
      "Aquele momento do mês que não pode ser esquecido.",
    emotion: "Paz infinita",
    bgColor: "from-blue-100 via-cyan-50 to-teal-100",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=240",
    title: "Terceiro Momento",
    date: "Inverno de 2023",
    description:
      "Aquele momento do mês que não pode ser esquecido.",
    emotion: "Amor verdadeiro",
    bgColor: "from-purple-100 via-violet-50 to-indigo-100",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=300&width=240",
    title: "Quarto Momento",
    date: "Primavera de 2024",
    description:
      "Aquele momento do mês que não pode ser esquecido.",
    emotion: "Felicidade pura",
    bgColor: "from-yellow-100 via-amber-50 to-orange-100",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=300&width=240",
    title: "Quinto Momento",
    date: "Verão de 2024",
    description:
      "Aquele momento do mês que não pode ser esquecido.",
    emotion: "Aventura compartilhada",
    bgColor: "from-green-100 via-emerald-50 to-teal-100",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=240",
    title: "Sexto Momento",
    date: "Outono de 2024",
    description:
      "Aquele momento do mês que não pode ser esquecido.",
    emotion: "Conexão profunda",
    bgColor: "from-indigo-100 via-purple-50 to-blue-100",
  },
  {
    id: 7,
    image: "/placeholder.svg?height=300&width=240",
    title: "Setimo Momento",
    date: "Inverno de 2024",
    description:
      "Aquele momento do mês que não pode ser esquecido.",
    emotion: "Contentamento",
    bgColor: "from-orange-100 via-yellow-50 to-amber-100",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=300&width=240",
    title: "Oitavo Momento",
    date: "Primavera de 2024",
    description:
      "Aquele momento do mês que não pode ser esquecido.",
    emotion: "Crescimento",
    bgColor: "from-red-100 via-pink-50 to-rose-100",
  },
  {
    id: 9,
    image: "/placeholder.svg?height=300&width=240",
    title: "Decimo Momento",
    date: "Verão de 2024",
    description:
      "Aquele momento do mês que não pode ser esquecido.",
    emotion: "Alegria contagiante",
    bgColor: "from-lime-100 via-green-50 to-emerald-100",
  },
  {
    id: 10,
    image: "/placeholder.svg?height=300&width=240",
    title: "Decimo Momento",
    date: "Presente",
    description:
      "Aquele momento do mês que não pode ser esquecido.",
    emotion: "Esperança eterna",
    bgColor: "from-violet-100 via-fuchsia-50 to-pink-100",
  },
  {
      id: 11,
    image: "/placeholder.svg?height=300&width=240",
    title: "Decimo Primeiro Momento",
    date: "Presente",
    description:
      "Aquele momento do mês que não pode ser esquecido.",
    emotion: "Esperança eterna",
    bgColor: "from-violet-100 via-fuchsia-50 to-pink-100",
  },
    {
      id: 12,
    image: "/placeholder.svg?height=300&width=240",
    title: "Decimo Segundo",
    date: "Presente",
    description:
      "Aquele momento do mês que não pode ser esquecido.",
    emotion: "Esperança eterna",
    bgColor: "from-violet-100 via-fuchsia-50 to-pink-100",
  },
]

// Componente de partículas flutuantes melhorado
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; size: number }>>(
    [],
  )

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 3 + 1,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-rose-200/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Componente de efeito Bokeh animado
const AnimatedBokeh = () => {
  const [bokehs, setBokehs] = useState<
    Array<{
      id: number
      size: number
      x: number
      y: number
      duration: number
      color: string
      delay: number
    }>
  >([])

  useEffect(() => {
    const newBokehs = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 150 + 50, // Tamanho entre 50 e 200px
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10, // Duração da animação
      color: [
        "rgba(255, 182, 193, 0.3)", // Rosa claro
        "rgba(255, 218, 185, 0.3)", // Pêssego
        "rgba(255, 192, 203, 0.3)", // Rosa
        "rgba(255, 228, 196, 0.3)", // Bisque
        "rgba(255, 240, 245, 0.3)", // Lavanda
        "rgba(255, 255, 255, 0.2)", // Branco suave
      ][Math.floor(Math.random() * 6)],
      delay: Math.random() * 5,
    }))
    setBokehs(newBokehs)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {bokehs.map((bokeh) => (
        <motion.div
          key={bokeh.id}
          className="absolute rounded-full"
          style={{
            width: bokeh.size,
            height: bokeh.size,
            left: `${bokeh.x}%`,
            top: `${bokeh.y}%`,
            backgroundColor: bokeh.color,
            filter: "blur(40px)",
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.3, 0.8],
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 30 - 15, 0],
          }}
          transition={{
            duration: bokeh.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: bokeh.delay,
          }}
        />
      ))}
    </div>
  )
}

// Componente de efeito Light Leak
const LightLeak = () => {
  const [lightLeaks, setLightLeaks] = useState<
    Array<{
      id: number
      width: number
      height: number
      x: number
      y: number
      rotation: number
      duration: number
      delay: number
    }>
  >([])

  useEffect(() => {
    const newLightLeaks = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      width: Math.random() * 300 + 100,
      height: Math.random() * 600 + 200,
      x: Math.random() * 120 - 10, // Pode sair um pouco da tela
      y: Math.random() * 120 - 10,
      rotation: Math.random() * 360,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 10,
    }))
    setLightLeaks(newLightLeaks)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {lightLeaks.map((leak) => (
        <motion.div
          key={leak.id}
          className="absolute"
          style={{
            width: leak.width,
            height: leak.height,
            left: `${leak.x}%`,
            top: `${leak.y}%`,
            background: `linear-gradient(${leak.rotation}deg, 
              rgba(255, 255, 255, 0) 0%, 
              rgba(255, 218, 185, 0.1) 30%, 
              rgba(255, 182, 193, 0.15) 50%, 
              rgba(255, 192, 203, 0.1) 70%, 
              rgba(255, 255, 255, 0) 100%)`,
            filter: "blur(60px)",
            transform: `rotate(${leak.rotation}deg)`,
          }}
          animate={{
            opacity: [0, 0.3, 0.6, 0.3, 0],
            scale: [0.8, 1.1, 1.3, 1.1, 0.8],
            rotate: [leak.rotation, leak.rotation + 20, leak.rotation - 20, leak.rotation],
          }}
          transition={{
            duration: leak.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: leak.delay,
          }}
        />
      ))}
    </div>
  )
}

// Componente Polaroid com efeito 3D
const PolaroidCard = ({ memory, onClick, index }: { memory: Memory; onClick: () => void; index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isRevealing, setIsRevealing] = useState(true)
  const cardRef = useRef<HTMLDivElement>(null)

  const rotation = (index % 2 === 0 ? 1 : -1) * (Math.random() * 6 + 2)

  useEffect(() => {
    // Simula o efeito de revelação da Polaroid
    const timer = setTimeout(() => setIsRevealing(false), 2000 + index * 500)
    return () => clearTimeout(timer)
  }, [index])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setMousePosition({ x: rotateY, y: rotateX })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative cursor-pointer group polaroid-3d"
      style={
        {
          rotate: `${rotation}deg`,
          "--rotate-x": `${mousePosition.y}deg`,
          "--rotate-y": `${mousePosition.x}deg`,
        } as any
      }
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: `${rotation}deg` }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: index * 0.15,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white p-4 pb-16 shadow-xl rounded-sm transform-gpu">
        <div className="relative overflow-hidden rounded-sm">
          <motion.img
            src={memory.image || "/placeholder.svg"}
            alt={memory.title}
            className="w-64 h-80 object-cover transition-all duration-300 group-hover:brightness-110"
            initial={{ filter: "sepia(100%) brightness(0.8)" }}
            animate={{
              filter: isRevealing ? "sepia(100%) brightness(0.8)" : "sepia(0%) brightness(1)",
            }}
            transition={{ duration: 1.5, delay: index * 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Efeito de revelação */}
          {isRevealing && (
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: index * 0.3 }}
            />
          )}
        </div>

        <div className="mt-4 text-center">
          <h3 className="font-handwriting-bold text-gray-800 mb-2 text-xl">{memory.title}</h3>
          <p className="font-handwriting text-base text-gray-600 mt-1">{memory.date}</p>
        </div>

        {/* Efeito de brilho no hover melhorado */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>
    </motion.div>
  )
}

// Componente de confetes melhorado
const Confetti = ({ isActive }: { isActive: boolean }) => {
  const [confetti, setConfetti] = useState<
    Array<{ id: number; left: number; color: string; delay: number; randomX: number }>
  >([])

  useEffect(() => {
    if (isActive) {
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: ["#ff69b4", "#ff1493", "#ffc0cb", "#ffb6c1", "#ff91a4"][Math.floor(Math.random() * 5)],
        delay: Math.random() * 2,
        randomX: Math.random() * 2 - 1, // valor entre -1 e 1
      }))
      setConfetti(newConfetti)

      const timer = setTimeout(() => setConfetti([]), 3000)
      return () => clearTimeout(timer)
    }
  }, [isActive])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti"
          style={
            {
              left: `${piece.left}%`,
              backgroundColor: piece.color,
              animationDelay: `${piece.delay}s`,
              "--random-x": piece.randomX,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

// Componente de texto com efeito máquina de escrever
const TypewriterText = ({ text, isVisible }: { text: string; isVisible: boolean }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (isVisible && currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [isVisible, currentIndex, text])

  useEffect(() => {
    if (isVisible) {
      setDisplayText("")
      setCurrentIndex(0)
    }
  }, [isVisible, text])

  return (
    <p className="text-gray-700 leading-relaxed text-lg">
      {displayText}
      {isVisible && currentIndex < text.length && (
        <span className="inline-block w-0.5 h-6 bg-rose-400 ml-1 animate-pulse" />
      )}
    </p>
  )
}

// Modal de memória melhorado
const MemoryModal = ({ memory, isOpen, onClose }: { memory: Memory | null; isOpen: boolean; onClose: () => void }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showTypewriter, setShowTypewriter] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowTypewriter(true), 500)
      return () => {
        clearTimeout(timer)
        setShowTypewriter(false)
      }
    }
  }, [isOpen])

  const handleLike = () => {
    setIsLiked(!isLiked)
    if (!isLiked) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 100)
    }
  }

  if (!memory) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={`fixed inset-0 bg-gradient-to-br ${memory.bgColor} opacity-90 backdrop-blur-sm z-40`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="relative">
                <button
                  onClick={onClose}
                  aria-label="Fechar modal"
                  className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <motion.div
                        className="bg-white p-3 pb-12 shadow-lg rounded-sm transform rotate-2"
                        initial={{ rotate: -5, scale: 0.9 }}
                        animate={{ rotate: 2, scale: 1 }}
                        transition={{ type: "spring", damping: 20 }}
                      >
                        <img
                          src={memory.image || "/placeholder.svg"}
                          alt={memory.title}
                          className="w-64 h-80 object-cover rounded-sm"
                        />
                        <div className="mt-3 text-center">
                          <p className="font-handwriting text-base text-gray-600">{memory.date}</p>
                        </div>
                      </motion.div>
                    </div>

                    <div className="flex-1 space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h2 className="font-handwriting-bold text-4xl text-gray-800 mb-4">{memory.title}</h2>
                        <div className="flex items-center gap-3 text-rose-500">
                          <motion.button
                            onClick={handleLike}
                            className="flex items-center gap-2 hover:scale-110 transition-transform"
                            whileTap={{ scale: 0.9 }}
                          >
                            <Heart
                              className={`w-5 h-5 transition-colors ${isLiked ? "fill-current text-red-500" : "text-rose-500"}`}
                            />
                            <span className="font-handwriting text-base">{memory.emotion}</span>
                          </motion.button>
                        </div>
                      </motion.div>

                      <motion.div
                        className="prose prose-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <TypewriterText text={memory.description} isVisible={showTypewriter} />
                      </motion.div>

                      <motion.div
                        className="pt-4 border-t border-gray-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        <p className="font-handwriting text-base text-gray-500 italic">
                          "Cada momento contigo é uma página especial na história do meu coração."
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <Confetti isActive={showConfetti} />
        </>
      )}
    </AnimatePresence>
  )
}

// Componente de controle de música funcional
const MusicControl = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions
          console.log("Autoplay was prevented")
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      {/* Elemento de áudio - você pode substituir por uma URL real de música */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/pianolena.mp3" type="audio/mpeg" />
        {/* Fallback para navegadores que não suportam o formato */}
      </audio>

      <motion.div
        className="fixed top-4 right-4 z-30 flex gap-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pausar música" : "Tocar música"}
          className="p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <Pause className="w-5 h-5 text-gray-600" /> : <Play className="w-5 h-5 text-gray-600" />}
        </motion.button>
        <motion.button
          onClick={toggleMute}
          aria-label={isMuted ? "Ativar som" : "Silenciar"}
          className="p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMuted ? <VolumeX className="w-5 h-5 text-gray-600" /> : <Volume2 className="w-5 h-5 text-gray-600" />}
        </motion.button>
      </motion.div>
    </>
  )
}

export default function PolaroidMemories() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null)
  const [backgroundGradient, setBackgroundGradient] = useState("from-rose-50 via-pink-50 to-orange-50")
  const scrollContainerRef = useRef<HTMLDivElement>(null) // Ref para o contêiner de scroll

  useEffect(() => {
    if (selectedMemory) {
      setBackgroundGradient(selectedMemory.bgColor)
    } else {
      setBackgroundGradient("from-rose-50 via-pink-50 to-orange-50")
    }
  }, [selectedMemory])

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8 // Rola 80% da largura visível
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth", // Animação de rolagem suave
      })
    }
  }

  return (
    <motion.div
      className={`min-h-screen bg-gradient-to-br ${backgroundGradient} relative overflow-hidden transition-all duration-1000`}
      animate={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
    >
      <LightLeak />
      <AnimatedBokeh />
      <FloatingParticles />
      <MusicControl />
      {/* Fundo com textura sutil melhorada */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,218,185,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,192,203,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10">
        {/* Header ajustado */}
        <motion.div
          className="text-center py-8 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", damping: 20 }}
        >
          <motion.h1
            className="font-handwriting-bold text-4xl md:text-6xl text-gray-700 mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", damping: 15 }}
          >
            Um mês, uma foto!
          </motion.h1>
          <motion.p
            className="font-handwriting text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Cada foto significa um momento, aquele que deve ser inesquecivel.
          </motion.p>
        </motion.div>

        {/* Carrossel com Scroll Horizontal e CSS Snap */}
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Botão Esquerdo */}
            <motion.button
              onClick={() => handleScroll("left")}
              aria-label="Memórias anteriores"
              className="p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>

            {/* O Contêiner de Scroll */}
            <div
              ref={scrollContainerRef}
              className="flex items-center gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-8 px-4 w-full"
              style={{ scrollBehavior: "smooth" }}
            >
              {memories.map((memory, index) => (
                <div key={memory.id} className="flex-shrink-0 snap-center">
                  <PolaroidCard memory={memory} index={index} onClick={() => setSelectedMemory(memory)} />
                </div>
              ))}
            </div>

            {/* Botão Direito */}
            <motion.button
              onClick={() => handleScroll("right")}
              aria-label="Próximas memórias"
              className="p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>

          {/* Contador de memórias */}
          <div className="text-center mt-4">
            <p className="font-handwriting text-gray-500 text-sm">{memories.length} memórias especiais para nunca esquecermos</p>
          </div>
        </div>

        {/* Footer ajustado */}
        <motion.div
          className="text-center py-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="font-handwriting text-lg text-gray-600 italic">
            "A nossa vida é feita de momentos, e cada momento ao seu lado é uma vida diferente"
            
          </p>
          <p className="font-handwriting text-lg text-gray-600 italic">
            Eu te amo, Helena Margraf 
          </p>
          <p className="font-handwriting text-lg text-gray-600 italic">
            12/06/25
          </p>

        </motion.div>
      </div>

      {/* Modal */}
      <MemoryModal memory={selectedMemory} isOpen={!!selectedMemory} onClose={() => setSelectedMemory(null)} />
    </motion.div>
  )
}
