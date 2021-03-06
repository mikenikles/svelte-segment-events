# svelte-segment-events

This is a [Svelte](https://svelte.dev/) wrapper for the Segment.com Analytics.js (Javascript) source ([docs](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript)).

**Table of contents**

<!-- Generated with https://ecotrust-canada.github.io/markdown-toc/ -->

- [Installation](#installation)
- [Initialisation](#initialisation)
- [Tracking methods](#tracking-methods)
  - [Identify](#identify)
  - [Track](#track)
  - [Page](#page)
  - [Group](#group)
  - [Alias](#alias)
- [Contributing](#contributing)
- [Release](#release)

## Installation

Install the `svelte-segment-events` NPM package:

```bash
npm i -D svelte-segment-events
```

## Initialisation

In your Svelte file, or in `src/routes/__layout.svelte` if you use [SvelteKit](https://kit.svelte.dev/), add the following:

```html
<script>
	import { SegmentInit } from 'svelte-segment-events';
</script>

<SegmentInit writeKey="YOUR_WRITE_KEY" />
```

A `segmentready` event is fired once the Segment analytics script is ready (see the [docs](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#ready) for more on what "ready" means).

You can listen for this event in your component with:

```html
<svelte:window on:segmentready={handler}/>
```

## Tracking methods

### Identify

See the [Segment Identify docs](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#identify) for usage details.

In your Svelte file, or in `src/routes/__layout.svelte` if you use [SvelteKit](https://kit.svelte.dev/), add the following:

```html
<script lang="ts">
	const identifyUser = () => {
		window.analytics.identify("9f75de01-9e1f-452c-9d50-edc19a7f0316", {
			name: "Mike Nikles",
			twitter: "@mikenikles"
		});
	};
</script>

<svelte:window on:segmentready={identifyUser}/>
```

### Track

See the [Segment Track docs](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#track) for usage details.

**Button**

In your Svelte component, import the `track` function:

```html
<script>
	import { track } from 'svelte-segment-events';
</script>
```

To track a button click event:

```html
<button use:track="{{ event: 'User Registered' }}">Register</button>
```

**Link**

In your Svelte component, import the `trackLink` function:

```html
<script>
	import { trackLink } from 'svelte-segment-events';
</script>
```

To track a link:

```html
<a href="/about" use:trackLink="{{ event: 'Navigated to About' }}">About</a>
```

**Form**

In your Svelte component, import the `trackForm` function:

```html
<script>
	import { trackForm } from 'svelte-segment-events';
</script>
```

To track a form:

```html
<form action="/api/user" method="post" use:trackForm="{{
		event: 'signed-up',
		properties: { plan: 'Premium' }
	}}">
	<input name="email" type=""/>
</form>
```

### Page

See the [Segment Page docs](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#page) for usage details.

If you use SvelteKit, you can track page events in the `src/routes/__layout.svelte` file:

```html
<script>
	import { page } from '$app/stores';
	import { SegmentInit } from 'svelte-segment-events';

	// Track client-side navigation events
	$: if (typeof window !== 'undefined' && window.analytics && $page.path) {
		window.analytics.page();
	}
</script>

<SegmentInit writeKey="YOUR_WRITE_KEY" />

<slot />
```

### Group

See the [Segment Group docs](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#group) for usage details.

You can use `window.analytics.group()` calls in any of your click-handlers.

### Alias

See the [Segment Alias docs](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#alias) for usage details.

You can use `window.analytics.alias()` calls in any of your click-handlers.

## Contributing

To contribute to this project, either use Gitpod or run the relevant commands in `.gitpod.yml` locally to configure your environment.

Please always start with an issue first to discuss your planned contribution ????.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mikenikles/svelte-segment-events)

## Release

To release the package to the NPM registry, commit all changes to Git, run the following commands and follow the instructions in the terminal:

```bash
npm version [major | minor | patch]
npm run package
```
