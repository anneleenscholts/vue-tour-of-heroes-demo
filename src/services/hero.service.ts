import type { Hero, HeroBackend } from "@/components/models";
import axios from "axios";
import { computed, ref, toRaw, type Ref } from "vue";

const heroes: Ref<Hero[]> = ref([]);

let selectedHero: Ref<Hero | null> = ref(null);

const useHeroes = () => {
    const topHeroes = computed(() => {
        return heroes.value.slice(-4);
    });

    const findHero = (heroID: number): Hero | null => {
        return structuredClone(toRaw(heroes.value.find((hero) => hero.number === heroID))) ?? null;
    }

    const updateHero = (hero: Hero) => {
        const index = heroes.value.findIndex((h) => h.number === hero.number);
        if (index !== -1) {
            heroes.value[index] = structuredClone(toRaw(hero));
        }
        saveHeroes();
    }

    const deleteHero = (heroID: number) => {
        heroes.value = heroes.value.filter((hero) =>
            hero.number !== heroID
        );
        if (selectedHero.value?.number === heroID) {
            selectedHero.value = null;
        }
        saveHeroes();
    }

    const addHero = async (name: string) => {
        try {
            return await axios.post("https://code-coaching.dev/api/heroes", { name: name }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
        } catch (error) {
            throw new Error('something went wrong');
        }
    }

    const saveHeroes = () => {
        localStorage.setItem("heroes", JSON.stringify(heroes.value));
    }

    const loadHeroes = async () => {
        try {
            const response = await axios.get<HeroBackend[]>("https://code-coaching.dev/api/heroes", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            heroes.value = response.data.map((heroBackend) => {
                const hero: Hero = {
                    number: heroBackend.id,
                    name: heroBackend.name
                };
                return hero;
            });
        } catch (error) {
            throw new Error(`Computer says no ${error}`);
        }
    }

    return {
        heroes,
        selectedHero,
        topHeroes,
        findHero,
        updateHero,
        deleteHero,
        addHero,
        loadHeroes
    }
}

export { useHeroes }