import { computed, ref } from "vue";
import { getColorShade } from "../utils/color.utils";
import type { Palette } from "../types/colors.types";

interface UseColorProps {
    colors: Palette[];
    onSelectColor: (color:string) => void;
    defaultColor?: string;
}

export function useColor({ defaultColor, colors, onSelectColor}: UseColorProps) {
    const currentColor = ref<string>(defaultColor ?? "#000000");
    const hoveredColor = ref<string | null>(null);

    const paletteColors = computed(() => {
        const palette = colors.map((p) =>
            getColorShade(p.dark, p.light)
        ).flat();
        return palette;
    });

    const handleMouseEnter = (color: string) => {
        hoveredColor.value = color;
    };
    
    const handleMouseLeave = () => {
        hoveredColor.value = null;
    };

    const selectColor = (color: string) => {
        try {
            currentColor.value = color;
            onSelectColor(color);
        } catch (error) {
            console.error("Failed to set color:", error);
        }
    };

    return {
        currentColor,
        hoveredColor,
        paletteColors,
        handleMouseEnter,
        handleMouseLeave,
        selectColor
    }
}







