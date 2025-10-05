import { Bold, Italic, Strikethrough } from "lucide-vue-next";
import type { ConfigToolbar } from "../types/toolbar.types";

export const configToolbar: ConfigToolbar = {
	buttons: [
		{
			label: "Bold",
			icon: Bold,
			action: (e) => e.chain().focus().toggleBold().run(),
			isActive: (e) => e.isActive("bold"),
			can: (e) => e.can().chain().focus().toggleBold().run()
		},
		{
			label: "Italic",
			icon: Italic,
			action: (e) => e.chain().focus().toggleItalic().run(),
			isActive: (e) => e.isActive("italic"),
			can: (e) => e.can().chain().focus().toggleItalic().run()
		},
		{
			label: "Strike",
			icon: Strikethrough,
			action: (e) => e.chain().focus().toggleStrike().run(),
			isActive: (e) => e.isActive("strike"),
			can: (e) => e.can().chain().focus().toggleStrike().run()
		}
	],
	textStyles: [
		{
			id: "simple",
			label: "Обычный текст",
			component: "span",
			action: (e) => e.chain().focus().setParagraph().run()
		},
		{
			id: "heading1",
			label: "Заголовок 1",
			component: "h1",
			action: (e) => e.chain().focus().toggleHeading({ level: 1 }).run()
		},
		{
			id: "heading2",
			label: "Заголовок 2",
			component: "h2",
			action: (e) => e.chain().focus().toggleHeading({ level: 2 }).run()
		},
		{
			id: "heading3",
			label: "Заголовок 3",
			component: "h3",
			action: (e) => e.chain().focus().toggleHeading({ level: 3 }).run()
		},
		{
			id: "heading4",
			label: "Заголовок 4",
			component: "h4",
			action: (e) => e.chain().focus().toggleHeading({ level: 4 }).run()
		}
	]
} as const;
