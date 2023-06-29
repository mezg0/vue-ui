import {
  Toast,
  ToastCloseTrigger,
  ToastDescription,
  ToastGroup,
  ToastPlacements,
  ToastProvider as ToastProviderPrimitive,
  ToastTitle,
  useToast as useToastPrimitive,
} from "@ark-ui/vue";
import { Placement, Service } from "@zag-js/toast";
import { XIcon } from "lucide-vue-next";

import { TransitionGroup, defineComponent, h } from "vue";

const CloseIcon = defineComponent({
  setup() {
    return () =>
      h(XIcon, {
        class: "w-4 h-4",
      });
  },
});

const ToastProvider = defineComponent({
  setup(_, { slots }) {
    const onBeforeLeave = (el: HTMLElement) => {
      // get the elements height and width before transitioning to absolute
      const height = el.offsetHeight;
      const width = el.offsetWidth;
      const top = el.offsetTop;

      // force the absolute position to be set to the current position
      el.style.position = "absolute";
      el.style.height = `${height}px`;
      el.style.top = `${top}px`;
      el.style.width = `${width}px`;
    };
    return () => (
      <ToastProviderPrimitive>
        <ToastPlacements>
          {({ placements }: { placements: Placement[] }) => (
            <TransitionGroup
              onBeforeEnter={() => console.log("enter")}
              enterFromClass="opacity-0 scale-90"
              enterActiveClass="transition-all"
              leaveToClass="opacity-0 scale-90"
              leaveActiveClass="transition-all"
              onBeforeLeave={(el) => onBeforeLeave(el as HTMLElement)}
            >
              {placements.map((placement) => {
                return (
                  <ToastGroup
                    key={placement}
                    placement={placement}
                    class="px-6 pt-3 w-full  md:max-w-[420px]"
                  >
                    {({ toasts }: { toasts: Service[] }) => (
                      <TransitionGroup
                        enterFromClass="opacity-0 scale-90"
                        enterActiveClass="transition-all duration-200 ease-in-out"
                        leaveToClass="opacity-0 scale-90"
                        leaveActiveClass="transition-all duration-100 ease-in"
                        moveClass="transition-all duration-200 ease-in-out"
                        onBeforeLeave={(el) => onBeforeLeave(el as HTMLElement)}
                      >
                        {toasts.reverse().map((toast) => {
                          return (
                            <div key={toast.id} class="w-full">
                              <Toast
                                toast={toast}
                                class="bg-background max-w-[420px] group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[type='error']:border-destructive data-[type='error']:bg-destructive data-[type='error']:text-destructive-foreground"
                              >
                                <div>
                                  <ToastTitle class="text-sm font-semibold" />
                                  <ToastDescription class="text-sm opacity-90" />
                                </div>
                                <ToastCloseTrigger>
                                  <button class="opacity-0 group-hover:opacity-100 text-foreground/50 hover:text-foreground group-[&[data-type='error']]:text-destructive-foreground/50 group-[&[data-type='error']]:hover:text-destructive-foreground absolute top-4 right-4 ">
                                    <CloseIcon />
                                  </button>
                                </ToastCloseTrigger>
                              </Toast>
                            </div>
                          );
                        })}
                      </TransitionGroup>
                    )}
                  </ToastGroup>
                );
              })}
            </TransitionGroup>
          )}
        </ToastPlacements>
        {slots.default?.()}
      </ToastProviderPrimitive>
    );
  },
});

const useToast = () => {
  const toastPrimitive = useToastPrimitive();

  const toast = (options: {
    type?: "success" | "error";
    title?: string;
    description?: string;
    duration?: number;
  }) => {
    toastPrimitive.value.create({
      title: options.title,
      description: options.description,
      type: options.type ?? "success",
      duration: options.duration ?? 2000,
      placement: "top-end",
    });
  };

  return toast;
};

export { ToastProvider, useToast };

