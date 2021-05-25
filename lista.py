from no import no


class lista:

    def __init__(self):
        self.tamanho = 0
        self.inicio = None

    def adicionar(self, item):
        if self.tamanho == 0:
            self.inicio = no(item)
            self.tamanho += 1
            print("- Item", item, "adicionado")
        else:
            aux = self.inicio
            while aux.proximo:
                aux = aux.proximo
            aux.proximo = no(item)
            auxP = aux.proximo
            auxP.anterior = aux
            self.tamanho += 1
            print("- Item", item, "adicionado")

    def imprimir(self):
        if self.tamanho == 0:
            print("A lista está vazia")
        elif self.tamanho == 1:
            print("_______LISTA_______\n", self.inicio.dado)
        else:
            print("_______LISTA_______")
            aux = self.inicio
            x = 1
            while aux:
                if aux.proximo and aux.anterior:
                    print(x, "º - ", aux.dado, " Proximo: ", aux.proximo.dado, "     Anterior: ", aux.anterior.dado)
                elif aux.proximo:
                    print(x, "º - ", aux.dado, " Proximo: ", aux.proximo.dado, "     Anterior: ")
                elif aux.anterior:
                    print(x, "º - ", aux.dado, " Proximo:    ", "      Anterior: ", aux.anterior.dado)
                aux = aux.proximo
                x += 1

    def excluir(self, item):
        x = False
        if self.tamanho == 0:
            print("A lista está vazia")
        elif self.tamanho == 1:
            if self.inicio.dado == item:
                self.inicio = None
                self.tamanho -= 1
                x = True
        else:
            while self.inicio.dado == item:
                aux = self.inicio
                self.inicio = aux.proximo
                aux = self.inicio
                aux.anterior = None
                self.tamanho -= 1
                print("O item ", item, " foi excluído")
                x = True

            aux = self.inicio
            aux2 = aux.proximo
            while aux2:
                if aux2.dado == item:
                    aux.proximo = aux2.proximo
                    aux3 = aux2.proximo
                    if aux3:
                        aux3.anterior = aux
                    self.tamanho -= 1
                    print("O item ", item, " foi excluído")
                    x = True
                aux = aux.proximo
                if aux:
                    aux2 = aux.proximo
                else:
                    aux2 = None
        if x is False:
            print("O item não está na lista")

    def imprimirInv(self):
        if self.tamanho == 0:
            print("A lista está vazia")
        elif self.tamanho == 1:
            print("_______LISTA_______\n", self.inicio.dado)
        else:
            aux = self.inicio
            while aux.proximo:
                aux = aux.proximo
            x = 1
            print("____LISTA NA ORDEM INVERSA____")
            while aux:
                print(x, "º - ", aux.dado)
                x += 1
                aux = aux.anterior
