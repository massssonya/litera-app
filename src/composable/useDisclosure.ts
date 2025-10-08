import { onBeforeUnmount, onMounted } from "vue";
import { ref } from "vue";

export function useDisclosure() {
    const isOpen = ref(false);
    const contentRef = ref<HTMLElement | null>(null);
  
    const open = () => (isOpen.value = true);
    const close = () => (isOpen.value = false);
    const toggle = () => (isOpen.value = !isOpen.value);
  
    const handleClickOutside = (e: MouseEvent) => {
      if (contentRef.value && !contentRef.value.contains(e.target as Node)) {
        close();
      }
    };
  
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });
  
    onBeforeUnmount(() => {
      document.removeEventListener("click", handleClickOutside);
    });
  
    return {
      isOpen,
      open,
      close,
      toggle,
      contentRef
    };
  }