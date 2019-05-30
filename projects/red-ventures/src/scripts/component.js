export default class {
	constructor() {
		console.log("The 'default' class constructor called.")
	}
}

class RootComponent  {
	constructor(...$options) {
		// super()
		Object.assign(this, ...$options)
		console.log(`MyComponent typeof == ${typeof this}`)
	}
}

const Component = function(...$options) {
	const __properties = $options[0]
	console.log(`Component == ${typeof this}`)
    console.log(__properties.element)
    if (!__properties.element) {

    } else {
		const component = new RootComponent()
	}
}

export { Component }
