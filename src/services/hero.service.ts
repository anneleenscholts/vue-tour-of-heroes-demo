import type { Hero } from "@/components/models";
import { computed, ref, toRaw, type Ref } from "vue";

const heroes: Ref<Hero[]> = ref([
    { number: 11, name: "Mr. Nice" },
    { number: 12, name: "Narco" },
    { number: 13, name: "Bombasto" },
    { number: 14, name: "Celeritas" },
    { number: 15, name: "Magneta" },
    { number: 16, name: "RubberMan" },
    { number: 17, name: "Dynama" },
    { number: 18, name: "Dr IQ" },
    { number: 19, name: "Magma" },
    { number: 20, name: "Tornado" },
]);

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

    const addHero = (name: string) => {
        const maxNumber = Math.max(...heroes.value.map(h => h.number));
        const newHero: Hero = { number: maxNumber + 1, name };
        heroes.value.push(newHero);
        saveHeroes();
    }

    const saveHeroes = () => {
        localStorage.setItem("heroes", JSON.stringify(heroes.value));
    }

    const loadHeroes = () => {
        const savedHeroes = localStorage.getItem("heroes");
        if(savedHeroes) {
            heroes.value = JSON.parse(savedHeroes);
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