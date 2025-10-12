import type { Navigation } from "../types/navigation.types";

export const configNavigation:Navigation = {
    items: [
        {
            id: "file",
            label: "Файл",
            onClick: () => {}
        },
        {
            id: "edit",
            label: "Правка",
            onClick: () => {}
        },
        {
            id: "vies",
            label: "Вид",
            onClick: () => {}
        },
        {
            id: "insert",
            label: "Вставка",
            onClick: () => {}
        },
        {
            id: "format",
            label: "Формат",
            onClick: () => {}
        },
        {
            id: "tools",
            label: "Инструменты",
            onClick: () => {}
        },
        {
            id: "Extends",
            label: "Расширения",
            onClick: () => {}
        },
        {
            id: "help",
            label: "Справка",
            onClick: () => {}
        },
    ]
} as const