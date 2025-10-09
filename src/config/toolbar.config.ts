import { Bold, Italic, Redo2, Strikethrough, Underline, Undo2 } from "lucide-vue-next";
import type { ConfigToolbar } from "../types/toolbar.types";

export const configToolbar: ConfigToolbar = {
	basics: [
		{
			label: "Undo",
			icon: Undo2,
			action: (e) => e.chain().focus().undo().run(),
			can: (e) => e.can().chain().focus().undo().run(),
			promt: "Отменить (Ctrl + Z)"
		},
		{
			label: "Redo",
			icon: Redo2,
			action: (e) => e.chain().focus().redo().run(),
			can: (e) => e.can().chain().focus().redo().run(),
			promt: "Повторить (Ctrl + Y)"
		}
	],
	buttons: [
		{
			label: "Bold",
			icon: Bold,
			action: (e) => e.chain().focus().toggleBold().run(),
			isActive: (e) => e.isActive("bold"),
			can: (e) => e.can().chain().focus().toggleBold().run(),
			promt: "Полужирный (Ctrl + B)"
		},
		{
			label: "Italic",
			icon: Italic,
			action: (e) => e.chain().focus().toggleItalic().run(),
			isActive: (e) => e.isActive("italic"),
			can: (e) => e.can().chain().focus().toggleItalic().run(),
			promt: "Курсив (Ctrl + I)"
		},
		{
			label: "Underline",
			icon: Underline,
			action: (e) => e.chain().focus().toggleUnderline().run(),
			isActive: (e) => e.isActive('underline'),
			can: (e) => e.can().chain().focus().toggleUnderline().run(),
			promt: "Курсив (Ctrl + I)"
		},
		{
			label: "Strike",
			icon: Strikethrough,
			action: (e) => e.chain().focus().toggleStrike().run(),
			isActive: (e) => e.isActive("strike"),
			can: (e) => e.can().chain().focus().toggleStrike().run(),
			promt: "Подчёркнутый (Ctrl + U)"
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
