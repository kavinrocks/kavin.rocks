<script>
	import 'uno.css';
</script>

<svelte:head>
	<title>Home</title>
	<meta title="description" content="kavin.rocks" />
	<meta name="description" content="Home of kavin.rocks" />
</svelte:head>

<section id="home">
	<h1>Welcome to kavin.rocks</h1>
	<h2 id="cmd">> ~/<span>_</span></h2>
	<div id="about">
		<div>Hosted services can be found <a href="/services">here</a>.</div>
		<div>
			The instances are spread over India, UK, US, Canada, Netherlands, Germany and France.
		</div>
	</div>
</section>

<style>
	#home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		@apply text-4xl font-bold text-center;
	}

	h2 {
		@apply text-5xl font-bold text-center;
	}

	#cmd {
		color: var(--accent-color);
	}

	#cmd > span {
		font-weight: 900;
		animation: infinite blinking 1s ease-in-out;
	}

	#about {
		margin: 10vh 0;
	}

	#about div {
		@apply text-sm font-bold;
	}

	@keyframes blinking {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 100;
		}
		100% {
			opacity: 0;
		}
	}
</style>
