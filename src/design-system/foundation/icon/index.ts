import type { App } from 'vue';

const components = import.meta.glob('./SvgIcon.vue');

export const IconRegister = {
  install(app: App) {
    for (const path in components) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      components[path]().then(async(mod: any) => {
        app.component(mod['default']['__name'], mod['default']);
      });
    }
  }
};
