import type { Editor } from "@tiptap/vue-3";

export interface BaseEditorButton {
	label: string;
	action: (editor: Editor, style?: Record<string, any>) => void;
	isActive?: (editor: Editor) => boolean;
	can?: (editor: Editor) => boolean;
	promt?: string;
}

export interface ToolbarButton extends BaseEditorButton {
	icon?: any;
}

export interface TextStyles extends BaseEditorButton {
	id: string;
	component?: string;
	style?: Record<string, any>;
}

export interface ConfigToolbar {
	basics: ToolbarButton[];
	buttons: ToolbarButton[];
	textStyles: TextStyles[];
}
