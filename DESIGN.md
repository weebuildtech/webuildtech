---
name: WeBuild Tech
description: Estúdio de software sob medida. Totem, WhatsApp automático, sistema e site, feitos pela mesma equipe.
colors:
  build-blue: "#2347E5"
  build-blue-hover: "#3D63FF"
  signal-blue: "#7892FF"
  mark-periwinkle: "#5772E9"
  mark-haze: "#AEBAEA"
  night: "#05070F"
  night-raised: "#0A0E1C"
  night-panel: "#0E1426"
  chalk: "#F4F6FC"
  steel-text: "#C2C9DC"
  steel-mute: "#8691AE"
  live-mint: "#5BD6A8"
  ink: "#1A1C1C"
  paper: "#F9F9F9"
typography:
  display:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(44px, 7.2vw, 108px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(34px, 4.4vw, 64px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 500
    lineHeight: "28px"
    letterSpacing: "-0.025em"
  lead:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(16px, 1.4vw, 19px)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Space Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "25px"
  label:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0.16em"
rounded:
  frame: "14px"
  card: "16px"
  pill: "999px"
spacing:
  gutter-mobile: "22px"
  gutter: "40px"
  card-pad: "32px"
  section-tight: "110px"
  section: "140px"
  container: "1320px"
components:
  button-hero:
    backgroundColor: "{colors.chalk}"
    textColor: "#0A1330"
    rounded: "{rounded.pill}"
    padding: "8px 8px 8px 26px"
    height: "56px"
  button-primary:
    backgroundColor: "{colors.build-blue}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: "18px 30px"
  button-primary-hover:
    backgroundColor: "{colors.build-blue-hover}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.chalk}"
    rounded: "{rounded.pill}"
    padding: "18px 30px"
  chip:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.steel-mute}"
    rounded: "{rounded.pill}"
    padding: "10px 16px"
  chip-active:
    backgroundColor: "{colors.build-blue}"
    textColor: "#FFFFFF"
  card-need:
    backgroundColor: "{colors.night-panel}"
    textColor: "{colors.steel-text}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  project-frame:
    backgroundColor: "{colors.night-panel}"
    rounded: "{rounded.frame}"
---

# Design System: WeBuild Tech

## Overview

**Creative North Star: "A Oficina à Noite"**

A WeBuild se apresenta como a bancada de quem constrói, vista depois do expediente: fundo noturno profundo, as ferramentas à vista e a luz azul da marca acesa só onde há trabalho acontecendo. A página não esconde o processo. Ela mostra peças encaixando: guias tracejadas que ligam a dor do cliente à solução, molduras de navegador com o produto dentro, e o símbolo W, que é ele mesmo quatro barras montadas.

A densidade é editorial: títulos enormes e apertados, muito ar entre seções, pouca coisa por tela. A interação é tátil e confiante. Os botões são pílulas grandes, a ação principal tem sempre o contraste mais alto da tela e o estado ativo é inequívoco (o chip acende em azul cheio, não muda só um tom).

A luz é linear, nunca pontual. Gradientes aparecem como horizonte, como lavagem caindo do topo de uma seção ou como linha de luz que separa uma seção da outra. O dono do projeto rejeitou explicitamente as bolhas radiais de neon e as seções claras alternadas.

**Key Characteristics:**
- Fundo noturno contínuo (#05070F), com seções diferenciadas por lavagem linear e linha de luz, não por troca de cor.
- Um único acento: o azul da marca, reservado para ação, estado ativo e luz.
- Tipografia display gigante e apertada (Space Grotesk 500, até 108px, -0.04em), com palavras-dor em contorno "fantasma".
- Rótulos mono pequenos e espaçados (Geist Mono) para metadados: categoria, endereço, contagem.
- Anotação como linguagem: guias tracejadas em SVG, caixas tracejadas e chips que apontam do problema para a solução.
- O símbolo W como textura (grade escalonada no CTA final), nunca redesenhado.

## Colors

Noite azulada quase preta, texto em aço frio, e o azul da marca como a única cor que acende.

### Primary
- **Azul Construção** (build-blue): o azul do símbolo. Botão sólido, disco da seta no CTA do hero, chip ativo, fundo do CTA final, bolinha "aberta" do FAQ. É a cor da ação e do "ligado".
- **Azul Construção Aceso** (build-blue-hover): hover do botão sólido e do disco da seta; a palavra "cliente." do hero, por ser display, também usa este tom.
- **Azul Sinal** (signal-blue): links de texto, setas "Ver exemplo", ícones de traço, caixa tracejada do hero e guia ativa. É o azul legível sobre a noite em tamanho de texto.

### Secondary
- **Pervinca do Símbolo** (mark-periwinkle): a barra clara do W colorido; usada nos traços de luz do horizonte e nas linhas de luz entre seções.
- **Névoa do Símbolo** (mark-haze): a barra clara do W em fundo escuro; destaque "se perde?" sobre o azul do CTA final e o traço que percorre o horizonte.

### Tertiary
- **Menta Ao Vivo** (live-mint): só o ponto "no ar" ao lado de um domínio publicado. Significa "real, funcionando"; nunca decoração.

### Neutral
- **Noite** (night): fundo da página, do hero e do rodapé.
- **Noite Elevada** (night-raised): base da seção Soluções e dos chips inativos.
- **Painel Noturno** (night-panel): cards, molduras de projeto, retratos.
- **Giz** (chalk): títulos e o botão branco do hero.
- **Aço** (steel-text): texto corrido.
- **Aço Fosco** (steel-mute): metadados, rótulos mono, texto secundário.
- **Tinta / Papel** (ink, paper): cores das versões dark e light do logo; não são superfícies de página.

### Named Rules
**The One Light Rule.** O azul é luz: aparece onde há ação ou estado ativo, e em nenhum outro lugar. Se dois elementos azuis competem na mesma dobra, um deles está errado.

**The Linear Light Rule.** Todo gradiente é linear ou segue uma curva (horizonte). Nunca `radial-gradient` em bolha, nunca glow colorido sem deslocamento.

**The Night Floor Rule.** A página é escura do início ao fim. Seções se distinguem por lavagem e linha de luz, não por fundo claro.

## Typography

**Display Font:** Space Grotesk (com Helvetica Neue, Arial)
**Body Font:** Space Grotesk
**Label/Mono Font:** Geist Mono (com ui-monospace, SF Mono)

**Character:** Uma grotesca geométrica com um toque técnico (os terminais retos, o "a" de bancada) carrega toda a voz; a mono entra como etiqueta de oficina, pequena e espaçada, para o que é medida ou metadado.

### Hierarchy
- **Display** (500, clamp(44px, 7.2vw, 108px), 0.98): só o título do hero e do CTA final. Palavras-dor ganham contorno fantasma; a palavra-promessa vai em azul.
- **Headline** (500, clamp(34px, 4.4vw, 64px), 1.02): título de seção, com quebra de linha manual para ritmo ("Navegue pelo que / a gente construiu.").
- **Title** (500, 24px, 28px): nomes de projeto, passos, sócios, cards de solução.
- **Lead** (400, clamp(16px, 1.4vw, 19px), 1.6): a frase de apoio sob um título; máximo de 44 a 56ch.
- **Body** (400, 16px, 25px): descrições e respostas do FAQ, até 62ch.
- **Label** (Geist Mono 500, 11px, 0.16em, caixa alta): categoria do projeto, contagem de bloco ("Sistemas / 04"), papel do sócio, cabeçalhos do rodapé, links do nav (12px).

### Named Rules
**The No Eyebrow Rule.** Título de seção não ganha etiqueta mono acima dele. O título fala sozinho; a mono fica para metadado.

**The 11px Floor Rule.** Nenhum texto funcional abaixo de 11px, nem no mobile.

## Layout

Container de 1320px com gutter de 40px (22px abaixo de 820px). Seções com 140px de respiro vertical (110px nas "tight"; 80 a 90px no mobile). Cabeçalhos de seção ficam à esquerda; quando há uma frase de apoio, ela vai à direita na mesma linha de base (split) e desce para baixo do título no mobile.

O hero não ocupa 100vh: termina no CTA e no horizonte, para a seção Soluções aparecer logo abaixo. O título anotado ocupa a largura toda no desktop, com o título à esquerda, as guias no meio e os chips alinhados à direita. Abaixo de 1000px as guias e os chips somem e fica só a caixa tracejada percorrendo as palavras.

Grades: soluções em 2 colunas, conceitos em 3, sites em 5 (3 no tablet, 2 no mobile), sócios sempre lado a lado. Breakpoints observados: 1080px, 1000px e 820px.

## Elevation & Depth

A profundidade vem da luz, não da sombra. Superfícies são planas e escuras; o que dá relevo é a borda fina azulada, a lavagem linear no topo da seção e a linha de luz que separa uma seção da outra. Sombras existem só como resposta a estado e são sempre neutras (preto), com deslocamento vertical.

### Shadow Vocabulary
- **Moldura em repouso** (`0 30px 80px -30px rgba(0,0,0,0.7)`): molduras de projeto e retratos, assentando sobre a noite.
- **Moldura no hover** (`0 36px 70px -30px rgba(0,0,0,0.85)`): o card sobe 6px e a sombra aprofunda.
- **Botão no hover** (`0 12px 24px -14px rgba(5,7,15,0.6)`): pílulas sólidas e brancas.
- **Botão flutuante** (`0 10px 26px -8px rgba(5,7,15,0.45)`): o atalho do WhatsApp.

### Named Rules
**The Neutral Shadow Rule.** Sombra é sempre preta e deslocada para baixo. Sombra azul ou halo colorido não existe neste sistema.

## Shapes

Três formas: a pílula (999px) para tudo que se clica ou que rotula (botões, chips, atalhos de projeto, tags), o cartão de 16px para containers de conteúdo, e a moldura de navegador de 14px com barra de 34px e três pontos para mostrar produto. O símbolo W (barras arredondadas, inclinadas) é a única forma orgânica; aparece inteiro ou como textura repetida, nunca recortado em outra forma. Bordas são de 1px, em azul-aço translúcido; no hover, viram Azul Sinal.

## Components

### Buttons
Táteis e confiantes: pílulas grandes, sem cantos, com a seta sempre se movendo para frente no hover.
- **Shape:** pílula (999px); grande com 22px × 38px, padrão com 18px × 30px, pequeno com 11px × 20px.
- **Hero (branco com disco):** fundo Giz, texto azul-noite (#0A1330) em 600, e um disco Azul Construção de 40px com a seta em SVG à direita. Altura de 56px, com o texto a 16px. É a ação mais forte da página.
- **Primary (sólido):** Azul Construção com texto branco; no hover vira Azul Construção Aceso e sobe 2px.
- **Line (contorno):** borda aço translúcida (75%), texto Giz; no hover a borda vira Azul Sinal.
- **Focus:** anel de 4px em Giz sobre um respiro de 2px da cor de fundo.

### Chips
- **Anotação do hero:** pílula com borda fina sobre Noite Elevada; a primeira palavra em negrito Giz e o resto em Aço Fosco ("**Totem** autoatendimento"). Ativo: fundo Azul Construção cheio, texto branco.
- **Tags e atalhos de projeto:** Geist Mono 11px em caixa alta, só borda, sem preenchimento.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** Painel Noturno.
- **Shadow Strategy:** plano em repouso; no hover, só a borda acende (ver Elevation).
- **Border:** 1px aço translúcido (22%).
- **Internal Padding:** 32px (24px no mobile). O ícone fica solto, em traço de 1.6px em Azul Sinal, sem quadradinho de fundo.

### Navigation
Transparente sobre o hero; ao rolar, vira Noite quase opaca (94%) com borda inferior fina. Links em Geist Mono 12px, caixa alta, Aço Fosco, com um sublinhado azul de 1px que cresce da esquerda no hover. O logo horizontal light fica à esquerda, com 36px de altura (30px no mobile), e o botão sólido "Começar projeto" à direita. Os links somem abaixo de 820px.

### Project Frame
A moldura de navegador é a vitrine: barra com três pontos e, à direita, o domínio publicado (com o ponto Menta) ou o selo mono "Conceito". O print fica dentro, alinhado ao topo; no hover, a moldura sobe 6px e o print aproxima 3%. Sem print, a moldura mostra o nome do projeto em mono sobre uma lavagem linear azul.

### Annotated Headline (assinatura)
O título do hero funciona como uma planta comentada. Cada palavra-dor ("fila.", "planilha.", "cliente.") liga-se por uma guia SVG tracejada (traço 3/6, 1px) a um chip com a solução. Um ciclo de 2,8s acende uma linha por vez: a caixa tracejada envolve a palavra, a guia fica Azul Sinal e "marcha" em direção ao chip, e o chip vira Azul Construção. O ciclo pausa fora da tela e com a aba oculta. Com redução de movimento, a troca de estado continua (a cada 4,2s), mas sem a marcha.

### Horizon (palco do hero)
O arco do horizonte é o topo curvo da seção Soluções, não um enfeite do hero. É uma cúpula opaca (degradê linear de #0D194B para #070B1A) com traço fino em degradê (transparente → Névoa do Símbolo → transparente). Um traço curto de luz percorre a curva a cada 9s. O hero fica preso (sticky) e a seção sobe por cima dele com a cúpula na frente. Enquanto é coberto, o conteúdo do hero sobe 60px, encolhe 4% e apaga. Entre o hero e Soluções não há linha reta: a curva é a única fronteira. Quando o hero é mais alto que a tela, ele prende mais acima, para o CTA aparecer inteiro antes de ser coberto. Com redução de movimento, o hero continua preso, mas sem recuo nem traço de luz.

### Brand Texture
O símbolo W repetido em grade escalonada (tile de 168 × 132px, branco a 9%) sobre o degradê linear do CTA final (#2E52F0 → Azul Construção → #1733B4).

## Do's and Don'ts

### Do:
- **Do** usar os arquivos de `assets/brand/` para o logo e o símbolo: horizontal light sobre a noite, color sobre fundo claro.
- **Do** distinguir seções com lavagem linear do topo (Azul Construção a 8%, sumindo em 380px) e linha de luz de 1px (Pervinca a 50% no centro).
- **Do** fazer a ação principal ser a pílula de maior contraste da dobra (branca sobre a noite).
- **Do** acender estados por completo: chip ativo com fundo cheio, borda que vira Azul Sinal no hover.
- **Do** desenhar setas e ícones em SVG de traço único (1.6 a 1.8px, pontas arredondadas).
- **Do** manter conceitos identificados com o selo "Conceito" na barra da moldura.

### Don't:
- **Don't** usar `radial-gradient` em bolha, glow de neon ou sombra colorida.
- **Don't** alternar seções claras com escuras; a página é noturna do início ao fim.
- **Don't** colocar etiqueta mono acima de um título de seção.
- **Don't** colocar ícone dentro de quadradinho com fundo colorido.
- **Don't** redesenhar, recortar ou recolorir o símbolo W fora das versões color, dark e light.
- **Don't** usar texto funcional abaixo de 11px.
