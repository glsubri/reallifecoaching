import { Fragment } from "react";
import { RelaxedP } from "@/components/ui/RelaxedP";
import { H3, H4 } from "@/components/ui/Subtitle";
import { A } from "@/components/ui/A";
import { Prices } from "@/components/Prices";

export const Main = () => {
  return (
    <Fragment>
      <div className="flex items-center gap-4">
        <h1 className="md:text-7xl text-5xl font-bold">👋</h1>
      </div>

      <div className="space-y-4">
        <H3>Stressé par tout ce que tu dois faire? Reprends le contrôle!</H3>

        <RelaxedP>
          Si tu es là, c'est que tu as probablement envie de mieux t'organiser
          et de pouvoir gérer ton temps sans que ce soit une source de stress.
        </RelaxedP>
        <RelaxedP>
          La plupart des gens n'ont pas vraiment de système d'organisation dans
          leur vie. Si cela marche pendant un moment, on est vite submergé par
          toutes les tâches à faire et il est vite fait de se sentir stressé,
          perdu et sous l'eau.
        </RelaxedP>
        <RelaxedP>
          Mon but n'est pas seulement de t'expliquer comment organiser ton
          temps, ou de te montrer des techniques pour être plus productif, mais
          surtout de faire le travail initial de la mise en place d'un système
          d'organisation efficace avec toi.
        </RelaxedP>

        <H3 withMT>
          Mes objectifs pour notre session <em>gestion du temps</em>
        </H3>
        <RelaxedP>
          Une session avec moi dure environ{" "}
          <span className="underline">3-4 heures</span>. <br />
          Pourquoi si long? Parce que je ne me contente pas de te donner des
          conseils. Nous allons mettre en place ton système d'organisation
          ensemble, et cela prend parfois plus de temps que prévu...
        </RelaxedP>

        <RelaxedP>À la fin de notre temps ensemble, tu:</RelaxedP>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 ml-4">
          <li>auras identifié ce qui est vraiment important pour toi 🎯</li>
          <li>
            auras une liste de tâches organisée et qui ne te stressera pas 😮‍💨
          </li>
          <li>auras un calendrier utilisable 📆</li>
          <li>auras mis en place un système d'organisation efficace</li>
          <li>sauras comment prioriser tes tâches</li>
          <li>
            sauras garder du temps pour ce qui compte (oui, Netflix compte aussi
            😉)
          </li>
        </ul>

        <H3 withMT>Aspects pratiques</H3>
        <H4>📍 Où ?</H4>
        <RelaxedP>
          Il est important pour cette séance de se dérouler en{" "}
          <span className="underline">présentiel</span>, afin de pouvoir
          travailler ensemble et mettre en place ton système d'organisation.
          Pour cela, je te propose deux options:
        </RelaxedP>
        <ol className="list-decimal list-inside space-y-2 text-lg text-gray-600 ml-4">
          <li>Je me déplace chez toi</li>
          <li>
            Nous nous retrouvons dans un endroit publique (café, EPFL, UNIL,
            etc.)
          </li>
        </ol>

        <H4 withMT>📅 Quand ?</H4>
        <RelaxedP>
          Quand ça t'arrange! Mais il faut que tu aies au moins 3-4 heures de
          temps libre.
        </RelaxedP>
        <RelaxedP>
          Les samedis et dimanches sont des jours pratiques pour nous
          rencontrer, mais si tu commences tard ou fini tôt, nous pouvons
          toujours trouver un autre jour qui te convient.
        </RelaxedP>

        <H4 withMT>🏷️ Combien ?</H4>
        <RelaxedP>
          Pour les étudiants, il y a actuellement un rabais sur les deux types
          de sessions que je donne ("Gestion du temps" et "Gestion du temps &
          prise de notes").
        </RelaxedP>
        <Prices />

        <H4 withMT>🎒 De quoi as-tu besoin ?</H4>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 ml-4">
          <li>Ton ordinateur</li>
          <li>Ton natel</li>
          <li>
            Un carnet style Moleskine ou Leuchtturm si tu préfères le papier au
            digital{" "}
            <span className="text-sm">
              (pour 35 CHF supplémentaires, je peux t'en amener un)
            </span>
          </li>
          <li>Accès à tes emails</li>
        </ul>
      </div>
    </Fragment>
  );
};
