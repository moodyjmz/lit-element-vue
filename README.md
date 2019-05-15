# lit-element-vue
Little test of vue + lit-element

Just to see how easily they mesh together. Which is actually very easy and they go together very well.

The lit-element is called `first-element`, and the vue app is called `app`.

> `first-element` uses `slot`, this is **not** a vue slot, but part of Web Components (ie native on modern browsers) and is rendering the light DOM in the shadow DOM of the `first-element`

### To Run

- clone
- `npm install`
- `npx polymer serve`

It uses polymer serve as the cli provides some nice mapping for node modules - although no bable etc is invoked
