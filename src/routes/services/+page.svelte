<script>
	class Service {
		/**
		 * @param {string} url
		 * @param {string} name
		 * @param {string} src
		 */
		constructor(url, name, src) {
			this.url = url;
			this.name = name;
			this.iconSrc = src;
		}
	}

	let services = [
		new Service('https://piped.kavin.rocks', 'Piped', '/piped.svg'),
		new Service('https://searxng.kavin.rocks', 'SearXNG', '/searxng.svg'),
		new Service('https://libreddit.kavin.rocks', 'Libreddit', '/libreddit.png'),
		new Service('https://nitter.kavin.rocks', 'Nitter', '/nitter.svg')
	];
</script>

<svelte:head>
	<title>Services</title>
	<meta name="description" content="Services hosted at kavin.rocks" />
</svelte:head>

<div id="services">
	{#each services as service}
		<a href={service.url}>
			<img src={service.iconSrc} alt={service.name} />
			<h4>{service.name}</h4>
		</a>
	{/each}
</div>

<style>
	:root {
		--transition-duration: 0.5s;
	}

	#services {
		width: 100%;
		min-height: 75vh;
		margin: 0 auto;
		max-width: 80rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;
	}

	#services a {
		text-decoration: none;
		text-align: center;
		transition: all ease-in-out var(--transition-duration);
		filter: var(--subtle-filter);
	}

	#services a:hover {
		scale: 1.25;
		filter: var(--accent-filter);
	}

	#services a img {
		height: clamp(4rem, 20vh, 8rem);
		width: auto;
		margin: 1rem;
	}

	#services a h4 {
		visibility: hidden;
		margin: 0.7rem 0;
		transition: ease-in-out var(--transition-duration) all;
	}

	#services a:hover h4 {
		visibility: visible;
	}
</style>
