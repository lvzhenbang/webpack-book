const appendices = require('./categories/appendices');
const building = require('./categories/building');
const developing = require('./categories/developing');
const extending = require('./categories/extending');
const guide = require('./categories/guide');
const loading = require('./categories/loading');
const output = require('./categories/output');
const optimizing = require('./categories/optimizing');
const styling = require('./categories/styling');
const techniques = require('./categories/techniques');

module.exports = {
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'webpack surviveJS',
            description: 'webpack SruriveJS'
        },
        '/en/': {
            lang: 'en-US',
            title: 'webpack surviveJS',
            description: 'webpack SruriveJS'
        }
    },
    base: '/webpack-book/',
    dest: './dist',
    // theme: 'vue',
    themeConfig: {
        repo: 'lvzhenbang/webpack-book',
        docsBranch: 'dev',
        editLinks: true,
        docsDir: 'docs',
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                sidebar: [
                    '/',
                    guide.guideCn,
                    developing.developingCn,
                    styling.stylingCn,
                    loading.loadingCn,
                    building.buildingCn,
                    optimizing.optimizingCn,
                    output.outputCn,
                    techniques.techniquesCn,
                    extending.extendingCn,
                    appendices.appendicesCn
                ]
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                sidebar: [
                    '/en/',
                    guide.guideEn,
                    developing.developingEn,
                    styling.stylingEn,
                    loading.loadingEn,
                    building.buildingEn,
                    optimizing.optimizingEn,
                    output.outputEn,
                    techniques.techniquesEn,
                    extending.extendingEn,
                    appendices.appendicesEn
                ]
            }
        }
    }
}