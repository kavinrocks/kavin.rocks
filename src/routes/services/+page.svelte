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
		filter: var(--subtle-filter);
	}

	#services a img:hover {
		scale: 1.3;
		filter: var(--accent-filter);
	}
</style>
