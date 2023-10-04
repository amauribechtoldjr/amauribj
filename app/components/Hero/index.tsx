import linkedinLogo from "~/assets/images/logos/linkedin.png";
import githubLogo from "~/assets/images/logos/github.png";
import Section from "../Section";

function MainHero() {
  return (
    <div className="w-full flex items-center">
      <div>
        <h2 className="text-3xl font-bold font-title tracking-wider">
          Amauri Bechtold Junior
        </h2>
        <p className="my-4">
          Trabalho com empresas para projetar soluções excepcionais e
          impulsionar a transformação digital.
        </p>
        <div className="flex items-center gap-2">
          <img
            src={linkedinLogo}
            alt="Link para linkedin do Amauri Bechtold Junior"
            className="w-6 h-6"
          />
          <img
            src={githubLogo}
            alt="Link para github do Amauri Bechtold Junior"
            className="w-6 h-6"
          />
        </div>
        <span className="block mt-4">amauribechtoldjr@gmail.com</span>
        <span className="mt-2">Florianópolis, Santa Catarina, Brasil</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <Section className="pt-12">
      <MainHero />
    </Section>
  );
}
