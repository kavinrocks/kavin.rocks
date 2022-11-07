<svelte:head>
	<title>Services</title>
	<meta name="description" content="Services hosted at kavin.rocks" />
</svelte:head>

<div id="services">
	<a href="https://piped.kavin.rocks">
		<img src="/piped.svg" alt="Piped" />
	</a>
	<a href="https://searx.kavin.rocks">
		<img src="/searxng.svg" alt="SearXNG" />
	</a>
	<a href="https://libreddit.kavin.rocks">
		<img src="/libreddit.png" alt="Libreddit" />
	</a>
	<a href="https://nitter.kavin.rocks">
		<img src="/nitter.svg" alt="Nitter" />
	</a>
</div>

<style>
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
	}

	#services a:hover {
		color: var(--accent-color);
	}

	#services a img {
		height: clamp(4rem, 20vh, 8rem);
		width: auto;
		margin: 1rem;
		transition: all ease-in-out 0.5s;
		filter: brightness(0) saturate(100%) invert(89%) sepia(10%) saturate(208%) hue-rotate(240deg)
			brightness(84%) contrast(89%);
	}

	#services a img:hover {
		scale: 1.3;
		filter: brightness(0) saturate(100%) invert(90%) sepia(5%) saturate(1744%) hue-rotate(74deg)
			brightness(95%) contrast(96%);
	}
</style>
