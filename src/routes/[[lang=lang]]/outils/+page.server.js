import { lireDepot, SECTIONS } from '$lib/server/depot.js';

export async function load() {
  const { version, guides } = await lireDepot();
  return {
    version,
    sections: SECTIONS.map((s) => ({
      ...s,
      guides: guides.filter((g) => g.dossier === s.dossier).map(({ slug, titre }) => ({ slug, titre }))
    })).filter((s) => s.guides.length)
  };
}
