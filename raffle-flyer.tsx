"use client"

import { useState } from "react"
import { Gift, Ticket, Trophy, DollarSign, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RaffleFlyer() {
  const [animate, setAnimate] = useState(false)

  const handleAnimateClick = () => {
    setAnimate(true)
    setTimeout(() => setAnimate(false), 1000)
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <Card className="w-full max-w-3xl overflow-hidden relative border-2 border-primary/20 shadow-xl">
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />

        <CardContent className="p-6 md:p-8">
          <div className={`transition-all duration-300 ${animate ? "scale-105" : "scale-100"}`}>
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent mb-2">
                ¡GRAN RIFA!
              </h1>
              <div className="flex justify-center items-center gap-2 mb-4">
                <Ticket className="h-6 w-6 text-primary" />
                <p className="text-xl font-semibold text-gray-700">
                  Precio por número: <span className="text-primary font-bold">$1000</span>
                </p>
                <Ticket className="h-6 w-6 text-primary" />
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6" />
            </div>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-4">
                <Trophy className="h-6 w-6 text-amber-500" />
                <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  PREMIOS FABULOSOS
                </span>
                <Trophy className="h-6 w-6 text-amber-500" />
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-primary/10 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">1. 1 fardo de azúcar 🧁</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-primary/10 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">2. 1 fardo de leche líquida 🐄</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-primary/10 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">3. 1 bizcochuelo 😋</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-primary/10 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">4. 3 pollos 🐥🐥🐥</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-primary/10 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">5. 1 voucher para compra en American Closet 😍 👗👚</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-primary/10 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      6. Premio en efectivo <span className="text-green-600 font-bold">$25.000</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-primary/10 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Sparkles className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">7. Premio sorpresa 🪅</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-primary/10 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Sparkles className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">8. Otro regalo sorpresa 🪅</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-primary/10 hover:shadow-lg transition-all md:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">9. 1 toallón</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={handleAnimateClick}
                className="bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
              >
                ¡Compra tu número ahora!
              </Button>

              <p className="mt-4 text-sm text-gray-500">
                ¡No pierdas la oportunidad de ganar estos increíbles premios!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

