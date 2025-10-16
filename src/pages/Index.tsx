import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CodeBlock from "@/components/CodeBlock";
import ImageCard from "@/components/ImageCard";
import SearchDialog from "@/components/SearchDialog";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, Info } from "lucide-react";

import problemImage from "@/assets/adapter-problem.png";
import solutionImage from "@/assets/adapter-solution.png";
import travelImage from "@/assets/adapter-travel.png";
import structureImage from "@/assets/adapter-structure.png";
import classImage from "@/assets/adapter-class.png";
import pseudoImage from "@/assets/adapter-pseudo.png";

const Index = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearchClick={() => setSearchOpen(true)} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      
      <main>
        <Hero />

        <Section id="intencao" title="Intenção">
          <p className="text-lg leading-relaxed text-foreground/90">
            O <strong>Adaptador</strong> é um padrão de design estrutural que permite que objetos com interfaces incompatíveis colaborem.
          </p>
        </Section>

        <Section id="problema" title="Problema">
          <p className="text-lg leading-relaxed mb-6">
            Imagine que você está criando um aplicativo de monitoramento do mercado de ações. O aplicativo baixa os dados de ações de várias fontes no formato XML e, em seguida, exibe gráficos e diagramas bonitos para o usuário.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Em algum momento, você decide melhorar o aplicativo integrando uma biblioteca de análise inteligente de terceiros. Mas há um problema: a biblioteca de análise só funciona com dados no formato JSON.
          </p>

          <ImageCard
            src={problemImage}
            alt="Diagrama mostrando incompatibilidade entre XML e JSON"
            caption="A aplicação não pode usar a biblioteca de análise diretamente devido aos formatos incompatíveis"
          />

          <p className="text-lg leading-relaxed">
            Você não pode usar a biblioteca de análise "no estado em que se encontra" porque ela espera os dados em um formato incompatível com seu aplicativo. Você pode alterar a biblioteca para trabalhar com XML. No entanto, isso pode interromper algum código existente que depende da biblioteca. E pior, você pode não ter acesso ao código-fonte da biblioteca em primeiro lugar, tornando essa abordagem impossível.
          </p>
        </Section>

        <Section id="solucao" title="Solução">
          <p className="text-lg leading-relaxed mb-6">
            Você pode criar um <strong>adaptador</strong>. Este é um objeto especial que converte a interface de um objeto para que outro objeto possa entendê-lo.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Um adaptador encapsula um dos objetos para ocultar a complexidade da conversão que ocorre nos bastidores. O objeto encapsulado nem mesmo está ciente do adaptador. Por exemplo, você pode encapsular um objeto que opera em metros e quilômetros com um adaptador que converte todos os dados em unidades imperiais, como pés e milhas.
          </p>

          <Card className="bg-muted/50 p-6 mb-6 border-l-4 border-primary">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Como funciona
            </h4>
            <ol className="space-y-2 list-decimal list-inside">
              <li>O adaptador recebe uma interface, compatível com um dos objetos existentes.</li>
              <li>Usando essa interface, o objeto existente pode chamar com segurança os métodos do adaptador.</li>
              <li>Ao receber uma chamada, o adaptador passa a solicitação para o segundo objeto, mas em um formato e ordem que o segundo objeto espera.</li>
            </ol>
          </Card>

          <ImageCard
            src={solutionImage}
            alt="Diagrama mostrando o adaptador XML para JSON entre a aplicação e a biblioteca"
            caption="O adaptador resolve o problema convertendo XML em JSON"
          />

          <p className="text-lg leading-relaxed">
            Vamos voltar ao nosso aplicativo de mercado de ações. Para resolver o dilema de formatos incompatíveis, você pode criar adaptadores XML para JSON para cada classe da biblioteca de análise com a qual seu código trabalha diretamente. Em seguida, você ajusta seu código para se comunicar com a biblioteca somente por meio desses adaptadores. Quando um adaptador recebe uma chamada, ele converte os dados XML de entrada em uma estrutura JSON e passa a chamada para os métodos apropriados de um objeto de análise encapsulado.
          </p>
        </Section>

        <Section id="analogia" title="Analogia do Mundo Real">
          <ImageCard
            src={travelImage}
            alt="Mala com adaptador de tomada antes e depois de viajar"
            caption="Uma mala antes e depois de uma viagem ao exterior"
          />

          <p className="text-lg leading-relaxed">
            Ao viajar dos EUA para a Europa pela primeira vez, você pode ter uma surpresa ao tentar carregar seu laptop. Os padrões de plugue e soquetes de alimentação são diferentes em diferentes países. É por isso que seu plugue americano não cabe em uma tomada alemã. O problema pode ser resolvido usando um <strong>adaptador de plugue de alimentação</strong> que tenha o soquete de estilo americano e o plugue de estilo europeu.
          </p>
        </Section>

        <Section id="estrutura" title="Estrutura">
          <h3 className="text-2xl font-semibold mb-4 mt-8">Adaptador de Objeto</h3>
          <p className="text-lg leading-relaxed mb-6">
            Essa implementação usa o princípio de composição do objeto: o adaptador implementa a interface de um objeto e encapsula o outro. Ele pode ser implementado em todas as linguagens de programação populares.
          </p>

          <ImageCard
            src={structureImage}
            alt="Diagrama UML do padrão Adapter com composição de objetos"
            caption="Estrutura do Adaptador de Objeto"
          />

          <div className="space-y-4 my-6">
            <Card className="p-4 border-l-4 border-primary">
              <h4 className="font-semibold mb-2">Cliente</h4>
              <p className="text-sm text-muted-foreground">Uma classe que contém a lógica de negócios existente do programa.</p>
            </Card>

            <Card className="p-4 border-l-4 border-primary-glow">
              <h4 className="font-semibold mb-2">Interface do Cliente</h4>
              <p className="text-sm text-muted-foreground">Descreve um protocolo que outras classes devem seguir para poder colaborar com o código do cliente.</p>
            </Card>

            <Card className="p-4 border-l-4 border-accent">
              <h4 className="font-semibold mb-2">Serviço</h4>
              <p className="text-sm text-muted-foreground">Uma classe útil (geralmente 3rd party ou legado). O cliente não pode usar essa classe diretamente porque ela tem uma interface incompatível.</p>
            </Card>

            <Card className="p-4 border-l-4 border-secondary">
              <h4 className="font-semibold mb-2">Adapter</h4>
              <p className="text-sm text-muted-foreground">Uma classe capaz de trabalhar com o cliente e o serviço: ele implementa a interface do cliente, enquanto encapsula o objeto de serviço.</p>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold mb-4 mt-12">Adaptador de Classe</h3>
          <p className="text-lg leading-relaxed mb-6">
            Essa implementação usa herança: o adaptador herda interfaces de ambos os objetos ao mesmo tempo. Observe que essa abordagem só pode ser implementada em linguagens de programação que dão suporte a várias heranças, como C++.
          </p>

          <ImageCard
            src={classImage}
            alt="Diagrama UML do padrão Adapter usando herança múltipla"
            caption="Estrutura do Adaptador de Classe"
          />

          <Card className="bg-muted/50 p-6 border-l-4 border-accent">
            <p className="text-sm">
              <strong>Nota:</strong> O Adaptador de Classe não precisa encapsular nenhum objeto porque herda comportamentos do cliente e do serviço. A adaptação acontece dentro dos métodos substituídos. O adaptador resultante pode ser usado no lugar de uma classe de cliente existente.
            </p>
          </Card>
        </Section>

        <Section id="pseudocodigo" title="Pseudocódigo">
          <p className="text-lg leading-relaxed mb-6">
            Este exemplo do padrão Adaptador é baseado no conflito clássico entre pinos quadrados e furos redondos.
          </p>

          <ImageCard
            src={pseudoImage}
            alt="Diagrama mostrando o exemplo de pinos quadrados e furos redondos"
            caption="O Adaptador finge ser um pino redondo, com um raio igual à metade do diâmetro do quadrado"
          />

          <h4 className="text-xl font-semibold mb-4">Classes compatíveis</h4>
          <CodeBlock
            language="javascript"
            code={`// Say you have two classes with compatible interfaces:
// RoundHole and RoundPeg.
class RoundHole is
    constructor RoundHole(radius) { ... }

    method getRadius() is
        // Return the radius of the hole.

    method fits(peg: RoundPeg) is
        return this.getRadius() >= peg.getRadius()

class RoundPeg is
    constructor RoundPeg(radius) { ... }

    method getRadius() is
        // Return the radius of the peg.`}
          />

          <h4 className="text-xl font-semibold mb-4 mt-8">Classe incompatível</h4>
          <CodeBlock
            language="javascript"
            code={`// But there's an incompatible class: SquarePeg.
class SquarePeg is
    constructor SquarePeg(width) { ... }

    method getWidth() is
        // Return the square peg width.`}
          />

          <h4 className="text-xl font-semibold mb-4 mt-8">Classe Adaptadora</h4>
          <CodeBlock
            language="javascript"
            code={`// An adapter class lets you fit square pegs into round holes.
// It extends the RoundPeg class to let the adapter objects act as round pegs.
class SquarePegAdapter extends RoundPeg is
    // In reality, the adapter contains an instance of the
    // SquarePeg class.
    private field peg: SquarePeg

    constructor SquarePegAdapter(peg: SquarePeg) is
        this.peg = peg

    method getRadius() is
        // The adapter pretends that it's a round peg with a
        // radius that could fit the square peg that the adapter
        // actually wraps.
        return peg.getWidth() * Math.sqrt(2) / 2`}
          />

          <h4 className="text-xl font-semibold mb-4 mt-8">Código do Cliente</h4>
          <CodeBlock
            language="javascript"
            code={`// Somewhere in client code.
hole = new RoundHole(5)
rpeg = new RoundPeg(5)
hole.fits(rpeg) // true

small_sqpeg = new SquarePeg(5)
large_sqpeg = new SquarePeg(10)
hole.fits(small_sqpeg)   // this won't compile (incompatible types)

small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg)
large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg)
hole.fits(small_sqpeg_adapter)  // true
hole.fits(large_sqpeg_adapter)  // false`}
          />
        </Section>

        <Section id="aplicabilidade" title="Aplicabilidade">
          <Card className="p-6 mb-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h4 className="text-xl font-semibold mb-4">Quando usar o padrão Adapter?</h4>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-1">Use quando quiser usar alguma classe existente, mas sua interface não for compatível</p>
                  <p className="text-sm text-muted-foreground">
                    O padrão Adapter permite criar uma classe de camada intermediária que serve como um tradutor entre seu código e uma classe herdada, uma classe de terceiros ou qualquer outra classe com uma interface estranha.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-1">Use quando quiser reutilizar várias subclasses existentes</p>
                  <p className="text-sm text-muted-foreground">
                    Você pode estender cada subclasse e colocar a funcionalidade ausente em novas classes filhas. No entanto, você precisaria duplicar o código em todas essas novas classes. A solução muito mais elegante seria colocar a funcionalidade ausente em uma classe de adaptador.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Section>

        <Section id="implementacao" title="Como Implementar">
          <ol className="space-y-6 list-none">
            {[
              {
                num: "1",
                title: "Certifique-se de ter pelo menos duas classes com interfaces incompatíveis",
                items: [
                  "Uma classe de serviço útil, que você não pode alterar (geralmente de terceiros, legada ou com muitas dependências existentes).",
                  "Uma ou várias classes de cliente que se beneficiariam do uso da classe de serviço."
                ]
              },
              {
                num: "2",
                title: "Declare a interface do cliente",
                content: "Descreva como os clientes se comunicam com o serviço."
              },
              {
                num: "3",
                title: "Crie a classe do adaptador",
                content: "Faça com que ela siga a interface do cliente. Deixe todos os métodos vazios por enquanto."
              },
              {
                num: "4",
                title: "Adicione um campo à classe do adaptador",
                content: "Armazene uma referência ao objeto de serviço. A prática comum é inicializar esse campo por meio do construtor, mas às vezes é mais conveniente passá-lo para o adaptador ao chamar seus métodos."
              },
              {
                num: "5",
                title: "Implemente todos os métodos da interface do cliente",
                content: "O adaptador deve delegar a maior parte do trabalho real ao objeto de serviço, manipulando apenas a interface ou a conversão de formato de dados."
              },
              {
                num: "6",
                title: "Use o adaptador através da interface do cliente",
                content: "Os clientes devem usar o adaptador por meio da interface do cliente. Isso permitirá que você altere ou estenda os adaptadores sem afetar o código do cliente."
              }
            ].map((step) => (
              <li key={step.num} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-bold">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  {step.content && <p className="text-muted-foreground">{step.content}</p>}
                  {step.items && (
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
                      {step.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="pros-contras" title="Prós e Contras">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                Vantagens
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    <strong>Princípio de Responsabilidade Única:</strong> Você pode separar a interface ou o código de conversão de dados da lógica de negócios primária do programa.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    <strong>Princípio Aberto/Fechado:</strong> É possível introduzir novos tipos de adaptadores no programa sem quebrar o código do cliente existente.
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-red-500/5 to-red-500/10 border-red-500/20">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <XCircle className="h-6 w-6 text-red-600" />
                Desvantagens
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    <strong>Complexidade aumentada:</strong> A complexidade geral do código aumenta porque você precisa introduzir um conjunto de novas interfaces e classes. Às vezes, é mais simples apenas alterar a classe de serviço para que ela corresponda ao restante do código.
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </Section>

        <Section id="relacoes" title="Relações com Outros Padrões">
          <div className="space-y-4">
            <Card className="p-5 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2 text-primary">Bridge</h4>
              <p className="text-sm text-muted-foreground">
                O Bridge geralmente é projetado antecipadamente, permitindo que você desenvolva partes de um aplicativo independentemente umas das outras. Por outro lado, o Adapter é comumente usado com um aplicativo existente para fazer com que algumas classes incompatíveis funcionem bem juntas.
              </p>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2 text-primary">Decorator</h4>
              <p className="text-sm text-muted-foreground">
                O adaptador fornece uma interface completamente diferente para acessar um objeto existente. Por outro lado, com o padrão Decorator, a interface permanece a mesma ou é estendida. Além disso, o Decorator dá suporte à composição recursiva, o que não é possível quando você usa o Adaptador.
              </p>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2 text-primary">Proxy</h4>
              <p className="text-sm text-muted-foreground">
                Com o Adaptador, você acessa um objeto existente por meio de uma interface diferente. Com o Proxy, a interface permanece a mesma. Com o Decorator, você acessa o objeto por meio de uma interface aprimorada.
              </p>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2 text-primary">Facade</h4>
              <p className="text-sm text-muted-foreground">
                O Facade define uma nova interface para objetos existentes, enquanto o Adapter tenta tornar a interface existente utilizável. O Adapter geralmente envolve apenas um objeto, enquanto o Facade trabalha com um subsistema inteiro de objetos.
              </p>
            </Card>

            <Card className="p-5 hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2 text-primary">Bridge, State, Strategy</h4>
              <p className="text-sm text-muted-foreground">
                Ponte, Estado, Estratégia (e até certo ponto Adaptador) têm estruturas muito semelhantes. De fato, todos esses padrões são baseados na composição, que é delegar trabalho a outros objetos. No entanto, todos eles resolvem problemas diferentes. Um padrão não é apenas uma receita para estruturar seu código de uma maneira específica. Ele também pode comunicar a outros desenvolvedores o problema que o padrão resolve.
              </p>
            </Card>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
