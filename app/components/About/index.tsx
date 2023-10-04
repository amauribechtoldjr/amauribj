import Section from "../Section";
import SeciontTitle from "../SectionTitle";

function HeroAbout() {
  return (
    <Section id="about" className="lg:pt-12">
      <SeciontTitle>About</SeciontTitle>
      <p>
        Eu sou um Engenheiro de Software com 12 anos de experiência, trabalhando
        principalmente com Javascript e seu ecosistema.
      </p>
      <p className="my-2">
        Meu foco atual é aprender sobre desempenho web, qualidade de código e
        todo tipo de tecnologia que me interessa. Meu trabalho compreende
        melhorando as arquiteturas/produtos com os quais trabalho contribuindo
        com meu conhecimento sobre desempenho, qualidade de código, padrões de
        design, construção cultura de revisão de código.
      </p>
      <p>
        Além disso, gosto de orientar pessoas e ajudá-las a iniciar suas
        carreiras em a área de desenvolvimento de software.
      </p>
    </Section>
  );
}

export default HeroAbout;
