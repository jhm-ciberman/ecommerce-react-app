import heroImage from '@assets/images/hero-image.jpg';

export default function HeroImage() {
    /* Hero image by Kristina Petrick https://unsplash.com/es/fotos/mujer-de-pie-en-falda-blanca-con-hombro-de-cuero-gris-b-liJ5irOt8BM */

    // TODO: Add a typewriter effect to the hero image
    // The first text should be "Embrace your luxury with..." and the rest of the texts should cycle the texts in the array below
    // The last text should be "Laretto", our amazing brand name. And then end there. The cycle could start again after a few seconds
    // so the user has time to admire the excelence of Laretto.
    const texts = [
        'Style',
        'Flair',
        'Elegance',
        'Class',
        'Taste',
        'Excellence',
        'Grace',
        'Laretto',
    ];

    return (
        <header
            className="relative h-[20rem] overflow-hidden bg-slate-400 bg-cover object-bottom md:h-[30rem] xl:h-[45rem]"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-700/30 to-transparent">
                <div className="container absolute inset-0 mx-auto flex h-full w-full items-center justify-center sm:justify-end">
                    <h1 className="
                            mr-0 max-w-sm text-center font-display leading-snug tracking-widest text-white [text-shadow:_0_0_2em_rgba(0,0,0,0.8)]
                            sm:mr-20
                            md:mr-36 md:[text-shadow:_0_0_3em_rgba(0,0,0,0.6)]
                            lg:mr-40 lg:max-w-none"
                    >
                        <span aria-hidden="true" className="block text-2xl sm:text-3xl md:text-4xl lg:mb-4 lg:text-5xl">Embrace your</span>
                        <span aria-hidden="true" className="block text-2xl sm:text-3xl md:text-4xl lg:mb-4 lg:text-5xl">luxury with</span>
                        <span aria-hidden="true" className="block text-3xl tracking-widest text-primary-200 sm:text-4xl md:text-6xl lg:text-7xl">{texts[0]}</span>

                        { /* I don't want to mess with screen readers with the typewriter effect, so I'm just going to be nice to SR users and show them the full text */}
                        <span aria-hidden="false" className="sr-only">
                            {texts.slice(1).map((text) => `Embrace your luxury with ${text}.`)}
                        </span>
                    </h1>
                </div>
            </div>
        </header>
    );
}
