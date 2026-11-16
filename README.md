# A whale breaching through a sea of clouds

The image shows a giant humpback whale breaching through a sea of clouds above a small town at dusk. The whale rises out of the glowing cloud layer with water streaming off its body, while warm evening light washes over the rooftops below and the sky fades from amber to deep blue. It is a moment of pure scale and surprise — something impossibly large appearing where it should not be, right over an ordinary town settling in for the night.

The entry program is main.ts. When run, it copies entry.png to /output/entry.png byte for byte, creating /output first if it does not exist yet. The copy is fully deterministic — no timestamps, no randomness and no network access — so running it twice produces two identical files.
