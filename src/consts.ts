export const SITE = {
  name: 'Carnets Singuliers',
  shortName: 'Carnets',
  author: 'Valérie Malaval',
  description: 'Là où les organisations décident, là où les outils se construisent, là où le roman éclaire de nouveaux possibles.',
  tagline: 'Là où les organisations décident, là où les outils se construisent, là où le',
  lede: 'Ici se croisent la lecture des signaux faibles, l\'architecture des systèmes qui pensent avec nous, et l\'écriture d\'un roman qui explore la même chose autrement : ce qu\'on ne voit pas encore venir.',
  url: 'https://carnetvaleriemalaval.netlify.app',
  locale: 'fr',
};

export const CATEGORIES = {
  'contre-jour': {
    label: 'Contre-jour',
    color: '#2B4257',
    soft: '#DCE3E9',
    tagline: 'Ce que personne ne regarde encore',
    description: "L'ombre devient un actif quand la chaleur devient un risque. La heatmap rassure, mais le monde bouge plus vite qu'elle ne se met à jour.",
  },
  'hors-piste': {
    label: 'Hors-piste',
    color: '#8C6A3F',
    soft: '#EBE2D2',
    tagline: 'Construire ce qui manque',
    description: "Un outil qui oublie tout entre deux sessions ne fait gagner du temps qu'une fois. Alors on construit le sien.",
  },
  'contrebande': {
    label: 'Contrebande',
    color: '#2F5C4C',
    soft: '#DCE7E1',
    tagline: 'Écrire pour voir ce qu\'on ne peut pas formuler autrement',
    description: "Un détour par la fiction pour penser ce qui ne se dit pas dans un rapport. L'écriture ouvre des portes que la prospective elle-même ne pousse pas — et c'est souvent par là que le réel arrive.",
  },
} as const;
