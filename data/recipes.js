const recipes = [
    { /* 1960 Chrome */
        slug: "1960-chrome",
        title: "1960 Chrome",
        description: `<p>La recette <strong>1960 Chrome</strong> s’inspire des esthétiques argentiques des années 60, 
            marquées par des contrastes doux, des couleurs légèrement désaturées et une texture granuleuse 
            qui évoque le charme du cinéma classique.</p>
            <p>Les tons sont <strong>froids et nuancés</strong> : les bleus et cyans dominent la palette, 
            tandis que les rouges et jaunes restent subtils mais expressifs. 
            Les hautes lumières adoucies et les ombres légères offrent un équilibre feutré, 
            renforcé par l’effet <em>Bleach Bypass</em> qui accentue la profondeur et ajoute 
            un caractère dramatique aux images.<br/>
            Le grain fort et de grande taille contribue à une sensation organique, 
            proche de la pellicule argentique de l’époque.</p>
            <p>Cette recette excelle dans les environnements urbains, les portraits artistiques 
            ou les scènes de rue capturées sous éclairage artificiel ou fluorescent. 
            Elle donne aux photographies une allure rétro, tout en conservant un rendu cinématographique moderne.</p>
            <p>Sur le plan émotionnel, le <em>1960 Chrome</em> évoque la nostalgie, 
            l’élégance discrète et la puissance des images argentiques. 
            C’est une recette qui transforme chaque scène en une réminiscence intemporelle, 
            à mi-chemin entre mémoire visuelle et esthétique ciné-classique.</p>`,
        images: [
            {
                src: "/1960-chrome/1960-chrome-1.webp"
            },
            {
                src: "/1960-chrome/1960-chrome-2.webp"
            },
            {
                src: "/1960-chrome/1960-chrome-3.webp"
            },
            {
                src: "/1960-chrome/1960-chrome-4.webp"
            },
            {
                src: "/1960-chrome/1960-chrome-5.webp"
            },
            {
                src: "/1960-chrome/1960-chrome-6.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Eterna Bleach Bypass",
                "Balance des blancs": "Fluorescent 1<br/>Rouge -2 / Bleu -4",
                "Effet de Grain": "Fort - Gros",
                "Couleur Effet Chrome": "Fort",
                "Couleur Chrome Effet FX Bleue": "Off (X-Trans V) / Faible (X-Trans IV)",
                "Plage dynamique": "DR400",
                "Hautes lumières": "-2",
                "Ombres": "-1",
                "Couleur": "+2",
                "Detail": "-2",
                "RB ISO Elevée": "-4",
                "Netteté": "-1",
                "ISO": "Auto / jusqu'à ISO 6400",
                "Compensation Exp.": "+1/3 jusqu'à +1",
            },
        ]
    },
    { /* Cinematic Gold */
        slug: "cinamtic-gold",
        title: "Cinematic Gold",
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
                src: "/cinematic-gold/cinematic-gold-1.webp"
            },
            {
                src: "/cinematic-gold/cinematic-gold-2.webp"
            },
            {
                src: "/cinematic-gold/cinematic-gold-3.webp"
            },
            {
                src: "/cinematic-gold/cinematic-gold-4.webp"
            },
            {
                src: "/cinematic-gold/cinematic-gold-5.webp"
            },
            {
                src: "/cinematic-gold/cinematic-gold-6.webp"
            },
            {
                src: "/cinematic-gold/cinematic-gold-7.webp"
            },
            {
                src: "/cinematic-gold/cinematic-gold-8.webp"
            },
            {
                src: "/cinematic-gold/cinematic-gold-9.webp"
            },
            {
                src: "/cinematic-gold/cinematic-gold-10.webp"
            },
            {
                src: "/cinematic-gold/cinematic-gold-11.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Effet de Grain": "Fort - Petit",
                "Couleur Effet Chrome": "Off",
                "Couleur Chrome Effet FX Bleue": "Off",
                "Balance des blancs": "Jour<br/>Rouge +4 / Bleu -5",
                "Plage dynamique": "DR400",
                "Hautes lumières": "0",
                "Ombres": "0",
                "Couleur": "+3",
                "Netteté": "-2",
                "RB ISO Elevée": "-4",
                "Detail": "-2",
                "ISO": "640 jusqu'à 1600",
                "Compensation Exp.": "0 à 1",
            },
        ]
    },
    { /* CineStill 800T */
        slug: "cinestill-800t",
        title: "CineStill 800T",
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
                src: "/cinestill-800t/cinestill800t-1.webp"
            },
            {
                src: "/cinestill-800t/cinestill800t-2.webp"
            },
            {
                src: "/cinestill-800t/cinestill800t-3.webp"
            },
            {
                src: "/cinestill-800t/cinestill800t-4.webp"
            },
            {
                src: "/cinestill-800t/cinestill800t-5.webp"
            },
            {
                src: "/cinestill-800t/cinestill800t-6.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Eterna",
                "Balance des blancs": "Fluorescent 3<br/>Rouge -6 / Bleu -4",
                "Effet de Grain": "Fort - Gros",
                "Couleur Effet Chrome": "Fort",
                "Couleur Chrome Effet FX Bleue": "Faible",
                "Plage dynamique": "DR400",
                "Hautes lumières": "0",
                "Ombres": "+2",
                "Couleur": "+4",
                "Detail": "-5",
                "RB ISO Elevée": "-4",
                "Netteté": "-3",
                "ISO": "Auto / jusqu'à ISO 6400",
                "Compensation Exp.": "-1/3 jusqu'à +2/3",
            },
        ]
    },
    { /* Fujicolor C200 */
        slug: "fujicolor-c200",
        title: "Fujicolor C200",
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
                src: "/fujicolor-c200/fujicolor-c200-1.webp"
            },
            {
                src: "/fujicolor-c200/fujicolor-c200-2.webp"
            },
            {
                src: "/fujicolor-c200/fujicolor-c200-3.webp"
            },
            {
                src: "/fujicolor-c200/fujicolor-c200-4.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "Auto<br/>+1 Rouge / -2 Bleu",
                "Effet de Grain": "Faible - Petit",
                "Couleur Effet Chrome": "Faible",
                "Couleur Chrome Effet FX Bleue": "Off",
                "Plage dynamique": "DR200",
                "Hautes lumières": "-1.0",
                "Ombres": "-2.0",
                "Couleur": "+1",
                "Detail": "-2",
                "RB ISO Elevée": "-4",
                "Netteté": "0",
                "ISO": "Auto / jusqu'à ISO 6400",
                "Compensation Exp.": "0 à +2/3",
            },
        ],
    },
    { /* Fujicolor Natura 1600 */
        slug: "fuji-natura-1600",
        title: "Fujicolor Natura 1600",
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
                src: "/fujicolor-natura-1600/fujicolor-natura-1600-1.webp"
            },
            {
                src: "/fujicolor-natura-1600/fujicolor-natura-1600-2.webp"
            },
            {
                src: "/fujicolor-natura-1600/fujicolor-natura-1600-3.webp"
            },
            {
                src: "/fujicolor-natura-1600/fujicolor-natura-1600-4.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "5500K<br/>Rouge -1 / Bleu -2",
                "Effet de Grain": "Fort - Grand",
                "Couleur Effet Chrome": "Fort",
                "Couleur Chrome Effet FX Bleue": "Faible",
                "Plage dynamique": "DR400",
                "Hautes lumières": "-1.5",
                "Ombres": "+1.5",
                "Couleur": "-2",
                "Detail": "-4",
                "RB ISO Elevée": "-4",
                "Netteté": "-2",
                "ISO": "Auto / jusqu'à ISO 6400",
                "Compensation Exp.": "+1/3 jusqu'à +1"
            }
        ]
    },
    { /* Fujifilm Supéria X-Tra 400 */
        slug: "fuji-superia-xtra-400",
        title: "Fujifilm Superia X-Tra 400",
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
                src: "/fujifilm-superia-xtra-400/fujifilm-superia-xtra-400-1.webp"
            },
            {
                src: "/fujifilm-superia-xtra-400/fujifilm-superia-xtra-400-2.webp"
            },
            {
                src: "/fujifilm-superia-xtra-400/fujifilm-superia-xtra-400-3.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "Auto<br/>Rouge +3 / Bleu -5",
                "Effet de Grain": "Fort - Petit",
                "Couleur Effet Chrome": "Off",
                "Couleur Chrome Effet FX Bleue": "Fort",
                "Plage dynamique": "DR400",
                "Hautes lumières": "0",
                "Ombres": "-1",
                "Couleur": "+4",
                "Detail": "-1",
                "RB ISO Elevée": "-4",
                "Netteté": "-2",
                "ISO": "Auto / jusqu'à ISO 6400",
                "Compensation Exp.": "0 à +1",
            },
        ],
    },
    { /* Ilford FP4 Plus 125 */
        slug: "ilford-fp4-plus-125",
        title: "Ilford FP4 Plus 125",
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
                src: "/ilfordfp4plus-125/ilfordfp4plus125-1.webp"
            },
            {
                src: "/ilfordfp4plus-125/ilfordfp4plus125-2.webp"
            },
            {
                src: "/ilfordfp4plus-125/ilfordfp4plus125-3.webp"
            },
            {
                src: "/ilfordfp4plus-125/ilfordfp4plus125-4.webp"
            },
            {
                src: "/ilfordfp4plus-125/ilfordfp4plus125-5.webp"
            },
            {
                src: "/ilfordfp4plus-125/ilfordfp4plus125-6.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Monochrome",
                "Balance des blancs": "Jour<br/>Rouge +6 / Bleu -8",
                "Effet de Grain": "Faible - Grand",
                "Couleur Effet Chrome": "Off",
                "Couleur Chrome Effet FX Bleue": "Off",
                "Plage dynamique": "DR200",
                "Hautes lumières": "-0.5",
                "Ombres": "-1.5",
                "Couleur": "0",
                "Detail": "+2",
                "RB ISO Elevée": "-4",
                "Netteté": "0",
                "ISO": "Auto / jusqu'à ISO 6400",
                "Compensation Exp.": "-1 jusqu'à -1/3"
            }
        ]
    },
    { /* Kodachrome 64 */
        slug: "kodachrome-64",
        title: "Kodachrome 64",
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
                src: "/kodachrome-64/kodachrome-1.webp"
            },
            {
                src: "/kodachrome-64/kodachrome-2.webp"
            },
            {
                src: "/kodachrome-64/kodachrome-3.webp"
            },
            {
                src: "/kodachrome-64/kodachrome-4.webp"
            },
            {
                src: "/kodachrome-64/kodachrome-5.webp"
            },
            {
                src: "/kodachrome-64/kodachrome-6.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Chrome",
                "Balance des blancs": "Jour<br/>Rouge +2 / Bleu -5",
                "Effet de Grain": "Faible - Petit",
                "Couleur Effet Chrome": "Fort",
                "Couleur Chrome Effet FX Bleue": "Off",
                "Plage dynamique": "DR200",
                "Hautes lumières": "0",
                "Ombres": "+0.5",
                "Couleur": "+2",
                "Detail": "+3",
                "RB ISO Elevée": "-4",
                "Netteté": "+1",
                "ISO": "Auto / jusqu'à ISO 6400",
                "Compensation Exp.": "0 jusqu'à +2/3",
            },
        ]
    },
    { /* Kodak Gold 200 */
        slug: "kodakgold-200",
        title: "Kodak Gold 200",
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
                src: "/kodak-gold-200/kodak-gold-200-1.jpg"
            },
            {
                src: "/kodak-gold-200/kodak-gold-200-2.webp"
            },
            {
                src: "/kodak-gold-200/kodak-gold-200-3.webp"
            },
            {
                src: "/kodak-gold-200/kodak-gold-200-4.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Chrome",
                "Balance des blancs": "Jour<br/>Rouge +4 / Bleu -5",
                "Effet de Grain": "Fort - Petit",
                "Couleur Effet Chrome": "Faible",
                "Couleur Chrome Effet FX Bleue": "Off",
                "Plage dynamique": "DR400",
                "Hautes lumières": "-1.5",
                "Ombres": "+0.5",
                "Couleur": "+3",
                "Detail": "-2",
                "RB ISO Elevée": "-4",
                "Netteté": "-2",
                "ISO": "Auto / jusqu'à ISO 6400",
                "Compensation Exp.": "+2/3 jusqu'à +1",
            },
        ],
    },
    { /* Kodak Portra 400 */
        slug: "kodakportra-400",
        title: "Kodak Portra 400",
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
                src: "/kodak-portra-400/kodak-portra-400-1.webp"
            },
            {
                src: "/kodak-portra-400/kodak-portra-400-2.webp"
            },
            {
                src: "/kodak-portra-400/kodak-portra-400-3.webp"
            },
            {
                src: "/kodak-portra-400/kodak-portra-400-4.webp"
            },
            {
                src: "/kodak-portra-400/kodak-portra-400-5.webp"
            },
            {
                src: "/kodak-portra-400/kodak-portra-400-6.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Chrome",
                "Balance des blancs": "5200K<br/>Rouge +1 / Bleu -6",
                "Effet de Grain": "Fort - Petit",
                "Couleur Effet Chrome": "Fort",
                "Couleur Chrome Effet FX Bleue": "Off",
                "Plage dynamique": "DR400",
                "Hautes lumières": "0",
                "Ombres": "-2",
                "Couleur": "+2",
                "Detail": "-2",
                "RB ISO Elevée": "-4",
                "Netteté": "-2",
                "ISO": "Auto / jusqu'à ISO 6400",
                "Compensation Exp.": "+1/3 jusqu'à +1",
            },
        ]
    },
    { /* Kodak T-Max P3200 */
        slug: "kodak-tmax-p3200",
        title: "Kodak T-Max P3200",
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
                src: "/kodak-tmax-p3200/kodak-tmax-p3200-1.webp"
            },
            {
                src: "/kodak-tmax-p3200/kodak-tmax-p3200-2.webp"
            },
            {
                src: "/kodak-tmax-p3200/kodak-tmax-p3200-3.webp"
            },
            {
                src: "/kodak-tmax-p3200/kodak-tmax-p3200-4.webp"
            },
            {
                src: "/kodak-tmax-p3200/kodak-tmax-p3200-5.webp"
            },
            {
                src: "/kodak-tmax-p3200/kodak-tmax-p3200-6.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Acros (ou Acros+Y / Acros+R / Acros+G)",
                "Balance des blancs": "5500K<br/>Rouge +4 / Bleu +7",
                "Effet de Grain": "Fort - Grand",
                "Couleur Effet Chrome": "Off",
                "Couleur Chrome Effet FX Bleue": "Off",
                "Plage dynamique": "DR400",
                "Hautes lumières": "+1",
                "Ombres": "+3",
                "Monochrome Toning": "WC -1 / MG -1",
                "Detail": "+1",
                "RB ISO Elevée": "-4",
                "Netteté": "+2",
                "ISO": "Jusqu'à 12800",
                "Compensation Exp.": "0 jusqu'à +2/3"
            }
        ]
    },
    { /* Kodak Ultramax 400 */
        slug: "kodak-ultramax-400",
        title: "Kodak Ultramax 400",
        description: `<p>La recette Kodak Ultramax 400 offre un rendu lumineux, chaud et 
            légèrement saturé, avec des couleurs vives mais douces à la fois. Les rouges 
            et les jaunes ressortent avec chaleur et convivialité, les verts restent naturels 
            mais légèrement accentués, et les bleus conservent une profondeur agréable 
            sans être trop froids. Le contraste est modéré, ce qui permet aux détails 
            de se détacher tout en gardant une atmosphère douce et accessible.</p>
            <p>Grâce à sa sensibilité élevée, cette recette est très polyvalente : 
            elle fonctionne aussi bien en extérieur en plein soleil qu’en lumière plus faible, 
            tout en conservant une belle texture et un grain subtil qui rappelle 
            les pellicules classiques de Kodak.</p>
            <p>Sur le plan émotionnel, l’Ultramax 400 évoque la bonne humeur, 
            l’énergie et la spontanéité. Elle est parfaite pour capturer des moments de vie, 
            des voyages, des fêtes ou des instants du quotidien avec un rendu chaleureux et vivant. 
            Cette pellicule numérique recréée le charme des souvenirs instantanés, 
            apportant à chaque photo une sensation de joie simple et accessible, 
            comme un éclat de lumière dans la mémoire.</p>`,
        images: [
            {
                src: "/kodak-ultramax-400/kodak-ultramax-400-1.webp"
            },
            {
                src: "/kodak-ultramax-400/kodak-ultramax-400-2.webp"
            },
            {
                src: "/kodak-ultramax-400/kodak-ultramax-400-3.webp"
            },
            {
                src: "/kodak-ultramax-400/kodak-ultramax-400-4.webp"
            },
            {
                src: "/kodak-ultramax-400/kodak-ultramax-400-5.webp"
            },
            {
                src: "/kodak-ultramax-400/kodak-ultramax-400-6.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Chrome",
                "Balance des blancs": "Auto<br/>+1 Rouge / -5 Bleu",
                "Effet de Grain": "Fort - Grand",
                "Couleur Effet Chrome": "Faible",
                "Couleur Chrome Effet FX Bleue": "Off",
                "Plage dynamique": "DR-Auto",
                "Hautes lumières": "+1",
                "Ombres": "+1",
                "Couleur": "+4",
                "Detail": "0",
                "RB ISO Elevée": "-4",
                "Netteté": "+3",
                "ISO": "Auto jusqu'à ISO 6400",
                "Compensation Exp.": "+1/3 à +1",
            },
        ],
    },
    { /* Kodak Vision3 250D */
        slug: "kodak-vision3-250D",
        title: "Kodak Vision3 250D",
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
                src: "/kodak-vision3-250d/kodak-vision3-250d-1.webp"
            },
            {
                src: "/kodak-ultramax-400/kodak-ultramax-400-2.webp"
            },
            {
                src: "/kodak-ultramax-400/kodak-ultramax-400-3.webp"
            },
            {
                src: "/kodak-ultramax-400/kodak-ultramax-400-4.webp"
            },
            {
                src: "/kodak-ultramax-400/kodak-ultramax-400-5.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Chrome",
                "Balance des blancs": "Auto<br/>+1 Rouge / -5 Bleu",
                "Effet de Grain": "Fort - Grand",
                "Couleur Effet Chrome": "Faible",
                "Couleur Chrome Effet FX Bleue": "Off",
                "Plage dynamique": "DR-Auto",
                "Hautes lumières": "+1",
                "Ombres": "+1",
                "Couleur": "+4",
                "Detail": "0",
                "RB ISO Elevée": "-4",
                "Netteté": "+3",
                "ISO": "Auto jusqu'à ISO 6400",
                "Compensation Exp.": "+1/3 à +1",
            },
        ],
    },
    { /* Monochrome Kodachrome */
        slug: "monochrome-kodachrome",
        title: "Monochrome Kodachrome",
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
                src: "/monochrome-kodachrome/monochrome-kodachrome-1.webp"
            },
            {
                src: "/monochrome-kodachrome/monochrome-kodachrome-2.webp"
            },
            {
                src: "/monochrome-kodachrome/monochrome-kodachrome-3.webp"
            },
            {
                src: "/monochrome-kodachrome/monochrome-kodachrome-4.webp"
            },
            {
                src: "/monochrome-kodachrome/monochrome-kodachrome-5.webp"
            },
            {
                src: "/monochrome-kodachrome/monochrome-kodachrome-6.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Acros+R",
                "Balance des blancs": "AWB<br/>Rouge 0 / Bleu +9",
                "Effet de Grain": "Fort",
                "Couleur Effet Chrome": "Off",
                "Toning": "0",
                "Plage dynamique": "DR200",
                "Hautes lumières": "+4",
                "Ombres": "-2",
                "Detail": "+1",
                "RB ISO Elevée": "-4",
                "Netteté": "+1",
                "ISO": "Auto / 3200 à 12800",
                "Compensation Exp.": "-1/3 jusqu'à +2/3"
            }
        ]
    },
    { /* Timeless Negative */
        slug: "timeless-negative",
        title: "Timeless Negative",
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
                src: "/timeless-negative/timeless-negative-1.webp"
            },
            {
                src: "/timeless-negative/timeless-negative-2.webp"
            },
            {
                src: "/timeless-negative/timeless-negative-3.webp"
            },
            {
                src: "/timeless-negative/timeless-negative-4.webp"
            },
            {
                src: "/timeless-negative/timeless-negative-5.webp"
            },
            {
                src: "/timeless-negative/timeless-negative-6.webp"
            },
            {
                src: "/timeless-negative/timeless-negative-7.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Eterna",
                "Balance des blancs": "Auto<br/>Rouge +4 / Bleu -5",
                "Effet de Grain": "Faible - Petit",
                "Couleur Effet Chrome": "Fort",
                "Couleur Chrome Effet FX Bleue": "Faible",
                "Plage dynamique": "DR200",
                "Hautes lumières": "+1",
                "Ombres": "-1",
                "Couleur": "+3",
                "Detail": "-2",
                "RB ISO Elevée": "-4",
                "Netteté": "0",
                "ISO": "Auto / jusqu'à ISO 6400",
                "Compensation Exp.": "-1/3 jusqu'à +1/3"
            }
        ]
    },
    { /* Xpro '62 */
        slug: "xpro-62",
        title: "Xpro '62",
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
                src: "/xpro-64/xpro-64-1.webp"
            },
            {
                src: "/xpro-64/xpro-64-2.webp"
            },
            {
                src: "/xpro-64/xpro-64-3.webp"
            },
            {
                src: "/xpro-64/xpro-64-4.webp"
            },
            {
                src: "/xpro-64/xpro-64-5.webp"
            },
            {
                src: "/xpro-64/xpro-64-6.webp"
            },
            {
                src: "/xpro-64/xpro-64-7.webp"
            },
        ],
        settings: [
            {
                "Film simulation": "Classic Negative",
                "Balance des blancs": "Auto<br/>Rouge -3 / Bleu -9",
                "Effet de Grain": "Fort - Grand",
                "Couleur Effet Chrome": "Fort",
                "Couleur Chrome Effet FX Bleue": "Faible",
                "Plage dynamique": "DR400",
                "Hautes lumières": "+3",
                "Ombres": "0",
                "Couleur": "+4",
                "Detail": "-4",
                "RB ISO Elevée": "-4",
                "Netteté": "-4",
                "ISO": "Auto / jusqu'à ISO 6400",
                "Compensation Exp.": "0 jusqu'à +1/3"
            }
        ]
    },
];

export default recipes;