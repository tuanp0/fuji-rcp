const recipes = [
    // { /* 1960 Chrome */
    //     slug: "1960-chrome",
    //     title: "1960 Chrome",
    //     tags: ['orange', 'eterna-bleach-bypass'],
    //     shortDesc: ``,
    //     description: `<p>La recette <strong>1960 Chrome</strong> s’inspire des esthétiques argentiques des années 60, 
    //         marquées par des contrastes doux, des couleurs légèrement désaturées et une texture granuleuse 
    //         qui évoque le charme du cinéma classique.</p>
    //         <p>Les tons sont <strong>froids et nuancés</strong> : les bleus et cyans dominent la palette, 
    //         tandis que les rouges et jaunes restent subtils mais expressifs. 
    //         Les hautes lumières adoucies et les ombres légères offrent un équilibre feutré, 
    //         renforcé par l’effet <em>Bleach Bypass</em> qui accentue la profondeur et ajoute 
    //         un caractère dramatique aux images.<br/>
    //         Le grain fort et de grande taille contribue à une sensation organique, 
    //         proche de la pellicule argentique de l’époque.</p>
    //         <p>Cette recette excelle dans les environnements urbains, les portraits artistiques 
    //         ou les scènes de rue capturées sous éclairage artificiel ou fluorescent. 
    //         Elle donne aux photographies une allure rétro, tout en conservant un rendu cinématographique moderne.</p>
    //         <p>Sur le plan émotionnel, le <em>1960 Chrome</em> évoque la nostalgie, 
    //         l’élégance discrète et la puissance des images argentiques. 
    //         C’est une recette qui transforme chaque scène en une réminiscence intemporelle, 
    //         à mi-chemin entre mémoire visuelle et esthétique ciné-classique.</p>`,
    //     images: [
    //         {
    //             src: "/webp/fuji/recipes/1960-chrome/1960-chrome-1.webp"
    //         },
    //         {
    //             src: "/webp/fuji/recipes/1960-chrome/1960-chrome-2.webp"
    //         },
    //         {
    //             src: "/webp/fuji/recipes/1960-chrome/1960-chrome-3.webp"
    //         },
    //         {
    //             src: "/webp/fuji/recipes/1960-chrome/1960-chrome-4.webp"
    //         },
    //         {
    //             src: "/webp/fuji/recipes/1960-chrome/1960-chrome-5.webp"
    //         },
    //         {
    //             src: "/webp/fuji/recipes/1960-chrome/1960-chrome-6.webp"
    //         },
    //     ],
    //     settings: [
    //         {
    //             "Film simulation": "Eterna Bleach Bypass",
    //             "Balance des blancs": "Fluorescent 1<br/>R: -2 / B: -4",
    //             "Couleur Chrome": "Fort",
    //             "Couleur Chrome FX Bleue": "Off (X-Trans V)<br/>Faible (X-Trans IV)",
    //             "Effet de Grain": "Fort<br/>Gros",
    //             "Plage dynamique": "DR400",
    //             "Hautes lumières": "-2",
    //             "Ombres": "-1",
    //             "Couleur": "+2",
    //             "Detail": "-2",
    //             "RB ISO Elevée": "-4",
    //             "Netteté": "-1",
    //             "ISO": "Auto<br/>jusqu'à ISO 6400",
    //             "Compensation Exp.": "+1/3<br/>jusqu'à +1",
    //         },
    //     ]
    // },
    { /* Barcelona */
        slug: "barcelona",
        title: "Barcelona",
        tags: ['orange', 'soft', 'nostalgic-negatve'],
        shortDesc: `Chaleur méditerranéenne. Couleurs dorées, ambiance nostalgique et lumière douce inspirée du film.`,
        description: `<p>La recette <strong>Barcelona</strong> capture la chaleur et la douceur des après-midis méditerranéens. 
            Inspirée par la lumière dorée des ruelles espagnoles et la texture cinématographique du <em>Nostalgic Negative</em>, 
            elle offre un rendu à la fois vibrant et apaisé.</p>
            <p>Les tons sont <strong>chauds et légèrement désaturés</strong>, évoquant la pellicule ancienne et la photographie argentique. 
            Les ombres restent douces, les hautes lumières équilibrées, tandis que les teintes orangées et dorées dominent avec élégance. 
            Le résultat est un look naturel, chaleureux et profondément évocateur.</p>
            <p><strong>Barcelona</strong> excelle en lumière naturelle : portraits en extérieur, ruelles baignées de soleil, 
            scènes urbaines ou moments de voyage. Elle sublime la peau, adoucit les contrastes et apporte une atmosphère intime, presque rétro.</p>
            <p>Sur le plan émotionnel, <em>Barcelona</em> évoque la nostalgie, la légèreté et le charme des instants suspendus. 
            Elle invite à photographier avec sensibilité et à célébrer la beauté de la lumière quotidienne, simple et dorée.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/barcelona/12-barcelona.webp"
            },
            {
                src: "/webp/fuji/recipes/barcelona/14-barcelona.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Nostalgic Negative",
                "Balance des blancs": "Auto Priorité ambiance<br/>R: 0 / B: -3",
                "Couleur Chrome": "Off",
                "Couleur Chrome FX Bleue": "Off",
                "Effet de Grain": "Faible<br/>Petit",
                "Plage dynamique": "DR400",
                "Hautes lumières": "-0",
                "Ombres": "-1",
                "Couleur": "+1",
                "Detail": "-2",
                "RB ISO Elevée": "-4",
                "Netteté": "0",
                "ISO": "Auto<br/>jusqu'à ISO 3200",
                "Compensation Exp.": "0",
            },
        ]
    },
    { /* Cinematic Gold */
        slug: "cinematic-gold",
        title: "Cinematic Gold",
        tags: ['orange', 'soft', 'classic-negative', 'daylight'],
        shortDesc: `Urbain, feutrée et nostalgique, adoucis et désaturés.`,
        description: `<p>La recette <strong>Classic Negative Cinématique</strong> capture l’essence des rues et des paysages urbains 
            avec une esthétique inspirée du cinéma. Elle apporte une atmosphère feutrée et nostalgique, 
            idéale pour retranscrire l’énergie de la ville sans tomber dans des couleurs criardes.</p>
            <p>Les tons sont <strong>adoucis et désaturés</strong> : les verts tirent vers des nuances olive et sobres, 
            les bleus deviennent plus froids et calmes, tandis que les tons chauds gagnent en douceur, 
            rappelant les images argentiques des années 70 et 80.<br/>
            Les hautes lumières restent subtiles et légèrement crémeuses, et les ombres conservent 
            une profondeur cinématographique, renforçant le contraste émotionnel de chaque scène.</p>
            <p>Cette recette excelle en extérieur, dans des environnements urbains baignés de lumière naturelle. 
            Qu’il s’agisse d’un coucher de soleil sur les gratte-ciels, d’une rue animée en pleine journée ou d’un ciel voilé, 
            elle sublime l’ordinaire et donne une allure intemporelle aux instants de la vie quotidienne.</p>
            <p>Sur le plan émotionnel, le <em>Classic Negative Cinématique</em> évoque une poésie discrète, 
            une impression de film documentaire et un regard contemplatif sur la ville. 
            Plus qu’un rendu photographique, c’est une invitation à voir le monde avec lenteur et intensité, 
            comme figé dans un souvenir cinématographique.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/cinematic-gold/3-cinematic-gold.webp"
            },
            { 
                src: "/webp/fuji/recipes/cinematic-gold/4-cinematic-gold.webp"
            },
            {
                src: "/webp/fuji/recipes/cinematic-gold/5-cinematic-gold.webp"
            },
            {
                src: "/webp/fuji/recipes/cinematic-gold/6-cinematic-gold.webp"
            },
            {
                src: "/webp/fuji/recipes/cinematic-gold/7-cinematic-gold.webp"
            },
            {
                src: "/webp/fuji/recipes/cinematic-gold/8-cinematic-gold.webp"
            },
            {
                src: "/webp/fuji/recipes/cinematic-gold/9-cinematic-gold.webp"
            },
            {
                src: "/webp/fuji/recipes/cinematic-gold/10-cinematic-gold.webp"
            },
            {
                src: "/webp/fuji/recipes/cinematic-gold/11-cinematic-gold.webp"
            },
            {
                src: "/webp/fuji/recipes/cinematic-gold/12-cinematic-gold.webp"
            },
            {
                src: "/webp/fuji/recipes/cinematic-gold/14-cinematic-gold.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "Jour<br/>R: +4 / B: -5",
                "Couleur Chrome": "Off",
                "Couleur Chrome FX Bleue": "Off",
                "Effet de Grain": "Fort<br/>Petit",
                "Plage dynamique": "DR400",
                "Hautes lumières": "0",
                "Ombres": "0",
                "Couleur": "+3",
                "Detail": "-2",
                "RB ISO Elevée": "-4",
                "Netteté": "-2",
                "ISO": "640<br/>jusqu'à 1600",
                "Compensation Exp.": "0 à +1",
            },
        ]
    },
    { /* CineStill 800T */
        slug: "cinestill-800t",
        title: "CineStill 800T",
        tags: ['blue', 'saturated', 'night', 'tungsten', 'eterna'],
        shortDesc: `Ambiance nocturne cinématographique. Tons froids, néons éclatants et contrastes marqués. Idéal pour la ville après la tombée de la nuit.`,
        description: `<p>La recette <strong>CineStill 800T</strong> s’inspire de la célèbre pellicule tungstène 
            utilisée en photographie de nuit. Elle restitue l’ambiance des scènes urbaines illuminées 
            par les néons, les lampadaires et les enseignes colorées, avec un rendu à la fois vibrant 
            et cinématographique.</p>
            <p>Les couleurs prennent une <strong>dominante froide et contrastée</strong> : 
            les bleus et cyans sont renforcés, les rouges et oranges deviennent intenses, 
            tandis que les verts adoptent des nuances électriques. Cette palette crée un effet 
            typiquement nocturne, parfait pour sublimer les scènes de ville après le coucher du soleil.<br/>
            Les ombres sont profondes et denses, accentuées par des hautes lumières 
            contrôlées qui évitent les surexpositions.</p>
            <p>Cette recette excelle dans la photographie de rue nocturne, les paysages urbains 
            éclairés artificiellement et les atmosphères cinématographiques inspirées des films des années 80 et 90. 
            Elle reproduit fidèlement l’esthétique <em>néon-noir</em>, avec un contraste fort entre la lumière artificielle 
            et l’obscurité environnante.</p>
            <p>Sur le plan émotionnel, le <em>CineStill 800T</em> évoque le mystère, la solitude et la poésie 
            des nuits en ville. C’est un rendu qui transforme l’ordinaire en décor de film, 
            donnant à chaque photo un caractère dramatique et intemporel.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/cinestill-800t/13-cinestill-800t.webp"
            },
            {
                src: "/webp/fuji/recipes/cinestill-800t/14-cinestill-800t.webp"
            },
            {
                src: "/webp/fuji/recipes/cinestill-800t/15-cinestill-800t.webp"
            },
            {
                src: "/webp/fuji/recipes/cinestill-800t/16-cinestill-800t.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Eterna",
                "Balance des blancs": "Fluorescent 3<br/>R: -6 / B: -4",
                "Couleur Chrome": "Fort",
                "Couleur Chrome FX Bleue": "Faible",
                "Effet de Grain": "Fort<br/>Gros",
                "Plage dynamique": "DR400",
                "Hautes lumières": "0",
                "Ombres": "+2",
                "Couleur": "+4",
                "Detail": "-5",
                "RB ISO Elevée": "-4",
                "Netteté": "-3",
                "ISO": "Auto<br/>jusqu'à ISO 6400",
                "Compensation Exp.": "-1/3 à +2/3",
            },
        ]
    },
    { /* Cinematic Gold */
        slug: "coffee",
        title: "Coffee",
        tags: ['orange', 'soft', 'classic-negative'],
        shortDesc: `Intérieur, doux et feutré. Idéal avec une lumière de fin d’après-midi. Ombres adoucies, désaturé`,
        description: `<p>La recette <strong>Coffee</strong> évoque la chaleur douce et feutrée d’une lumière de fin d’après-midi, 
            comme un moment suspendu autour d’une tasse de café. Inspirée du rendu <em>Classic Negative</em>, 
            elle se caractérise par des tons bruns profonds, des ombres adoucies et une colorimétrie subtilement désaturée. 
            Les bleus se teintent de gris, les verts deviennent feutrés, tandis que les rouges et les jaunes 
            conservent une richesse enveloppante qui apporte une sensation de confort et d’intimité.</p>
            <p>Grâce à sa faible saturation et à son contraste modéré, <em>Coffee</em> crée une ambiance douce, 
            presque analogique, idéale pour la photographie de rue tranquille, les scènes d’intérieur ou les portraits 
            baignés d’une lumière diffuse. Le grain léger et la texture atténuée participent à ce rendu organique 
            et nostalgique, rappelant les images sur film couleur légèrement fanées par le temps.</p>
            <p>Sur le plan émotionnel, la recette <em>Coffee</em> respire la quiétude, la lenteur et la contemplation. 
            Elle transforme les instants ordinaires en souvenirs feutrés, empreints d’une tonalité chaude et apaisante. 
            C’est une recette parfaite pour qui cherche à retranscrire l’émotion du quotidien avec une élégance simple 
            et une touche de mélancolie lumineuse.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/coffee/7-coffee.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "5500K<br/>R: -1 / B: 0",
                "Couleur Chrome": "Faible",
                "Couleur Chrome FX Bleue": "Faible",
                "Effet de Grain": "Faible<br/>Petit",
                "Plage dynamique": "DR100",
                "Hautes lumières": "-1.5",
                "Ombres": "-2",
                "Couleur": "+4",
                "Detail": "-1",
                "RB ISO Elevée": "-4",
                "Netteté": "-2",
                "ISO": "640<br/>jusqu'à 1600",
                "Compensation Exp.": "0",
            },
        ]
    },
    { /* Fujicolor C200 */
        slug: "fujicolor-c200",
        title: "Fujicolor C200",
        tags: ['blue', 'soft', 'classic-negative'],
        shortDesc: `Extérieur et intérieur. Equilibré et naturel, couleurs légèrement froides et profondes, couleurs chaudes douces`,
        description: `<p>La recette Fujicolor se distingue par un rendu équilibré et naturel, 
            avec des couleurs légèrement froides mais lumineuses, qui donnent une impression de clarté 
            et de précision. Les verts sont frais et détaillés, les bleus profonds et subtils, 
            tandis que les rouges et les jaunes restent doux, jamais trop saturés. 
            Le contraste est modéré, ce qui permet de conserver les détails dans 
            les ombres comme dans les hautes lumières.</p>
            <p>Cette recette est polyvalente et fonctionne bien dans diverses conditions lumineuses, 
            en extérieur comme en intérieur avec lumière douce. Le grain est fin et discret, 
            ce qui donne aux images une texture douce et agréable, proche du rendu classique 
            des pellicules Fujifilm.</p>
            <p>Sur le plan émotionnel, le Fujicolor évoque la simplicité, la clarté et le réalisme, 
            idéal pour documenter le quotidien, les paysages, la vie urbaine ou les portraits 
            avec une sensation de justesse et de fraîcheur. Elle transmet une atmosphère calme et naturelle, 
            comme si chaque photo était une représentation fidèle mais chaleureuse du moment.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/fujicolor-c200/1-fujicolor-c200.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-c200/2-fujicolor-c200.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-c200/4-fujicolor-c200.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-c200/5-fujicolor-c200.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-c200/7-fujicolor-c200.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-c200/9-fujicolor-c200.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-c200/10-fujicolor-c200.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-c200/11-fujicolor-c200.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-c200/12-fujicolor-c200.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-c200/14-fujicolor-c200.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-c200/15-fujicolor-c200.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "Auto<br/>R: +1 / B: -2",
                "Couleur Chrome": "Faible",
                "Couleur Chrome FX Bleue": "Off",
                "Effet de Grain": "Faible<br/>Petit",
                "Plage dynamique": "DR200",
                "Hautes lumières": "-1",
                "Ombres": "-2",
                "Couleur": "+1",
                "Detail": "-2",
                "RB ISO Elevée": "-4",
                "Netteté": "0",
                "ISO": "Auto<br/>jusqu'à ISO 6400",
                "Compensation Exp.": "0 à +2/3",
            },
        ]
    },
    { /* Fujicolor Natura 1600 */
        slug: "fuji-natura-1600",
        title: "Fujicolor Natura 1600",
        tags: ['blue', 'soft', 'classic-negative'],
        shortDesc: `Extérieur et intérieur. rendu naturel, Ombres révélées et lumières tempérées. Désaturés et doux.`,
        description: `<p>La recette <strong>Fujicolor Natura 1600</strong> s’inspire de la célèbre pellicule haute sensibilité, 
            conçue pour capturer les scènes en faible luminosité tout en conservant un rendu naturel et détaillé.</p>
            <p>Les tons sont <strong>profonds et nuancés</strong> : les hautes lumières sont légèrement tempérées, 
            tandis que les ombres sont relevées pour conserver des détails dans les zones sombres. 
            Les couleurs sont légèrement désaturées pour un rendu plus doux et réaliste, avec des bleus mis en valeur par l’effet Chrome FX Blue.</p>
            <p>Cette recette est idéale pour la photographie de nuit, en intérieur ou en lumière ambiante faible, 
            où le grain prononcé et le contraste équilibré apportent un caractère organique et cinématographique aux images.</p>
            <p>Sur le plan émotionnel, <em>Fujicolor Natura 1600</em> évoque l’intimité, la subtilité et une esthétique authentique. 
            Elle permet de capturer la scène telle qu’on la perçoit, avec un rendu chaud et vivant, fidèle à l’esprit des pellicules haute sensibilité.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/fujicolor-natura-1600/7-fujicolor-natura-1600.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-natura-1600/8-fujicolor-natura-1600.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-natura-1600/11-fujicolor-natura-1600.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-natura-1600/12-fujicolor-natura-1600.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-natura-1600/15-fujicolor-natura-1600.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "5500K<br/>R: -1 / B: -2",
                "Couleur Chrome": "Fort",
                "Couleur Chrome FX Bleue": "Faible",
                "Effet de Grain": "Fort<br/>Gros",
                "Plage dynamique": "DR400",
                "Hautes lumières": "-1.5",
                "Ombres": "+1.5",
                "Couleur": "-2",
                "Detail": "-4",
                "RB ISO Elevée": "-4",
                "Netteté": "-2",
                "ISO": "Auto<br/>jusqu'à ISO 6400",
                "Compensation Exp.": "+1/3 à +1",
            },
        ]
    },
    {  /* Fujicolor Pro 400H */
        slug: "fujicolor-pro-400h",
        title: "Fujicolor Pro 400H",
        tags: ['blue', 'soft', 'classic-negative', 'portrait'],
        shortDesc: `Portraits naturels. Extérieur et intérieur. Esthétique douce. Tons pastels. Tendance froide. Couleurs chaudes discrètes.`,
        description: `<p>La recette Fujicolor Pro 400H capture l’esthétique douce et nuancée des pellicules professionnelles 
            Fujifilm utilisées en portrait et en mode au début des années 2000. Son rendu se distingue par des tons pastel, 
            une balance des couleurs légèrement froide et une reproduction des peaux d’une grande finesse. 
            Les bleus et les verts adoptent une teinte délicatement cyan, tandis que les rouges et les jaunes 
            restent discrets, créant une harmonie subtile et apaisée.</p>
            <p>Grâce à sa latitude d’exposition généreuse, le Pro 400H excelle dans les environnements lumineux, 
            les portraits en lumière naturelle et les scènes extérieures diffuses. Il conserve un excellent équilibre 
            entre contraste modéré et richesse tonale, donnant aux images une sensation d’air et de douceur. 
            Le grain, fin et régulier, participe à ce rendu feutré et raffiné.</p>
            <p>Sur le plan émotionnel, cette recette évoque la sérénité, la nostalgie et la délicatesse. 
            C’est une palette idéale pour capturer la lumière du matin, les visages baignés de clarté ou 
            les ambiances calmes et poétiques. Fujicolor Pro 400H traduit le monde avec retenue et élégance, 
            comme une photographie sur pellicule pastel où chaque ton respire la douceur et la subtilité.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/fujicolor-pro-400h/6-fujicolor-pro-400h.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-pro-400h/7-fujicolor-pro-400h.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-pro-400h/8-fujicolor-pro-400h.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-pro-400h/9-fujicolor-pro-400h.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-pro-400h/10-fujicolor-pro-400h.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-pro-400h/11-fujicolor-pro-400h.webp"
            },
            {
                src: "/webp/fuji/recipes/fujicolor-pro-400h/12-fujicolor-pro-400h.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative", 
                "Balance des blancs": "4900K<br/>R: 0 / B: -4", 
                "Couleur Chrome": "Fort", 
                "Couleur Chrome FX Bleue": "Off (V)<br/>Faible (IV)", 
                "Effet de Grain": "Fort<br/>Petit", 
                "Plage dynamique": "DR400", 
                "Hautes lumières": "-2", 
                "Ombres": "+4", 
                "Couleur": "+4", 
                "Detail": "-2", 
                "RB ISO Elevée": "-4", 
                "Netteté": "-4", 
                "ISO": "Auto<br/>jusqu'à ISO 6400", 
                "Compensation Exp.": "+1 à +1 2/3",
            },
        ],
    },
    { /* Fujifilm Superia X-Tra 400 */
        slug: "fuji-superia-xtra-400",
        title: "Fujifilm Superia X-Tra 400",
        tags: ['blue', 'saturated', 'classic-negative'],
        shortDesc: `Couleurs franches. Peau naturelle. Bleu profond. Rouge et vert intenses`,
        description: `<p>La recette Fujifilm Superia X-TRA 400 restitue l’esprit des pellicules couleurs 
            des années 2000, avec des tons vifs, contrastés et un rendu globalement dynamique. 
            Les couleurs ressortent plus franches : les rouges et les verts gagnent en intensité, 
            les bleus conservent une belle profondeur, tandis que les peaux restent naturelles 
            mais légèrement plus marquées que sur des films plus doux comme le Kodak Gold.</p>
            <p>Grâce à sa sensibilité élevée, cette recette excelle dans des conditions de 
            lumière variables : journées nuageuses, intérieurs lumineux, scènes de rue en soirée. 
            Elle donne du punch aux images tout en conservant une touche de réalisme. 
            Le grain, volontairement présent, ajoute une texture organique qui renforce 
            son caractère argentique.</p>
            <p>Sur le plan émotionnel, le Superia X-TRA 400 évoque l’énergie, 
            le mouvement et la spontanéité. C’est une recette idéale pour documenter 
            la vie quotidienne, les moments entre amis, la photographie de rue ou de voyage. 
            Elle traduit l’instant sur le vif avec une esthétique vivante et légèrement brute, 
            comme un carnet visuel rempli de fragments colorés et vibrants de la vie.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/fujifilm-superia-xtra-400/3-fujifilm-superia-xtra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/fujifilm-superia-xtra-400/4-fujifilm-superia-xtra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/fujifilm-superia-xtra-400/5-fujifilm-superia-xtra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/fujifilm-superia-xtra-400/6-fujifilm-superia-xtra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/fujifilm-superia-xtra-400/7-fujifilm-superia-xtra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/fujifilm-superia-xtra-400/8-fujifilm-superia-xtra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/fujifilm-superia-xtra-400/10-fujifilm-superia-xtra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/fujifilm-superia-xtra-400/11-fujifilm-superia-xtra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/fujifilm-superia-xtra-400/12-fujifilm-superia-xtra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/fujifilm-superia-xtra-400/16-fujifilm-superia-xtra-400.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative", 
                "Balance des blancs": "Auto<br/>R: +3 / B: -5", 
                "Couleur Chrome": "Off", 
                "Couleur Chrome FX Bleue": "Fort", 
                "Effet de Grain": "Fort<br/>Petit", 
                "Plage dynamique": "DR400", 
                "Hautes lumières": "0", 
                "Ombres": "-1", 
                "Couleur": "+4", 
                "Detail": "-1", 
                "RB ISO Elevée": "-4", 
                "Netteté": "-2", 
                "ISO": "Auto<br/>jusqu'à ISO 6400", 
                "Compensation Exp.": "0 à +1",
            },
        ],
    },
    { /* Gentle Specimen */
        slug: "gentle-specimen",
        title: "Gentle Specimen",
        tags: ['blue', 'soft', 'classic-negative'],
        shortDesc: `Doux et apaisant. Atmosphère délicate et vaporeuse. Tons anturels et feutrés.`,
        description: `<p>La recette <strong>Gentle Specimen</strong> se distingue par un rendu doux et apaisant, 
            pensé pour restituer une atmosphère délicate et équilibrée. Inspirée de l’esthétique argentique, 
            elle met en avant des <strong>tons naturels et feutrés</strong>, où les couleurs restent sobres mais nuancées.</p>
            <p>Les bleus sont subtilement renforcés grâce à l’effet <em>Color FX Blue</em>, 
            créant une palette fraîche et sereine. Les hautes lumières sont volontairement atténuées 
            (<em>-1.0 Highlight</em>) et les ombres allégées (<em>-1.0 Shadow</em>), 
            ce qui donne aux images une clarté douce et une ambiance légèrement vaporeuse. 
            Le grain, faible et discret, contribue à préserver une texture filmique sans dominer l’image.</p>
            <p>Cette recette excelle dans les <strong>portraits en lumière naturelle</strong>, 
            les scènes quotidiennes capturées en extérieur, ou encore les instants intimistes où l’on cherche 
            à retranscrire une sensation de calme et de proximité. Le rendu est particulièrement efficace 
            pour sublimer les arrière-plans flous et les ambiances lumineuses légères.</p>
            <p>Sur le plan émotionnel, <em>Gentle Specimen</em> évoque la sérénité, la tendresse et une certaine nostalgie poétique. 
            Elle permet de transformer chaque cliché en une image douce, presque onirique, 
            idéale pour des récits visuels empreints de délicatesse.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/gentle-specimen/2-gentle-specimen.webp"
            },
            {
                src: "/webp/fuji/recipes/gentle-specimen/7-gentle-specimen.webp"
            },
            {
                src: "/webp/fuji/recipes/gentle-specimen/11-gentle-specimen.webp"
            },
            {
                src: "/webp/fuji/recipes/gentle-specimen/12-gentle-specimen.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "Auto<br/>R: 0 / B: 0",
                "Couleur Chrome": "Faible",
                "Couleur Chrome FX Bleue": "Faible (X-Trans V)<br/>Fort (X-Trans IV)",
                "Effet de Grain": "Fort<br/>Petit",
                "Plage dynamique": "DR100",
                "Hautes lumières": "-1",
                "Ombres": "-1",
                "Couleur": "+1",
                "Detail": "+1",
                "RB ISO Elevée": "0",
                "Netteté": "0",
                "ISO": "Auto<br/>jusqu'à ISO 3200",
                "Compensation Exp.": "+1/3",
            },
        ]
    },
    { /* Ilford FP4 Plus 125 */
        slug: "ilford-fp4-plus-125",
        title: "Ilford FP4 Plus 125",
        tags: ['bw', 'monostd'],
        shortDesc: `Contrast doux et élégant. Hautes lumières tempérées. Noir profond. Composition et texture mises en valeur. Grain subtil.`,
        description: `<p>La recette <strong>Ilford FP4 Plus 125</strong> simule le rendu classique du film noir et blanc argentique, 
            reconnu pour son grain subtil et sa large gamme de tons moyens, offrant un contraste doux et élégant.</p>
            <p>Les tons sont <strong>équilibrés et naturels</strong> : les hautes lumières sont légèrement tempérées, 
            tandis que les ombres conservent de la profondeur, rappelant la richesse du papier baryté. 
            Cette approche permet de mettre en valeur la composition et les textures sans distraire avec des couleurs.</p>
            <p>Cette recette brille particulièrement dans la photographie de portrait, de rue et de paysage, 
            où la subtilité des nuances et le rendu organique du grain apportent un caractère intemporel aux images. 
            Elle excelle en lumière naturelle, particulièrement en extérieur ou en lumière diffuse.</p>
            <p>Sur le plan émotionnel, <em>Ilford FP4 Plus 125</em> évoque la sobriété, la finesse et une esthétique classique. 
            Elle invite à contempler le quotidien avec précision et élégance, conférant aux clichés un charme authentique 
            et durable, fidèle à l’esprit du film noir et blanc traditionnel.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/ilfordfp4plus-125/3-ilfordfp4plus-125.webp"
            },
            {
                src: "/webp/fuji/recipes/ilfordfp4plus-125/6-ilfordfp4plus-125.webp"
            },
            {
                src: "/webp/fuji/recipes/ilfordfp4plus-125/7-ilfordfp4plus-125.webp"
            },
            {
                src: "/webp/fuji/recipes/ilfordfp4plus-125/9-ilfordfp4plus-125.webp"
            },
            {
                src: "/webp/fuji/recipes/ilfordfp4plus-125/10-ilfordfp4plus-125.webp"
            },
            {
                src: "/webp/fuji/recipes/ilfordfp4plus-125/11-ilfordfp4plus-125.webp"
            },
            {
                src: "/webp/fuji/recipes/ilfordfp4plus-125/12-ilfordfp4plus-125.webp"
            },
            {
                src: "/webp/fuji/recipes/ilfordfp4plus-125/13-ilfordfp4plus-125.webp"
            },
            {
                src: "/webp/fuji/recipes/ilfordfp4plus-125/15-ilfordfp4plus-125.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Monochrome", 
                "Balance des blancs": "Jour<br/>R: +6 / B: -8", 
                "Couleur Chrome": "Off", 
                "Couleur Chrome FX Bleue": "Off", 
                "Effet de Grain": "Faible<br/>Grand", 
                "Plage dynamique": "DR200", 
                "Hautes lumières": "-0.5", 
                "Ombres": "-1.5", 
                "Couleur": "0", 
                "Detail": "+2", 
                "RB ISO Elevée": "-4", 
                "Netteté": "0", 
                "ISO": "Auto<br/>jusqu'à ISO 6400", 
                "Compensation Exp.": "-1 à -1/3",
            }
        ]
    },
    { /* Kodachrome 64 */
        slug: "kodachrome-64",
        title: "Kodachrome 64",
        tags: ['orange', 'classic-chrome', 'daylight'],
        shortDesc: `Rendu discret. Palette sobre. Sujet mis en valeur`,
        description: `<p>La recette <strong>Classic Chrome</strong> est reconnue pour son rendu discret et documentaire, 
            inspiré des pellicules utilisées en photo-reportage. Elle réduit la saturation des couleurs 
            pour offrir une palette plus sobre et naturelle, parfaite pour retranscrire l’authenticité des scènes.</p>
            <p>Les tons sont <strong>neutres et réalistes</strong> : les bleus sont adoucis, les rouges apparaissent moins vifs 
            et les verts gagnent une teinte plus feutrée. Cette approche permet de mettre l’accent sur le sujet et la composition, 
            plutôt que sur l’intensité des couleurs.<br/>
            Avec une plage dynamique élargie, les hautes lumières et les ombres sont équilibrées, 
            offrant un contraste doux mais précis, idéal pour capturer les ambiances lumineuses complexes.</p>
            <p>Cette recette brille particulièrement dans la photographie de rue, de voyage et de paysages urbains. 
            Elle excelle en lumière du jour, là où les contrastes et les détails subtils viennent enrichir l’image 
            sans en trahir la réalité.</p>
            <p>Sur le plan émotionnel, le <em>Classic Chrome</em> évoque la sobriété, la sincérité et un regard contemplatif. 
            Il invite à photographier le quotidien avec justesse et élégance, en conférant aux clichés une touche intemporelle 
            et journalistique.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/kodachrome-64/1-kodachrome64.webp"
            },
            {
                src: "/webp/fuji/recipes/kodachrome-64/5-kodachrome64.webp"
            },
            {
                src: "/webp/fuji/recipes/kodachrome-64/7-kodachrome64.webp"
            },
            {
                src: "/webp/fuji/recipes/kodachrome-64/8-kodachrome64.webp"
            },
            {
                src: "/webp/fuji/recipes/kodachrome-64/9-kodachrome64.webp"
            },
            {
                src: "/webp/fuji/recipes/kodachrome-64/10-kodachrome64.webp"
            },
            {
                src: "/webp/fuji/recipes/kodachrome-64/11-kodachrome64.webp"
            },
            {
                src: "/webp/fuji/recipes/kodachrome-64/12-kodachrome64.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Chrome", 
                "Balance des blancs": "Jour<br/>R: +2 / B: -5", 
                "Couleur Chrome": "Fort", 
                "Couleur Chrome FX Bleue": "Off", 
                "Effet de Grain": "Faible<br/>Petit", 
                "Plage dynamique": "DR200", 
                "Hautes lumières": "0", 
                "Ombres": "+0.5", 
                "Couleur": "+2", 
                "Detail": "+3", 
                "RB ISO Elevée": "-4", 
                "Netteté": "+1", 
                "ISO": "Auto<br/>jusqu'à ISO 6400", 
                "Compensation Exp.": "0 à +2/3",
            },
        ]
    },
    { /* Kodak ColorPlus 200 */
        slug: "kodakcolorplus-200",
        title: "Kodak ColorPlus 200",
        tags: ['orange', 'saturated', 'pro-neg-hi'],
        shortDesc: `Portrait et extérieur. Tons chauds et doux. Jaune et rouge dominant. Vert et bleu adoucis.`,
        description: `<p>La recette <strong>Kodak ColorPlus 200</strong> retranscrit fidèlement le charme intemporel 
            de la pellicule couleur emblématique de Kodak. Connue pour ses tons chauds et sa douceur 
            légèrement nostalgique, elle offre un rendu équilibré où les jaunes et les rouges 
            dominent avec subtilité, tandis que les verts restent naturels et légèrement adoucis. 
            Les bleus, un peu atténués, apportent une touche rétro typique du film analogique 
            des années 90 et 2000.</p>
            <p>Basée sur la simulation <em>Pro Negative High</em>, cette recette privilégie les contrastes doux 
            et une belle latitude d’exposition, idéale pour les scènes de lumière naturelle, 
            les portraits ou les paysages baignés de soleil. Le grain fort mais fin accentue 
            la texture organique du rendu, tout en conservant une grande lisibilité des détails. 
            Les images respirent la simplicité et la chaleur du film couleur traditionnel.</p>
            <p>Sur le plan émotionnel, <em>Kodak ColorPlus 200</em> évoque la nostalgie du quotidien, 
            les souvenirs de vacances et la douceur des après-midis d’été. 
            C’est une recette qui transforme la lumière en souvenir, avec un équilibre parfait 
            entre réalisme et tendresse chromatique. Elle s’adresse à ceux qui recherchent 
            une esthétique chaleureuse, familière et sincère — un hommage à la photographie argentique populaire.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/kodakcolorplus-200/5-kodakcolorplus-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakcolorplus-200/6-kodakcolorplus-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakcolorplus-200/7-kodakcolorplus-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakcolorplus-200/8-kodakcolorplus-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakcolorplus-200/9-kodakcolorplus-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakcolorplus-200/11-kodakcolorplus-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakcolorplus-200/12-kodakcolorplus-200.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Pro Negative High", 
                "Balance des blancs": "Auto<br/>R: +4 / B: -6", 
                "Couleur Chrome": "Off", 
                "Couleur Chrome FX Bleue": "Off", 
                "Effet de Grain": "Fort<br/>Petit", 
                "Plage dynamique": "DR400", 
                "Hautes lumières": "-1", 
                "Ombres": "-2", 
                "Couleur": "+4", 
                "Detail": "-2", 
                "RB ISO Elevée": "-4", 
                "Netteté": "-2", 
                "ISO": "Auto<br/>jusqu'à ISO 6400", 
                "Compensation Exp.": "-1 à +1/3",
            }
        ]
    },
    { /* Kodak Ektar 100 */
        slug: "kodakektar-100",
        title: "Kodak Ektar 100",
        tags: ['orange', 'saturated', 'classic-chrome'],
        shortDesc: `Lumineux. Couleurs vives et saturées. Rouge et bleu intenses. Vert et jaune naturel.`,
        description: `<p>La recette <strong>Kodak Ektar 100</strong> s’inspire de la pellicule couleur la plus 
            vive et la plus précise de la gamme Kodak. Réputée pour sa saturation éclatante et 
            sa netteté exceptionnelle, elle restitue les tons avec un réalisme vibrant et une 
            clarté presque photographique. Les rouges et les bleus ressortent avec intensité, 
            tandis que les verts et les jaunes conservent une justesse naturelle. 
            Le rendu global est propre, lumineux et très détaillé, idéal pour les scènes en plein jour.</p>
            <p>Basée sur la simulation <em>Classic Chrome</em>, cette recette préserve une richesse colorimétrique 
            tout en apportant une légère douceur dans les ombres, ce qui équilibre la vivacité 
            typique de l’Ektar. Elle excelle dans les paysages, la photographie de voyage ou 
            les environnements urbains bien éclairés, où la lumière naturelle révèle toute 
            la profondeur de sa palette. L’absence de grain renforce la pureté du rendu et 
            met en valeur les textures fines et les détails.</p>
            <p>Sur le plan émotionnel, <em>Kodak Ektar 100</em> évoque la précision, la modernité et la 
            beauté éclatante du monde réel. C’est une recette faite pour ceux qui recherchent 
            un rendu à la fois coloré et maîtrisé, capable de sublimer les paysages lumineux 
            et les scènes baignées de soleil. Elle capture la perfection du détail tout en 
            conservant la signature cinématographique subtile propre aux simulations Fujifilm.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/kodakektar-100/5-kodakektar-100.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakektar-100/7-kodakektar-100.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakektar-100/8-kodakektar-100.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakektar-100/9-kodakektar-100.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakektar-100/11-kodakektar-100.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakektar-100/12-kodakektar-100.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Chrome", 
                "Balance des blancs": "6050K<br/>R: +3 / B: 0", 
                "Couleur Chrome": "Fort", 
                "Couleur Chrome FX Bleue": "Faible", 
                "Effet de Grain": "Off", 
                "Plage dynamique": "DR Auto", 
                "Hautes lumières": "+1", 
                "Ombres": "-2", 
                "Couleur": "+4", 
                "Detail": "0", 
                "RB ISO Elevée": "-4", 
                "Netteté": "+3", 
                "ISO": "Auto<br/>jusqu'à ISO 6400", 
                "Compensation Exp.": "0 à +2/3",
            }
        ]
    },
    { /* Kodak Gold 200 */
        slug: "kodakgold-200",
        title: "Kodak Gold 200",
        tags: ['orange', 'daylight', 'classic-chrome'],
        shortDesc: `Tons chaleureux et nostalgiques. Jaune riche. Rouge doux. Idéal pour la lumière de fin d'après-midi.`,
        description: `<p>La recette <strong>Kodak Gold 200</strong> offre des tons chaleureux et nostalgiques, 
            comme lorsqu’on feuillette de vieux albums photo des années 80 et 90.</p>
            <p>Les couleurs tirent vers une chaleur dorée, avec des jaunes riches, des rouges doux et 
            une lumière subtile qui sublime le soleil et les scènes en fin d’après-midi.<br/>
            Les verts apparaissent légèrement adoucis mais naturels, tandis que les bleus prennent 
            une teinte plus calme et douce, loin des tons trop intenses.</p>
            <p>Cette recette s’exprime particulièrement bien en extérieur, sous 
            une lumière ensoleillée, où elle crée une atmosphère douce et rêveuse. 
            Elle dégage un charme vintage discret, sans excès, idéale pour immortaliser 
            des instants du quotidien avec une esthétique intemporelle et poétique.</p>
            <p>Sur le plan émotionnel, le <em>Kodak Gold 200</em> évoque la chaleur, 
            la familiarité et la joie simple, comme des images de voyages en voiture, 
            de pique-niques d’été ou de moments en famille. Ce rendu ne cherche pas 
            la perfection technique, mais la sincérité d’un souvenir, donnant à vos 
            photos une allure conviviale et réconfortante.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/kodakgold-200/1-kodakgold-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakgold-200/2-kodakgold-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakgold-200/3-kodakgold-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakgold-200/4-kodakgold-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakgold-200/5-kodakgold-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakgold-200/6-kodakgold-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakgold-200/7-kodakgold-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakgold-200/8-kodakgold-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakgold-200/9-kodakgold-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakgold-200/10-kodakgold-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakgold-200/11-kodakgold-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakgold-200/12-kodakgold-200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakgold-200/16-kodakgold-200.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Chrome", 
                "Balance des blancs": "Jour<br/>R: +4 / B: -5", 
                "Couleur Chrome": "Faible", 
                "Couleur Chrome FX Bleue": "Off", 
                "Effet de Grain": "Fort<br/>Petit", 
                "Plage dynamique": "DR400", 
                "Hautes lumières": "-1.5", 
                "Ombres": "+0.5", 
                "Couleur": "+3", 
                "Detail": "-2", 
                "RB ISO Elevée": "-4", 
                "Netteté": "-2", 
                "ISO": "Auto<br/>jusqu'à ISO 6400", 
                "Compensation Exp.": "+2/3 à +1",
            },
        ],
    },
    { /* Kodak Portra 400 */
        slug: "kodakportra-400",
        title: "Kodak Portra 400",
        tags: ['orange', 'soft', 'classic-chrome'],
        shortDesc: `Tons doux et cinématographique. Désaturée. Tons froids et équilibrés. Idéal pour la photo ville et de voyage.`,
        description: `<p>Cette recette <strong>Classic Chrome</strong> met en avant une esthétique douce et cinématographique, 
            idéale pour retranscrire les ambiances urbaines et les scènes de voyage. 
            Avec sa palette subtile et légèrement désaturée, elle privilégie la fidélité et l’élégance 
            plutôt que l’exagération des couleurs.</p>
            <p>Les tons sont <strong>froids et équilibrés</strong> : les bleus gagnent en intensité, 
            les rouges et oranges restent contenus mais naturels, et les verts apparaissent sobres et nuancés. 
            Les ombres volontairement adoucies contrastent avec des hautes lumières bien contrôlées, 
            ce qui confère une atmosphère feutrée et contemplative.<br/>
            L’ajout de grain marqué et la réduction de netteté renforcent l’effet argentique, 
            donnant à chaque image une texture riche et organique.</p>
            <p>Cette recette brille particulièrement en extérieur sous lumière naturelle, 
            mais elle fonctionne aussi très bien en photographie documentaire ou de rue, 
            là où les contrastes lumineux créent des ambiances uniques et réalistes.</p>
            <p>Sur le plan émotionnel, ce <em>Classic Chrome</em> évoque la mélancolie, 
            la mémoire et une approche journalistique de la photographie. 
            Il transforme les scènes quotidiennes en récits visuels, 
            avec une dimension intemporelle et poétique.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/kodakportra-400/4-kodakportra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakportra-400/5-kodakportra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakportra-400/7-kodakportra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakportra-400/8-kodakportra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakportra-400/9-kodakportra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakportra-400/10-kodakportra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakportra-400/11-kodakportra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakportra-400/12-kodakportra-400.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakportra-400/14-kodakportra-400.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Chrome", 
                "Balance des blancs": "5200K<br/>R: +1 / B: -6", 
                "Couleur Chrome": "Fort", 
                "Couleur Chrome FX Bleue": "Off", 
                "Effet de Grain": "Fort<br/>Petit", 
                "Plage dynamique": "DR400", 
                "Hautes lumières": "0", 
                "Ombres": "-2", 
                "Couleur": "+2", 
                "Detail": "-2", 
                "RB ISO Elevée": "-4", 
                "Netteté": "-2", 
                "ISO": "Auto<br/>jusqu'à ISO 6400", 
                "Compensation Exp.": "+1/3 à +1",
            },
        ]
    },
    { /* Kodak T-Max P3200 */
        slug: "kodaktmax-p3200",
        title: "Kodak T-Max P3200",
        tags: ['bw', 'acros'],
        shortDesc: `Urbain et intérieur. Lumières relevées. Ombres profondes. Fort contrast. Bon rendu en faible luminosité. Grain marqué.`,
        description: `<p>La recette <strong>Kodak T-Max P3200</strong> reproduit l’esthétique de la mythique pellicule noir et blanc très haute sensibilité, 
            connue pour son grain marqué et son rendu puissant en faible luminosité.</p>
            <p>Les tons sont <strong>contrastés et intenses</strong> : les ombres sont profondes, les hautes lumières légèrement relevées, 
            offrant une gamme dynamique qui met en valeur les détails dans les zones sombres. 
            Le grain fort et large apporte une texture argentique caractéristique, idéale pour les ambiances nocturnes.</p>
            <p>Cette recette est parfaite pour la photographie de rue, de concerts ou de scènes en intérieur, 
            là où la lumière est rare et l’atmosphère forte. Elle excelle dans les environnements contrastés et les éclairages durs.</p>
            <p>Sur le plan émotionnel, <em>Kodak T-Max P3200</em> évoque la force, l’intensité et une esthétique brute. 
            Elle permet de capturer l’énergie et l’authenticité des scènes, avec un rendu granuleux et expressif fidèle à l’esprit de l’argentique.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/2-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/3-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/4-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/5-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/6-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/7-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/8-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/9-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/10-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/11-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/12-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/14-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/15-kodaktmax-p3200.webp"
            },
            {
                src: "/webp/fuji/recipes/kodaktmax-p3200/16-kodaktmax-p3200.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Acros (ou Acros+Y / Acros+R / Acros+G)", 
                "Balance des blancs": "5500K<br/>R: +4 / B: +7", 
                "Couleur Chrome": "Off", 
                "Couleur Chrome FX Bleue": "Off", 
                "Effet de Grain": "Fort<br/>Grand", 
                "Plage dynamique": "DR400", 
                "Hautes lumières": "+1", 
                "Ombres": "+3", 
                "Monochrome Toning": "WC: -1<br/>MG: -1", 
                "Detail": "+1", 
                "RB ISO Elevée": "-4", 
                "Netteté": "+2", 
                "ISO": "Jusqu'à 12800", 
                "Compensation Exp.": "0 à +2/3",
            }
        ]
    },
    // { /* Kodak Ultramax 400 */
    //     slug: "kodak-ultramax-400",
    //     title: "Kodak Ultramax 400",
    //     tags: ['orange', 'saturated', 'classic-chrome'],
    //     shortDesc: `Energique et spontané. Rendu lumineux. Chaud. Légèrement saturé. Contraste modéré. Idéal pour la photo de jour`,
    //     description: `<p>La recette Kodak Ultramax 400 offre un rendu lumineux, chaud et 
    //         légèrement saturé, avec des couleurs vives mais douces à la fois. Les rouges 
    //         et les jaunes ressortent avec chaleur et convivialité, les verts restent naturels 
    //         mais légèrement accentués, et les bleus conservent une profondeur agréable 
    //         sans être trop froids. Le contraste est modéré, ce qui permet aux détails 
    //         de se détacher tout en gardant une atmosphère douce et accessible.</p>
    //         <p>Grâce à sa sensibilité élevée, cette recette est très polyvalente : 
    //         elle fonctionne aussi bien en extérieur en plein soleil qu’en lumière plus faible, 
    //         tout en conservant une belle texture et un grain subtil qui rappelle 
    //         les pellicules classiques de Kodak.</p>
    //         <p>Sur le plan émotionnel, l’Ultramax 400 évoque la bonne humeur, 
    //         l’énergie et la spontanéité. Elle est parfaite pour capturer des moments de vie, 
    //         des voyages, des fêtes ou des instants du quotidien avec un rendu chaleureux et vivant. 
    //         Cette pellicule numérique recréée le charme des souvenirs instantanés, 
    //         apportant à chaque photo une sensation de joie simple et accessible, 
    //         comme un éclat de lumière dans la mémoire.</p>`,
    //     images: [
    //         {
    //             src: "/webp/fuji/recipes/kodak-ultramax-400/kodak-ultramax-400-1.webp"
    //         },
    //         {
    //             src: "/webp/fuji/recipes/kodak-ultramax-400/kodak-ultramax-400-2.webp"
    //         },
    //         {
    //             src: "/webp/fuji/recipes/kodak-ultramax-400/kodak-ultramax-400-3.webp"
    //         },
    //         {
    //             src: "/webp/fuji/recipes/kodak-ultramax-400/kodak-ultramax-400-4.webp"
    //         },
    //         {
    //             src: "/webp/fuji/recipes/kodak-ultramax-400/kodak-ultramax-400-5.webp"
    //         },
    //         {
    //             src: "/webp/fuji/recipes/kodak-ultramax-400/kodak-ultramax-400-6.webp"
    //         },
    //     ],
    //     settings: [
    //         {
    //             "Film simulation": "Classic Chrome", 
    //             "Balance des blancs": "Auto<br/>R: +1 / B: -5", 
    //             "Couleur Chrome": "Faible", 
    //             "Couleur Chrome FX Bleue": "Off", 
    //             "Effet de Grain": "Fort<br/>Grand", 
    //             "Plage dynamique": "DR-Auto", 
    //             "Hautes lumières": "+1", 
    //             "Ombres": "+1", 
    //             "Couleur": "+4", 
    //             "Detail": "0", 
    //             "RB ISO Elevée": "-4", 
    //             "Netteté": "+3", 
    //             "ISO": "Auto<br/>jusqu'à ISO 6400", 
    //             "Compensation Exp.": "+1/3 à +1",
    //         },
    //     ],
    // },
    { /* Kodak Vision3 250D */
        slug: "kodakvision3-250D",
        title: "Kodak Vision3 250D",
        tags: ['orange', 'nostalgic-negative'],
        shortDesc: `Film cinéma couleur. Tons vifs et équilibrés. Lumière réhaussée. Riche en détails.`,
        description: `<p>La recette <strong>Kodak Vision3 250D</strong> s’inspire du célèbre film cinéma couleur à lumière du jour, 
            reconnu pour sa vivacité, sa clarté et sa richesse en détails.</p>
            <p>Les tons sont <strong>vifs et équilibrés</strong> : les hautes lumières sont rehaussées pour donner de la brillance, 
            tandis que les ombres sont ouvertes pour conserver de la profondeur sans écraser les détails. 
            Les couleurs sont saturées avec finesse, particulièrement les rouges et les verts, pour un rendu naturel mais cinématographique.</p>
            <p>Cette recette est idéale pour la photographie de paysages, portraits et scènes en lumière artificielle ou mixte, 
            offrant un look lumineux et détaillé, proche du rendu des pellicules cinéma modernes. 
            Le grain marqué mais fin renforce l’aspect filmique.</p>
            <p>Sur le plan émotionnel, <em>Kodak Vision3 250D</em> évoque la clarté, la fraîcheur et une esthétique cinématographique. 
            Elle invite à capturer la réalité avec intensité et précision, tout en donnant aux images une touche professionnelle et intemporelle.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/kodakvision3-250d/3-kodakvision3-250d.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakvision3-250d/7-kodakvision3-250d.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakvision3-250d/9-kodakvision3-250d.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakvision3-250d/11-kodakvision3-250d.webp"
            },
            {
                src: "/webp/fuji/recipes/kodakvision3-250d/12-kodakvision3-250d.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Nostalgic Negative", 
                "Balance des blancs": "Fluorescent 1<br/>R: +5 / B: 0", 
                "Couleur Chrome": "Fort", 
                "Couleur Chrome FX Bleue": "Off", 
                "Effet de Grain": "Fort<br/>Petit", 
                "Plage dynamique": "DR200", 
                "Hautes lumières": "+4", 
                "Ombres": "+3", 
                "Couleur": "-1", 
                "Detail": "-2", 
                "RB ISO Elevée": "-4", 
                "Netteté": "-2", 
                "ISO": "Auto<br/>jusqu'à ISO 6400", 
                "Compensation Exp.": "0 à +2/3",
            },
        ],
    },
    { /* Loki */
        slug: "loki",
        title: "Loki",
        tags: ['orange', 'soft', 'night', 'classic-negative'],
        shortDesc: `Très fort contraste. Éclats lumineux et ombres profondes. Atmosphère dramatique et urbaine.`,
        description: `<p>La recette <strong>Loki</strong> est conçue pour ceux qui recherchent un rendu audacieux, contrasté et percutant. 
            Inspirée par les ambiances nocturnes intenses et les éclairages artificiels marqués, elle joue sur les extrêmes entre lumière et obscurité.</p>
            <p>Les hautes lumières sont <strong>fortement accentuées</strong>, tandis que les ombres deviennent denses et profondes, 
            créant un contraste dramatique et un rendu quasi cinématographique. 
            La couleur reste neutre, laissant la dynamique des tons et la dureté des lumières définir le caractère de l’image.</p>
            <p><strong>Loki</strong> excelle dans les environnements urbains, les scènes de nuit ou les situations à éclairage contrasté. 
            Elle révèle la structure des lumières, les reflets métalliques et les textures avec une précision tranchante, 
            donnant un aspect brut et contemporain aux clichés.</p>
            <p>Sur le plan émotionnel, <em>Loki</em> évoque la tension, le mystère et une certaine dualité. 
            Elle capture la beauté dans le chaos lumineux des villes, entre éclat et obscurité, 
            pour des images à la fois puissantes, nerveuses et captivantes.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/loki/12-loki.webp"
            },
            {
                src: "/webp/fuji/recipes/loki/16-loki.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "Auto<br/>R: +3 / B: -5",
                "Couleur Chrome": "Off",
                "Couleur Chrome FX Bleue": "Faible (X-Trans V)<br/>Off (X-Trans IV)",
                "Effet de Grain": "Off",
                "Plage dynamique": "DR100",
                "Hautes lumières": "+4",
                "Ombres": "+4",
                "Couleur": "0",
                "Detail": "+3",
                "RB ISO Elevée": "-4",
                "Netteté": "+3",
                "ISO": "Auto<br/>jusqu'à ISO 3200",
                "Compensation Exp.": "+-2/3",
            },
        ]
    },
    { /* Monochrome Kodachrome */
        slug: "monochrome-kodachrome",
        title: "Monochrome Kodachrome",
        tags: ['bw', 'acros'],
        shortDesc: `Rendu granuleux et contrasté. Intemporel. Tons profonds et contrastés. Idéal pour la photographie de rue et portraits`,
        description: `<p>La recette <strong>Monochrome Kodakchrome (Acros+R)</strong> s’inspire des films noir et blanc classiques avec un rendu granuleux et contrasté, 
            offrant un style dramatique et intemporel aux images.</p>
            <p>Les tons sont <strong>profonds et contrastés</strong> : les hautes lumières sont accentuées pour plus de brillance, 
            tandis que les ombres sont légèrement assombries pour renforcer le relief. Le grain prononcé renforce l’aspect argentique et authentique.</p>
            <p>Cette recette est idéale pour la photographie de rue, de portraits et de scènes en basse lumière, 
            où le rendu monochrome intense et la texture granuleuse apportent une forte personnalité aux images.</p>
            <p>Sur le plan émotionnel, <em>Monochrome Kodakchrome (Acros+R)</em> évoque la nostalgie, la profondeur et une esthétique classique. 
            Elle invite à capturer les contrastes et les émotions avec intensité, en conservant un style élégant et intemporel.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/monochrome-kodachrome/4-monochrome-kodachrome.webp"
            },
            {
                src: "/webp/fuji/recipes/monochrome-kodachrome/7-monochrome-kodachrome.webp"
            },
            {
                src: "/webp/fuji/recipes/monochrome-kodachrome/8-monochrome-kodachrome.webp"
            },
            {
                src: "/webp/fuji/recipes/monochrome-kodachrome/9-monochrome-kodachrome.webp"
            },
            {
                src: "/webp/fuji/recipes/monochrome-kodachrome/11-monochrome-kodachrome.webp"
            },
            {
                src: "/webp/fuji/recipes/monochrome-kodachrome/12-monochrome-kodachrome.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Acros+R", 
                "Balance des blancs": "AWB<br/>R: 0 / B: +9", 
                "Couleur Chrome": "Off", 
                "Couleur Chrome FX Bleue": "Off", 
                "Effet de Grain": "Fort", 
                "Plage dynamique": "DR200", 
                "Hautes lumières": "+4", 
                "Ombres": "-2", 
                "Detail": "+1", 
                "RB ISO Elevée": "-4", 
                "Netteté": "+1", 
                "Toning": "0", 
                "ISO": "Auto<br/>3200 à 12800", 
                "Compensation Exp.": "-1/3 à +2/3",
            }
        ]
    },
    { /* Moody Metropolis 500T */
        slug: "moodymetropolis-500t",
        title: "Moody Metropolis 500T",
        tags: ['green', 'classic-negative', 'night'],
        shortDesc: `Esthétique urbaine nocturne. Dominante froide. Vert profond. Couleurs chaudes désaturées. Idéal pour la photo avec de l'éclairage nocturne.`,
        description: `<p>La recette <strong>Moody Metropolis 500T</strong> plonge dans l’esthétique 
            urbaine et cinématique des nuits éclairées au néon. Inspirée du film tungstène 
            Kodak Vision3 500T, elle capture la texture et les teintes froides des scènes 
            nocturnes en lumière artificielle : verts profonds, cyan métalliques et tons 
            chair légèrement désaturés. Les ombres se teintent d’un bleu-vert subtil, tandis 
            que les hautes lumières conservent une lueur douce, presque argentée.</p>
            <p>Basée sur la simulation <em>Classic Negative</em>, cette recette offre un contraste 
            contenu et une grande richesse tonale dans les basses lumières. Elle excelle sous 
            les éclairages urbains — néons, lampadaires, vitrines — et dans les environnements 
            industriels ou pluvieux. Le rendu global, légèrement froid et granuleux, évoque 
            la pellicule cinéma et donne une profondeur dramatique aux scènes nocturnes.</p>
            <p>Sur le plan émotionnel, <em>Moody Metropolis 500T</em> traduit la solitude, la 
            tension et la beauté poétique des villes la nuit. C’est une recette idéale pour 
            capturer les ambiances sombres, les reflets de pluie, ou les portraits baignés 
            dans la lumière artificielle. Chaque image semble issue d’un film rétro-futuriste, 
            empreint de mélancolie et de mystère urbain.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/moodymetropolis-500t/5-moodymetropolis-500t.webp"
            },
            {
                src: "/webp/fuji/recipes/moodymetropolis-500t/6-moodymetropolis-500t.webp"
            },
            {
                src: "/webp/fuji/recipes/moodymetropolis-500t/7-moodymetropolis-500t.webp"
            },
            {
                src: "/webp/fuji/recipes/moodymetropolis-500t/11-moodymetropolis-500t.webp"
            },
            {
                src: "/webp/fuji/recipes/moodymetropolis-500t/12-moodymetropolis-500t.webp"
            },
            {
                src: "/webp/fuji/recipes/moodymetropolis-500t/13-moodymetropolis-500t.webp"
            },
            {
                src: "/webp/fuji/recipes/moodymetropolis-500t/14-moodymetropolis-500t.webp"
            },
            {
                src: "/webp/fuji/recipes/moodymetropolis-500t/15-moodymetropolis-500t.webp"
            },
            {
                src: "/webp/fuji/recipes/moodymetropolis-500t/16-moodymetropolis-500t.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "Fluorescent 2<br/>R: -3 / B: -6",
                "Couleur Chrome": "Fort",
                "Couleur Chrome FX Bleue": "Faible",
                "Effet de Grain": "Faible<br/>Petit",
                "Plage dynamique": "DR400",
                "Hautes lumières": "-1",
                "Ombres": "0",
                "Couleur": "0",
                "Detail": "0",
                "RB ISO Elevée": "-4",
                "Netteté": "0",
                "ISO": "Auto<br/>jusqu'à 6400",
                "Compensation Exp.": "0 à +2/3",
            },
        ]
    },
    { /* Neon Obscura */
        slug: "neon-obscura",
        title: "Neon Obscura",
        tags: ['orange', 'soft', 'night', 'classic-negative'],
        shortDesc: `Atmosphère nocturne et poétique. Lumières néon adoucies. Contrastes subtils. Teintes froides et mystérieuses.`,
        description: `<p>La recette <strong>Neon Obscura</strong> capture la magie des nuits urbaines baignées de néons, 
            offrant une esthétique à la fois douce et cinématographique. 
            Inspirée par les ambiances feutrées des ruelles éclairées de reflets colorés, 
            elle sublime les tons froids et les jeux de lumière artificielle avec élégance.</p>
            <p>Les <strong>hautes lumières sont adoucies</strong> pour préserver la texture des sources lumineuses, 
            tandis que les ombres conservent une certaine profondeur sans se perdre dans le noir. 
            La <strong>palette chromatique désaturée</strong> atténue les couleurs vives, 
            créant une harmonie visuelle empreinte de mystère. 
            Les bleus et violets dominent, contrastant avec des touches chaudes issues des enseignes lumineuses.</p>
            <p>Idéale pour la <strong>photographie nocturne, les scènes de rue ou les portraits sous lumière artificielle</strong>, 
            <em>Neon Obscura</em> révèle la beauté cachée des villes endormies. 
            Elle permet de jouer avec les reflets, les halos et les contrastes pour des rendus à la fois réalistes et poétiques.</p>
            <p>Sur le plan émotionnel, cette recette évoque la <em>solitude moderne, la rêverie et l’introspection</em>. 
            Elle invite à capturer la lumière dans l’obscurité, à révéler la douceur derrière le béton, 
            et à explorer la dimension onirique des nuits urbaines.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/neon-obscura/2-neon-obscura.webp"
            },
            {
                src: "/webp/fuji/recipes/neon-obscura/11-neon-obscura.webp"
            },
            {
                src: "/webp/fuji/recipes/neon-obscura/12-neon-obscura.webp"
            },
            {
                src: "/webp/fuji/recipes/neon-obscura/13-neon-obscura.webp"
            },
            {
                src: "/webp/fuji/recipes/neon-obscura/14-neon-obscura.webp"
            },
            {
                src: "/webp/fuji/recipes/neon-obscura/15-neon-obscura.webp"
            },
            {
                src: "/webp/fuji/recipes/neon-obscura/16-neon-obscura.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "5400K<br/>R: -2 / B: -1",
                "Couleur Chrome": "Fort",
                "Couleur Chrome FX Bleue": "Fort",
                "Effet de Grain": "Faible<br/>Petit",
                "Plage dynamique": "DR400",
                "Hautes lumières": "-1.5",
                "Ombres": "-0.5",
                "Couleur": "-2",
                "Detail": "-2",
                "RB ISO Elevée": "0",
                "Netteté": "0",
                "ISO": "Auto<br/>jusqu'à ISO 3200",
                "Compensation Exp.": "+2/3",
            },
        ]
    },
    { /* Timeless Negative */
        slug: "timeless-negative",
        title: "Timeless Negative",
        tags: ['orange', 'eterna'],
        shortDesc: `Doux et cinématographique. Tons chauds. Lumières accentuées. Ombres adoucies. Rendu agréable.`,
        description: `<p>La recette <strong>Timeless Negative</strong> s’inspire du rendu doux et cinématographique du film négatif classique, 
            capturant les nuances avec subtilité et élégance, tout en conservant une palette de couleurs réaliste.</p>
            <p>Les tons sont <strong>chauds et équilibrés</strong> : les hautes lumières sont légèrement accentuées, 
            tandis que les ombres sont adoucies, donnant un rendu agréable et harmonieux. 
            Les couleurs sont rehaussées avec discrétion, offrant des rouges et des verts nuancés, 
            et des bleus tempérés pour un look cinématographique.</p>
            <p>Cette recette est idéale pour la photographie de portraits, de paysages et de scènes urbaines, 
            où la subtilité des couleurs et la douceur des contrastes renforcent l’ambiance et la profondeur des images. 
            Elle excelle en lumière naturelle ou artificielle douce, apportant un caractère intemporel aux clichés.</p>
            <p>Sur le plan émotionnel, <em>Timeless Negative</em> évoque la nostalgie, la délicatesse et une esthétique cinématographique. 
            Elle invite à capturer la réalité avec finesse et élégance, tout en conférant aux images un aspect chaleureux et sophistiqué.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/timeless-negative/5-timeless-negative.webp"
            },
            {
                src: "/webp/fuji/recipes/timeless-negative/6-timeless-negative.webp"
            },
            {
                src: "/webp/fuji/recipes/timeless-negative/7-timeless-negative.webp"
            },
            {
                src: "/webp/fuji/recipes/timeless-negative/9-timeless-negative.webp"
            },
            {
                src: "/webp/fuji/recipes/timeless-negative/10-timeless-negative.webp"
            },
            {
                src: "/webp/fuji/recipes/timeless-negative/11-timeless-negative.webp"
            },
            {
                src: "/webp/fuji/recipes/timeless-negative/12-timeless-negative.webp"
            },
            {
                src: "/webp/fuji/recipes/timeless-negative/13-timeless-negative.webp"
            },
            {
                src: "/webp/fuji/recipes/timeless-negative/14-timeless-negative.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Eterna", 
                "Balance des blancs": "Auto<br/>R: +4 / B: -5", 
                "Couleur Chrome": "Fort", 
                "Couleur Chrome FX Bleue": "Faible", 
                "Effet de Grain": "Faible<br/>Petit", 
                "Plage dynamique": "DR200", 
                "Hautes lumières": "+1", 
                "Ombres": "-1", 
                "Couleur": "+3", 
                "Detail": "-2", 
                "RB ISO Elevée": "-4", 
                "Netteté": "0", 
                "ISO": "Auto<br/>jusqu'à ISO 6400", 
                "Compensation Exp.": "-1/3 à +1/3",
            }
        ]
    },
    { /* Xpro '62 */
        slug: "xpro-62",
        title: "Xpro '62",
        tags: ['green', 'saturated', 'classic-negative'],
        shortDesc: `Expressif. Couleurs intenses. Rouge et bleu prononcés. Contraste marqué. Rendu riche.`,
        description: `<p>La recette <strong>XPro "62"</strong> s’inspire des films négatifs expérimentaux pour un rendu riche, vibrant et cinématographique, 
            offrant des couleurs intenses et un contraste marqué tout en conservant une texture organique.</p>
            <p>Les tons sont <strong>dynamiques et saturés</strong> : les hautes lumières sont accentuées pour donner de la luminosité, 
            tandis que les ombres restent neutres pour préserver les détails. Les couleurs, particulièrement les rouges et les bleus, 
            sont renforcées grâce aux effets Chrome, donnant un rendu très expressif et vivant.</p>
            <p>Cette recette est idéale pour la photographie de rue, de portraits et de paysages urbains, 
            où le grain prononcé et les couleurs vibrantes apportent un caractère unique et artistique aux images.</p>
            <p>Sur le plan émotionnel, <em>XPro "62"</em> évoque l’énergie, la créativité et une esthétique audacieuse. 
            Elle invite à explorer la couleur et le contraste pour capturer des images mémorables et chargées de personnalité.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/xpro-62/5-xpro-62.webp"
            },
            {
                src: "/webp/fuji/recipes/xpro-62/15-xpro-62.webp"
            },
            {
                src: "/webp/fuji/recipes/xpro-62/16-xpro-62.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative", 
                "Balance des blancs": "Auto<br/>R: -3 / B: -9", 
                "Couleur Chrome": "Fort", 
                "Couleur Chrome FX Bleue": "Faible", 
                "Effet de Grain": "Fort<br/>Grand", 
                "Plage dynamique": "DR400", 
                "Hautes lumières": "+3", 
                "Ombres": "0", 
                "Couleur": "+4", 
                "Detail": "-4", 
                "RB ISO Elevée": "-4", 
                "Netteté": "-4", 
                "ISO": "Auto<br/>jusqu'à ISO 6400", 
                "Compensation Exp.": "0 à +1/3",
            }
        ]
    },
    { /* Yashica Golden 80s */
        slug: "yashica-golden80s",
        title: "Yashica Golden 80s",
        tags: ['orange', 'soft', 'classic-negative', 'daylight'],
        shortDesc: `Jour et fin de journée. Lumineux. Rendu chaud et vaporeux. Atmosphère dorée et nostalgique. Couleurs froides pastels.`,
        description: `<p>La recette <strong>Yashica Golden 80s</strong> est une ode lumineuse à la photographie 
            couleur des années 1980, inspirée des rendus chauds et légèrement vaporeux des appareils 
            compacts Yashica et des pellicules de cette époque. Elle baigne les images d’une 
            atmosphère dorée et nostalgique, avec des tons ambrés et des reflets de miel qui rappellent 
            la douceur du soleil de fin d’été. Les rouges et les oranges dominent subtilement, 
            tandis que les bleus se fondent dans une teinte laiteuse, presque pastel.</p>
            <p>Basée sur la simulation <em>Classic Negative</em>, cette recette offre une balance des couleurs 
            chaude et une saturation équilibrée, parfaite pour les journées lumineuses ou la lumière dorée 
            du soir. Les contrastes restent doux, favorisant un rendu harmonieux et légèrement rêveur. 
            Le grain discret et la texture veloutée renforcent cette impression d’image analogique, 
            comme une photo retrouvée dans un vieil album.</p>
            <p>Sur le plan émotionnel, <em>Yashica Golden 80s</em> évoque la nostalgie radieuse, 
            la légèreté et les souvenirs d’une époque insouciante. C’est une recette idéale pour 
            capturer la chaleur du quotidien, les instants baignés de lumière naturelle ou les 
            ambiances vintage empreintes de douceur et de poésie. Elle transforme la lumière en or, 
            et chaque image en fragment de mémoire ensoleillée.</p>`,
        images: [
            {
                src: "/webp/fuji/recipes/yashica-golden80s/2-yashica-golden80s.webp"
            },
            {
                src: "/webp/fuji/recipes/yashica-golden80s/3-yashica-golden80s.webp"
            },
            {
                src: "/webp/fuji/recipes/yashica-golden80s/4-yashica-golden80s.webp"
            },
            {
                src: "/webp/fuji/recipes/yashica-golden80s/5-yashica-golden80s.webp"
            },
            {
                src: "/webp/fuji/recipes/yashica-golden80s/6-yashica-golden80s.webp"
            },
            {
                src: "/webp/fuji/recipes/yashica-golden80s/7-yashica-golden80s.webp"
            },
            {
                src: "/webp/fuji/recipes/yashica-golden80s/8-yashica-golden80s.webp"
            },
            {
                src: "/webp/fuji/recipes/yashica-golden80s/9-yashica-golden80s.webp"
            },
            {
                src: "/webp/fuji/recipes/yashica-golden80s/10-yashica-golden80s.webp"
            },
            {
                src: "/webp/fuji/recipes/yashica-golden80s/11-yashica-golden80s.webp"
            },
            {
                src: "/webp/fuji/recipes/yashica-golden80s/12-yashica-golden80s.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "Jour<br/>R: +4 / B: -2",
                "Couleur Chrome": "Fort",
                "Couleur Chrome FX Bleue": "Faible",
                "Effet de Grain": "Fort<br/>Petit",
                "Plage dynamique": "DR400",
                "Hautes lumières": "-1",
                "Ombres": "+1.5",
                "Couleur": "+3",
                "Detail": "-1",
                "RB ISO Elevée": "-4",
                "Netteté": "0",
                "ISO": "640<br/>jusqu'à 6400",
                "Compensation Exp.": "0 à +2/3",
            },
        ]
    },
]

export default recipes