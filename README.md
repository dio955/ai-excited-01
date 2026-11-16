# ai-excited-01 — Sky Whale

A colossal humpback whale breaching through a sea of clouds above a tiny
city at sunset, spray bursting off its back in the golden light. One
dominant subject, huge scale against a miniature skyline, caught at the
peak of the leap so the whole frame feels in motion.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` (1024×1024, JPEG bytes under the name `entry.png`)
into the output directory. It uses only the Node standard library, makes
no network calls, and is deterministic: every run writes the same bytes.
