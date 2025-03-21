import { Fragment } from "react/jsx-runtime";
import { RelaxedP } from "@/components/ui/RelaxedP";
import { A } from "@/components/ui/A";
import { Details } from "@/components/ui/Details";

export const FAQ = () => {
  return (
    <Fragment>
      <div className="flex flex-col space-y-4">
        <Details title="Est-ce que je peux faire la séance en ligne plutôt qu'en présentiel ?">
          <RelaxedP>
            Non, les séances se font uniquement en présentiel. Cela permet une
            meilleure interaction et un accompagnement plus efficace dans la
            mise en place de ton système d'organisation.
          </RelaxedP>
        </Details>

        <Details title="Je suis très désorganisé(e), est-ce que 3-4 heures suffiront vraiment ?">
          <RelaxedP>
            Les 3-4 heures sont généralement suffisantes pour mettre en place
            les bases solides d'un système d'organisation. Si cela n'est
            vraiment pas suffisant, nous pourrons regarder ensemble ce qui est
            le mieux pour toi: soit nous pourrons nous revoir, soit tu auras
            suffisamment compris le système d'organisation pour que tu puisses
            continuer seul.
          </RelaxedP>
        </Details>

        <Details title="J'utilise déjà certains outils (Notion, Google Calendar, etc.), est-ce qu'on peut les intégrer dans le système ?">
          <RelaxedP>
            Absolument! Le système que nous mettrons en place s'intègre
            parfaitement avec énormément d'outils (dont beaucoup que j'ai
            probablement déjà utilisé).
          </RelaxedP>
          <RelaxedP>
            Si tu es déjà à l'aise avec certains outils, nous les intégrerons
            dans ton système d'organisation. L'objectif est de créer un système
            qui te correspond et que tu utiliseras naturellement.
          </RelaxedP>
        </Details>

        <Details title="Est-ce qu'il y a un suivi après la séance ?">
          <RelaxedP>
            Après la séance initiale, tu recevras un document récapitulatif avec
            les points clés abordés. Tu peux aussi me contacter par email si tu
            as des questions spécifiques suite à la mise en place du système.
          </RelaxedP>
        </Details>

        <Details title="Que se passe-t-il si on n'arrive pas à finir la mise en place du système en 4 heures ?">
          <RelaxedP>
            Dans la grande majorité des cas, 4 heures suffisent. Si toutefois
            nous voyons que nous aurons besoin de plus de temps, nous pourrons
            convenir d'une courte session complémentaire à frais réduits.
          </RelaxedP>
        </Details>

        <Details title="Je ne suis pas étudiant(e), est-ce que je peux quand même bénéficier d'une réduction ?">
          <RelaxedP>
            Les tarifs réduits sont réservés aux étudiants sur présentation
            d'une carte d'étudiant valide. Cependant, n'hésite pas à me
            contacter si tu as une situation particulière, nous pourrons en
            discuter.
          </RelaxedP>
        </Details>

        <Details title="Est-ce qu'il y a des séances groupées ?">
          <RelaxedP>
            En cas de séance groupée, tous les participants bénéficieront d'un
            rabais supplémentaire de 15% chacun.
          </RelaxedP>
          <RelaxedP>
            Je n'organise pas de séances groupées moi-même, mais si tu trouves
            d'autres personnes intéressées (maximum 4 personnes), n'hésite pas à
            me contacter.
          </RelaxedP>
        </Details>

        <Details title="Comment se fait le paiement ?">
          <RelaxedP>
            Le paiement se fait par cash, Twint ou versement bancaire. Dans tous
            les cas, il doit être effectué avant le début de la séance.
          </RelaxedP>
        </Details>

        <Details title="J'hésite entre les deux formules, quelle est celle qui me conviendrait le mieux ?">
          <RelaxedP>
            La formule "Gestion du temps" est idéale si tu veux te concentrer
            sur l'organisation de tes tâches et de ton temps. La formule
            "Gestion du temps & prise de notes" est recommandée si tu es
            étudiant ou si tu dois régulièrement prendre des notes dans ton
            travail.
          </RelaxedP>
          <RelaxedP>
            N'hésite pas à me contacter pour en discuter, je pourrai te
            conseiller en fonction de ta situation spécifique.
          </RelaxedP>
        </Details>

        <Details title="Est-ce que le système fonctionne aussi pour gérer des projets d'équipe ?">
          <RelaxedP>
            Le système que nous mettrons en place est d'abord pensé pour ta
            gestion personnelle, mais il peut être adapté pour inclure la
            gestion de projets d'équipe. Nous pouvons aborder cet aspect pendant
            la séance si c'est important pour toi.
          </RelaxedP>
        </Details>

        <Details title="Est-ce que je peux avoir une attestation de participation pour mon employeur ?">
          <RelaxedP>
            Oui, je peux te fournir une attestation de participation détaillant
            le contenu de la formation si tu en as besoin pour ton employeur.
          </RelaxedP>
        </Details>

        <Details title="Est-ce que je peux annuler/reporter la séance ? Y a-t-il des frais ?">
          <RelaxedP>
            Tu peux reporter ou annuler la séance jusqu'à 48h avant sans frais.
            En cas d'annulation moins de 48h avant la séance, des frais de 50
            CHF s'appliquent.
          </RelaxedP>
        </Details>

        <Details title="Je n'ai pas de carnet Moleskine/Leuchtturm mais j'ai déjà un autre carnet, est-ce que ça convient ?">
          <RelaxedP>
            Tout carnet de bonne qualité peut convenir. L'important est d'avoir
            un support qui te plaît et que tu utiliseras régulièrement. Si tu as
            déjà un carnet que tu aimes utiliser, c'est parfait!
          </RelaxedP>
          <RelaxedP>
            Personnellement, j'aime les carnets de taille A5 qui ont des petits
            points plutôt que des carrés ou des lignes. Mais n'importe quel
            carnet qui te plaît fera l'affaire.
          </RelaxedP>
        </Details>

        <Details title="Est-ce qu'on peut faire la séance en plusieurs fois plutôt qu'en une seule fois ?">
          <RelaxedP>
            La séance est conçue pour être plus efficace en une fois, car cela
            permet de mettre en place un système complet et cohérent. Cependant,
            si tu as une contrainte particulière, nous pouvons en discuter pour
            trouver une solution adaptée.
          </RelaxedP>
        </Details>
      </div>
    </Fragment>
  );
};
