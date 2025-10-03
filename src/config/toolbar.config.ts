import type { Editor } from "@tiptap/vue-3";
import { Bold, Italic, Strikethrough } from "lucide-vue-next";

interface ToolbarButton {
    label: string;
    icon?: any;
    action: (editor: Editor) => void;
    isActive?: (editor: Editor) => boolean;
    can?: (editor: Editor) => boolean;
}

interface ConfigToolbar {
    buttons: ToolbarButton[]
}

export const configToolbar:ConfigToolbar = {
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
            isActive: (e) => e.isActive('italic'), 
            can: (e) => e.can().chain().focus().toggleItalic().run() 
        },
        { 
            label: "Strike", 
            icon: Strikethrough,
            action: (e) => e.chain().focus().toggleStrike().run(), 
            isActive: (e) => e.isActive('strike'), 
            can: (e) => e.can().chain().focus().toggleStrike().run()
        },
    ]
} as const


//                 <button @click="editor.chain().focus().toggleStrike().run()"
//                     :disabled="!editor.can().chain().focus().toggleStrike().run()"
//                     :class="{ 'is-active': editor.isActive('strike') }">
//                     Strike
//                 </button>