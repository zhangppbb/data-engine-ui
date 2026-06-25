import { defineConfig, toEscapedSelector as e, presetUno, presetWind } from 'unocss'
// import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

const FONT_SIZE = {
  'line-height': '1.2em'
};


const designWidth = 1920 // 设计稿宽度
const designHeight = 1080 // 设计稿高度

export default defineConfig({
  transformers: [
    transformerDirectives(),
  ],

   theme: {
    colors: {
      n00: 'var(--n00)',

      // 主题色
      brand1: 'var(--brand-1)', // 按钮点击色/修饰色
      brandColor: 'var(--brand-color)', // 默认色、通用按钮默认色、多选/单选选中色
      brand3: 'var(--brand-3)', // 主要按钮选用色/修饰色
      brand4: 'var(--brand-4)', // 主按钮悬停色/修饰色
      brand5: 'var(--brand-5)', // 次要按钮色/修饰色
      brand6: 'var(--brand-6)', // 左侧导航icon默认色
      brand7: 'var(--brand-7)', // 全局提示/修饰色/次要按钮色
      brand8: 'var(--brand-8)', // 背景色/修饰色

      // 负面、不可行、严重、危险、失败等提示
      danger1: 'var(--danger-1)', // 点击色
      danger2: 'var(--danger-2)', // 功能色
      danger3: 'var(--danger-3)', // 悬停色
      danger4: 'var(--danger-4)', // 全局提示/修饰色
      danger5: 'var(--danger-5)', // 次要按钮色/背景色

      // 正面、可行、安全、成功等提示
      success1: 'var(--success-1)', // 点击色
      success2: 'var(--success-2)', // 功能色
      success3: 'var(--success-3)', // 悬停色
      success4: 'var(--success-4)', // 全局提示/修饰色
      success5: 'var(--success-5)', // 次要按钮色/背景色

      // 注意、警告、阻止等提示
      warning1: 'var(--warning-1)', // 点击色
      warning2: 'var(--warning-2)', // 功能色
      warning3: 'var(--warning-3)', // 悬停色
      warning4: 'var(--warning-4)', // 全局提示/修饰色
      warning5: 'var(--warning-5)', // 次要按钮色/背景色

      // 文字、线框、背景色
      grey1: 'var(--grey-1)', // 标题色
      grey2: 'var(--grey-2)', // 主要文案
      grey3: 'var(--grey-3)', // 次要文案
      grey4: 'var(--grey-4)', // 辅助文字/禁用文字
      grey5: 'var(--grey-5)', // 边框色
      grey6: 'var(--grey-6)', // 分割线/禁用色
      grey7: 'var(--grey-7)', // 背景色（区域）

      // Pages 主题色 - void 暗色系
      'void-900': '#02040a',
      'void-800': '#050b14',
      'void-700': '#0a1525',

      // Pages 主题色 - aurora 极光色
      'aurora-green': '#00ffa3',
      'aurora-cyan': '#00d2ff',
      'aurora-purple': '#7000ff',
      'aurora-red': '#ff4757',
      'aurora-blue': '#3742fa',
      'aurora-nav': '#0b1021',

      // Pages 主题色 - glass 玻璃色
      'glass-surface': 'rgba(255, 255, 255, 0.03)',
      'glass-stroke': 'rgba(255, 255, 255, 0.08)',
      'glass-highlight': 'rgba(255, 255, 255, 0.15)'
    },
    // 预设边距 margin padding
    spacing: {
      xs: 'var(--spacing-xs)',
      sm: 'var(--spacing-sm)',
      md: 'var(--spacing-md)',
      lg: 'var(--spacing-lg)',
      xl: 'var(--spacing-xl)',
      model: 'var(--model-spacing)'
    },
    // [字体大小, 行高]
    fontSize: {
      xs: ['var(--font-xs)', FONT_SIZE],
      sm: ['var(--font-sm)', FONT_SIZE],
      md: ['var(--font-md)', FONT_SIZE],
      lg: ['var(--font-lg)', FONT_SIZE],
      xl: ['var(--font-xl)', FONT_SIZE]
    },
    // 圆角
    borderRadius: {
      xs: 'var(--radius-xs)',
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      xl: 'var(--radius-xl)'
    },

    // Pages 主题字体
    fontFamily: {
      display: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, sans-serif',
      body: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif'
    },

    // Pages 主题阴影
    boxShadow: {
      'glow-sm': '0 0 10px rgba(0, 255, 163, 0.2)',
      'glow-md': '0 0 20px rgba(0, 210, 255, 0.3)',
      'glow-lg': '0 0 30px rgba(0, 255, 163, 0.4)',
      'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)'
    }
  },

  // ...UnoCSS options
  rules: [
    // text-[20dp]
    [/^text-\[(\d+)dp\]$/, ([, d]) => ({ 'font-size': `${(+d / designWidth) * 100}vw` })],

    // padding-[10dp], padding-x/y/t/r/b/l
    [
      /^p([trblxy]?)-\[(\d+)dp\]$/,
      ([, dir, d]) => {
        const value = `${(+d / designWidth) * 100}vw`
        const map: Record<string, string[]> = {
          '': ['padding'],
          x: ['padding-left', 'padding-right'],
          y: ['padding-top', 'padding-bottom'],
          t: ['padding-top'],
          r: ['padding-right'],
          b: ['padding-bottom'],
          l: ['padding-left']
        }
        const style: Record<string, string> = {}
        map[dir].forEach((k) => (style[k] = value))
        return style
      }
    ],

    // margin-[10dp], margin-x/y/t/r/b/l
    [
      /^m([trblxy]?)-\[(\d+)dp\]$/,
      ([, dir, d]) => {
        const value = `${(+d / designWidth) * 100}vw`
        const map: Record<string, string[]> = {
          '': ['margin'],
          x: ['margin-left', 'margin-right'],
          y: ['margin-top', 'margin-bottom'],
          t: ['margin-top'],
          r: ['margin-right'],
          b: ['margin-bottom'],
          l: ['margin-left']
        }
        const style: Record<string, string> = {}
        map[dir].forEach((k) => (style[k] = value))
        return style
      }
    ],

    // width-[200dp] / height-[100dp]
    [/^w-\[(\d+)dp\]$/, ([, d]) => ({ width: `${(+d / designWidth) * 100}vw` })],
    [/^h-\[(\d+)dp\]$/, ([, d]) => ({ height: `${(+d / designWidth) * 100}vw` })],

    // gap-[10dp], gap-x-[10dp], gap-y-[10dp]
    [
      /^gap(?:-([xy]))?-\[(\d+)dp\]$/,
      ([, dir, d]) => {
        const value = `${(+d / designWidth) * 100}vw`
        if (!dir) return { gap: value }
        if (dir === 'x') return { 'column-gap': value }
        if (dir === 'y') return { 'row-gap': value }
        return {}
      }
    ],

    // right-[10dp], left-[10dp], top-[10dp], bottom-[10dp]
    [
      /^(right|left|top|bottom)-\[(\d+)dp\]$/,
      ([, dir, d]) => {
        const value = `${(+d / designWidth) * 100}vw`
        return { [dir]: value }
      }
    ],

    // rounded-[10dp], rounded-t-[10dp], rounded-b-[10dp], rounded-l-[10dp], rounded-r-[10dp], rounded-tl-[10dp], etc.
    [
      /^rounded(?:-([trbl]{1,2}))?-\[(\d+)dp\]$/,
      ([, pos, d]) => {
        const value = `${(+d / designWidth) * 100}vw`
        const map: Record<string, string> = {
          '': 'border-radius',
          t: 'border-top-left-radius,border-top-right-radius',
          b: 'border-bottom-left-radius,border-bottom-right-radius',
          l: 'border-top-left-radius,border-bottom-left-radius',
          r: 'border-top-right-radius,border-bottom-right-radius',
          tl: 'border-top-left-radius',
          tr: 'border-top-right-radius',
          bl: 'border-bottom-left-radius',
          br: 'border-bottom-right-radius'
        }
        const style: Record<string, string> = {}
        const keys = map[pos || ''].split(',')
        keys.forEach((k) => (style[k] = value))
        return style
      }
    ],

    // text-[20dh]
    [/^text-\[(\d+)dh\]$/, ([, d]) => ({ 'font-size': `${(+d / designHeight) * 100}vh` })],

    // padding-[10dh], padding-x/y/t/r/b/l
    [
      /^p([trblxy]?)-\[(\d+)dh\]$/,
      ([, dir, d]) => {
        const value = `${(+d / designHeight) * 100}vh`
        const map: Record<string, string[]> = {
          '': ['padding'],
          x: ['padding-left', 'padding-right'],
          y: ['padding-top', 'padding-bottom'],
          t: ['padding-top'],
          r: ['padding-right'],
          b: ['padding-bottom'],
          l: ['padding-left']
        }
        const style: Record<string, string> = {}
        map[dir].forEach((k) => (style[k] = value))
        return style
      }
    ],

    // margin-[10dh], margin-x/y/t/r/b/l
    [
      /^m([trblxy]?)-\[(\d+)dh\]$/,
      ([, dir, d]) => {
        const value = `${(+d / designHeight) * 100}vh`
        const map: Record<string, string[]> = {
          '': ['margin'],
          x: ['margin-left', 'margin-right'],
          y: ['margin-top', 'margin-bottom'],
          t: ['margin-top'],
          r: ['margin-right'],
          b: ['margin-bottom'],
          l: ['margin-left']
        }
        const style: Record<string, string> = {}
        map[dir].forEach((k) => (style[k] = value))
        return style
      }
    ],

    // width-[200dh] / height-[100dh]
    [/^w-\[(\d+)dh\]$/, ([, d]) => ({ width: `${(+d / designHeight) * 100}vh` })],
    [/^h-\[(\d+)dh\]$/, ([, d]) => ({ height: `${(+d / designHeight) * 100}vh` })],

    // gap-[10dh], gap-x-[10dh], gap-y-[10dh]
    [
      /^gap(?:-([xy]))?-\[(\d+)dh\]$/,
      ([, dir, d]) => {
        const value = `${(+d / designHeight) * 100}vh`
        if (!dir) return { gap: value }
        if (dir === 'x') return { 'column-gap': value }
        if (dir === 'y') return { 'row-gap': value }
        return {}
      }
    ],

    // right-[10dh], left-[10dh], top-[10dh], bottom-[10dh]
    [
      /^(right|left|top|bottom)-\[(\d+)dh\]$/,
      ([, dir, d]) => {
        const value = `${(+d / designHeight) * 100}vh`
        return { [dir]: value }
      }
    ],

    // rounded-[10dh], rounded-t-[10dh], rounded-b-[10dh], rounded-l-[10dh], rounded-r-[10dh], rounded-tl-[10dh], etc.
    [
      /^rounded(?:-([trbl]{1,2}))?-\[(\d+)dh\]$/,
      ([, pos, d]) => {
        const value = `${(+d / designHeight) * 100}vh`
        const map: Record<string, string> = {
          '': 'border-radius',
          t: 'border-top-left-radius,border-top-right-radius',
          b: 'border-bottom-left-radius,border-bottom-right-radius',
          l: 'border-top-left-radius,border-bottom-left-radius',
          r: 'border-top-right-radius,border-bottom-right-radius',
          tl: 'border-top-left-radius',
          tr: 'border-top-right-radius',
          bl: 'border-bottom-left-radius',
          br: 'border-bottom-right-radius'
        }
        const style: Record<string, string> = {}
        const keys = map[pos || ''].split(',')
        keys.forEach((k) => (style[k] = value))
        return style
      }
    ],
  ],
  // 添加自定义关键帧
  preflights: [
    {
      getCSS: () => `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `
    }
  ],
  presets: [presetUno({ dark: 'class', attributify: false }), presetWind()],
  // transformers: [transformerVariantGroup()],
  shortcuts: {
    'wh-full': 'w-full h-full',
    'link': 'text-[var(--brand-1)] cursor-pointer',
    'flex-center': 'flex items-center justify-center',

    // Form
    'input-glass': 'w-full bg-void-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/50 transition-all',
    'filter-checkbox': 'flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 cursor-pointer transition-all hover:bg-white/10',

    // Pages 主题背景图
    'bg-aurora-gradient':
      'bg-[linear-gradient(135deg,#050b14_0%,#0a1525_100%)]',

    'bg-accent-gradient':
      'bg-[linear-gradient(90deg,#00d2ff_0%,#00ffa3_100%)]',

    'bg-api-gradient':
      'bg-[linear-gradient(90deg,#00d2ff_0%,#00ffa3_100%)]',

    'bg-mcp-gradient':
      'bg-[linear-gradient(90deg,#ff4757_0%,#ffa502_100%)]',

    'bg-skill-gradient':
      'bg-[linear-gradient(90deg,#7000ff_0%,#a29bfe_100%)]',

    'bg-dataset-gradient':
      'bg-[linear-gradient(90deg,#3742fa_0%,#5352ed_100%)]',

    // Pages 主题动画
    'animate-pulse-slow': 'animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]',
    'animate-float': 'animate-[float_6s_ease-in-out_infinite]',

    // Pages 玻璃面板
    'card': 'p-20px bg-white rounded-8px shadow-[0px_2px_4px_0px_rgba(0,0,0,0.02),_0px_1px_6px_-1px_rgba(0,0,0,0.02),_0px_1px_2px_0px_rgba(0,0,0,0.03)]',
    'glass-panel-base': 'bg-[rgba(11,16,33,0.95)] backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] border border-[rgba(255,255,255,0.08)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]',
    'card-glass': 'glass-panel-base rounded-2xl p-6 transition-all duration-300 hover:bg-white/5 hover:border-aurora-cyan/30 hover:shadow-glow-sm'
  },
})
