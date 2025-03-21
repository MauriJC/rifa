/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { Ticket, Trophy, Sparkles, Drumstick, CandyCane, Shirt, Milk, ShieldQuestion, CakeSlice, SquareSquare, Beaker, Footprints, Box, Utensils, Sticker } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tickets as tick } from './tickets';

export default function RaffleLandingPage() {
  // For demo purposes, we'll randomly mark some tickets as sold
  const [tickets, setTickets] = useState<Array<{ id: number; state: string }>>(tick)
  const [activeTab, setActiveTab] = useState("all")

  const prizes = [
    { id: 1, name: "1. Un fardo de azúcar 🧁", icon: <CandyCane className="h-5 w-5 text-amber-500" /> },
    { id: 2, name: "2. Un fardo de leche líquida 🐄", icon: <Milk className="h-5 w-5 text-amber-500" /> },
    { id: 3, name: "3. Un bizcochuelo 😋", icon: <CakeSlice className="h-5 w-5 text-amber-500" /> },
    { id: 4, name: "4. Un pollo 🍗", icon: <Drumstick className="h-5 w-5 text-amber-500" /> },
    { id: 5, name: "5. Un voucher para compra en American Closet 😍👗👚", icon: <Shirt className="h-5 w-5 text-amber-500" /> },
    { id: 6, name: "6. Un premio sorpresa", icon: <ShieldQuestion className="h-5 w-5 text-amber-500" /> },
    { id: 7, name: "7. Un regalo sorpresa🪅", icon: <ShieldQuestion className="h-5 w-5 text-amber-500" /> },
    { id: 8, name: "8. Un toallón", icon: <Sparkles className="h-5 w-5 text-amber-500" /> },
    { id: 9, name: "9. Una tarta de manzana", icon: <CakeSlice className="h-5 w-5 text-amber-500" /> },
    { id: 10, name: "10. Un budín", icon: <CakeSlice className="h-5 w-5 text-amber-500" /> },
    { id: 11, name: "11. Un budín", icon: <CakeSlice className="h-5 w-5 text-amber-500" /> },
    { id: 12, name: "12. Un mate de cerámica", icon: <Beaker className="h-5 w-5 text-amber-500" /> },
    { id: 13, name: "13. Un mate de cerámica", icon: <Beaker className="h-5 w-5 text-amber-500" /> },
    { id: 14, name: "14. Dos pares de medias (Black cat)", icon: <Footprints className="h-5 w-5 text-amber-500" /> },
    { id: 15, name: "15. Dos pares de medias (Black cat)", icon: <Footprints className="h-5 w-5 text-amber-500" /> },
    { id: 16, name: "16. Un pollo 🍗", icon: <Drumstick className="h-5 w-5 text-amber-500" /> },
    { id: 17, name: "17. Un pollo 🍗", icon: <Drumstick className="h-5 w-5 text-amber-500" /> },
    { id: 18, name: "18. Un espejo decorativo", icon: <SquareSquare className="h-5 w-5 text-amber-500" /> },
    { id: 19, name: "19. Una Hamburguesa (SMBC) 🍔", icon: <Utensils className="h-5 w-5 text-amber-500" /> },
    { id: 20, name: "20. Combo de stickers (Cuis sm)", icon: <Sticker className="h-5 w-5 text-amber-500" /> },
    { id: 21, name: "21. Premio sorpresa (Minibella Bebé)", icon: <ShieldQuestion className="h-5 w-5 text-amber-500" /> },
  ]

  const availableTickets = tickets.filter((ticket) => ticket.state == 'available')
  const soldTickets = tickets.filter((ticket) => ticket.state == 'unavailable')

  const displayTickets = activeTab === "all" ? tickets : activeTab === "available" ? availableTickets : soldTickets

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
                ¡GRAN RIFA BENÉFICA!
              </h1>
              <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
                Compra tu número y participa por estos increíbles premios. ¡Ayuda y gana!
              </p>
            </div>

            <div className="flex items-center gap-2 my-4">
              <Ticket className="h-6 w-6 text-primary" />
              <p className="text-xl font-semibold">
                Precio por número: <span className="text-primary font-bold">$1000</span>
              </p>
              <Ticket className="h-6 w-6 text-primary" />
            </div>

            <Card className="w-full max-w-4xl border-2 border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-6">
                  <Trophy className="h-6 w-6 text-amber-500" />
                  <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                    PREMIOS FABULOSOS
                  </span>
                  <Trophy className="h-6 w-6 text-amber-500" />
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {prizes.map((prize) => (
                    <div key={prize.id} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md border border-primary/10">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          {prize.icon}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{prize.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section className="py-12 container px-4 md:px-6">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-3xl font-bold">Números de Rifa</h2>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-200 border border-gray-300"></div>
                <span className="text-sm">Disponible</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/80 border border-primary"></div>
                <span className="text-sm">Vendido</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Disponibles: {availableTickets.length}</span>
              <span className="text-sm font-medium">Vendidos: {soldTickets.length}</span>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="available">Disponibles</TabsTrigger>
              <TabsTrigger value="sold">Vendidos</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-15 gap-2">
                {displayTickets.map((ticket) => (
                  <Button
                    key={ticket.id}
                    variant="outline"
                    className={`h-12 w-full ${ticket.state == 'unavailable'
                      ? "bg-primary/80 text-primary-foreground border-primary hover:bg-primary/70 hover:text-primary-foreground"
                      : "bg-background hover:bg-accent"
                      }`}
                    disabled={ticket.state == 'unavailable'}
                  >
                    {ticket.id}
                  </Button>
                ))}
              </div>
            </TabsContent>

          </Tabs>

          <div className="flex justify-center mt-8">
            <Button className="bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
              <a
                href="https://wa.me/543815584640?text=Hola%2C%20me%20gustaria%20comprar%20numeros%20de%20la%20rifa"
                target="_blank"
                rel="noopener noreferrer">
                ¡Compra tu número ahora!
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Collaborators Section */}
      <section className="py-12 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Agradecimientos Especiales</h2>
            <p className="text-muted-foreground mt-2">
              Gracias a nuestros colaboradores que hicieron posible esta rifa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <img src="/logos/black_cat.jpg" alt="Black cat logo" className="rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Black Cat</h3>
                  <p className="text-muted-foreground mb-4">Colaborador destacado</p>
                  <p className="text-sm text-muted-foreground">Gracias por su generosa contribución a nuestra causa</p>
                  <a
                    href="https://www.instagram.com/black.catsm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    @black.catsm
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <img src="/logos/carniceria.jpg" alt="Carniceria JyV logo" className="rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Carnicería J y V</h3>
                  <p className="text-muted-foreground mb-4">Colaborador destacado</p>
                  <p className="text-sm text-muted-foreground">Gracias por su generosa contribución a nuestra causa</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <img src="/logos/sahumos.jpg" alt="Sahumos del valle logo" className="rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sahumos del Valle</h3>
                  <p className="text-muted-foreground mb-4">Colaborador destacado</p>
                  <p className="text-sm text-muted-foreground">Gracias por su generosa contribución a nuestra causa</p>

                  <a
                    href="https://www.instagram.com/sahumos.delvalle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    @sahumos.delvalle
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <img src="/logos/cuis.jpg" alt="Cuis Stickers logo" className="rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cuis Stickers</h3>
                  <p className="text-muted-foreground mb-4">Colaborador destacado</p>
                  <p className="text-sm text-muted-foreground">Gracias por su generosa contribución a nuestra causa</p>

                  <a
                    href="https://www.instagram.com/cuis.sm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    @cuis.sm
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <img src="/logos/mb.jpg" alt="MB logo" className="rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Minibella Bebé</h3>
                  <p className="text-muted-foreground mb-4">Colaborador destacado</p>
                  <p className="text-sm text-muted-foreground">Gracias por su generosa contribución a nuestra causa</p>

                  <a
                    href="https://www.instagram.com/minibella_bebe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    @minibella_bebe
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary/20 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <img src="/logos/smbc.jpg" alt="SMBC Stickers logo" className="rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Santa Maria Burger Company</h3>
                  <p className="text-muted-foreground mb-4">Colaborador destacado</p>
                  <p className="text-sm text-muted-foreground">Gracias por su generosa contribución a nuestra causa</p>

                  <a
                    href="https://www.instagram.com/smburgercompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    @smburgercompany
                  </a>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <h3 className="font-bold text-lg">Rifa Benéfica</h3>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

