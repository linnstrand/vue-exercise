# my-project

## Style Guide

### Components
* Components should be in their own files.
* Components without content should be self-closing.
* Component `data` must be a function.
* Component `props` should be as detailed as possible. (type, reqyured, validator...)
* Use `:key` with `v-for`.
* Avoid `v-if` on same element as `v-for`.
* Component style should always be scoped. `<style scoped>` 
* Avoid element selectors in scoped style.

#### Naming

**Components should always be multi word, except root App.**

Components should be PascalCase in single-files and string templates.

    <MyComponent /> 

Compononent names should always be PascalCase in JS/JSX

    export default {
    name: 'MyComponent',
    ...
    }

Base (App Wide) components should start with `Base`.

    components/
    |- BaseButton.vue
    |- BaseTable.vue
    |- BaseIcon.vue

Tightly coupled child components should have the parent compenents name as prefix. Avoid using abbreviations.

    components/
    |- TodoList.vue
    |- TodoListItem.vue
    |- TodoListItemButton.vue

Order of words in component names: Start with highest order, and end with descriptive modifying words.

    components/
    |- SearchButtonClear.vue
    |- SearchButtonRun.vue
    |- SearchInputExcludeGlob.vue
    |- SearchInputQuery.vue
    |- SettingsCheckboxLaunchOnStartup.vue
    |- SettingsCheckboxTerms.vue>

### Properties 
Private property names: 
Always use the $_ prefix for custom private properties in a plugin, mixin, etc. Then to avoid conflicts with code by other authors, also include a named scope (e.g. $_yourPluginName_).

Properties should always use camelCase during declarations and kebab-case in templates/jsx

### Elements
* Attributes should have their own line.
* Use only simple expressions.
* Attributes should always be inside quotes. (Preferdly double quotes in HTML and single quotes in JS).
* Directive shorthands: `:` for `v--bind:` and `@`for `v-on:`.
