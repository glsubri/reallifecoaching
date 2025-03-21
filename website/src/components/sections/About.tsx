import { RelaxedP } from "@/components/ui/RelaxedP";
import { H3 } from "@/components/ui/Subtitle";

export const About = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <H3>Quel a été ton parcours avec l'organisation?</H3>
        <RelaxedP> Plutôt long et difficile 😂! </RelaxedP>
        <RelaxedP>
          Je n'étais pas très organisé avant mon expérience à l'armée. J'ai
          grandi avec de la dyslexie et du TDAH, mais n'a jamais vraiment eu de
          difficultés à l'école. Ce n'est qu'en arrivant à l'université que j'ai
          compris que je devais travailler plus sérieusement. Malheureusement,
          j'ai vite découvert que je ne savais pas vraiment comment et que ça
          demandait de l'organisation, ce que je n'avais pas du tout.
        </RelaxedP>
        <RelaxedP>
          Sur plusieurs années, à force de lire des livres sur l'organisation
          personnelle, de regarder des vidéos sur YouTube, et d'essayer pleins
          de méthodes différentes, j'ai finalement adopté des fonctionnements
          qui m'ont permis de mieux gérer mon temps et mes priorités.
        </RelaxedP>
      </div>

      <div className="space-y-4">
        <H3>
          Comment tu en es venu à vouloir coacher les autres dans ce domaine ?
        </H3>
        <RelaxedP>
          Mon parcours pour devenir organisé a été long et parfois difficile.
          Aujourd'hui, je peux transformer ces années d'apprentissage en
          quelques heures de coaching intensif, permettant aux autres d'éviter
          les détours que j'ai dû prendre. C'est vraiment gratifiant de voir
          quelqu'un repartir avec des outils qui vont concrètement améliorer son
          quotidien.
        </RelaxedP>
      </div>

      <div className="space-y-4">
        <H3>
          Qu'est-ce qui te rend différent des autres coaches en organisation ?
        </H3>
        <RelaxedP>
          La plus grande différence est que je ne cherche pas uniquement à
          t'apprendre les techniques, ni à te revoir sur du long terme.
        </RelaxedP>
        <RelaxedP>
          Mon but est de te donner les outils nécessaires pour que tu puisses
          organiser ton temps et tes priorités de manière efficace. En plus de
          ça, je veux commencer le processus d'organisation avec toi, pour être
          sûr que tout se déroule au mieux et que tu ne sois pas submergé au
          début.
        </RelaxedP>
        <RelaxedP>
          Une fois que tu es lancé, et que tu as pris des bonnes habitudes, tu
          ne devrais plus avoir besoin de moi.
        </RelaxedP>
      </div>
    </div>
  );
};
